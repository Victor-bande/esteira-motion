# FLUXO · a máquina de modelar vídeo

> **Na esteira motion:** deste arquivo valem as bibliotecas, a matriz, a fila, a cadência, a oferta atemporal e o fechar o ciclo. A produção (Ronaldo, Flow, Romário, QA-1 a QA-3, custo em créditos) foi trocada pelo motion: ver `CLAUDE.md`.

v2 · 13/11/2026 · fonte: os vídeos V-C01-MG-E01 e V-C01-MG-E02, feitos do zero no Claude e postados, e a decisão do dono de 13/11 ("máquina de modelar").

## A ideia em 5 linhas
1. A operação guarda **bibliotecas**: estruturas virais desmontadas, produtos estudados e a história de cada conta.
2. O que se produz não é "um vídeo": é uma **MATRIZ** = conta × produto × estrutura. Cada matriz nasce com **3 a 5 ângulos**, e cada ângulo com **3 a 5 ganchos**.
3. O dono e o Pelé **decidem juntos** qual matriz abrir; o Ronaldinho idealiza todos os ângulos e ganchos; o dono aprova; produz-se o corpo e os ganchos de uma vez.
4. Todo vídeo postado já tem **as variações engatilhadas** numa **FILA** (outro gancho do mesmo corpo, outro ângulo da mesma estrutura).
5. O Sócrates lê cada post e **reordena a fila**. A máquina aprende: o resultado volta para a estrutura, o ângulo e a conta.

## O time (7 agentes)
| # | Agente | Função | Cuida de |
|---|---|---|---|
| 1 | **Pelé** | GESTÃO | Contas, matrizes, fila de postagem, decisão com o dono |
| 2 | **Garrincha** | VIRAL | Biblioteca de estruturas (DNA) |
| 3 | **Zico** | PRODUTO | Biblioteca de produtos (dossiê, ângulos, pote) · saúde dos produtos |
| 4 | **Ronaldinho** | COPY | Cardápio da matriz: 3–5 ângulos × 3–5 ganchos |
| 5 | **Ronaldo** | PRODUÇÃO | Kit: imagens da estrutura (1 vez) + takes de cada corpo + takes de cada gancho |
| 6 | **Romário** | EDIÇÃO | Corpo + todas as versões de gancho, prontas para postar |
| 7 | **Sócrates** | MÉTRICAS | Leitura de cada post · ordem da fila · próxima matriz |

## As bibliotecas (carregadas ANTES de qualquer vídeo)
| Biblioteca | Quem alimenta | Quando | Um vídeo pode começar sem ela? |
|---|---|---|---|
| **Estruturas** `04-ESTRUTURAS/` | Garrincha | Sempre que o dono manda um viral que vendeu | Não. Estrutura nova = Garrincha antes |
| **Produtos** `03-PRODUTOS/` | Zico | Quando o produto entra no plano (direcionamento do Nick do mês ou escolha do dono) | Não. Produto novo = Zico antes |
| **Contas** `02-CONTAS/` | Pelé | Onboarding da conta | Não |
| **Matrizes e fila** `05-VIDEOS/` | Pelé (status) · Ronaldinho (copys) · Sócrates (ordem) | A cada ciclo | — |

O fluxo de um vídeo **não para no meio para pedir material de produto**: o produto já está na biblioteca. A saúde do produto (continua no Shop? comissão? nota?) é checada pelo Zico em rotina, fora do fluxo.

## O ciclo
```
            ┌──────────── BIBLIOTECAS (carregadas antes) ────────────┐
            │ ESTRUTURAS (Garrincha) · PRODUTOS (Zico) · CONTAS (Pelé) │
            └──────────────────────────────────────────────────────────┘
                                   │
A · DECIDIR     PELÉ + DONO ── qual matriz abrir (conta × produto × estrutura), com o histórico na mesa   ✋ G1
                                   ▼
B · IDEALIZAR   RONALDINHO ── CARDÁPIO: 3–5 ângulos (corpo completo cada) × 3–5 ganchos (cada)        ✋ G2 o dono aprova corpos e ganchos
                                   ▼
C · PRODUZIR    RONALDO ── KIT: imagens da estrutura (1 vez) · takes de cada corpo aprovado · takes de cada gancho
                                   ▼
D · GERAR       DONO no Flow ── 1ª imagem + T1 conferidos ✋ G3 ── resto dos takes e dos ganchos
                                   ▼
E · EDITAR      ROMÁRIO ── corpo + todas as versões G1…Gn de uma vez                                  ✋ G4
                                   ▼
F · POSTAR      DONO segue a FILA (1 versão por dia por matriz) ── PELÉ registra
                                   ▼  48–72 h
G · LER         SÓCRATES ── veredito de cada post ── reordena a FILA / propõe a próxima matriz          ✋ G5
                                   │
                                   └──▶ volta para A (ou só para F, se a fila já tem o que postar)
```

