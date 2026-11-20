# SKILL `takes-blocos-prints` · Didi · CORTE (funcionário da Modelagem)

v1 · 14/11/2026 · origem: as regras de tempo e de take da `modelagem-ugc-ia` (Etapa 4), da `cenas-ugc-ia` (regras e Passo 1), da `esteira-ugc-avatar` (§1 itens 3 e 4, §2 Material), as etapas 6 e 7 da `modelar-viral`, o detalhamento visual da `esqueleto-viral` e o prompt de separação em cenas do Nick (§2.4). Todos na seção 6.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `takes-blocos-prints` |
| Agente | Didi · CORTE (funcionário da Modelagem, responde ao Garrincha) |
| Gatilho | ROTEIRO aprovado no G2 (corpo e ganchos) |
| Não usar quando | A copy não foi aprovada (nunca cortar antes do G2) |
| Ferramentas | ffmpeg · ffprobe · leitura de imagem (para escolher o segundo do print) |
| Escreve em | `05-VIDEOS/{MATRIZ}/{ÂNGULO}/TAKES.md` · `05-VIDEOS/{MATRIZ}/prints/` · `05-VIDEOS/{MATRIZ}/blocos/` |

## 2. Recebe
- `ROTEIRO.md` do ângulo (copy aprovada + ganchos aprovados).
- `04-ESTRUTURAS/E…/viral.mp4`, `DNA.md` (visual linha a linha, pop-ups, candidatos a motion).
- Exemplo: `exemplos/RECEBE-roteiro-e-viral.md`.

## 3. Lê antes
`DNA.md` §2 (visual linha a linha), §3 (pop-ups), §4b (costura), §5 (motion), §9 (modo de produção) · `01-BASE/PROMPTS-FLOW.md` §3 (tempo) e §4 (regras do motion) · os `prints/` e `blocos/` que já existem na matriz e em outras matrizes da mesma conta e estrutura.

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| Tabela de takes do corpo: T · s · palavras · fala literal · trecho do viral · print · bloco (se motion) · gesto preso a 1 palavra · pop-up | `{ÂNGULO}/TAKES.md` | Ronaldo |
| Takes de gancho: `T01-G2…` (mesma duração do T01) e `T00-G{n}` (empilhado) | `{ÂNGULO}/TAKES.md` | Ronaldo |
| `PRINT-{TT}.jpg` (quadro do viral no segundo de cada take) | `{MATRIZ}/prints/` | Ronaldo e Flow |
| `BLOCO-{TT}.mp4` (6, 8 ou 10 s, sem áudio) para cada take com motion | `{MATRIZ}/blocos/` | Ronaldo e Flow |
| Folha de quadros do viral (1 por segundo, com o segundo marcado) | `{MATRIZ}/prints/folha.png` | Ronaldo, Romário |
Exemplos: `exemplos/GERA-TAKES-MG2.md` (16 takes por print + T1 motion) · `exemplos/GERA-TAKES-MG1.md` (16 takes de base única).

## 5. Regras da máquina (valem por cima dos textos originais)
1. **A copy não muda.** Divide, conta e avisa; nunca reescreve (regra 2 do prompt de separação do Nick). Fala que não cabe: avisa o Ronaldinho, que pergunta ao dono.
2. **Tempo do take:** ~3 palavras faladas por segundo (número e sigla por extenso contam como falados). Duração = a menor opção do Flow (4, 6, 8 ou 10 s) que deixa ~0,3 a 0,7 s de sobra; a fala termina ~0,5 s antes do fim. Referência: 6 s ≈ 17 palavras · 8 s ≈ 22 · 10 s ≈ 28.
3. **Motion:** gancho com 18 a 20 palavras em 8 s; corpo até (duração − 1) × 2,3 palavras (6 s → 11 · 8 s → 16 · 10 s → 20).
4. **Frase só se corta numa pausa natural.** Um gesto por take, preso a uma palavra. Mão ocupada faz uma ação só. Fala que aponta para duas coisas = dois takes.
5. **Prints e blocos são da ESTRUTURA**, não do ângulo: ficam em `{MATRIZ}/prints/` e `{MATRIZ}/blocos/` e servem a todos os ângulos da matriz (e a outra matriz da mesma conta e estrutura, ex.: `C01-MG-E02` → `C01-CR-E02`). Antes de cortar, procurar o que já existe.
6. **Bloco de motion nunca começa** com objeto colado na lente, close extremo ou rosto do viral em tela cheia: começar 0,5 a 1 s depois, no plano médio. Bloco com menos de 6 s: duplicar e inverter a cópia até 6 s.
7. **Takes de gancho:** cada gancho aprovado substitui só o trecho até a costura, com a **mesma duração**, o **mesmo print** e o **mesmo bloco** do original (`T01-G2`). Gancho empilhado (ferramenta 5 do Nick) = take extra antes (`T00-G{n}`), com o print do T01. O Romário monta pela ordem das chaves (0, 1, 2…). **Costura de produção = fronteira de take:** confira se o fim do T01 coincide com o ponto de costura do DNA e se cada gancho emenda na 1ª fala do T02 (no MG2: "Não, ela só repôs…"). Não emendou: avise o Garrincha antes de cortar (ou o gancho muda, ou a versão troca T01 e T02, ~12 créditos a mais).
8. **Nomes:** `PRINT-{TT}.jpg`, `BLOCO-{TT}.mp4`, `T{TT}`, `T{TT}-G{n}`, `T00-G{n}`. Nunca "G1, C1, I1" (nome antigo da `modelar-viral`).
9. Conferir no fim: soma das durações ≈ duração do viral (o MG2 deu 128 s brutos → ~1:45 contra 1:46 do viral); nenhuma frase cortada fora de pausa; nenhum take com dois gestos.

