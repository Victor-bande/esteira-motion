# CONTRATOS DE ENTREGA · o que cada agente precisa, processa e entrega

v2 · 13/11/2026 · máquina de modelar (matriz × fila). Regra de ouro: **a saída de um agente é a entrada exata do próximo.** Se a entrega não passa no "pronto quando", ela não sai.

Legenda: **(obr.)** obrigatório · **(opc.)** opcional · ✋ portão do dono.

---

## 1 · PELÉ · GESTÃO (contas, matrizes, fila)

**Precisa**
- (obr.) O que o dono quer: "o que a gente faz hoje?", uma conta, uma matriz, ou conta + produto + estrutura.
- (obr.) `07-PAINEL/PAINEL.md` · `PERFIL.md` e `REGISTRO.md` da conta · `MATRIZ.md` das matrizes abertas · `INDICE` de estruturas e de produtos.
- (opc.) Direcionamento do Nick do mês.

**Processa**
1. Mostra o **card da conta**: matrizes abertas, **fila de hoje**, melhor e pior vídeo, pendências.
2. **Decide junto com o dono** (✋ G1) o que fazer:
   - **postar** a próxima célula da fila;
   - **produzir** mais células numa matriz aberta (ganchos ou o próximo ângulo);
   - **abrir uma matriz nova**: sugere 1 combinação com o porquê, tirada do histórico (estrutura com melhor "onde já rodou", produto do plano do mês com menos vídeos na conta, combinação que ainda não foi testada).
3. Matriz nova: confere se a **estrutura** e o **produto** já estão nas bibliotecas. Faltou algum: chama o Garrincha ou o Zico **antes** do G1 (onboarding), nunca no meio do vídeo.
4. Abre a pasta e o `MATRIZ.md`, e chama o Ronaldinho.
5. Acompanha o status de cada célula e avisa o dono do que espera dele.
6. Depois de cada post: registra no REGISTRO e marca a célula como `postado`.
7. Onboarding de conta: Fases 0–6 do `PROCESSO_CONTA` → `PERFIL.md` + `KIT/` (prompts do Ronaldo).

**Entrega**
- `05-VIDEOS/{MATRIZ}/MATRIZ.md` (aberta e com o status em dia) · `07-PAINEL/PAINEL.md` (contas + fila de hoje) · linha do post no `REGISTRO.md` · OS quando houver onboarding.

**Pronto quando:** o dono sabe, em até 6 linhas, o que postar hoje, o que está em produção, o que espera dele e qual a sugestão do dia.

---

## 2 · GARRINCHA · VIRAL (biblioteca de estruturas)

**Precisa**
- (obr.) O vídeo viral em arquivo (mp4).
- (obr.) Transcrição literal com tempos, ou ele transcreve do áudio (se o modelo ouvir).
- (opc.) @, link, views, vendas, produto e marca originais, país.

**Processa** (skills `extrair-dna`, `classificar-estrutura`, `ficha-indice`)
1. Classifica: o esqueleto já existe no INDICE → vira exemplo novo daquela estrutura; senão → `E{NN}` novo.
2. Blocos por função (E1…En): tempo, fala original e PT, rótulos do Playbook, psicologia, função na venda, "sem ele…", % do vídeo.
3. Gancho: tipo, pecado, nível, **onde a curiosidade abre e onde fecha**, e o **ponto de costura** (onde termina o gancho e começa o corpo: é ali que os ganchos novos se encaixam).
4. Visual linha a linha · **tabela de pop-ups** (entra, sai, palavra que dispara, tipo, posição, estilo) · quadros-chave · candidatos a motion.
5. PARA PREENCHER · FIXO × ALTERÁVEL · pré-requisitos do produto · ⚠️ do original · ficha de produção (nº de imagens-base, onde o produto aparece).
6. **Que tipo de produto e de ângulo cabe** nesta estrutura (para o Pelé sugerir matrizes).

**Entrega**
- `04-ESTRUTURAS/E{NN}-{CENA}-{VIRADA}/DNA.md` + `viral.mp4` + `transcricao.txt` + `quadros/` + linha no `INDICE.md`.
- No chat: 5 linhas (o que é, por que vende, onde o produto entra, dificuldade, para que produto serve).

**Pronto quando:** todo bloco tem tempo, função, psicologia e visual; todo pop-up tem tempo e palavra; o ponto de costura está marcado; nada inventado.

---

## 3 · ZICO · PRODUTO (biblioteca de produtos)