## A matriz
Uma matriz = **conta × produto × estrutura**. Ex.: `C01-MG-E02` = Malu · Magnésio Quantum · estrutura cozinha desconfiada.

```
                  G1        G2        G3        G4        G5
MG2 não é gen.   POSTADO   pronto    pronto    pronto    copy
MG13 pavio      pronto    copy      copy      —         —
MG6 já tomava   copy      copy      copy      —         —
MG3 3 da manhã  copy      copy      copy      —         —
```
- **Linha = ângulo** (um corpo). **Coluna = gancho** daquele corpo. **G1** = o gancho original do corpo.
- **Status de cada célula:** `copy` (aprovada) → `kit` (prompts prontos) → `gerado` (takes no Flow) → `pronto` (editado) → `postado DD/MM` → `lido` (veredito do Sócrates) · ou `descartado`.
- **A FILA** = as células `pronto`, na ordem que o Sócrates define. O Pelé diz ao dono o que postar a cada dia.

## Quanto custa cada célula
| O que | Imagens | Takes no Flow | Créditos aprox. |
|---|---|---|---|
| 1º corpo da matriz (ângulo 1, G1) | todas as da estrutura (1 vez só) | ~16 | ~200 + imagens |
| Outro ângulo na mesma matriz | **reaproveita** as da estrutura | ~16 (fala nova, mesmas imagens) | ~200 |
| Outro gancho do mesmo corpo | reaproveita | 1 ou 2 (só o trecho do gancho) | ~12 a 35 |
| Outra headline | — | 0 | 0 |
**Regra de ouro da economia:** as imagens são da **estrutura**, não do ângulo. Gera uma vez e serve a todos os ângulos e ganchos daquela matriz.
E mais: as imagens **sem produto** servem também a outro produto na mesma conta e estrutura (C01-MG-E02 → C01-CR-E02 reaproveita a Malu na cozinha). Só as imagens com o pote mudam.

## Os 5 portões do dono (✋)
| Portão | Quando | O dono decide |
|---|---|---|
| G1 · Matriz | Antes de idealizar | Qual matriz abrir (ou qual célula da fila produzir) |
| G2 · Cardápio | Depois da idealização | Quais ângulos viram corpo e quais ganchos entram na fila |
| G3 · Primeiras gerações | 1ª imagem e T1 | Rosto, roupa, cenário, voz e ritmo |
| G4 · Vídeos | Depois da edição | Aprova o corpo e as versões de gancho |
| G5 · Leitura | Depois de cada leitura | Segue a fila, mexe na ordem, ou abre outra matriz |

## Conferências (QA)
| QA | Quem | O que confere | Por quê (aprendido na C01) |
|---|---|---|---|
| QA-0 · saúde do produto | Zico (rotina semanal) | Produto ainda no Shop, loja oficial, comissão, nota, se mudou algo que um vídeo no ar afirma | A copy é atemporal, mas o produto pode sair do Shop (aconteceu com o Super Fibras) |
| QA-1 · imagens | Ronaldo | Rosto = AVATAR, roupa e fundo = CEN, pote idêntico ao FRASCO, 5 dedos | Pote diferente do vinculado = "Promoção de produto inconsistente" (-15 pontos) |
| QA-2 · T1 | Ronaldo + dono | Voz, sotaque, ritmo, fala completa, rosto | Validar antes de gastar créditos no resto |
| QA-3 · takes | Romário | Legenda queimada, fala cortada/repetida/trocada, pote, mãos | O Flow queimou legenda em 4 de 16 takes mesmo com "no subtitles" |
| QA-4 · vídeos | Romário | Quadros nos pop-ups, -14 LUFS, **nenhuma fala ou tela com preço, %, data ou estoque** | Oferta muda toda semana; vídeo atemporal não estraga |

