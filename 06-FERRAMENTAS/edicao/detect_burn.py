#!/usr/bin/env python3
"""Acha legenda queimada pelo Flow (texto branco com contorno preto) na faixa do peito.
Uso: python3 detect_burn.py <pasta_da_edicao>. Depois conferir a caixa olhando um quadro (ver README)."""
import subprocess, numpy as np, sys, glob, os
ROOT = sys.argv[1] if len(sys.argv) > 1 else "."
W, H = 720, 1280
def frames(path):
    p = subprocess.Popen(["ffmpeg", "-nostdin", "-v", "error", "-i", path, "-f", "rawvideo", "-pix_fmt", "gray", "-"], stdout=subprocess.PIPE)
    while True:
        b = p.stdout.read(W * H)
        if len(b) < W * H: break
        yield np.frombuffer(b, np.uint8).reshape(H, W)
for path in sorted(glob.glob(f"{ROOT}/takes/T*.mp4")):
    vals = np.array([int((f[930:1070, 60:660] < 45).sum()) for f in frames(path)])
    on = np.where(vals > 150)[0]; segs = []
    if len(on):
        s = on[0]; prev = on[0]
        for i in on[1:]:
            if i > prev + 3: segs.append((s, prev)); s = i
            prev = i
        segs.append((s, prev))
    print(os.path.basename(path), "legenda queimada (s):" if segs else "limpo", [(float(round(a / 24, 2)), float(round(b / 24, 2))) for a, b in segs])
