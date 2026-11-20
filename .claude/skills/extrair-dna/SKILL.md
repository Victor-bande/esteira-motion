---
name: extrair-dna
description: Garrincha · VIRAL. Desmonta um vídeo viral de TikTok Shop que vendeu e salva o DNA reutilizável em 04-ESTRUTURAS (blocos por função, psicologia, gancho, ponto de costura, mecânica visual por bloco, pop-ups com segundo e palavra, PARA PREENCHER, serve para). Use quando o dono mandar um viral (vídeo e/ou transcrição), começar com "Extrair DNA:", pedir para desmontar, distrinchar, modelar, salvar a estrutura, ou para conferir se um cardápio é fiel ao DNA (conferir-cardapio).
---

# extrair-dna · Garrincha · VIRAL

v1 · 20/11/2026 · adaptado para o Claude Code + motion. O procedimento completo (esqueleto-viral + dna-viral + TEMPLATE, texto integral) está em `ORIGINAL.md`, nesta pasta. **Ler o `ORIGINAL.md` inteiro antes de executar.** Exemplos reais em `exemplos/`.

## Como roda aqui (vale por cima do ORIGINAL.md)
1. **Sem Gemini.** Aqui eu não assisto vídeo nem ouço áudio direto:
   - **Quadros:** `ffmpeg` tira a folha de quadros (`ffmpeg -i viral.mp4 -vf "fps=1,scale=270:-1,tile=6x5" quadros/folha-%02d.jpg`) e quadros soltos nos cortes; eu **olho** as imagens antes de descrever.
   - **Transcrição:** colada pelo dono (TokScript, com tempos) ou gerada pela transcrição da ElevenLabs quando a chave estiver no ambiente. Sem nenhuma das duas: vale a regra da `dna-viral` (o DNA verbal não sai, e eu digo isso).
2. **Visual = só o que o motion traduz.** Fica: a **mecânica visual de cada bloco** (o que a imagem faz pela venda), a ação contínua, a **tabela de pop-ups com segundo e palavra-gatilho**, o ritmo de cortes. **Sai:** prints por take, BLOCO para motion control, candidatos a motion control, prompts de Flow, avatar e KIT, contagem de imagens-base.
3. **Formato de saída:** `00-SISTEMA/MODELOS/DNA.md`, com as seções obrigatórias **4b · Ponto de costura** e **8b · Serve para**.
4. **Salvar sempre** em `04-ESTRUTURAS/E{NN}-{CENA}-{VIRADA}/` (DNA.md · viral.mp4 · transcricao.txt · quadros/) + linha no `04-ESTRUTURAS/INDICE.md`, depois do ✋ G0.
5. **Extrair função, não frase.** O PARA PREENCHER não tem nenhuma palavra do original.
6. **conferir-cardapio:** antes do G2, confiro se o A1 do Ronaldinho é fiel (mesmos blocos, ordem, mecânica, proporção ±10% das palavras, curiosidade abre e fecha no mesmo lugar) e se todo gancho termina na costura. Até 5 linhas: ✅ ou o bloco que quebrou e por quê.
7. O §10 "Onde já rodou" é atualizado pela `leitura-metricas`.
8. Correção do dono → `00-SISTEMA/CORRECOES.md` (ver CLAUDE.md).

## Entrega no chat (✋ G0)
5 linhas: o que é · por que vende · ponto de costura · serve para · o que o motion vai ter de traduzir (a mecânica mais difícil). Fecha com "Próximo passo:".