## Oferta atemporal (regra da máquina)
Nenhuma fala e nenhum pop-up cita **preço exato, porcentagem, data, "só hoje", contador ou estoque**. A oferta é dita de um jeito que continua verdade quando a página muda. Moldes em `REGRAS.md` (regra 8) e no `PRODUTO.md` (§12 "Oferta atemporal").
Motivo: no V-C01-MG-E01 a oferta mudou duas vezes em 3 semanas ("relâmpago -40%" → "11.11 -46% até 11/11" → acabou) e o vídeo no ar passou a falar algo falso.

## Cadência de postagem (o Nick)
- 1 versão por dia por matriz; **nunca o mesmo gancho no mesmo dia** [NICK §7.1].
- Corpo validado (passou de 3 mil views e vendeu 1 a cada 3 mil ou menos) → postar os ganchos da fila daquele corpo ("6 ganchos – 1 corpo") [NICK §7.3].
- Corpo que não validou depois de 3 ganchos → o Sócrates propõe o próximo ângulo da matriz, e não mais ganchos.
- Matriz sem nenhum corpo validado depois de 3 ângulos → o Sócrates propõe outra estrutura ou outro produto (decisão do dono).

## Fechar o ciclo (a memória)
Toda leitura volta para 5 lugares:
1. `MATRIZ.md` (status da célula e nova ordem da fila).
2. `REGISTRO.md` da conta (a linha do post).
3. `DNA.md` da estrutura → "Onde já rodou".
4. `ANGULOS.md` do produto → status do ângulo.
5. `PAINEL.md` → o card da conta.

## Pastas
```
OPERACAO/
├── 00-SISTEMA/     FLUXO · CONTRATOS · CONDUCAO-EXEMPLO · NOMENCLATURA · REGRAS · MODELOS/
├── 01-BASE/        JESSICA_METODO · NICK_METODO · PROCESSO_CONTA · PROMPTS-FLOW · DOSSIE-ANGULOS · MARCAS-PARCEIRAS · NICK/
├── 02-CONTAS/      C01-MALU-BR/  PERFIL.md · REGISTRO.md · KIT/ (AVATAR-*.png · CEN-*.png · VOZ.md)
├── 03-PRODUTOS/    INDICE.md · P-QUANTUM-TETRAMAG/  PRODUTO.md · ANGULOS.md · FRASCO-MG.png · PAGINA/ (saúde do produto)
├── 04-ESTRUTURAS/  INDICE.md · E02-COZINHA-DESCONFIADA/  DNA.md · viral.mp4 · transcricao.txt · quadros/
├── 05-VIDEOS/      _ORDENS/ (OS do Pelé) · C01-MG-E02/  ← uma pasta por MATRIZ
│                   ├── MATRIZ.md  (ângulos × ganchos, status, FILA)
│                   ├── CARDAPIO.md (todas as copys, para o G2)
│                   ├── imagens/ · prints/ · blocos/   ← da estrutura, servem a todos os ângulos
│                   ├── MG2/   ROTEIRO.md · KIT.md · takes/ · edicao/ · final/ (V-C01-MG-E02-MG2-G1.mp4 … G5.mp4) · POST.md
│                   └── MG13/  …
├── 06-FERRAMENTAS/ edicao/
└── 07-PAINEL/      PAINEL.md (contas + FILA do dia)
```
Cada agente escreve só nas pastas do seu contrato; ler, todos leem tudo.

## Como a conversa começa (ver CONDUCAO-EXEMPLO)
> **Dono:** e aí, o que a gente faz hoje na C01?
> **Pelé:** C01 · Malu. Fila de hoje: postar **V-C01-MG-E02-MG2-G3** (gancho 3 do "não é genética"; o G1 passou de 3 mil e vendeu). Matrizes abertas: C01-MG-E02 (2 ângulos prontos, 2 em copy). Sugestão para produzir: abrir **C01-CR-E02**, a creatina na mesma estrutura, que nunca foi ao ar e reaproveita o cenário da cozinha. Bora?
