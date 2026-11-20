#!/usr/bin/env python3
import json, subprocess, sys, os
from concurrent.futures import ThreadPoolExecutor
# EDIT_ROOT = pasta edicao/ do vídeo (padrão: pasta atual)
ROOT = os.environ.get("EDIT_ROOT", os.getcwd()); OUT = f"{ROOT}/out"; SEG = f"{ROOT}/seg"; ART = f"{ROOT}/art"
P = json.load(open(f"{OUT}/plan.json"))
BURN = {int(k): (tuple(v[0]), tuple(v[1])) for k, v in P.get("BURN", {}).items()}  # vem do build.py

def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print(" ".join(cmd)); print(r.stderr[-3000:]); sys.exit(1)
    return r

def seg(i_g):
    i, g = i_g
    t, s, e, z = g["t"], g["s"], g["e"], g["z"]; D = g["nf"] / 24
    take = f"{ROOT}/takes/T{t:02d}.mp4"
    inputs = ["-ss", f"{s:.3f}", "-t", f"{D + 0.2:.3f}", "-i", take]
    W1 = int(round(1080 * z / 2) * 2); H1 = int(round(1920 * z / 2) * 2)
    post = f"scale={W1}:{H1}:flags=lanczos,crop=1080:1920,unsharp=5:5:0.45:5:5:0,setsar=1,fps=24,format=yuv420p"
    if t in BURN:
        (bx, by, bw, bh), (a, b) = BURN[t]
        A, B = max(0, a - s), min(D, b - s)
        pad = 26; cx, cy, cw, ch = bx - pad, by - pad, bw + 2 * pad, bh + 2 * pad
        inputs += ["-loop", "1", "-t", f"{D:.3f}", "-i", f"{ART}/mask_T{t:02d}.png"]
        fc = (f"[0:v]delogo=x={bx}:y={by}:w={bw}:h={bh}:enable='between(t,{A:.3f},{B:.3f})'[d];"
              f"[d]split[m][c];[c]crop={cw}:{ch}:{cx}:{cy},boxblur=12:3,eq=brightness=-0.03[cb];"
              f"[1:v]format=gray,scale={cw}:{ch},fps=24[mk];[cb][mk]alphamerge[ca];"
              f"[m][ca]overlay={cx}:{cy}:enable='between(t,{A:.3f},{B:.3f})':eof_action=pass[v0];[v0]{post}[v]")
    else:
        fc = f"[0:v]{post}[v]"
    fc += f";[0:a]aresample=48000,apad,atrim=0:{D:.5f},afade=t=in:st=0:d=0.015,afade=t=out:st={D - 0.02:.3f}:d=0.02[a]"
    out = f"{SEG}/s{i:02d}.mkv"
    run(["ffmpeg", "-nostdin", "-v", "error", "-y", *inputs, "-filter_complex", fc, "-map", "[v]", "-map", "[a]",
         "-frames:v", str(g["nf"]), "-c:v", "libx264", "-preset", "veryfast", "-crf", "14", "-c:a", "pcm_s16le", "-ar", "48000", "-ac", "2", out])
    return out

with ThreadPoolExecutor(2) as ex:
    outs = list(ex.map(seg, enumerate(P["SEGS"])))
with open(f"{SEG}/list.txt", "w") as f:
    for o in outs: f.write(f"file '{o}'\n")
run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", f"{SEG}/list.txt", "-c", "copy", f"{OUT}/base.mkv"])
print("base ok")
