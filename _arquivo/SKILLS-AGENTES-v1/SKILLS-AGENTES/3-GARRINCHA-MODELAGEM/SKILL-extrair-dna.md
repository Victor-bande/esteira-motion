# SKILL `extrair-dna` (+ `conferir-cardapio`) · Garrincha · MODELAGEM (executivo)

v1 · 14/11/2026 · origem: skills `dna-viral` (com o `TEMPLATE.md`) e `esqueleto-viral`, mais o modelo 0 da `esteira-ugc-avatar` (prompt de decupagem para o Gemini). Textos integrais na seção 6. O formato de saída é o `MODELOS/DNA.md` do pacote v2, que junta os dois.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `extrair-dna` · `conferir-cardapio` |
| Agente | Garrincha · MODELAGEM (executivo) |
| Gatilho | Viral aprovado no G0 (vem do Jairzinho ou do dono) · "salva essa estrutura" · "Extrair DNA:" · o Ronaldinho entregou um cardápio (conferir antes do G2) |
| Não usar quando | Escrever a copy do nosso produto (é o Ronaldinho) · cortar prints e blocos por take (é o Didi, depois do roteiro) |
| Ferramentas | Assistir vídeo e ouvir áudio (Gemini) · ffmpeg (quadros, folha de quadros, cortes de cena) |
| Escreve em | `04-ESTRUTURAS/E{NN}-{CENA}-{VIRADA}/DNA.md` · `quadros/` · `viral.mp4` · `transcricao.txt` · `04-ESTRUTURAS/INDICE.md` |

## 2. Recebe
- O vídeo viral (arquivo, sem marca d'água) e a transcrição literal (TokScript), da Pesquisa ou do dono.
- Métricas, se houver: views, vendas, views por venda. Sem métrica: "não informado".
- Para conferir: o `CARDAPIO.md` do Ronaldinho.
- Exemplo: `exemplos/RECEBE-viral-cheddar.md`.

## 3. Lê antes
`04-ESTRUTURAS/INDICE.md` (o viral pode ser exemplo novo de uma estrutura salva) · `01-BASE/JESSICA_METODO.md` S12, S13, S14, S15, 3.4–3.9 · `01-BASE/NICK_METODO.md` §3.3–3.7 (esqueleto, modelar × copiar, Playbook das 16 labels, retenção) e §7.2 · `PROCESSO_CONTA` Fase 7 passo 4.

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| DNA.md (ficha, blocos rotulados, visual linha a linha, pop-ups com tempo e palavra, quadros, **ponto de costura**, motion, PARA PREENCHER, fixo × alterável, pré-requisitos, **serve para**, onde já rodou) | `04-ESTRUTURAS/E…/DNA.md` | Ronaldinho, Didi, Ronaldo, Romário |
| Resumo de 5 linhas para o G0 (o que é, por que vende, costura, serve para, produção) | Chat → Pelé | Dono |
| Conferência do cardápio (fidelidade ao DNA) antes do G2 | `CARDAPIO.md` (notas) → Pelé | Dono |
Exemplos: `exemplos/GERA-DNA-E02-COZINHA-DESCONFIADA.md` · `exemplos/GERA-DNA-E01-SALA-NAOEPREGUICA.md`.

## 5. Regras da máquina (valem por cima dos textos originais)
1. **Sempre salvar na biblioteca.** A `esqueleto-viral` diz "nunca entregar MD nesta etapa". Na máquina, a estrutura vai para `04-ESTRUTURAS/` assim que o dono aprova no G0, porque as matrizes partem dela.
2. **Um formato só: `MODELOS/DNA.md`.** Ele junta o esqueleto rotulado (`esqueleto-viral`), a timeline e as camadas de DNA (`dna-viral`). Nome da pasta: `E{NN}-{CENA}-{VIRADA}` (ex.: `E02-COZINHA-DESCONFIADA`), no lugar de `EST-NN` e de `D-{NICHO}-{FORMATO}-{NN}`.
3. **Duas seções novas, obrigatórias:**
   - **4b · Ponto de costura:** o bloco e o segundo em que o gancho termina e o corpo começa (ex.: "fim do E1, 0:08; o corpo começa em 'E confia em mim…'"). Os ganchos novos de cada matriz substituem só até aqui.
   - **8b · Serve para:** tipos de produto, pecados e níveis que cabem na estrutura. O Pelé usa para sugerir matrizes.
4. **Transcrição:** o Gemini assiste e ouve o vídeo, então pode transcrever. A regra da `dna-viral` ("áudio não é processado, a transcrição tem que vir escrita") vale quando o modelo da plataforma não ouvir o áudio: aí, sem transcrição colada, o DNA verbal não sai, e isso é dito.
5. **Extrair função, não frase.** O esqueleto (PARA PREENCHER) não tem nenhuma palavra do original.
6. **Todo pop-up tem um segundo e uma palavra** que o dispara. É o que o Didi e o Romário usam.
7. **Como executivo (`conferir-cardapio`):** antes do G2, confere se o A1 do Ronaldinho é fiel ao DNA (mesmos blocos, mesma ordem, mesma mecânica visual, proporção ±10% das palavras, curiosidade abre e fecha no mesmo lugar) e se cada gancho termina na costura. Responde em até 5 linhas: ✅ ou o bloco que quebrou e por quê.
8. O DNA §10 "Onde já rodou" é atualizado pelo Sócrates.

## 6. Procedimento integral
### Da fonte `esqueleto-viral` · texto integral (linhas 6–fim)

#### Esqueleto viral · extrair a estrutura de um vídeo que vende

##### Quando usar
- O dono manda transcrição (com ou sem tempos), quadro de estrutura, prints ou o vídeo de um viral e pede: extrair a estrutura, o esqueleto, distrinchar, dividir em blocos, "salvar esse formato", "ter esse modelo pronto".
- Não é: decupagem de produção para o Flow segundo a segundo (isso é a `dna-viral`, só se o dono chamar pelo nome). Não é copy nova do nosso produto (Fase 8); aqui só entra o encaixe se o dono pedir.

##### Regra de entrega (do dono)
- **Nesta etapa, nunca entregar vídeo nem MD.** A estrutura distrinchada vai **no chat**. Arquivo em `ESTRUTURAS/` só quando o dono pedir para salvar, de preferência depois de a estrutura ter sido usada num vídeo e testada. A biblioteca cresce uma a uma, com o que já foi usado.
- Ordem do trabalho: 1) estrutura distrinchada e aprovada → 2) ângulo do vídeo (persona + pecado + sonho) → 3) opções por bloco (`encaixe-estrutura`) → 4) copy → 5) visual e takes.

