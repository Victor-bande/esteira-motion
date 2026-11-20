---
name: dossie-produto
description: Zico · PRODUTO. Monta e mantém a biblioteca de cada produto em 03-PRODUTOS (PRODUTO.md com bancos de dores, benefícios, objeções, ganchos, linha vermelha e oferta atemporal · ANGULOS.md com no mínimo 12 cartões · fotos reais salvas uma vez). Use quando o dono mandar material de um produto (prints da página, rótulo, fotos, briefing, comissão, avaliações, copys de vídeos que venderam), quando um produto novo entrar no plano, ou quando chegar dado novo de um produto já salvo.
---

# dossie-produto · Zico · PRODUTO

v1 · 20/11/2026 · adaptado para o Claude Code + motion. O procedimento completo (material-produto + DOSSIE-ANGULOS §8, §13–15 + NICK §3.1, texto integral) está em `ORIGINAL.md`, nesta pasta. **Ler o `ORIGINAL.md` inteiro antes de executar.** Exemplos reais em `exemplos/`.

## Como roda aqui (vale por cima do ORIGINAL.md)
1. **Uma pasta por produto:** `03-PRODUTOS/P-{MARCA}-{NOME}/` com `PRODUTO.md`, `ANGULOS.md` e `fotos/`. Sigla de 2 letras no `03-PRODUTOS/INDICE.md`.
2. **Fotos uma vez só.** O dono manda as fotos uma vez; eu salvo em `fotos/` como `FOTO-{SIGLA}-{NN}.jpg` e escolho a principal como `FRASCO-{SIGLA}.png` (pote de frente, nítido). No `PRODUTO.md`, uma tabela diz o que cada foto mostra (frente, rótulo, textura, em uso, avaliação). Todo vídeo do produto reaproveita. **Nunca** gerar ou redesenhar o produto (REGRAS 7).
3. **§15 "Visual e cenas" vira "O que mostrar no motion":** qual foto prova qual argumento, qual detalhe do rótulo dá zoom, quais prints de avaliação servem de pop-up. Nada de cenário de avatar.
4. **§12 = CTA e OFERTA ATEMPORAL** (faixa de preço com data, frases que continuam verdade, comparações que valem no preço cheio, pisos de número, o que NÃO dizer).
5. **Sem Jairzinho e Tostão por enquanto:** o material vem do dono. Pesquisa complementar (site da marca, regulamentação) com WebSearch/WebFetch; nunca de memória.
6. **Marcação sempre:** `[FATO]` · `[CONFERIR]` · `[REF-Cn]` · `[HIPÓTESE]` · ⚠️.
7. Produto entra na biblioteca **antes** de qualquer vídeo e só com ✋ G0. Comissão abaixo de 15% ou fora do nicho sobe com ⚠️; o dono decide.
8. Correção do dono → `00-SISTEMA/CORRECOES.md`.

## Entrega no chat (✋ G0)
Até 5 linhas: o que é · persona principal · os 3 ângulos para testar primeiro · lacunas · fotos salvas. Fecha com "Próximo passo:".