**Precisa** (uma vez, quando o produto entra no plano; nunca no meio de um vídeo)
- (obr.) Página do produto no TikTok Shop: prints de todas as fotos (composição, tabela, modo de uso), avaliações, vendidos, comissão.
- (obr.) Foto limpa do pote (fotos 2 a 4 da página, ou a amostra grátis).
- (opc.) Briefing da marca · rótulo dos 4 lados · transcrições dos vídeos que mais venderam (BR) e de parecidos (EUA) · comentários.

**Processa** (skills `dossie-produto`, `banco-angulos`, `saude-do-produto`)
1. **Dossiê** com fonte e risco: dores em cena, mecanismo, benefícios (relato de uso), especificações e modo de uso, objeções e quebras, piores alternativas, autoridade, prova social, ganchos, linha vermelha, lacunas.
2. **Oferta atemporal** (§12 do PRODUTO.md): a faixa de preço real (cheio e em promoção), as frases de preço que continuam verdade, os **pisos de número** que só crescem ("mais de cem mil vendidos", "milhares de avaliações", "nota acima de 4,5") e as comparações que valem no preço cheio.
3. **Banco de ângulos**: ≥12 cartões, matriz persona × pecado, os 3 para testar primeiro.
4. **Saúde do produto** (rotina semanal): continua no Shop? loja oficial? comissão? nota? Atualiza os pisos e avisa se algum vídeo no ar ficou falso.

**Entrega**
- `03-PRODUTOS/P-{MARCA}-{PRODUTO}/PRODUTO.md` · `ANGULOS.md` · `FRASCO-{SIGLA}.png` · `PAGINA/PG-…md` (saúde) · linha no `03-PRODUTOS/INDICE.md`.

**Pronto quando:** toda afirmação tem marcação; a §12 tem frases de oferta prontas; o FRASCO existe; há ≥12 ângulos.

---

## 4 · RONALDINHO · COPY (idealização da matriz)

**Precisa**
- (obr.) A matriz aberta (`MATRIZ.md`) · `DNA.md` · `PRODUTO.md` + `ANGULOS.md` · `PERFIL.md` · `REGISTRO.md` e as outras matrizes da conta (o que já foi testado, o que vendeu, o que deu violação).
- (opc.) Direcionamento do Nick do mês.

**Processa** (skills `matriz-literal`, `variacoes-angulo`, `banco-ganchos`, `roteiro-aprovado`)
1. Escolhe **3 a 5 ângulos** para a matriz: o **A1 literal** (o ângulo que o viral pede) e outros que cubram pecados e níveis diferentes, sem repetir persona + pecado, sem repetir o que já falhou na conta.
2. Para **cada ângulo**, o **corpo completo** na estrutura, com a **tabela de encaixe** (função do bloco · fala do viral · nossa fala). No A1, slots com `[a | b]`; nos outros, já escolhido.
3. Para **cada ângulo**, **3 a 5 ganchos** de tipos diferentes, com o mesmo número de palavras (ou menos) do trecho que substituem, terminando no ponto de costura.
4. **Oferta atemporal** em tudo (REGRAS 8, PRODUTO §12).
5. Confere: curiosidade abre e fecha no lugar do viral · o gancho filtra o público · todo fato está no PRODUTO · ⚠️ em 1 linha cada.

**Entrega**
- ✋ G2: `05-VIDEOS/{MATRIZ}/CARDAPIO.md` (modelo CARDAPIO-ROTEIRO).
- Depois da aprovação: `{MATRIZ}/{ÂNGULO}/ROTEIRO.md` para cada corpo aprovado (copy + ganchos aprovados) e a grade da `MATRIZ.md` preenchida (células `copy`).

**Pronto quando:** o dono consegue responder numa linha ("A1 com E1a + G2, G3 · A2 + G1, G2 · A3 depois") e cada célula aprovada tem texto final.

---

## 5 · RONALDO · PRODUÇÃO (kit do Flow)

**Precisa**
- (obr.) `ROTEIRO.md` de cada corpo aprovado (com os ganchos) · `DNA.md` · `viral.mp4` · KIT da conta · `FRASCO-{SIGLA}.png` · `01-BASE/PROMPTS-FLOW.md`.
- (opc.) Imagens já geradas na mesma matriz, ou noutra matriz da mesma conta e estrutura (**reaproveitar**).

**Processa** (skills `takes-e-imagens`, `cortar-viral`, `prompts-flow`, `conferencia-flow`; onboarding: `kit-da-conta`)
1. **Imagens da estrutura**, só uma vez por matriz: modo (base única ou print por take), lista mínima, prompts. Se já existem, reaproveita; só gera as com produto diferente.
2. **Takes de cada corpo**: 4/6/8/10 s, ~3 palavras/s, 1 gesto por take, motion onde o viral se mexe.
3. **Takes de cada gancho** (`T01-G2`…): mesma duração e mesma imagem/bloco do trecho que substituem; gancho empilhado = take extra antes (`T00-G3`).
4. Prompts completos (PROMPTS-FLOW) para tudo · pop-ups com palavra-gatilho (nunca preço na tela) · créditos · ordem de geração.
5. QA-1 (imagens) e QA-2 (T1).