##### Antes de gerar: perguntar (uma rodada, numerada)
1. **Quer o detalhamento visual também?** (1) Só a copy · (2) Copy + visual linha a linha. O visual precisa do vídeo em arquivo (ou um print de cada momento); sem isso, fica pendente.
2. Só se faltar: transcrição literal com tempos (TokScript) · produto e marca do original · views e vendas, se tiver.
- Se o dono já respondeu isso na mensagem (ex.: "primeiro a copy"), não perguntar de novo.
- Se o dono disser "cria" sem responder, gerar só a copy com o que tem e marcar o visual como pendente na resposta.

##### Ler antes
- A biblioteca `ESTRUTURAS/` do projeto, se existir (Projects: project_info e project_search). O viral pode ser exemplo novo de uma estrutura já salva.
- `JESSICA_METODO.md`: S12 (identificação, emoção × razão, níveis de consciência), S13 (7 pecados), S14 (gancho), S15 e 3.4 a 3.8 (CTA), 3.9 (linguagem de amiga).
- `claude/NICK_METODO.md` §3.3 a §3.7 (esqueleto, modelar × copiar, Playbook das 16 labels, retenção) e §7.2 (3 variáveis) · o `NICK/DIRECIONAMENTO-NICK-*` do mês (ganchos, estilos e dicas indicados).
- `PROCESSO_CONTA.md`: Fase 7 passo 4 e EXT-1 a EXT-3.
- O PRODUTO da vez (`PRODUTOS/`), para o mapa de ângulos.

##### Passo a passo
1. **Classificar.** Comparar o esqueleto com os salvos (se houver): mesmo esqueleto → exemplo novo daquela estrutura; esqueleto novo → estrutura nova (EST-NN).
2. **Conferir a mecânica no vídeo.** Se o vídeo veio em arquivo, tirar quadros do gancho (`ffmpeg -t 6 -vf "fps=2,scale=240:-1,tile=6x2" gancho.png`) e olhar antes de descrever. A mecânica visual de cada bloco faz parte da estrutura (ex.: no "vai fazer" entra a imagem falsa por cima; no "não vai fazer" ela aparece real). Nunca trocar a mecânica por outra ideia.
3. **Comparar o objetivo do produto original com o nosso.** Dizer em uma linha se é o mesmo objetivo. Se não for, a estrutura e a mecânica ficam; o conteúdo da imagem e da dor muda para o que o NOSSO produto resolve (ex.: barriga estufada não serve para creatina).
4. **Dividir em blocos.** Quando o objetivo da frase muda, o bloco muda; quando é o mesmo, fica junto (NICK §3.6). Anotar início e fim de cada bloco pelos tempos da transcrição.
5. **Rotular** com o vocabulário abaixo, em maiúsculas. Mais de um rótulo por bloco é normal: `[OFERTA + ESCASSEZ]`. Não inventar rótulo; se nenhum servir, dizer e perguntar ao dono.
6. **Traduzir** para PT-BR natural. Fala truncada ou sem sentido: `[transcrição incerta]`. Erro evidente de transcrição: corrigir e avisar (ex.: "weekly job" = "weekly jab", a injeção semanal).
7. **Distrinchar cada bloco** (no chat, curto, para celular):
   - **Tempo · rótulos** e a fala traduzida, entre aspas.
   - Uma linha de **por que funciona** (leitura nossa, sempre ligada ao método: [J-Sn], [J 3.n], NICK §n, EXT-n): pecado [J-S13], nível de consciência [J-S12] e tipo de gancho [J-S14] quando houver.
   - **🔧 o que é alterável** (os slots que o nosso produto preenche) e, se houver, a mecânica visual que fica fixa.
   - ⚠️ política, em uma linha, se houver.
