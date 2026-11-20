#!/usr/bin/env bash
# Baixa os vídeos da galeria da claude-video (ficam fora do repositório para ele não pesar 90 MB).
set -euo pipefail
DEST="$(cd "$(dirname "$0")/.." && pwd)/.claude/skills/claude-video/galeria/videos"
[ -d "$DEST" ] && [ "$(ls -A "$DEST" 2>/dev/null)" ] && { echo "galeria já está aqui: $DEST"; exit 0; }
TMP="$(mktemp -d)"
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 --filter=blob:none --sparse https://github.com/Felpborges/claude-video "$TMP/cv" >/dev/null 2>&1
git -C "$TMP/cv" sparse-checkout set galeria/videos >/dev/null
mkdir -p "$DEST" && cp "$TMP/cv/galeria/videos/"*.mp4 "$DEST/" && rm -rf "$TMP"
echo "ok: $(ls "$DEST" | wc -l) vídeos em $DEST"
