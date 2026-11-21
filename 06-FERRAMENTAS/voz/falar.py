"""Gera a fala de um ROTEIRO, frase por frase, e salva o tempo de cada frase (para cenas e legenda).
uso: python3 falar.py roteiro.txt saida_dir --voz pf_dora --vel 1.15
roteiro.txt = uma frase por linha."""
import argparse, json, os, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
p = argparse.ArgumentParser(); p.add_argument('roteiro'); p.add_argument('saida')
p.add_argument('--voz', default='pf_dora'); p.add_argument('--vel', type=float, default=1.15)
a = p.parse_args(); os.makedirs(a.saida, exist_ok=True)
M = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'modelo')
k = Kokoro(os.path.join(M, 'model.onnx'), os.path.join(M, 'voices.npz'))
frases = [l.strip() for l in open(a.roteiro, encoding='utf-8') if l.strip()]
audio, tempos, t, sr = [], [], 0.0, 24000
for f in frases:
    x, sr = k.create(f, voice=a.voz, speed=a.vel, lang='pt-br')
    x = np.trim_zeros(x, 'fb') if np.any(x) else x
    gap = np.zeros(int(sr * 0.08), dtype=np.float32)   # respiro curto, ritmo acelerado
    dur = len(x) / sr
    palavras = f.split(); passo = dur / max(len(palavras), 1)
    tempos.append({'frase': f, 'inicio': round(t, 3), 'fim': round(t + dur, 3),
                   'palavras': [{'p': w, 'inicio': round(t + i * passo, 3)} for i, w in enumerate(palavras)]})
    audio += [x, gap]; t += dur + len(gap) / sr
sf.write(os.path.join(a.saida, 'voz.wav'), np.concatenate(audio), sr)
json.dump(tempos, open(os.path.join(a.saida, 'tempos.json'), 'w'), ensure_ascii=False, indent=1)
print(f'voz.wav {t:.1f}s · {len(frases)} frases')