8. **PARA PREENCHER:** a estrutura inteira com as informações trocadas por `[colchetes]` e as palavras de ligação mantidas, num bloco de código.
9. **Fixo × muda:** 4 a 6 linhas do que é a estrutura (ordem, onde o produto entra, que pergunta fica aberta e onde fecha, âncora de preço, tipo de CTA) [EXT-1, EXT-2, NICK §7.2].
10. **Números do formato (fato):** duração, em que segundo o produto entra, quantas linhas por bloco.
11. **⚠️ do original que não vem para o nosso:** uma linha.
12. **Ângulos possíveis · escolha 1:** 2 a 4 opções de persona (do PRODUTO) + pecado + nível + sonho + o gancho já adaptado, dizendo qual encaixa melhor na estrutura e por quê. Respeitar ângulos que o dono já descartou. Se o Nick deu uma dica para esse gancho, ela pesa na recomendação.
13. Perguntar o visual linha a linha: agora ou depois da copy.

##### Detalhamento visual (linha a linha), quando pedido
Com o vídeo em arquivo:
```
ffprobe -v error -show_entries format=duration -of csv=p=0 video.mp4
mkdir -p frames && ffmpeg -i video.mp4 -vf fps=2 frames/f_%04d.jpg
ffmpeg -i video.mp4 -vf "select='gt(scene,0.3)',showinfo" -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'
```
Ler (Read) os quadros do intervalo de cada linha da transcrição antes de descrever. Uma linha da tabela por linha da transcrição:

| Tempo | Fala (PT) | Plano | Ação / movimento | Interação | Elemento na tela | Corte |
|---|---|---|---|---|---|---|

- **Plano:** close, médio ou aberto; selfie ou tripé; cenário.
- **Ação / movimento:** gesto, expressão, para onde olha, se a câmera mexe.
- **Interação:** com o produto, um objeto, outra pessoa ou a câmera (aponta, mostra, pega, empurra, joga fora).
- **Elemento na tela:** headline, legenda, overlay, PiP, print, sticker, seta.
- **Corte:** sim ou não, e o tipo (seco, zoom, troca de cenário).
- Nunca descrever o que não viu. Sem vídeo: `[sem vídeo]`. Com print: só o que o print mostra.

##### Vocabulário de rótulos
| Rótulo | Playbook (NICK §3.6) | O que marca |
|---|---|---|
| GANCHO | — | A primeira frase, quando não é dor |
| DORES | Pain Points | A dor que a pessoa já vive |
| DORES → INGREDIENTE / PRODUTO / FORMA | Pain Points + Education | Dor ligada a uma solução na mesma frase |
| EXPLICAÇÃO | Education | Causa, mecanismo, "por que" |
| OBJEÇÃO | Objections | A dúvida que trava |
| QUEBRA DE OBJEÇÃO | Objections | A resposta à dúvida |
| PIOR(ES) ALTERNATIVA(S) | Worse Alternatives | O que ela faria sem o produto e é pior |
| JORNADA DO CONSUMIDOR | Customer Journey | Gasta, tenta, descobre |
| ANCORAGEM DE PREÇO | — | Preço alto de referência |
| ENTRADA DO PRODUTO | Product Introduction | 1ª vez do produto como solução |
| CARACTERÍSTICAS / ESPECIFICAÇÕES | Features | O que é ou tem |
| BENEFÍCIOS | Benefits | O ganho |
| CASOS DE USO | Use Cases | Onde entra na rotina |
| RODANDO A FACA | Twisting the Knife | A dor aprofundada |
| AUTORIDADE | Authority | Quem fala ou o dado que dá crédito |
| EXPERIÊNCIA PESSOAL | Personal Testimonial | "Eu tomo", "eu paguei" |
| PROVA SOCIAL | Social Proof | Avaliações, quantos compram |
| PROVA VISUAL | — | Uma imagem como argumento |
| TRANSFORMAÇÃO | Before & After | Antes × depois |
| OFERTA | — | Preço especial, kit, 2 por 1 |
| ESCASSEZ / URGÊNCIA | Scarcity + Urgency | Motivo para agir agora |
| CTA | — | A ação pedida |
| QUEBRA DE CENA · REAÇÃO | — | Fala de cena, sem argumento |
| FECHAMENTO + IDENTIFICAÇÃO | Relatability | Última fala que gera simpatia |

