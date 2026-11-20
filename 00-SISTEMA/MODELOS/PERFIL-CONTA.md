# MODELO · PERFIL da conta (`02-CONTAS/{CONTA}/PERFIL.md`)

Quem escreve: **Pelé** (skill `perfil-conta`). Quem lê: Ronaldinho, Ronaldo, Romário, Sócrates.
Base do método: `PROCESSO_CONTA` Fases 0 a 6 + Jéssica S12, S13, S17, S20, S21, S28, S31.
Regra: o PERFIL é a fonte única da conta. Se o perfil do TikTok mudar, muda aqui primeiro.

---

## Como preencher (perguntas do Pelé, uma rodada por bloco)

**Bloco A · Identidade e estágio** (Fase 0)
1. País da conta? Idioma dos vídeos? Moeda?
2. @ atual e nome no perfil?
3. Seguidores hoje? Views dos últimos vídeos?
4. TikTok Shop: liberado · pedido e recusado · não pedido?
5. Pontos de violação ou avisos? Quais e quando?
→ Define a **fase** (tabela da Fase 0 do PROCESSO). Conta sem Shop vai para o roteiro das Fases 1–4 (crescimento e ativação), não para vídeo de venda.

**Bloco B · Venda** (Fase 5)
6. Nicho, um só: (1) Estética/Beleza · (2) Saúde e bem-estar · (3) Moda [J-S31].
7. Público-mãe: idade, quem decide a compra, o que pensa e sente agora [J-S12].
8. Personas: 5, mesmo público, diferentes pela motivação emocional [J-S17]. Primeiro 1 linha cada → dono ajusta → fichas.
9. Formatos da conta (até 3): narração · texto na tela · talking head/UGC · tela verde · podcast [J-S20, S21].

**Bloco C · Kit da avatar** (feito com o Ronaldo, prompts A1 e A2 do `PROMPTS-FLOW`)
10. Avatar: idade aparente, traços, cabelo, um detalhe marcante (pinta, sardas). 100% fictícia.
11. Voz: idioma, sotaque, idade, timbre, jeito de falar.
12. Cenários fixos (até 3) e a roupa de cada um.

**Bloco D · Perfil de venda** (Fase 6)
13. @, nome, bio (3 opções cada), foto [J-S28].

**Bloco E · Regras da conta**
14. O que esta conta nunca faz (ex.: jaleco, antes e depois, credencial).
15. Violações já tomadas e a regra que cada uma gerou.

---

## O arquivo

```markdown
# PERFIL · C{NN} · {Apelido} · {PAÍS}
vN · DD/MM/AAAA · Pelé

## 0. Card (o que o Pelé mostra quando pedem a conta)
Código: C01-MALU-BR · @dicasdamalu8 · nome no perfil: …
País: BR · idioma: pt-BR · moeda: R$
Fase: {1–12 do PROCESSO} · Shop: liberado desde DD/MM · seguidores: … (DD/MM)
Nicho: … · Público-mãe: …
Violações: {data · motivo · pontos · regra que gerou}

## 1. Público-mãe
Quem compra · o que pensa e sente agora · dores · desejos · o que consome no TikTok · linguagem.

## 2. Personas (5)
| # | Nome, idade | Situação | Dor em cena | Pecado | Nível (2 ou 4/5) | Formato que mais pega |
Fichas completas abaixo (campos da Fase 5 passo 3 do PROCESSO).

## 3. Formatos da conta
| Formato | Como é | Persona | Estruturas que usam |

## 4. Kit da avatar  (arquivos em KIT/)
- AVATAR-{NOME}.png · descrição [AVATAR] em inglês, pronta para prompt:
  "the same face, facial structure, eyes, nose, lips, jawline and age (…), …"
- VOZ ([VOZ] em inglês, pronta para prompt) + ritmos usados (gancho, história, explicação, entusiasmo, segredo, calmo).
- Cenários: CEN-SALA.png (roupa: …; fundo: …) · CEN-COZINHA.png (…)
- Detalhes fixos: brincos, sem anéis, unhas curtas naturais…

## 5. Perfil do TikTok
@ · nome · bio · foto · data da última troca.

## 6. Produtos da conta
| Sigla · produto · marca | Status (ativo · teste · pausado · descartado) | Comissão | Desde |

## 7. Matrizes da conta
| Matriz | Ângulos (corpos) | Vídeos postados | Melhor resultado | Status |

## 8. Linha da conta (nunca fazer)
- …

## 9. Resumo de números (o Sócrates atualiza)
Últimos 7 dias: vídeos · views · cliques · vendas · comissão. Melhor vídeo: …

## Histórico
```

---

## Exemplo real (C01 em 13/11/2026, para migrar)
- C01-MALU-BR · @dicasdamalu8 · BR · Shop liberado · ~2,2 mil seguidores (19/10).
- **Nicho: Saúde e bem-estar desde 22/10** (antes Estética/Beleza; o PERFIL antigo ainda diz beleza e "Malu Beauty" → atualizar nome e bio).
- Público: mulheres; personas por produto (jovem e madura).
- Avatar Malu: final dos 40, cabelo castanho ondulado com fios grisalhos solto abaixo dos ombros, argolinhas douradas pequenas, sem anéis, sem colar, pele com poros e sardinhas.
- Voz: pt-BR, sotaque paulista natural, mulher no fim dos 40, grave-médio quente, um pouco rouca, íntima como amiga.
- Cenários: CEN-SALA (cardigã aveia sobre camiseta branca; parede azul-acinzentada, quadro de folhas de palmeira, abajur de latão) · CEN-COZINHA (a AVATAR-COZINHA do V-C01-MG-E02-MG2-G1).
- Violação: 21/10 "Promoção de produto inconsistente" (-15 pontos) → regra: pote idêntico ao vinculado ou PiP do pote real.
- Linha da conta: sem jaleco/estetoscópio/credencial · sem antes e depois gerado por IA · dor e sintoma em ilustração, não no rosto da avatar.
