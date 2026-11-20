"""ugc_tools.py · montagem de vídeo UGC (Flow) · uso: python3 -I ugc_tools.py <cmd> ...
  asr    <modelo_dir> <lang> <arquivo...>          transcreve (wav/mp4; corta em blocos de ~25 s)
  probe  <modelo_dir> <lang> <arquivo> <ini> <fim> transcreve só um trecho (achar repetição)
  segs   <arquivo...>                              trechos de fala pelo volume (ini-fim)
  render <edl.json> <saida.mp4>                    junta os pedaços (cortes no quadro, volume nivelado, micro zoom)
edl.json = [["T1","/caminho/clip.mp4","F1",[[ini,fim],[ini,fim]]], ...]  (tempos do clipe, em s)
"""
import sys, os, re, json, wave, subprocess, tempfile
import numpy as np

def wav16(path):
    if path.endswith('.wav'):
        return path
    out = tempfile.mktemp(suffix='.wav')
    subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-i', path, '-ac', '1', '-ar', '16000', out], check=True)
    return out

def load(path):
    w = wave.open(wav16(path))
    a = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768
    return w.getframerate(), a

def env(a, sr):
    hop, win = int(0.01 * sr), int(0.03 * sr)
    n = max(1, (len(a) - win) // hop)
    return np.array([20 * np.log10(np.sqrt(np.mean(a[i*hop:i*hop+win] ** 2)) + 1e-9) for i in range(n)])

def segs(a, sr, gap=0.18):
    db = env(a, sr)
    thr = max(np.percentile(db, 8) + 10, np.percentile(db, 98) - 32)
    on, out, i = db > thr, [], 0
    while i < len(on):
        if on[i]:
            j = i
            while j < len(on) and on[j]:
                j += 1
            out.append([i * 0.01, j * 0.01 + 0.03]); i = j
        else:
            i += 1
    m = []
    for s, e in out:
        if m and s - m[-1][1] < gap:
            m[-1][1] = e
        else:
            m.append([s, e])
    return [x for x in m if x[1] - x[0] > 0.06]

def recognizer(mdir, lang):
    import sherpa_onnx
    n = [f for f in os.listdir(mdir) if f.endswith('-encoder.int8.onnx')][0].split('-encoder')[0]
    return sherpa_onnx.OfflineRecognizer.from_whisper(
        encoder=f'{mdir}/{n}-encoder.int8.onnx', decoder=f'{mdir}/{n}-decoder.int8.onnx',
        tokens=f'{mdir}/{n}-tokens.txt', language=lang, task='transcribe', num_threads=4)

def tr(rec, a, sr, s=0, e=None):
    x = a[int(s * sr):int((e if e is not None else len(a) / sr) * sr)]
    st = rec.create_stream(); st.accept_waveform(sr, x); rec.decode_stream(st)
    return st.result.text.strip()

def chunks(a, sr, maxlen=25.0):
    """corta em blocos de até ~25 s nas pausas (o Whisper lê 30 s por vez)"""
    sg, out, start = segs(a, sr), [], 0.0
    dur = len(a) / sr
    while dur - start > maxlen:
        cut = max([e for s, e in sg if start < e <= start + maxlen] or [start + maxlen])
        out.append((start, cut)); start = cut
    out.append((start, dur))
    return out

def mean_vol(path, s, e):
    r = subprocess.run(['ffmpeg', '-nostdin', '-hide_banner', '-nostats', '-ss', str(s), '-to', str(e), '-i', path,
                        '-af', 'volumedetect', '-f', 'null', '-'], capture_output=True, text=True).stderr
    return float(re.search(r'mean_volume: (-?[0-9.]+)', r).group(1))

def render(edl, out, zoom=1.08, target=-22.0, fps=24):
    snap = lambda t: round(t * fps) / fps
    clips, idx = [], {}
    for take, clip, fr, pieces in edl:
        if clip not in idx:
            idx[clip] = len(clips); clips.append(clip)
    fc, labels, prev, z, n, T, log = [], [], None, 1.0, 0, 0.0, []
    for take, clip, fr, pieces in edl:
        i = idx[clip]
        mv = sum(mean_vol(clip, s, e) * (e - s) for s, e in pieces) / sum(e - s for s, e in pieces)
        g = max(-6, min(8, target - mv))
        for s, e in pieces:
            s, e = snap(s), snap(e); d = e - s
            z = ((zoom if z == 1.0 else 1.0) if prev == fr else 1.0); prev = fr
            fc.append(f'[{i}:v]trim=start={s:.5f}:end={e:.5f},setpts=PTS-STARTPTS,scale=iw*{z}:ih*{z}:flags=lanczos,'
                      f'crop=iw/{z}:ih/{z},scale=1080:1920:flags=lanczos,setsar=1,format=yuv420p[v{n}]')
            fc.append(f'[{i}:a]atrim=start={s:.5f}:end={e:.5f},asetpts=PTS-STARTPTS,volume={g:.1f}dB,'
                      f'afade=t=in:st=0:d=0.012,afade=t=out:st={d-0.018:.4f}:d=0.018[a{n}]')
            labels.append(f'[v{n}][a{n}]'); log.append([take, round(T, 2), round(d, 2), z]); T += d; n += 1
    fc.append(''.join(labels) + f'concat=n={n}:v=1:a=1[vc][ac]')
    fc.append('[ac]loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[ao]')
    script = out + '.fc.txt'; open(script, 'w').write(';\n'.join(fc))
    cmd = ['ffmpeg', '-nostdin', '-v', 'error', '-y']
    for c in clips:
        cmd += ['-i', c]
    cmd += ['-filter_complex_script', script, '-map', '[vc]', '-map', '[ao]', '-r', str(fps), '-c:v', 'libx264',
            '-preset', 'slow', '-crf', '20', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
            '-ar', '48000', '-movflags', '+faststart', out]
    subprocess.run(cmd, check=True)
    json.dump(log, open(out + '.edl_out.json', 'w'))
    print('pedaços', n, 'duração', round(T, 2), 's')
    for l in log:
        print(l)

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'asr':
        rec = recognizer(sys.argv[2], sys.argv[3])
        for f in sys.argv[4:]:
            sr, a = load(f)
            print(os.path.basename(f), '|', ' '.join(tr(rec, a, sr, s, e) for s, e in chunks(a, sr)), flush=True)
    elif cmd == 'probe':
        rec = recognizer(sys.argv[2], sys.argv[3]); sr, a = load(sys.argv[4])
        print(tr(rec, a, sr, float(sys.argv[5]), float(sys.argv[6])))
    elif cmd == 'segs':
        for f in sys.argv[2:]:
            sr, a = load(f)
            print(os.path.basename(f), f'{len(a)/sr:.2f}s |', ' '.join(f'{s:.2f}-{e:.2f}' for s, e in segs(a, sr)))
    elif cmd == 'render':
        render(json.load(open(sys.argv[2])), sys.argv[3])
