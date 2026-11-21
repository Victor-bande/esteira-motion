#!/usr/bin/env bash
# Baixa de novo o conteúdo do hub do Nick (mvm-wellness.pages.dev) para 01-BASE/MVM/.
set -euo pipefail; cd "$(dirname "$0")/../.."
curl -s -m 30 https://mvm-wellness.pages.dev/api/data -o "01-BASE/MVM/data-$(date +%F).json" && echo "ok: 01-BASE/MVM/data-$(date +%F).json (regerar o MVM.md com o orquestrador)"
