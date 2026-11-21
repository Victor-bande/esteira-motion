"""Voz com vários personagens (mesma voz base, tons diferentes).
uso: python3 falar_elenco.py falas.tsv saida_dir --elenco elenco.json
falas.tsv: personagem<TAB>frase (uma por linha). elenco.json: {"rica": {"voz":"pf_dora","vel":1.05,"tom":0.94}, ...}
Saída: voz.wav + tempos.json (frase, personagem, início/fim e cada palavra com início estimado pelo nº de letras)."""
import argparse, json, os, subprocess, tempfile, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
p = argparse.ArgumentParser(); p.add_argument('falas'); p.add_argument('saida'); p.add_argument('--elenco', required=True)
a = p.parse_args(); os.makedirs(a.saida, exist_ok=True)
elenco = json.load(open(a.elenco))
M = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'modelo')
k = Kokoro(os.path.join(M, 'model.onnx'), os.path.join(M, 'voices.npz'))
def tom(x, sr, f):
    if abs(f - 1) < 1e-3: return x
    with tempfile.TemporaryDirectory() as d:
        i, o = os.path.join(d, 'i.wav'), os.path.join(d, 'o.wav'); sf.write(i, x, sr)
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', i, '-af', f'asetrate={int(sr*f)},aresample={sr},atempo={1/f:.5f}', o], check=True)
        y, _ = sf.read(o, dtype='float32'); return y
audio, tempos, t, sr = [], [], 0.0, 24000
for linha in open(a.falas, encoding='utf-8'):
    if not linha.strip(): continue
    quem, frase = linha.rstrip('\n').split('\t', 1); c = elenco[quem]
    x, sr = k.create(frase, voice=c['voz'], speed=c['vel'], lang='pt-br')
    x = tom(np.trim_zeros(x, 'fb'), sr, c.get('tom', 1.0)); dur = len(x) / sr
    ws = frase.split(); pesos = np.array([len(w) + 1 for w in ws], float); ini = np.concatenate([[0], np.cumsum(pesos)[:-1]]) / pesos.sum() * dur
    tempos.append({'quem': quem, 'frase': frase, 'inicio': round(t, 3), 'fim': round(t + dur, 3),
                   'palavras': [{'p': w, 'inicio': round(t + s, 3)} for w, s in zip(ws, ini)]})
    gap = np.zeros(int(sr * c.get('respiro', 0.12)), dtype=np.float32)
    audio += [x.astype(np.float32), gap]; t += dur + len(gap) / sr
sf.write(os.path.join(a.saida, 'voz.wav'), np.concatenate(audio), sr)
json.dump(tempos, open(os.path.join(a.saida, 'tempos.json'), 'w'), ensure_ascii=False, indent=1)
print(f'voz.wav {t:.1f}s · {len(tempos)} falas')