**Entrega**
- `{MATRIZ}/imagens/` · `prints/` · `blocos/` (da estrutura) · `{MATRIZ}/{ÂNGULO}/KIT.md` (corpo + ganchos engatilhados) · células `kit` na MATRIZ.

**Pronto quando:** todo take do corpo e de cada gancho tem duração, palavras, imagem, anexos e prompt colável; nenhuma imagem duplicada à toa.

---

## 6 · ROMÁRIO · EDIÇÃO (corpo + versões)

**Precisa**
- (obr.) Os takes do corpo (`T01…Tnn`) e dos ganchos (`T01-G2…`) · `ROTEIRO.md` · `KIT.md` · artes dos pop-ups · `06-FERRAMENTAS/edicao/`.

**Processa** (skills `qa-takes`, `edicao-automatica`, `qa-final`, `pacote-post`, `versoes-gancho`)
1. QA-3 nos takes (legenda queimada, fala, pote, mãos). Take inaproveitável → pede refação com o motivo.
2. Monta o **corpo** uma vez (projeto salvo) e renderiza **todas as versões** trocando só o trecho do gancho: `V-…-G1.mp4`, `…-G2.mp4`, `…-G3.mp4`.
3. QA-4 em cada versão: pop-ups, -14 LUFS, **nenhuma fala ou tela com preço, %, data, contador ou estoque**.
4. POST.md com um bloco por versão.

**Entrega**
- `{MATRIZ}/{ÂNGULO}/final/` (todas as versões) · `edicao/` (projeto salvo) · `POST.md` · células `pronto` na MATRIZ. ✋ G4.

**Pronto quando:** todas as versões aprovadas estão renderizadas e conferidas; trocar mais um gancho depois custa só o take novo.

---

## 7 · SÓCRATES · MÉTRICAS (leitura e fila)

**Precisa**
- (obr.) Prints do TikTok Studio (views, tempo médio, % até o fim, retenção, gênero e idade, origem) e do afiliado (cliques, CTOR, pedidos, comissão), de 48 a 72 h depois de cada post.
- (obr.) `MATRIZ.md` · `REGISTRO.md` · `ROTEIRO.md` do corpo.

**Processa** (skills `leitura-nick`, `proxima-variavel`, `ordenar-fila`; semanal: `relatorio-semanal`)
1. Régua dos 3 mil views → veredito (Potencial · Inconclusivo · Corpo validado · Investigar) [NICK §6.2].
2. Investigação: público → tempo médio → conclusão → conversão [NICK §6.3–6.4].
3. **Ordena a fila** da matriz:
   - corpo validado → próximos ganchos daquele corpo (Escala 1);
   - público errado → gancho que filtra;
   - tempo médio < 5 s → gancho de outro tipo;
   - 3 ganchos sem venda → próximo ângulo;
   - 3 ângulos sem validar → propor outra estrutura ou outro produto (Escala 2/3).
4. Se a fila vai acabar, avisa o Pelé para produzir mais células.

**Entrega**
- REGISTRO (linha + LEITURA) · `MATRIZ.md` (veredito, status `lido`, **FILA reordenada**) · "Onde já rodou" no DNA · status no ANGULOS · ✋ G5.

**Pronto quando:** veredito com o número que o sustenta; a fila tem o próximo vídeo e o porquê.

---

## Mapa das entregas (quem lê o quê)
| Arquivo | Escreve | Lê |
|---|---|---|
| PAINEL · OS | Pelé | todos |
| PERFIL · KIT da conta | Pelé (prompts: Ronaldo) | Ronaldinho, Ronaldo, Romário, Sócrates |
| REGISTRO | Pelé (post) · Sócrates (leitura) | todos |
| DNA · quadros · INDICE de estruturas | Garrincha (+ "onde já rodou": Sócrates) | Pelé, Ronaldinho, Ronaldo, Romário |
| PRODUTO · ANGULOS · FRASCO · saúde · INDICE de produtos | Zico (+ ângulo novo: Ronaldinho · status: Sócrates) | Pelé, Ronaldinho, Ronaldo |
| MATRIZ | Pelé (status) · Ronaldinho (grade) · Sócrates (fila) | todos |
| CARDAPIO · ROTEIRO | Ronaldinho (+ status/log: Ronaldo) | Ronaldo, Romário, Sócrates |
| imagens · prints · blocos · KIT | Ronaldo | Romário |
| final · edicao · POST | Romário | Pelé, Sócrates |