## 6. Procedimento integral
### Da fonte `modelagem-ugc-ia` · Etapa 4 · takes (linhas 56–67)

##### Etapa 4 · Takes
- **Tempo** 🧪 (dono, 21/10): contar as palavras **faladas** (sigla e número por extenso: "GHK-Cu" = 4, "47" = 3). Tempo de fala ≈ palavras ÷ 3. Duração = a menor opção do Flow (4/6/8/10 s) que deixa **~0,3 a 0,7 s** de sobra no fim.
  - Sobra maior que ~0,8 s: completar com uma palavra ou expressão natural de ligação (o dono aprova) ou dividir/encurtar o take. Sobra grande faz o Flow esticar a fala, pausar e repetir palavra (3 de 17 takes no E7).
  - Falta tempo: dividir o take numa pausa natural.
  - Take recheado de fala, conversacional; nunca tagarela, nunca palavra solta.
- **Um gesto por take**, ligado a uma palavra. Fala que aponta para duas coisas ("assim… assim") = dois takes, cada um com a imagem já apontando para o objeto certo.
- **Mão ocupada = uma ação só** (segurar, pingar, mostrar). Pingar e esfregar no mesmo take fez o conta-gotas sumir.
- Palavra que o modelo tende a pular (estrangeira, sensível): marcar para o prompt ("She clearly says the word X").
- Corte entre takes em pausa natural da frase.

Tabela: `T | s · palavras | fala | imagem | produto | gesto`.

### Da fonte `cenas-ugc-ia` · Regras e Passo 1 · plano visual (linhas 20–46)

##### Regras
- **Não reescrever a fala.** A copy é do dono. Só checar e avisar, em 1 linha cada:
  1. **Tempo:** mapa 1–14 palavras = 4 s · 15–20 = 6 s · 21–26 = 8 s · 27–30 = 10 s. Se a duração não bate com as palavras, avisar.
  2. **Frase cortada entre takes:** avisar.
  3. **Linha vermelha do produto:** o trecho e a troca sugerida. A decisão é do dono.
- **Um take = um momento visual.** Momento novo (mostrar o produto, aplicar, trocar de lugar, trazer um objeto, close no rosto) pede imagem nova. Se não muda nada, reusa a imagem do take anterior.
- **A imagem é a única fonte do que aparece:** avatar, roupa, lugar e produto. Do print vem só o enquadramento.
- **Produto:** formato, cores e letras só da imagem do FRASCO; rótulo legível, nunca espelhado, nunca flutuando.
- **Prompts sempre completos**, nunca "cole este pedaço". Em inglês, com a fala em português.
- **Na fala vai o tom** de cada trecho; a ação fica numa linha à parte, coerente com a imagem.
- **Todo prompt de vídeo diz:** "She never repeats any line or word." e "She never freezes." Sobra de tempo no fim do clipe vira repetição ou gente parada.
- Imagens no prompt: "Image 1, Image 2, Image 3", na ordem do anexo.

##### Passo 1 · Plano visual
Tabela com uma linha por take:

| Take | s | Palavras | Fala (início) | Ação | Produto | Imagem |
|---|---|---|---|---|---|---|
| 1 | 4 | 12 | "Pare de…" | fala apontando para a lente | não | IMG-01 (nova) |
| 2 | 4 | 10 | "Não é…" | fala, mão aberta | não | IMG-01 (repete) |