##### Quando o dono pedir para salvar
Arquivo `ESTRUTURAS/EST-NN-{NOME-CURTO}.md` (Write + SendUserFile, display attach; Projects project_write se ele pedir). Se a estrutura já foi usada num vídeo, anotar o vídeo e o resultado.
```
# EST-NN · "[molde da frase-chave]" · [nicho]
vN · data · nº de exemplos · salvar em ESTRUTURAS/ · fonte
> Para que serve · Fato · Leitura nossa · Não informado · Visual (feito ou pendente) · usada em (vídeo, resultado)

## 0. Ficha do formato   (em uma frase · quando usar · variantes · números · produto e persona originais · objetivo do original × o nosso)
## 1. Esqueleto mestre    (M1…Mn: trecho · visual · Faz · Psicologia · Ângulo · Escrita · Rótulos · FIXO × ALTERÁVEL · ⚠️) + blocos opcionais
## 2. PARA PREENCHER mestre
## 3. Variantes
## 4. Exemplos            (EX-NN: título · variante · duração · ESTRUTURA rotulada com tempos · o que muda · PARA PREENCHER se diferente · visual se pedido)
## 5. Modelar: o que fica fixo, o que muda (EXT-1, EXT-2, NICK §7.2)
## 6. ⚠️ Política
## 7. Encaixe no produto da vez
## 8. Vocabulário de rótulos
## 9. Pendências
## Apêndice · transcrições originais
```

##### Regras
- Fato e leitura sempre separados. Tempos, falas e quadros = fato; psicologia = leitura nossa.
- Não inventar dado de produto, número, view, venda, avaliação ou depoimento. O que não veio fica "não informado".
- Siga só o método da Jéssica; Nick e EXT entram onde o PROCESSO marca e onde o dono já usa (o Playbook de rótulos). Onde nada cobre: "o método não cobre isso" + opções; a decisão é do dono.
- Ingrediente, selo ou benefício que não está no rótulo do nosso produto nunca entra no encaixe (risco de "promoção de produto inconsistente").
- Risco de política: uma linha, sem sermão; a decisão é do dono.
- Português, direto, pensado para celular.

### Da fonte `dna-viral` · texto integral (linhas 6–fim)

#### DNA VIRAL — engenharia reversa de vídeo que vendeu

O objetivo nunca é copiar o vídeo. É **isolar a engenharia** que fez alguém comprar, de forma que ela sobreviva à troca de produto, de nicho, de idioma e de país.

**A distinção que governa tudo:** extrair **função psicológica**, não frase.
Função atravessa idioma e produto. Frase não atravessa nada.

Um DNA bem extraído responde a pergunta certa. Errado: *"o que ele falou aos 4 segundos?"* Certo: **"por que existe alguma coisa aos 4 segundos, e o que aconteceria se não existisse?"**

Ler `TEMPLATE.md` para o formato exato de saída.

---

#### ETAPA 0 — INSUMO E OVERVIEW

```
VÍDEO: {arquivo recebido? sim/não}
TRANSCRIÇÃO LITERAL: {colada? sim/não}
MÉTRICAS: {views · vendas · views por venda}
ORIGEM: {país · nicho · produto}
FORMATO APARENTE: {talking-head · hands-only · POV · b-roll · texto na tela}
DURAÇÃO · CORTES:
O QUE NÃO VOU CONSEGUIR EXTRAIR: {lista}
```

##### Sem estes, dizer o que se perde

| Falta | O que não sai |
|---|---|
| **Transcrição literal colada** | DNA verbal, DNA de copy, orçamento de palavras, cruzamento de fala com imagem. **Áudio não é processado — a transcrição tem que vir escrita.** |
| Vídeo (só a transcrição) | DNA visual, DNA de edição, timeline de overlays, enquadramentos |
| Métricas | a força do DNA. Um vídeo com 2M de views e 3 vendas ensina coisa diferente de um com 200 mil views e 400 vendas |

Nunca inventar o que não foi observado. Bloco não observável fica marcado `[NÃO OBSERVÁVEL]`.

Só avançar após confirmação.

---

#### ETAPA 1 — MAPEAR OS BLOCOS NARRATIVOS

Antes de ir ao detalhe, dividir o vídeo em blocos por **função**, não por corte de câmera.

Funções possíveis: gancho · contexto · problema · mecanismo · demonstração · prova · objeção quebrada · transformação · CTA.

Registrar a faixa de tempo de cada bloco e **quanto por cento do vídeo cada função ocupa**. Essa proporção é metade do DNA.

Um vídeo que gasta 60% do tempo na dor e 15% no produto tem uma engenharia completamente diferente de um que gasta 20% e 50% — mesmo com a mesma estrutura de blocos.

---

#### ETAPA 2 — TIMELINE SEGUNDO A SEGUNDO

Para cada bloco, treze campos. Nenhum pulado. Campo não observável fica marcado, não omitido.

```
TEMPO            {início}–{fim}
FALA             {literal, da transcrição}
VISUAL           {o que está em quadro}
AÇÃO DE MÃO      {o que a mão faz, com que velocidade, entrando de onde}
ENQUADRAMENTO    {close · médio · plano aberto · altura · ângulo}
CÂMERA           {estática · drift · push-in · orbit · handheld}
FUNDO            {ambiente, profundidade, o que está desfocado}
EXPRESSÃO        {se há rosto}
TEXTO NA TELA    {palavra exata · posição · estilo}
POP-UP / OVERLAY {o que é · entra em · sai em}
SOM              {voz · ambiente · efeito · música}
OBJETIVO PSICOLÓGICO   {que efeito isso produz na cabeça de quem assiste}
FUNÇÃO NA VENDA  {o que este bloco faz avançar na decisão de compra}
```

