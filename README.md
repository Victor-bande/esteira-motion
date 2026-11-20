# esteira-motion

Operação de vídeo de venda para TikTok Shop em motion, rodando no Claude Code.
O orquestrador é o `CLAUDE.md`. As skills ficam em `.claude/skills/` e carregam sozinhas em toda sessão aberta com este repositório.

## Como usar
Abra uma sessão do Claude Code com este repositório e mande o pedido: um viral, material de produto, "abre a matriz X", métricas de um post, ou "o que a gente faz hoje?".

## Primeira vez numa sessão nova
- Galeria de estilos do motion (fica fora do git): `bash 06-FERRAMENTAS/buscar-galeria.sh`
- Checar dependências do motion: `bash .claude/skills/claude-video/scripts/checar.sh`

## Créditos
`.claude/skills/claude-video` é a skill de Felipe Borges (MIT): https://github.com/Felpborges/claude-video
