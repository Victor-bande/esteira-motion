#!/usr/bin/env bash
# Instala a voz local (Kokoro, pt-BR) uma vez por sessão. Modelo fica fora do git (~330 MB).
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)/modelo"; [ -L "$D" ] && [ ! -e "$D" ] && rm "$D"; mkdir -p "$D"
pip install -q --break-system-packages edge-tts >/dev/null 2>&1 || pip install -q edge-tts  # voz neural (padrão desde 22/11)
pip install -q --break-system-packages kokoro-onnx soundfile >/dev/null 2>&1 || pip install -q kokoro-onnx soundfile
B=https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main
[ -s "$D/model.onnx" ] || curl -sL -o "$D/model.onnx" $B/onnx/model.onnx
for v in pf_dora pm_alex pm_santa; do [ -s "$D/$v.bin" ] || curl -sL -o "$D/$v.bin" $B/voices/$v.bin; done
python3 -c "
import numpy as np
np.savez('$D/voices.npz', **{v: np.fromfile('$D/'+v+'.bin', dtype=np.float32).reshape(-1,1,256) for v in ['pf_dora','pm_alex','pm_santa']})"
echo "voz pronta em $D"
