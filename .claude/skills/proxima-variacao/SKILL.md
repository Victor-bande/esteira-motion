---
name: proxima-variacao
description: Estrategista da fila. Com a leitura de métricas feita, decide QUAL é a próxima variação (gancho, ângulo, estrutura, produto ou estilo do motion), ONDE ela entra (qual célula, qual matriz, qual conta) e reordena a FILA; quando a fila precisa de material novo, pede a produção certa (mais ganchos, próximo ângulo, nova estrutura, novo produto). Use logo depois da leitura-metricas, quando a fila de uma matriz acabar, ou quando o dono perguntar "e agora, o que eu posto/produzo?".
---

# proxima-variacao · ESTRATÉGIA DA FILA

v1 · 20/11/2026 · nova no Claude Code: é a parte `proxima-variavel` + ordenar a fila do Sócrates, separada da leitura a pedido do dono. A régua, a ordem do diagnóstico, as 3 variáveis do campeão, as 3 formas de escalar e as 13 ferramentas de iteração estão em `../leitura-metricas/ORIGINAL.md` (seções 5 e 6) · **ler antes de decidir.**

## Recebe
A leitura pronta (`REGISTRO.md` §Leituras) + `MATRIZ.md` (o que já foi testado, a fila, os ganchos e ângulos de reserva no `CARDAPIO.md`) + o histórico de variáveis da conta.

## Decide (uma variável por vez, e a variável vem da leitura)
| Leitura | Próxima variação | Onde |
|---|---|---|
| Público errado | gancho que filtra o público | mesma célula-corpo, coluna de gancho seguinte |
| Tempo médio < 5 s | gancho de outro tipo [J-S14] | mesmo corpo |
| Retenção cai numa cena do meio | ajuste daquela cena do motion (ritmo, pop-up, prova visual), mantendo a copy | mesmo vídeo, versão `-F{n}` |
| Conclusão perto de 2% | execução/estrutura: ritmo da voz e do motion | mesmo corpo |
| Clique sem venda | psicologia e confiança: prova, autoridade, objeção | próximo ângulo da matriz |
| 3 ganchos sem venda num corpo | **próximo ângulo** (já tem copy de reserva no cardápio) | mesma matriz |
| 3 ângulos sem validar | **outra estrutura** com o mesmo produto, ou **outro produto** na mesma estrutura | matriz nova (✋ G1) |
| Corpo validado (> 3 mil views e 1 venda a cada 3 mil ou menos) | **Escala 1**: mais ganchos e iterações do mesmo corpo; depois Escala 2 e 3 [NICK §7.3] | mesma matriz → depois outro produto que resolve a mesma dor |

## Regras
0. **Ordem fixa do dono:** ganchos do mesmo corpo → outros corpos/personas da matriz → outra estrutura com o mesmo produto → a mesma estrutura com outro produto. Sempre 1 vídeo novo por vez. Nunca sair do público da conta (produto novo só se for do mesmo público).
1. **1 variável por vez.** Nunca o mesmo gancho no mesmo dia. 1 versão por dia por matriz [NICK §7.1].
2. **Nunca repostar o mesmo vídeo trocando só texto, legenda ou cor** (conteúdo repetitivo).
3. Variável do motion (estilo, ritmo, voz) é **formato** (`-F{n}`) e conta como a única variável daquele teste.
4. Trocar estrutura ou produto é decisão do dono: mostro o histórico das variáveis testadas e recomendo.
5. Se a fila precisa de material: digo qual skill produz (`cardapio-matriz` para ganchos e ângulos · `extrair-dna` para estrutura nova · `dossie-produto` para produto novo · `claude-video` para versão `-F`).

## Entrega (✋ G5)
- `MATRIZ.md`: FILA nova (o que posta amanhã e depois) · `07-PAINEL/PAINEL.md` atualizado.
- No chat, até 5 linhas: a próxima variação · onde entra (código · apelido) · por quê (1 linha ligada à leitura) · o que precisa ser produzido · "Próximo passo:".
