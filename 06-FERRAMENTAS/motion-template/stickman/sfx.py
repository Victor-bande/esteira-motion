"""Trilha de efeitos sintetizados (sem direitos autorais) · v1 · 27/11/2026
uso: python3 sfx.py voz.wav eventos.json saida.wav   ·   eventos = [{t, s: pop|whoosh|ding|nao}] (vem do motor)"""
import json, sys, numpy as np, soundfile as sf
voz, sr = sf.read(sys.argv[1], dtype='float32')
if voz.ndim > 1: voz = voz.mean(1)
ev = json.load(open(sys.argv[2])); rng = np.random.default_rng(7)
def env(n, a=.004, d=.08):
    t = np.arange(n) / sr; return np.minimum(1, t / a) * np.exp(-t / d)
def pop():
    n = int(.09 * sr); t = np.arange(n) / sr; f = 520 + 900 * t / .09
    return np.sin(2 * np.pi * np.cumsum(f) / sr) * env(n, .002, .03) * .55
def whoosh():
    n = int(.32 * sr); x = rng.standard_normal(n); y = np.zeros(n); a = 0.0
    for i in range(n):  # passa-baixa que abre e fecha
        k = .02 + .25 * np.sin(np.pi * i / n); a += k * (x[i] - a); y[i] = a
    return y / (np.abs(y).max() + 1e-6) * np.sin(np.pi * np.arange(n) / n) ** 2 * .35
def ding():
    n = int(.6 * sr); t = np.arange(n) / sr
    return (np.sin(2 * np.pi * 1318 * t) + .5 * np.sin(2 * np.pi * 1976 * t) + .25 * np.sin(2 * np.pi * 2637 * t)) * env(n, .002, .16) * .28
def nao():
    n = int(.22 * sr); t = np.arange(n) / sr
    return np.sign(np.sin(2 * np.pi * 150 * t)) * env(n, .003, .07) * .18 + np.sin(2 * np.pi * 110 * t) * env(n, .003, .09) * .2
SONS = {'pop': pop(), 'whoosh': whoosh(), 'ding': ding(), 'nao': nao()}
fx = np.zeros(len(voz) + sr, dtype='float32')
for e in ev:
    s = SONS.get(e['s']);
    if s is None: continue
    i = int(max(0, e['t']) * sr); fx[i:i + len(s)] += s[:len(fx) - i]
fx = fx[:len(voz)] * 0.55
mix = voz + fx; mix /= max(1.0, np.abs(mix).max() / .98)
sf.write(sys.argv[3], mix, sr); print(f'sfx: {len(ev)} efeitos')
