#!/usr/bin/env python3
import json, subprocess, sys, re, os
# EDIT_ROOT = pasta edicao/ do vídeo (padrão: pasta atual)
ROOT = os.environ.get("EDIT_ROOT", os.getcwd()); OUT = f"{ROOT}/out"
P = json.load(open(f"{OUT}/plan.json")); EV = P["EV"]; TOTAL = P["TOTAL"]
preview = len(sys.argv) > 1  # "preview S E": só um trecho, para conferir

# 1) loudness da base (passo 1 do loudnorm)
r = subprocess.run(["ffmpeg", "-nostdin", "-hide_banner", "-i", f"{OUT}/base.mkv", "-vn",
                    "-af", "loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"],
                   capture_output=True, text=True)
m = json.loads(re.search(r"\{[^{}]*\"input_i\"[^{}]*\}", r.stderr, re.S).group(0))
ln = (f"loudnorm=I=-14:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
      f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")

inputs = ["-i", f"{OUT}/base.mkv"]
fc = []; last = "0:v"
for k, ev in enumerate(EV, start=1):
    S, E = ev["s"], ev["e"]; D = E - S
    inputs += ["-itsoffset", f"{S:.3f}", "-loop", "1", "-framerate", "24", "-t", f"{D:.3f}", "-i", ev["path"]]
    fin = 0.16 if ev["anim"] != "slide" else 0.22
    fc.append(f"[{k}:v]format=rgba,fade=t=in:st={S:.3f}:d={fin}:alpha=1,fade=t=out:st={E - 0.12:.3f}:d=0.12:alpha=1[o{k}]")
    X, Y = ev["x"], ev["y"]
    if ev["anim"] == "pop":
        yexp = f"{Y}+22*max(0\\,1-(t-{S:.3f})/{fin})"
    elif ev["anim"] == "slide":
        yexp = f"{Y}+70*pow(max(0\\,1-(t-{S:.3f})/{fin})\\,2)"
    elif ev["anim"] == "bounce":
        yexp = f"{Y}+16*sin(2*PI*2*(t-{S:.3f}))"
    else:
        yexp = f"{Y}"
    nxt = f"v{k}"
    fc.append(f"[{last}][o{k}]overlay=x={X}:y='{yexp}':enable='between(t,{S:.3f},{E:.3f})':eof_action=pass[{nxt}]")
    last = nxt
fc.append(f"[{last}]ass={OUT}/legendas.ass:fontsdir=/usr/share/fonts/truetype/google-fonts,format=yuv420p[vout]")
fc.append(f"[0:a]{ln},aresample=48000[aout]")
open(f"{OUT}/filter.txt", "w").write(";\n".join(fc))

out = os.path.join(OUT, os.environ.get("VIDEO_NOME", "VIDEO") + ".mp4")
cmd = ["ffmpeg", "-nostdin", "-v", "error", "-y", *inputs, "-filter_complex_script", f"{OUT}/filter.txt",
       "-map", "[vout]", "-map", "[aout]", "-r", "24", "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
       "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", out]
r = subprocess.run(cmd, capture_output=True, text=True)
if r.returncode: print(r.stderr[-4000:]); sys.exit(1)
print("ok", out, m["input_i"])