##### A grade de observação — o que quase todo mundo perde

- **O segundo exato em que o produto aparece pela primeira vez.** É a métrica mais reveladora do vídeo inteiro. Aparece em 0s? em 12s? Isso define se é vídeo de vendedor ou de amiga.
- **Sincronismo.** Todo overlay entra no segundo exato de uma palavra-chave. Anotar qual palavra dispara cada elemento. Isso não é acaso — é o que faz a informação grudar.
- **O que está sendo negado.** Muitos ganchos mostram o produto e **negam** na fala ("já tô devolvendo o meu"). O visual e a copy trabalham em direções opostas de propósito.
- **Onde a fala respira.** Pausa antes de frase importante é técnica, não descuido.
- **Densidade verbal.** Palavras ÷ segundos. É o que permite calcular o orçamento de copy da modelagem depois.
- **Quantos cortes.** Vídeo de take único e vídeo de 14 cortes exigem produções completamente diferentes.
- **O que a mão faz nas transições.** Mão em movimento no corte esconde o corte. Mão parada o denuncia.

---

#### ETAPA 3 — OS SETE DNAs

Consolidar a timeline em sete leituras. Cada uma tem que ser **acionável** — alguém que leia só ela consegue reproduzir aquela camada.

| DNA | O que descreve |
|---|---|
| **VISUAL** | cenário · luz (fonte, direção, dureza, temperatura) · grade de cor · profundidade · movimento de câmera · o que nunca muda de quadro |
| **VERBAL** | tom · ritmo · densidade (palavras/segundo) · vocabulário · pessoa gramatical · o que ela nunca diz |
| **EDIÇÃO** | nº de cortes · onde cortam · sincronismo de overlay · velocidade · tipografia |
| **COPY** | a progressão de ideias, em fórmula abstrata: `{estado} → {contradição} → {mecanismo} → {prova} → {convite}` |
| **VENDA** | os mecanismos de persuasão acionados, **em ordem**, e o que cada um resolve |
| **RETENÇÃO** | o que segura em cada trecho, e onde estão os pontos de risco de saída |
| **CTA** | a estrutura da virada: como sai da narrativa e entra no convite sem parecer vendedor |

---

#### ETAPA 4 — CRUZAMENTO COM AS REGRAS DE VENDA

Para cada bloco, nomear a regra que ele executa e **por que funciona ali especificamente**.

Formato:
```
BLOCO {n} · {tempo}
Executa: {regra nominal}
Por que funciona aqui: {uma frase}
O que aconteceria sem este bloco: {uma frase}
```

A terceira linha é a mais importante e a mais pulada. É ela que separa bloco essencial de bloco decorativo — e portanto o que é obrigatório manter na modelagem do que é opcional.

Regras recorrentes a procurar: abertura que não vende · identificação antes da solução · defeito admitido antes do benefício · objeção antecipada e concordada · prova social específica · ancoragem · contraste · loop aberto · pergunta socrática · separação de grupo · rótulo emocional · linguagem de pressuposto · convite em vez de pressão · pico e final.

---

#### ETAPA 5 — ESQUELETO REPLICÁVEL

Reescrever o vídeo inteiro **sem uma única palavra do original**. Só funções, tempos e o que é fixo ou variável.

```
PASSO {n} · {faixa de tempo} · {% do vídeo}
Acontece: {função, em abstrato}
FIXO (é DNA):      {o que não pode mudar sem quebrar a engenharia}
VARIÁVEL (é produto): {o que muda de produto para produto}
Pré-requisito:     {o que o produto precisa ter para este passo funcionar}
```

**Teste do esqueleto:** alguém que nunca viu o vídeo original consegue produzir um novo a partir só disto? Se não, está abstrato demais ou concreto demais.

---

#### ETAPA 6 — MANTER × TROCAR

Tabela final, elemento por elemento. Três colunas: `elemento · manter porque é DNA · trocar porque é produto`.

**O erro clássico é trocar de menos.** Manter a frase original traduzida é plágio de superfície e não vende — porque a frase servia à dor daquele produto, naquele país.

**O erro oposto é trocar de mais.** Trocar o timing, a ordem das funções ou a proporção entre elas destrói exatamente o que fez o vídeo funcionar.

Regra: **troca tudo que é identidade, mantém tudo que é engenharia.**

---

#### ETAPA 7 — PRÉ-REQUISITOS E FECHAMENTO

```
PRÉ-REQUISITOS DO PRODUTO
{o que o produto precisa ter para este DNA funcionar}
Exemplos: embalagem lacrada · antes e depois visível · 3+ itens · textura demonstrável ·
aplicação que cabe em 3s · rótulo legível de perto

NÃO USAR ESTE DNA QUANDO
{condições que quebram}

DIFICULDADE DE PRODUÇÃO
Gerações necessárias: · Imagens de referência: · Avatar necessário? · Cortes:

PRÓXIMO PASSO
Este DNA está pronto para a skill de Blueprint com qual produto?
```