**Prints:** se o dono mandar o vídeo de referência, gerar a folha de quadros (1 por segundo) e escolher o segundo de cada print:
```
ffmpeg -i ref.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 folha.png
```
Sem vídeo de referência: descrever o enquadramento no prompt e não anexar a Image 2.

### Da fonte `esteira-ugc-avatar` · §1 itens 3 e 4 · blocos e orçamento por take (linhas 80–96)

**3. Blocos:**
- Dividir o viral em blocos de 6, 8 ou 10 s que cobrem o viral inteiro.
- Cortar perto de jump cut e de troca de cenário.
- Anotar o segundo de cada gesto: aponta, leva à lente, mão no rosto.

**4. Orçamento por take:**
- **Corpo:** palavras ≤ (duração − 1) × 2,3. Na prática: 6 s → 11 · 8 s → 16 · 10 s → 20.
- **Gancho:** até ~2,8 palavras/s, com voz enérgica 🧪.
  - 6 s → até 15 palavras, fala até 5,4 s.
  - 8 s → até 20 palavras, fala até 7,3 s.
  - Gancho com 11 palavras em 6 s saiu lento e sem graça.
- **Sempre:**
  - Cada take fecha em frase inteira.
  - A palavra-chave cai no gesto.
  - A fala termina antes do fim do clipe.
  - Se gaguejar, tirar palavras e usar o ritmo calmo.

### Da fonte `esteira-ugc-avatar` · §2 · material (prints e blocos) (linhas 128–142)

##### 2. Material

**Prints do viral:**
- 1º quadro do T1.
- 1 por cenário novo.
- 1 com o produto na mão.
- O 1º quadro de qualquer bloco que comece muito diferente da base (close, outro ângulo).

**Blocos sem áudio** (projeto 9:16 no CapCut):
- Montar a tabela: bloco · trecho do viral · duração no Flow · base · anexos.
- **Nunca começar um bloco com** objeto colado na lente, close extremo ou rosto do viral em tela cheia. Começar 0,5 a 1 s depois, já no plano médio. Se começar assim, o Flow copia o viral nesse primeiro segundo: rosto, cabelo, frasco sem rótulo.
- **Bloco com menos de 6 s:** duplicar o clipe e inverter a cópia até dar 6 s.

**Imagens fixas:** AVATAR (rosto) · FICHA · FRASCO · esqueleto da esteira.

### Da fonte `modelar-viral` · Etapas 6 e 7 · visual, takes e prompts (linhas 58–72)

##### Etapa 6 · Visual (o dono escolhe as referências)
- O dono manda o(s) vídeo(s) e diz o que pegar de cada um: "gancho deste", "corpo deste", "este trecho entra no meio". Pode ser o próprio viral.
- O Claude devolve: folha de quadros de cada referência · **prints** de cada momento visual escolhido, enviados como arquivo e nomeados `G1, C1, I1…` com o segundo · mapa visual (que print cobre que etapa da copy) · a edição de cada referência (texto, insert, close, PiP).
- **Formato** (conferir e registrar no `FORMATOS.md`):
  - UGC: foto padrão da avatar + fundo padrão; cada print vira imagem trocando só a pessoa e o fundo (PRODUCAO §4.3).
  - Vários takes (cenas e cortes variados): uma imagem por cena, editando a base (PRODUCAO §4.2).
  - Outro: descrever e confirmar com o dono.

##### Etapa 7 · Takes e prompts
- Dividir a copy aprovada em takes de **4, 6, 8 ou 10 s** (Omni Flash) pela regra de tempo (PRODUCAO §3.1: palavras faladas ÷ 3; a fala termina ~0,5 s antes do fim). Um gesto por take; mão ocupada = uma ação; frase só se corta em pausa natural.
- Tabela: `T | s · palavras | fala | imagem (print) | produto | gesto`.
- Prompts de imagem (PRODUCAO §4.1 a 4.3) e de vídeo (§4.4; tom de gancho no gancho), já preenchidos, um bloco por take, prontos para colar.
- Créditos estimados (PRODUCAO §5).
- Salvar `ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`.

### Da fonte `esqueleto-viral` · detalhamento visual linha a linha (linhas 48–66)

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

### Da fonte `modelagem-ugc-ia` · folha de quadros (linhas 165–169)

**Folha de quadros** (prints com o segundo marcado):
```
ffmpeg -nostdin -i ref.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 folha.png
ffmpeg -nostdin -ss 2.6 -i ref.mp4 -frames:v 1 -q:v 2 P2.jpg
```

