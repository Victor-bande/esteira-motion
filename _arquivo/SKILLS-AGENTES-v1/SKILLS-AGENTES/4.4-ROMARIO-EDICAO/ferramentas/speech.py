#!/usr/bin/env python3
"""Ilhas de fala de cada take (takes/T01.mp4 ...) -> speech.json. Uso: python3 speech.py <pasta_da_edicao>"""
import subprocess, numpy as np, json, sys, glob, os
ROOT = sys.argv[1] if len(sys.argv) > 1 else "."
res = {}
for path in sorted(glob.glob(f"{ROOT}/takes/T*.mp4")):
    t = int(os.path.basename(path)[1:3])
    raw = subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-i", path, "-ac", "1", "-ar", "16000",
                          "-af", "highpass=f=150,lowpass=f=5000", "-f", "s16le", "-"], capture_output=True).stdout
    a = np.frombuffer(raw, np.int16).astype(np.float32) / 32768
    hop = 320; n = len(a) // hop
    db = 20 * np.log10(np.sqrt((a[:n * hop].reshape(n, hop) ** 2).mean(1) + 1e-12))
    floor = np.percentile(db[db > -100], 8); thr = max(floor + 12, -47)
    idx = np.where(db > thr)[0]
    isl = []; s = idx[0]; p = idx[0]
    for i in idx[1:]:
        if i - p > 8: isl.append((s, p)); s = i
        p = i
    isl.append((s, p))
    isl = [(float(round(x * 0.02, 2)), float(round((y + 1) * 0.02, 2))) for x, y in isl if (y - x) >= 2]
    dur = len(a) / 16000
    res[t] = {"dur": round(dur, 3), "islands": isl}
    flag = "  <- fala até o fim do clipe, conferir" if dur - isl[-1][1] < 0.05 else ""
    print(f"T{t:02d} {dur:.2f}s ilhas={isl}{flag}")
json.dump(res, open(f"{ROOT}/speech.json", "w"), indent=1)