---

#### REGRAS

1. **Extrair função, não frase.** Toda anotação responde "por que existe", não só "o que é".
2. **Nunca inventar o que não foi observado.** `[NÃO OBSERVÁVEL]` é resposta válida; adivinhar não é.
3. **Nunca transcrever de ouvido.** Sem transcrição colada, o DNA verbal não é produzido — e isso é declarado, não contornado.
4. **Proporção é DNA.** Quanto por cento do vídeo em cada função importa tanto quanto a ordem.
5. **Todo overlay tem um segundo e uma palavra.** Sincronismo não é detalhe de edição, é mecanismo de retenção.
6. **O esqueleto é a entrega real.** Timeline detalhada sem esqueleto abstraído é descrição, não DNA.
7. Sem introdução, sem elogio ao pedido, sem recapitular o que foi pedido.

### Da fonte `dna-viral · TEMPLATE.md` · formato de saída original (o vigente é o MODELOS/DNA.md, em exemplos/) (linhas 1–fim)

#### TEMPLATE — D-{NICHO}-{FORMATO}-{NN}.md

Formato exato de saída. Nenhuma seção omitida. Campo não observado fica `[NÃO OBSERVÁVEL]`.

```markdown
# D-{NICHO}-{FORMATO}-{NN}
Extraído: {data} · Fonte: {link ou arquivo}

## 0. FICHA
Duração · Resolução · FPS · Cortes de câmera:
País · Nicho · Produto original:
Formato: {talking-head · hands-only · POV · b-roll · texto na tela}
Métricas: {views} · {vendas} · **{views por venda}**
Avatar aparece? · Fala? · Música?
**Produto aparece pela primeira vez em: {segundo}**
Densidade verbal: {palavras ÷ segundos} palavras/s

## 1. ESTRUTURA GERAL
| Bloco | Tempo | Função | % do vídeo |
|---|---|---|---|

Proporção: {x}% dor · {y}% mecanismo · {z}% prova · {w}% CTA

## 2. TIMELINE DETALHADA

### BLOCO {n} — {função} — {início}–{fim}
| Campo | Conteúdo |
|---|---|
| Fala (literal) | |
| Visual | |
| Ação de mão | |
| Enquadramento | |
| Câmera | |
| Fundo | |
| Expressão | |
| Texto na tela | |
| Pop-up / overlay | entra {t} · sai {t} |
| Som | |
| **Objetivo psicológico** | |
| **Função na venda** | |

{repetir para cada bloco}

## 3. TABELA DE OVERLAYS
| # | Elemento | Entra | Sai | Duração | **Palavra que dispara** | Função |
|---|---|---|---|---|---|---|

## 4. OS SETE DNAs

**DNA VISUAL**
Cenário · luz (fonte, direção, dureza, temperatura) · grade de cor · profundidade ·
movimento de câmera · o que nunca muda de quadro:

**DNA VERBAL**
Tom · ritmo · densidade · vocabulário · pessoa gramatical · o que ela nunca diz:

**DNA DE EDIÇÃO**
Cortes (quantos, onde) · sincronismo · velocidade · tipografia:

**DNA DE COPY**
Fórmula abstrata: `{...} → {...} → {...} → {...}`

**DNA DE VENDA**
Mecanismos acionados, em ordem, e o que cada um resolve:
1.
2.

**DNA DE RETENÇÃO**
O que segura em cada trecho · pontos de risco de saída:

**DNA DE CTA**
Como sai da narrativa e entra no convite:

## 5. CRUZAMENTO COM AS REGRAS DE VENDA
### BLOCO {n} · {tempo}
Executa:
Por que funciona aqui:
**O que aconteceria sem este bloco:**

## 6. ESQUELETO REPLICÁVEL

### PASSO {n} · {tempo} · {%}
Acontece:
FIXO (é DNA):
VARIÁVEL (é produto):
Pré-requisito:

## 7. MANTER × TROCAR
| Elemento | Manter — é DNA | Trocar — é produto |
|---|---|---|
| Timing e proporção | | |
| Ordem das funções | | |
| Movimento de câmera | | |
| Tipo de demonstração | | |
| Estrutura do gancho | | |
| Palavras e frases | | |
| Dor específica | | |
| Produto e rótulo | | |
| Personagem e cenário | | |

## 8. PRÉ-REQUISITOS DO PRODUTO
Para este DNA funcionar, o produto precisa ter:
**Não usar este DNA quando:**

## 9. DIFICULDADE DE PRODUÇÃO
Gerações necessárias: · Imagens de referência: · Avatar? · Cortes:
Tempo estimado de produção:

## 10. ONDE JÁ RODOU
| Produto | Data | Combinação | Views | Vendas | Aprendizado |
|---|---|---|---|---|---|
```