### Da fonte `01-BASE/NICK_METODO.md` · §2.4 · prompt de separação da copy em cenas (linhas 89–121)

**Prompts originais dele**

Separação da copy em cenas:
```
Você é um segmentador de roteiro de vídeo. Vou colar uma copy. Sua ÚNICA função é dividir ela em cenas sequenciais para produção. Siga estas regras à risca:

1. RESPEITE MINHA DIVISÃO. Se eu já colar a copy dividida em blocos (separados por linha em branco ou por rótulos), mantenha EXATAMENTE essas divisões. NÃO reagrupe, NÃO redivida e NÃO junte dois blocos meus num só. Você só valida e rotula o que eu já separei. Só crie divisões do zero se eu colar a copy como texto corrido, sem nenhuma divisão.

2. NUNCA reescreva, reformule, traduza, corrija, adicione ou remova nada. Preserve minha escrita exata: palavras, pontuação, maiúsculas e ordem. Você SÓ divide/rotula — nunca edita.

3. Para cada cena, conte as palavras e atribua a duração por este mapa de ritmo de fala:
   - ~12 palavras → 4s
   - ~18 palavras → 6s
   - ~24 palavras → 8s (alvo ideal)
   - ~30 palavras → 10s
   Limiares exatos: 1–14 palavras = 4s | 15–20 = 6s | 21–26 = 8s | 27–30 = 10s.

4. ÚNICA exceção à regra 1: se um bloco MEU passar de 30 palavras, aí sim quebre SÓ esse bloco no ponto ou oração mais próximo, criando duas cenas. Nunca corte no meio de uma frase. Avise com um "(bloco quebrado por exceder 30w)" nessa cena.

5. Se eu colar texto corrido (sem divisão): aí você agrupa, mirando ~24 palavras por cena (faixa 18–30), sempre terminando em pausa natural (ponto ou quebra limpa de oração), sem encher linguiça.

6. Devolva SÓ o resultado dentro de um bloco de código, nada mais. Rotule cada cena assim:

CENA 1 — 22w / 8s
[texto exato]

CENA 2 — 12w / 6s
[texto exato]

Aqui está a copy:
<<COLE SUA COPY AQUI>>
```

### Da fonte `01-BASE/PROMPTS-FLOW.md (vigente, 12/11)` · §3 · tempo de cada take (linhas 281–285)

##### 3. Vídeo a partir de imagem (Omni · 9:16 · duração do take: 4, 6, 8 ou 10 s)

**Tempo de cada take (PRODUCAO §3.1):** ~3 palavras por segundo. Duração = palavras ÷ 3, arredondando para cima em 4, 6, 8 ou 10 s, e a fala termina ~0,5 s antes do fim. Exemplo: 6 s → até ~17 palavras · 8 s → ~22 · 10 s → ~28. Frase só se corta entre takes numa pausa natural.
**Créditos (Omni Flash 720p):** 4 s = 7 · 6 s = 10 · 8 s = 12 · 10 s = 15.

### Da fonte `01-BASE/PROMPTS-FLOW.md (vigente, 12/11)` · §4 · regras do motion (linhas 361–370)

##### 4. Motion control (Video 1 = BLOCO do viral)

**Regras do motion (PROMPTS-PADRAO):**
- O **bloco dita o movimento**. O prompt não descreve gesto que o bloco não tem, senão o Flow inventa movimento. Na fala vai só o tom.
- Blocos de 6, 8 ou 10 s, cortados perto de um corte do viral ou de uma pausa. Bloco com menos de 6 s: duplicar e inverter.
- Nunca começar o bloco com objeto colado na lente ou rosto em tela cheia: o 1º segundo copia o viral. Se acontecer, começar o bloco 0,5 a 1 s depois.
- Palavras: gancho ~18–20 em 8 s · corpo até (duração − 1) × 2,3 (6 s → 11 · 8 s → 16 · 10 s → 20).
- Falas **sem marcação de tempo** ("0–3 s:" trouxe legenda queimada).
- Custa ~20 créditos por geração (o Omni de 8 s custa 12).


## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-roteiro-e-viral.md` | O que chega da Modelagem | O ponto de partida |
| `exemplos/GERA-TAKES-MG2.md` | A tabela real do MG2 (print por take, T1 com motion, segundos do viral) + os takes de gancho | Modo "print por take" |
| `exemplos/GERA-TAKES-MG1.md` | A tabela real do MG1 (base única, inserções na edição) | Modo "base única" |
| `exemplos/COMANDOS-ffmpeg.md` | Os comandos de folha, print e bloco, prontos | Copiar e rodar |