### Da fonte `esteira-ugc-avatar` · modelo 0 · decupar o viral no Gemini (linhas 230–243)

###### 0 · Decupar o viral (Gemini, anexar o vídeo)
```
Analise este vídeo segundo a segundo. Vou recriar os mesmos movimentos com outra pessoa e outro produto usando motion control, em trechos de 6, 8 ou 10 segundos. Descreva só o que se vê e se ouve; não invente.

1. Ficha: duração exata, número de cortes, câmera (na mão ou apoiada, altura, tremor), cenário, pessoa (idade aparente, roupa, acessórios), produto (formato, cor, tamanho na mão), idioma e média de palavras por segundo.
2. Transcrição completa com início e fim de cada frase, no idioma original e traduzida para o português.
3. Linha do tempo, de 1 em 1 segundo: o que as mãos, o rosto, o olhar e o celular fazem (levanta, abaixa, apoia, reenquadra) e o que aparece no quadro (colo, bolsa, painel). Marque quando o produto entra, é aberto, aplicado, mostrado e sai.
4. Estrutura: gancho, corpo e CTA, com o tempo e a função de venda de cada parte.
5. Edição: todo texto na tela, overlay, print, sticker, tela cheia e música, com início, fim e o que mostram.
6. Cortes: divida o vídeo INTEIRO em trechos de 6, 8 ou 10 s (de preferência 8 a 10), em segundos inteiros, sem sobra, cada um terminando numa pausa natural de fala ou gesto. Para cada trecho: tempo, ação principal, se o produto aparece e o risco para IA (mãos, dedos, objetos, rótulo perto da lente).
7. Dois quadros para imagem-base, com o segundo exato: o primeiro quadro limpo, sem produto; e o melhor quadro com o produto na mão perto do rosto.
8. Por que este vídeo prende e vende, em até 5 linhas.
```

### Da fonte `01-BASE/NICK_METODO.md` · §3.6 Playbook (16 labels) e §3.7 retenção (linhas 237–313)

###### 3.6 Playbook · checklist de copywriting [PLAYBOOK]

**Objetivo:** ler qualquer roteiro com as 16 labels, rotular cada trecho e entender por que aquele vídeo vende. Não copiar o vídeo pela superfície: copiar a **lógica de marketing** por trás. Rotulando várias vezes, você deixa de copiar fala e passa a copiar estrutura de venda.

**As 16 labels**

| # | Label | O que é | Como reconhecer no roteiro |
|---|---|---|---|
| 1 | Features · Especificações | O que o produto é, tem ou faz | Ingredientes, composição, tecnologia, formato, material, modo de uso |
| 2 | Benefits · Benefícios | O ganho prático ou emocional | "melhora", "resolve", "ajuda", "deixa", "faz você sentir" |
| 3 | Use Cases · Casos de uso | Situações concretas em que o produto entra na rotina | Academia, trabalho, sono, viagem, ciclo, maquiagem, estudo |
| 4 | Pain Points · Dores | A dor exata que o público já vive | Incômodo, problema recorrente, vergonha, frustração, sintoma |
| 5 | Twisting the Knife · Rodando a faca | A dor aprofundada, mais visceral | Confronto, exagero emocional, peso de não agir, linguagem forte |
| 6 | Objections · Objeções | Barreiras mentais que travam a compra | "será que funciona?", "é caro?", "é pra mim?", "já tentei tudo" |
| 7 | Worse Alternatives · Piores alternativas | O que o público tenta hoje e é pior | Hacks, paliativos, produto errado, solução que não resolve |
| 8 | Personal Testimonial · Experiência pessoal | Experiência em 1ª pessoa | "eu usei", "comigo foi assim", "nunca mais fiquei sem" |
| 9 | Social Proof · Prova social | Outras pessoas usam e aprovam | Reviews, número de compradores, comentários, antes e depois de terceiros |
| 10 | Authority · Autoridade | Sinal de autoridade ou credibilidade | Profissão, expertise, contexto técnico, imagem de especialista |
| 11 | Relatability / Liking · Identificação | Identificação e simpatia | Tom humano, mesma linguagem, mesma vergonha, mesma rotina |
| 12 | Customer Journey · Jornada | Descoberta → dúvida → teste → aprovação | "antes eu sofria, fiquei cética, testei, gostei, continuo usando" |
| 13 | Education / Explanation · Explicação | O que é, por que e como funciona | Tradução do técnico para o leigo |
| 14 | Product Introduction · Entrada do produto | Quando o produto entra no roteiro | A primeira vez que ele é citado como solução |
| 15 | Before & After / Desired Transformation · Transformação | Estado atual × estado desejado | Antes × depois, insegurança × confiança, problema × transformação |
| 16 | Scarcity + Urgency · Escassez e urgência | Motivo para agir agora | Poucas unidades, promoção, janela curta, reposição limitada |

**Como dissecar um vídeo**
1. **Transcrever** o vídeo inteiro antes de analisar.
2. **Separar em blocos ou frases.** Duas ou três frases que fazem o mesmo trabalho ficam no mesmo bloco.
3. **Rotular só com as 16 labels.** Sem inventar categoria nova.
4. **Aceitar mais de uma label no mesmo trecho** (ex.: Pain Points + Relatability).
5. **Reparar na ordem.** Dor, objeção, prova, explicação, transformação e urgência têm posições estratégicas.
6. **Reaplicar a lógica:** não copiar as frases, copiar a **arquitetura** do roteiro.

**Regras de ouro**
- Nem todo vídeo tem as 16, mas vídeo forte costuma acumular várias.
- Uma frase pode carregar mais de uma label.
- Quando o objetivo muda, o bloco muda. Quando é o mesmo, fica junto.
- A melhor análise é a precisa, sem inventar moda fora do checklist.

**Template de breakdown**
```
[MACRO BLOCO 1 — ABERTURA]
Frase 1. (Pain Points)
Frase 2. (Relatability / Liking)
[MACRO BLOCO 2 — DOR + APROFUNDAMENTO]
Frase 3. (Pain Points + Twisting the Knife)
Frase 4. (Objections)
[MACRO BLOCO 3 — SOLUÇÃO]
Frase 5. (Product Introduction + Features)
Frase 6. (Benefits + Education / Explanation)
[MACRO BLOCO 4 — PROVA + FECHAMENTO]
Frase 7. (Personal Testimonial + Before & After)
Frase 8. (Scarcity + Urgency)
```

**Exemplo do playbook** (vídeo gringo de probiótico feminino; resumo de cada bloco)

| Macro bloco | O que a fala faz | Labels |
|---|---|---|
| 1 · Dor + identificação | "Amiga, se você já sentiu aquele cheiro vindo de você de legging… senta aqui, a gente vai ter essa conversa" | Pain Points · Relatability |
| 2 · Negação + aprofundamento | As desculpas que a gente se dá (dia de lavar roupa, suor, tecido) → "você só está enganando a si mesma" | Objections + Relatability → Twisting the Knife + Pain Points |
| 3 · Contexto do problema | Dia longo de trabalho, o ciclo: vira um caos | Pain Points + Use Cases + Relatability |
| 4 · Experiência + piores alternativas | O "método cheirar e rezar", spray, sabonetes, lenços, água com limão: "não faz nada" | Personal Testimonial + Worse Alternatives + Education + Objections + Twisting the Knife |
| 5 · Entrada do produto | Viu no For You um probiótico diário feminino com prebióticos, tudo em um | Product Introduction + Features + Education |
| 6 · Ceticismo + jornada | Revirou os olhos, comprou mesmo assim, cansada de lidar com aquilo | Objections + Customer Journey + Personal Testimonial + Pain Points |
| 7 · Resultado | 3 meses depois: fresca, limpa, confiante de novo | Customer Journey + Before & After + Benefits + Personal Testimonial |
| 8 · Atrito final + fechamento | Gosto bom, barato, resolve · "só tenho duas sobrando" · "eu sei que é constrangedor, mas a gente precisa resolver" · "não perde a promoção" | Features + Benefits + Objections · Scarcity · Relatability + Twisting the Knife · Scarcity + Objections |

**Leitura do exemplo:** começa na dor, derruba as desculpas, mostra as alternativas piores, introduz a solução, passa pelo ceticismo, entrega a transformação e fecha com urgência. O checklist serve para deixar essa arquitetura visível.

###### 3.7 Retenção pela estrutura [T-19/10 · era parte do EXT-3]
- A retenção vem da **execução e da estrutura**.
- **Abrir uma curiosidade no gancho**, trazer no meio as informações que geram desejo e **só fechar a curiosidade no fim**.
- Se a curiosidade é respondida logo depois do gancho, a pessoa não tem motivo para ficar até o final.

---


### Complemento

### Da fonte `modelagem-ugc-ia` · Etapa 2 · desmontagem das referências A, B e C (linhas 41–46)

##### Etapa 2 · Desmontagem (Claude)
1. **Folha de quadros** de A, B e C (1 quadro/s, com o segundo marcado) e os **prints** de cada momento visual do gancho de A, enviados como arquivo.
2. **Estrutura do B em etapas numeradas (E1, E2…)**, cada uma com o **intuito**: o que faz, por que funciona, que psicologia ativa (curiosidade, contradição, prova, sensorial, autoridade, privilégio…).
3. **Gancho de A em cenas (G1, G2…)**, cada uma com o print e o que a mão, o olhar e o objeto fazem.
4. **Edição de cada referência:** onde entra imagem, insert, close, PiP, texto, para sugerir na montagem.

## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-viral-cheddar.md` | O que chega: arquivo, transcrição, métricas | O insumo mínimo |
| `exemplos/GERA-DNA-E02-COZINHA-DESCONFIADA.md` | O DNA da E02 no formato novo, com os dados reais do viral do cheddar | O padrão da entrega |
| `exemplos/GERA-DNA-E01-SALA-NAOEPREGUICA.md` | O que temos da E01 (viral Toplux) e o que falta extrair | Uma estrutura ainda incompleta, marcada como tal |
