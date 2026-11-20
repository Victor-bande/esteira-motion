# SKILL `kit-de-prompts` (+ `ganchos-engatilhados`, `kit-da-conta`, `conferencia-flow`) · Ronaldo · PRODUÇÃO (executivo)

v1 · 14/11/2026 · origem: skills `cenas-ugc-ia` (Passos 2 e 3), `modelagem-ugc-ia` (Etapas 5 e 6) e `esteira-ugc-avatar` (§3, §4 e modelos 0 a 10). Os prompts dessas três foram consolidados no `PROMPTS-FLOW.md` (12/11), **a versão vigente**, que vai inteiro na seção 6. As regras das skills originais também. Os modelos antigos ficam em `ORIGINAIS/` só para consulta.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `kit-de-prompts` · `ganchos-engatilhados` · `kit-da-conta` · `conferencia-flow` |
| Agente | Ronaldo · PRODUÇÃO (executivo) |
| Gatilho | Chegou o pacote da Modelagem (ROTEIRO + TAKES + prints + blocos) · o Pelé abre conta nova (`kit-da-conta`) · o funcionário do Flow manda imagem ou take para QA (`conferencia-flow`) · o Sócrates pede ganchos novos de um corpo que validou |
| Não usar quando | A copy não está aprovada (G2) ou os takes não foram cortados |
| Ferramentas | Só texto + leitura de imagem e vídeo (QA) |
| Escreve em | `05-VIDEOS/{MATRIZ}/{ÂNGULO}/KIT.md` · células "kit" da `MATRIZ.md` · log do `ROTEIRO.md` |

## 2. Recebe
| De quem | O quê |
|---|---|
| Didi (Modelagem) | `TAKES.md` + `prints/` + `blocos/` + folha de quadros |
| Ronaldinho (Modelagem) | `ROTEIRO.md` com a copy e os ganchos aprovados |
| Funcionário do Flow | Imagens e takes gerados para QA |
Exemplo: `exemplos/RECEBE-pacote-da-modelagem.md`.

## 3. Lê antes
`ROTEIRO.md` (não muda nenhuma palavra) · `TAKES.md` · `DNA.md` (visual, pop-ups, motion) · `PERFIL.md` da conta (seção 4, kit da avatar: [AVATAR], [VOZ], ritmos, cenários e roupas) · `PRODUTO.md` §15 (packshot: forma, cores, letras, tamanho real) · `MATRIZ.md` (o que já foi produzido nela) · `01-BASE/PROMPTS-FLOW.md` inteiro (está na seção 6).

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| KIT do ângulo: arquivos a separar, tabela de imagens (o mínimo, marcando o que é reaproveitado), prompts de imagem e de vídeo completos, ganchos engatilhados, pop-ups, créditos, ordem de geração | `{ÂNGULO}/KIT.md` | Funcionário do Flow da conta · Romário (pop-ups) |
| QA-1 (imagem) e QA-2 (1º take) por item: ✅ ou ❌ + o que mudar | Chat → Pelé (G3) | Dono · Flow |
| [AVATAR] e [VOZ] em inglês + prompts A1 e A2 dos cenários (conta nova) | `02-CONTAS/{CONTA}/PERFIL.md` §4 | Pelé |
Exemplos: `exemplos/GERA-KIT-MG1.md` (F1, F2, OV1–OV3 e T1–T16 reais) · `exemplos/GERA-KIT-MG2.md` (IMG-A/B/C, T1 motion e T2–T16 reais).

## 5. Regras da máquina (valem por cima dos textos originais)
1. **Vale o PROMPTS-FLOW.** Onde um modelo antigo e o PROMPTS-FLOW diferem, vale o PROMPTS-FLOW. Equivalência:

| Antigo | Vigente |
|---|---|
| `cenas-ugc-ia` Modo CRIAR · `modelagem-ugc-ia` 1ª imagem | **A2** |
| `cenas-ugc-ia` Modo EDITAR · `modelagem-ugc-ia` 5.2 | **A3** (sem produto) · **A4** (com produto) |
| `modelagem-ugc-ia` 5.1 · `esteira` modelos 3 e 5 | **A5** |
| `esteira` modelo 4 | **A7** |
| `esteira` modelo 6 | **A8** |
| `esteira` modelo 1 | **A1** |
| `cenas-ugc-ia` Passo 3 · `modelagem-ugc-ia` 6.1 (v6) | **V1** · **V2** · **V3** |
| `esteira` modelos 7, 8, 9 e 10 | **M1**, **M2**, **M3** e **M4** |
| `esteira` modelo 0 (decupar no Gemini) | É do Garrincha (`extrair-dna`) |

2. **Imagens são da ESTRUTURA** (PASSO 0): servem a todos os ângulos da matriz e a outras matrizes da mesma conta e estrutura. Só gerar o que não existe; com outro produto, só as imagens com o pote. Um 2º ângulo custa só os takes (~200 créditos); um gancho novo, 1 ou 2 takes.
3. **Um KIT por ângulo**, escrito uma vez e usado pelo funcionário do Flow da conta. Para outra conta, troca só [AVATAR], [VOZ], [ROUPA], [CENÁRIO] e o `CEN-…`; o resto do prompt fica igual.
4. **Ganchos engatilhados** (`ganchos-engatilhados`): para cada gancho aprovado, o take que substitui o trecho do gancho (`T01-G2…`), com a mesma duração, a mesma imagem e o mesmo bloco de motion; gancho empilhado = `T00-G{n}` com a imagem do T01. Tudo no mesmo projeto do Flow do corpo (mesma voz).
5. **Pop-ups para o Romário:** para cada pop-up do DNA, o nosso (take, palavra que dispara, tipo, fonte, posição, quando sai). Dor e sintoma em ilustração (A9), nunca no rosto da avatar. **Nunca print de preço, faixa de oferta ou contador** (oferta atemporal); print de avaliação pode.
6. **Edição sai do CapCut:** onde as skills antigas mandam o dono editar no CapCut, vale a edição automática do Romário.
7. **QA na Produção é do executivo:** QA-1 (rosto = AVATAR · roupa e fundo = CEN · pote idêntico ao FRASCO: cor, formato, cada letra, não espelhado, tamanho em relação à mão · 5 dedos · nada do viral vazou) e QA-2 (voz e sotaque, ritmo, fala inteira, rosto). Erro: ajustar só aquele prompt, dizer o porquê e gravar a regra no log do ROTEIRO.

## 6. Procedimento

### PASSO 0 · Imagens da estrutura (uma vez por matriz)
Procurar em `{MATRIZ}/imagens/` e em outras matrizes da mesma conta e estrutura. Só gerar o que não existe.

### PASSO 1 · Modo de produção
- (a) **Base única:** uma imagem-base no cenário + edições (pose, objeto, produto). Quando o viral é plano único e o ritmo vem das inserções. Ex.: V-C01-MG-E01-MG1-G1.
- (b) **Print por take:** cada take nasce do print do viral no mesmo segundo, trocando mulher, roupa e fundo. Quando o viral tem ação, objetos e enquadramentos que mudam. Ex.: V-C01-MG-E02-MG2-G1.
- **Motion control:** onde o movimento do viral é o que segura (quase sempre o gancho; também ação marcante com objeto). Custa ~20 créditos contra ~12 do Omni de 8 s. Dizer onde usa e por quê. O dono quer usar mais motion: sugerir sempre que o viral tiver movimento marcante, com o custo ao lado.

### PASSO 2 · Imagens (o mínimo)
Só um momento visual novo pede imagem nova: base no cenário, base com o produto na mão, close ou selfie, troca de cenário, objeto novo. O resto reaproveita. Tabela IMG → takes.

### PASSO 3 · Prompts
Modelos do PROMPTS-FLOW, preenchidos e **completos** (nunca pedaço, nunca [COLCHETE] sobrando). Em inglês, com a fala em português entre aspas. Anexos nomeados "Image 1, Image 2, Video 1" na ordem do anexo.
Checklist de todo prompt de vídeo: "No subtitles" no começo e no fim · câmera parada (ou handheld leve no V3) · 1 gesto preso a 1 palavra · "lively and expressive… never stiff" · [VOZ] + [RITMO] · cada frase com tom e palavra de ênfase · pronúncias especiais ("Quantum" = "QUÂN-tum", números por extenso) · "ends… half a second before the end" · "never repeats… never freezes" · expressão final com "lips closed" · produto: [PRODUTO] + [TAMANHO] + "never grows or shrinks" · nunca nomear tripé, celular ou câmera · motion sem marcação de tempo na fala.

### PASSO 4 · Ganchos engatilhados (regra 4)

### PASSO 5 · Pop-ups (regra 5)

### PASSO 6 · KIT
Montar o `KIT.md` (modelo `MODELOS/KIT-POST-REGISTRO-PAGINA.md`), com créditos estimados (Omni Flash 720p: 4 s = 7 · 6 s = 10 · 8 s = 12 · 10 s = 15 · motion ≈ 20) e a ordem de geração: imagem 1 → QA-1 → take 1 → QA-2 (✋ G3) → o resto → ganchos. Dizer quais arquivos separar antes de abrir o Flow. Atualizar as células da MATRIZ para "kit".

### PASSO 7 · Conferência (`conferencia-flow`)
QA-1 e QA-2 (regra 7). Clipe que passou mas tem pote ilegível ou legenda queimada fora do rosto: libera e avisa o Romário (PiP do pote real ou barra).

### Kit da conta (`kit-da-conta`, conta nova)
Prompt A1 (avatar fictícia, depois ficha de 3 painéis) e A2 para cada cenário fixo → QA → o Pelé salva em `KIT/`. Escrever [AVATAR] e [VOZ] em inglês para o PERFIL.

### Da fonte `cenas-ugc-ia` · Regras (linhas 20–32)

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

### Da fonte `modelagem-ugc-ia` · Regras fixas (linhas 18–27)

##### Regras fixas
- **A copy é do dono.** O Claude dá opções e checa; não reescreve a fala aprovada.
- **Linha vermelha:** 1 linha por trecho com risco (promessa, antes e depois, autoridade médica, prazo, escassez falsa) + a troca segura. A decisão é do dono.
- **Fato × hipótese:** nunca inventar número, avaliação, ingrediente ou resultado. Número de avaliações, preço e parcelamento: conferir na página no dia.
- **CTA [J-S15]:** indicação, uma ação só, nunca "compre agora". Sem escassez falsa.
- **Respostas curtas e numeradas**, com códigos para o dono escolher pelo celular.
- **Cada erro de geração vira regra** no log do ROTEIRO (o que errou → por quê → a regra nova).

---

### Da fonte `modelagem-ugc-ia` · Etapa 5 · regras das imagens (linhas 68–76)

##### Etapa 5 · Imagens (Flow → imagem · Nano Banana Pro)
- **Imagem que vem de print = editar o próprio print**, trocando só a pessoa e o fundo e tirando a legenda; o resto do print fica exatamente igual (enquadramento, objetos, mesa). Nunca mudar objeto do print sem o dono pedir.
- **CRIAR com uma imagem anterior anexada faz o modelo copiar a anterior.** Por isso: print editado, ou base editada.
- 1ª imagem: Image 1 = AVATAR. As seguintes: Image 1 = a 1ª imagem gerada (mantém roupa e sala), com o fundo descrito **como ele é na imagem gerada** (descrição errada do fundo = sala diferente).
- **Corpo:** sai **editando a base** (tira objeto, põe o produto, muda a pose), uma mudança por vez.
- **Produto:** tamanho real em relação à mão e ao rosto, sempre. Nunca "looks bigger because it is closer".
- **Nunca nomear equipamento** (tripé, celular, câmera, braço): o modelo desenha o que se nomeia.
- O Claude confere cada imagem que o dono mandar (rosto, mão, rótulo, proporção, fundo) antes do vídeo.

### Da fonte `esteira-ugc-avatar` · §3 e §4 · imagens e takes (linhas 143–153)

##### 3. Imagens
Flow → editar imagem · Nano Banana Pro · 2 saídas. Modelos 2 a 6. Escolher a saída com o rosto mais fiel e o rótulo legível.
- **Esteira nova:** modelo 2 sobre uma base que já existe. Troca a roupa e 1 detalhe do fundo; o carro não muda.

##### 4. Takes
Flow → vídeo → elementos · Omni Flash · 9:16 · 720p · 1 render. Modelos 7 a 10.
- Gerar o T1 primeiro, para validar o prompt.
- Refazer só o take que falhar.
- ~20 créditos por geração de até 10 s. Somar as gerações antes de começar.
- **Capacidade:** ~16 gerações por dia, contando todas as contas.

### Da fonte `esteira-ugc-avatar` · Aprendizados e valores por conta (linhas 194–227)

##### Aprendizados
- ✅ **Rosto do viral que não troca:** resolvido no T7 da E2 com três coisas juntas.
  1. Bloco começando depois do frasco na lente.
  2. Base feita do 1º quadro do bloco (modelo 6).
  3. Modelo 9, com a AVATAR como Image 2.
  - Se ainda falhar, borrar o rosto da mulher no bloco.
- **Prompt que começa por "Replace the woman…":** pesa mais que "only the elements change" quando o rosto não troca.
- **Cabelo que "teletransporta" ou fundo que muda:** usar o parágrafo de continuidade, curto, porque texto demais embola.
- **Fala atropelada ou gaguejada:** excesso de palavras ou fala até o último segundo. Tirar palavras e usar o ritmo calmo.
- **Overlay grande no viral:** o Flow inventa o movimento por baixo. Se ficar feio, cortar na edição.
- **Frasco transparente pela metade:** prova de uso visível. Pedir "filled about halfway".
- **Rótulo:** pedir "never mirrored", porque a câmera frontal do viral é espelhada.

---

##### Valores (preencher por conta)
- `[AVATAR]`: descrição fixa da avatar (rosto, idade, pele com poros, cabelo, brincos, sem anel nem colar).
- `[ROUPA]`: roupa da esteira (+ detalhe de fundo).
- `[CENÁRIO]`: the same car interior (seat color, steering wheel, trim and the street outside).
- `[PRODUTO]`: frasco, volume, líquido, tampa, rótulo com o texto exato.
- `[VOZ]`: Brazilian Portuguese, sotaque, idade, tom, "like talking to a close friend in the car".
- `[RITMO]`: escolher um.
  - **Corpo:** `Fluent and natural: no stuttering, no filler sounds, no repeated words, real conversational intonation that rises and falls, clear diction, no announcer tone.`
  - **Gancho:** `Energetic and expressive, quick natural pace, punchy delivery with clear rises and falls in intonation, like telling a friend something urgent. Every word said once and clearly: no stuttering, no filler sounds, no repeated words, no announcer tone.`
  - **Calmo** (quando gaguejar): `Calm, relaxed pace with short natural pauses between sentences; every word said once and clearly, with no stuttering, no filler sounds and no repeated words; real conversational intonation, no announcer tone.`
- `[FALAS]`: `0–2.2 s (tom, stressing "palavra"): "fala,"`, uma linha por trecho.

Valores da @dicasdamalu8:
- `[AVATAR]`: the same woman (face, age in her late 40s, skin with visible pores, faint freckles and fine lines, dark brown wavy hair with grey strands worn loose just below the shoulders, small gold hoop earrings, no rings, no necklace)
- `[ROUPA]` E1: sage-green athletic tank top with wide straps, scoop neckline, matte fabric, no logo
- `[ROUPA]` E2: fitted black ribbed tank top with wide straps, scoop neckline, matte cotton, no logo, and a light-blue denim jacket hanging on the seat behind her (she is not wearing it)
- `[PRODUTO]`: clear cylindrical glass dropper bottle, 30 ml, about the height of her palm, filled about halfway with translucent medium-blue liquid, white rubber bulb over a shiny metallic collar, brushed-silver label with large black "GHK-Cu" and lowercase "zencial"
- `[VOZ]`: Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky, intimate and friendly like talking to a close friend in the car

### Da fonte `01-BASE/PROMPTS-FLOW.md (vigente, 12/11)` · texto integral (os prompts vigentes) (linhas 1–fim)

#### PROMPTS DO GOOGLE FLOW · @dicasdamalu8

v1 · 12/11/2026 · todos os prompts que usamos no Flow: para que serve cada um, o que vai anexado e por que ele é escrito assim.
**Fontes (não apaga nenhuma):** `PROCESSO/PRODUCAO-UGC-IA.md` §3 e §4 · `PROCESSO/PROMPTS-PADRAO-UGC.md` (modelos 1, 2, 6 a 10) · `ROTEIRO-QUANTUM-TETRAMAGNESIO-01` (F1, F2, OV1–OV3, T1–T16) · `ROTEIRO-QUANTUM-TETRAMAGNESIO-02` (IMG-A, IMG-B, IMG-C, T1 motion, T11, T15) · `JESSICA_METODO.md` 3.13 e 3.14.
**Legenda:** ✅ já rodou num vídeo nosso · 🧪 escrito, ainda não validado · 📘 do método da Jéssica, ainda não usado.

---

##### Como ler

- **Três lugares do Flow:**
  - **Imagem → criar:** gera do zero (Nano Banana Pro).
  - **Imagem → editar:** abre uma imagem ("the image being edited") e muda só partes dela. A imagem aberta **não conta** como anexo.
  - **Vídeo:** a partir de imagem (Omni) ou com **motion control** (vídeo de referência + imagem).
- **Image 1, Image 2, Video 1** = a ordem em que você anexa. Nunca escrever "reference image".
- **[COLCHETES]** = trocar pelos valores da §1. O resto fica igual.
- Prompt sempre **completo**. Nunca colar só um pedaço.

---

##### 0. Mapa: qual prompt, onde, com quais anexos

| # | Prompt | Onde | Abre | Anexa | Para quê | Status |
|---|---|---|---|---|---|---|
| A1 | Criar avatar | Imagem → criar | — | nada | Nascer uma avatar fictícia | — |
| A2 | Base da avatar no cenário | Imagem → criar | — | Image 1 = AVATAR · Image 2 = PRINT (só enquadramento) | 1ª imagem de um vídeo nível 2 | ✅ 01 (F1) |
| A3 | Editar a base | Imagem → editar | a base | nada | Nova pose, objeto, ação ou roupa sem mudar o resto | ✅ E7 |
| A4 | Base + produto na mão | Imagem → editar | a base | Image 1 = FRASCO | Cena com o pote | ✅ 01 (F2) |
| A5 | Print do viral → avatar | Imagem → editar | o PRINT | Image 1 = AVATAR-CENÁRIO | Copiar pose e ação do viral, com a nossa mulher, roupa e fundo | 🧪 02 (IMG-A) |
| A6 | Print → avatar + objeto novo | Imagem → editar | o PRINT | Image 1 = AVATAR-CENÁRIO | Igual ao A5, acrescentando um objeto (ex.: caneca) | 🧪 02 (IMG-B) |
| A7 | Print → avatar + produto | Imagem → editar | o PRINT | Image 1 = AVATAR-CENÁRIO · Image 2 = FRASCO | Igual ao A5, com o pote na mão | 🧪 02 (IMG-C) |
| A8 | 1º quadro do bloco com rosto travado | Imagem → editar | 1º quadro do BLOCO | Image 1 = AVATAR · Image 2 = AVATAR-CENÁRIO | Base para o motion quando o rosto do viral vaza | ✅ E3 |
| A9 | Inserção (ilustração ou foto) | Imagem → criar | — | nada | Overlays da edição | ✅ 01 (OV1–OV3) |
| A10 | Mockup do produto | Imagem → criar | — | Image 1 = FRASCO | Pote na mão em close, para PiP | 📘 J 3.13 |
| V1 | Take falado, sem produto | Vídeo a partir de imagem | — | Image 1 = IMAGEM DO TAKE | Um take da copy | ✅ 01 |
| V2 | Take falado, com produto | Vídeo a partir de imagem | — | Image 1 = IMAGEM DO TAKE · Image 2 = FRASCO | Take com o pote na mão | ✅ 01 (T12–T16) |
| V3 | Take falado, selfie na mão | Vídeo a partir de imagem | — | Image 1 = IMAGEM DO TAKE | Trecho de selfie perto da câmera | 🧪 02 (T11) |
| V4 | Mockup animado | Vídeo a partir de imagem | — | Image 1 = mockup do A10 | 3–5 s do pote, para PiP | 📘 J 3.14 |
| M1 | Motion, sem produto | Vídeo · motion control | — | Video 1 = BLOCO · Image 1 = AVATAR-CENÁRIO ou imagem do A5 | Gancho ou take copiando o movimento do viral | 🧪 02 (T1) · modelo 7 |
| M2 | Motion, com produto | Vídeo · motion control | — | Video 1 = BLOCO · Image 1 = base · Image 2 = FRASCO | Idem, com o pote | 🧪 modelo 8 |
| M3 | Motion, rosto travado | Vídeo · motion control | — | Video 1 = BLOCO · Image 1 = imagem do A8 · Image 2 = AVATAR | Quando o M1/M2 mistura o rosto | ✅ modelo 9 |
| M4 | Motion, sem fala | Vídeo · motion control | — | Video 1 = BLOCO · Image 1 = base · Image 2 = AVATAR | Reação muda, para PiP | 🧪 modelo 10 |

**Ordem num vídeo**
- **Nível 2 (sem motion, como o 01):** A2 → A3/A4 para cada cena nova → V1/V2 take a take. O T1 vai primeiro, para validar voz, ritmo e rosto.
- **Modelagem de viral (como o 02):** A5/A6/A7 em cada print numerado → M1 no gancho (BLOCO + imagem 01) → V1/V2/V3 no resto, cada take com a imagem do mesmo número.

---

##### 1. Valores fixos e arquivos que se anexam

**Arquivos**
| Nome | O que é | Para que entra |
|---|---|---|
| AVATAR | Retrato da Malu (rosto e cabelo nítidos, fundo neutro) | Só a identidade (rosto) |
| AVATAR-CENÁRIO | A Malu já com a roupa e o fundo do vídeo (ex.: F1 do 01, AVATAR-COZINHA do 02) | Mulher, roupa e fundo de uma vez |
| FRASCO | Foto do pote real, de frente, nítida, sem mão nem selo por cima (fotos 2 a 4 da página ou foto própria) | Única fonte de cor, formato e letras do produto |
| PRINT | Quadro do viral, numerado pelo take (o Claude extrai) | Pose, ação, objetos e enquadramento |
| BLOCO | Trecho de 6, 8 ou 10 s do viral (o Claude corta) | Movimento, no motion control |
| IMAGEM DO TAKE | A imagem pronta daquele take | 1º quadro do vídeo |

**[AVATAR] · Malu**
```
the same face, facial structure, eyes, nose, lips, jawline and age (late 40s), the same skin with visible pores, faint freckles and fine lines, the same dark brown wavy hair with grey strands worn loose just below the shoulders, the same small gold hoop earrings, no rings, no necklace
```

**[VOZ]**
```
Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky, intimate and friendly like talking to a close friend
```

**[RITMO]** · um por take, pela intenção da fala
| Ritmo | Quando | Texto |
|---|---|---|
| Gancho | Gancho e revelações ✅ | `playful, sassy and confiding, like telling her best friend a secret about something outrageous: energetic and expressive, quick natural pace, punchy delivery with big rises and falls in intonation` |
| História | Narrar o que aconteceu 🧪 | `chatty and expressive, like telling her best friend a story: energetic and natural, quick conversational pace, big natural rises and falls in intonation` |
| Explicação | Mecanismo, "por que" ✅ | `lively, warm and clear, like explaining something important to a close friend who needs to hear it: engaged and energetic, natural pace, big natural rises and falls in intonation` |
| Entusiasmo | Produto, prova, benefício ✅ | `lively and warm, like excitedly telling a close friend about something she loves: energetic smiling voice, quick natural pace, big natural rises and falls in intonation` |
| Segredo | "Quase ninguém te conta", CTA ✅ | `confiding and warm, a little lower and closer, like sharing a secret with a close friend, but still lively and smiling: natural pace, real rises and falls in intonation` |
| Calmo | Quando gaguejar ou atropelar | `calm, relaxed pace with short natural pauses between sentences; every word said once and clearly, with no stuttering, no filler sounds and no repeated words; real conversational intonation` |

**[PRODUTO] · Quantum Tetra Magnésio** (outro produto: tirar do arquivo PRODUTO)
```
the same red bottle and red cap, the same label colors and every printed letter ("QUANTUM", "TETRA MAGNÉSIO", "ÓXIDO | QUELATO", "CLORETO | MALATO", "60 CÁPSULAS" and all other text exactly as in Image [N])
```
**[TAMANHO]**
```
a supplement bottle for 60 capsules, about 10 cm tall, a little taller than her palm is wide, her fingers wrapped around its body
```

**[ROUPA] e [CENÁRIO]:** os do roteiro de cada vídeo (01: cardigã aveia sobre camiseta branca, sala de parede azul-acinzentada · 02: os da AVATAR-COZINHA). Descrever o cenário **como ele é na base**.

---

##### 2. Imagem

###### A1 · Criar avatar · Imagem → criar · sem anexo
**Para quê:** criar uma avatar nova, 100% fictícia (rosto de pessoa real é proibido no BR sem consentimento). Depois, transformar em ficha de 3 painéis: corpo de frente, de costas e close do rosto.
**Por que assim:** fundo branco e luz chapada para a identidade sair limpa; um detalhe marcante (pinta, sardas) ajuda o Flow a manter o mesmo rosto nos outros prompts.
```
CHARACTER PORTRAIT PROMPT (fill in the brackets)

Goal: one realistic portrait of a brand-new, entirely fictional adult character. Do not resemble any real person, celebrity or creator.

Character:
- Age: [age range, adult]
- Ethnicity / look: [e.g. Brazilian, light-brown skin]
- Face: [face shape], [one distinctive detail: small mole on left cheek / faint freckles / slightly uneven eyebrows]
- Hair: [length, texture, color, how it falls]
- Eyes: [color and feel]
- Expression: [e.g. relaxed, slight smile, looking at the camera]
- Makeup: [none / light / natural]
- Build: [build]

Outfit:
- Plain [color] top, [neckline], no patterns

Camera:
- Vertical 9:16
- Head and shoulders, centered, eye level

Setting:
- Plain white wall behind them
- Soft, even daylight, no harsh shadows

Style:
- Looks like a real smartphone photo, not AI
- Natural skin texture with pores and small imperfections, no smoothing or filters

Output: one sharp portrait against the white wall.
```

###### A2 · Base da avatar no cenário · Imagem → criar · Image 1 = AVATAR · Image 2 = PRINT
**Para quê:** a 1ª imagem de um vídeo nível 2. Todas as outras saem editando esta (A3/A4).
**Por que assim:**
- O PRINT entra só pelo **enquadramento e pose**, e o prompt lista tudo que **não** pode vir dele (pessoa, roupa, lugar, objeto, texto). Sem essa lista, vazam o jaleco, o produto e o lugar do viral.
- Pele com poros e "no beauty filter" evitam cara de IA.
- Para **selfie na mão**, trocar a 1ª frase por: `Vertical 9:16, handheld smartphone selfie framing seen from the front camera's point of view. Slight wide-angle phone lens (subtle 0.5x feel) that enhances foreground depth. Imperfect handheld framing that feels like an authentic everyday moment.`
```
Vertical 9:16, a front-camera video frame at eye level, straight on and completely still, [ENQUADRAMENTO: medium shot from the waist up, the woman centered in the frame], the way a creator records herself talking to the camera at home.

The woman is the woman in Image 1 attached with this prompt: [AVATAR]. She wears [ROUPA].

Image 2 attached with this prompt gives only the framing, camera angle, distance from the lens, composition and body position. Nothing else from Image 2 appears: not the person, not the clothes, not the place, not any object, not any text. [SE O PRINT TIVER ALGO FORA DA CONTA: She wears no lab coat, no scrubs and no stethoscope, and she holds nothing.]

Scene: [CENÁRIO: onde ela está e o que tem atrás dela].
Hands: [O QUE CADA MÃO FAZ].
Focus: her face.

She looks at the camera with [EXPRESSÃO]. Everything is natural and properly grounded: no distortion, no floating objects. Natural daylight, bright realistic colors (rich but not oversaturated), clear separation between her and the background, raw authentic social-media look. Natural skin with visible pores, no beauty filter, no smoothing. Hands clean and natural, five fingers on each hand. No text, captions, stickers or watermark.
```

###### A3 · Editar a base · Imagem → editar (abrir a base) · sem anexo
**Para quê:** cada cena nova do mesmo vídeo (pose, gesto, objeto, roupa), mantendo rosto, cenário e luz.
**Por que assim:** "Change only" + a lista do que fica igual. A edição do Flow muda pose e objetos, **não a câmera**: para aproximar, recortar a imagem (o Claude faz) ou dar zoom no CapCut. Para trocar a roupa, tirar "clothes" da lista do que fica igual.
```
Edit the image being edited. Change only: [A MUDANÇA: pose, gesto, objeto, ação ou roupa]. The woman's face, hair, earrings, clothes, the room, the framing and the light are exactly as they are in this image. Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand. No text or watermark.
```

###### A4 · Base + produto na mão · Imagem → editar (abrir a base) · Image 1 = FRASCO
**Para quê:** as cenas com o pote (no 01, do T12 ao T16).
**Por que assim:**
- O produto tem que ser **idêntico ao vinculado**: o E7 tomou "Promoção de produto inconsistente" (-15 pontos). Por isso as letras do rótulo vão escritas, e cor e formato vêm **só** da Image 1.
- O **tamanho vai em relação à mão** ("a little taller than her palm"). Escrever "looks bigger because it is closer" faz o pote crescer.
- "Take only the bottle" evita que a mão e o fundo da foto do frasco vazem.
- "Not pasted in, not 3D render" + reflexo e sombra dos dedos evitam cara de colagem.
- Se a letra pequena sair ilegível: PiP do pote real na edição (no 01, a linha embaixo de "MAGNÉSIO").
```
Edit the image being edited. Change only: she holds the product in Image 1 attached with this prompt in the hand on the [right] side of the frame, [POSIÇÃO: raised beside her face at cheek height], label facing the camera, and her other hand [O QUE A OUTRA MÃO FAZ: is open at chest height in a natural talking gesture]. The product is exactly the product in Image 1 attached with this prompt: the same shape, proportions, [PRODUTO], sharp, readable and not mirrored, at a natural size for [TAMANHO], firmly held. Take only the bottle from Image 1: no hand, fingers, nails, stickers or background from Image 1 appear. It looks like a real object photographed with this phone, not pasted in and not a 3D render: natural reflections of the light on the plastic, a soft natural shadow from her fingers, correct perspective and scale for her hand, and the same light, color, grain and sharpness as the rest of the photo. The woman's face, hair, earrings, clothes, the room, the framing and the light are exactly as they are in this image. Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand, no rings. No text or watermark.
```

###### A5 · Print do viral → avatar · Imagem → editar (abrir o PRINT) · Image 1 = AVATAR-CENÁRIO
**Para quê:** modelar o visual do viral. Do PRINT ficam a pose, a ação, o que está no balcão e nas mãos e o enquadramento. Da AVATAR-CENÁRIO vêm a mulher, a roupa e o fundo.
**Por que assim:**
- "Takes exactly the original woman's place… nothing of the original woman remains" troca a pessoa sem mudar a pose e sem misturar os rostos.
- O fundo vem inteiro da Image 1. Se o print mostra uma parte do lugar que a Image 1 não mostra, o prompt manda criar no mesmo estilo; sem isso, volta a sala do viral.
- Remove legenda, prints e stickers do viral.
- Embalagem sem marca: nada que pareça outro produto (no E7, os bonecos dominavam a capa).
```
Edit the image being edited. Change only these four things, taking them from Image 1 attached with this prompt:

1. The woman: replace the woman with the woman in Image 1. She is exactly the woman in Image 1: the same face, facial structure, eyes, nose, lips, jawline and age (late 40s), the same skin with visible pores, faint freckles and fine lines, the same hair, the same small gold hoop earrings, no rings, no bracelets, no necklace, short natural nails. She takes exactly the original woman's place: the same body position, head position and tilt, gaze, expression, mouth position and the same position of the arms, hands and fingers. Nothing of the original woman remains: not her face, hair, skin, jewelry or nail polish.

2. Her clothes: exactly the clothes she wears in Image 1.

3. The background: the place in Image 1, with the same walls, cabinets, windows, colors and light, and the same counter top, seen from this camera angle. Nothing of the original room behind her remains. If this image shows a part of the place that Image 1 does not show, create it in the same style and colors as Image 1.

4. Remove all captions, subtitles, on-screen text, pictures, screenshots and stickers placed over the image; where they were, show what would naturally be behind them.

Everything else stays exactly as it is in this image: the framing, camera angle, distance from the lens, composition, her pose, and everything on the counter and in her hands ([OBJETOS DO PRINT: the wooden cutting board, the knife, the block of cheese and the cheese cubes]), in the same place, size, angle and appearance. Any package on the counter is plain, with no brand, logo or text.

Photorealistic smartphone frame, natural skin with visible pores, no beauty filter, no smoothing, natural daylight. Hands clean and natural, five fingers on each hand. Vertical 9:16. No watermark.
```

###### A6 · Print → avatar + objeto novo · Imagem → editar (abrir o PRINT) · Image 1 = AVATAR-CENÁRIO
**Para quê:** quando a nossa copy pede um objeto que o viral não tem. No 02: a caneca de café do "olha eu aqui tomando o meu", no lugar do cubo de cheddar.
**Por que assim:** é o A5 com um item a mais. O objeto vai com tamanho real, como é segurado e "sem logo".
```
Edit the image being edited. Change only these five things, taking the first three from Image 1 attached with this prompt:

1. The woman: replace the woman with the woman in Image 1. She is exactly the woman in Image 1: the same face, facial structure, eyes, nose, lips, jawline and age (late 40s), the same skin with visible pores, faint freckles and fine lines, the same hair, the same small gold hoop earrings, no rings, no bracelets, no necklace. She takes exactly the original woman's place: the same head position and tilt, gaze, expression, mouth position and the same distance from the lens. Nothing of the original woman remains: not her face, hair, skin or jewelry.

2. Her clothes: exactly the clothes she wears in Image 1.

3. The background: the place in Image 1, with the same walls, colors and light, seen from this angle. Nothing of the original room behind her remains.

4. Add: [OBJETO NOVO, ONDE E COMO: in the hand on the right side of the frame she holds a plain white ceramic mug of hot black coffee at chin height, just below her mouth, with a little steam rising. A normal-size mug for an adult hand, her fingers through the handle and around it, firmly held. No print, logo or text on the mug.]

5. Remove all captions, subtitles, on-screen text and stickers.

Everything else stays exactly as it is in this image: [the handheld close-up selfie framing], the camera angle and the light.

Photorealistic smartphone selfie, natural skin with visible pores, no beauty filter, no smoothing, natural daylight. Five fingers on each hand. Vertical 9:16. No text, no watermark.
```

###### A7 · Print → avatar + produto · Imagem → editar (abrir o PRINT) · Image 1 = AVATAR-CENÁRIO · Image 2 = FRASCO
**Para quê:** o take em que o pote aparece na mão (no 02, o T15, "Esse aqui da Quantum").
**Por que assim:** é o A5 com o bloco de produto do A4. A mão que já está ocupada no print fica como está (uma ação por mão).
```
Edit the image being edited. Change only these five things:

1. The woman: replace the woman with the woman in Image 1 attached with this prompt. She is exactly the woman in Image 1: the same face, facial structure, eyes, nose, lips, jawline and age (late 40s), the same skin with visible pores, faint freckles and fine lines, the same hair, the same small gold hoop earrings, no rings, no bracelets, no necklace, short natural nails. She takes exactly the original woman's place: the same body position, head position and tilt, gaze and expression, and [A OUTRA MÃO: the hand on the left side of the frame stays on the knife on the board exactly as it is]. Nothing of the original woman remains.

2. Her clothes: exactly the clothes she wears in Image 1.

3. The background: the place in Image 1, with the same walls, cabinets, windows, colors and light, and the same counter top, seen from this camera angle. Nothing of the original room behind her remains.

4. [A MÃO DO PRODUTO: Her raised hand, on the right side of the frame,] now holds the product in Image 2 attached with this prompt, [POSIÇÃO: at shoulder height], label facing the camera. The product is exactly the product in Image 2: the same shape, proportions, [PRODUTO], sharp, readable and not mirrored, at a natural size for [TAMANHO], firmly held. Take only the bottle from Image 2: no hand, background or text from Image 2 appears. It looks like a real object photographed with this phone, not pasted in and not a 3D render: natural reflections on the plastic, a soft shadow from her fingers, correct perspective and scale, and the same light, color, grain and sharpness as the rest of the photo.

5. Remove all captions, subtitles, on-screen text and stickers.

Everything else stays exactly as it is in this image: the framing, camera angle, distance from the lens, composition, and everything on the counter ([OBJETOS DO PRINT]), in the same place, size, angle and appearance.

Photorealistic smartphone frame, natural skin with visible pores, no beauty filter, no smoothing, natural daylight. Hands clean and natural, five fingers on each hand. Vertical 9:16. No watermark.
```

###### A8 · 1º quadro do bloco com rosto travado · Imagem → editar (abrir o 1º quadro do BLOCO) · Image 1 = AVATAR · Image 2 = AVATAR-CENÁRIO
**Para quê:** quando o motion (M1/M2) sai com o rosto do viral ou uma mistura das duas. Esta imagem vira a Image 1 do M3.
**Por que assim:** separa as fontes. O **rosto** vem só da AVATAR e **roupa, cenário e produto** só da AVATAR-CENÁRIO. Começar o vídeo exatamente deste quadro tira do Flow a chance de "puxar" a mulher do viral.
```
Edit the image being edited. Keep EXACTLY the same framing, camera angle, distance from the lens, pose, hand positions, the position and angle of any object in her hands, gaze, expression and natural light.

Change ONLY:
1. The woman: replace her completely. Her face must be exactly the face in Image 1 attached with this prompt (same facial structure, eyes, nose, lips, jawline, age, skin texture). [AVATAR]. Nothing of the original woman's face or hair remains.
2. Clothing, scene and product: identical to Image 2 attached with this prompt ([ROUPA], [CENÁRIO], [PRODUTO, se tiver]), label visible, readable and not mirrored. Do not invent or change any text.
3. Remove all on-screen text, captions and app interface.

Nothing else changes. Photorealistic smartphone selfie, natural skin, no beauty filter, no smoothing, no watermark. Vertical 9:16. Five fingers on each hand.
```

###### A9 · Inserção · Imagem → criar · sem anexo
**Para quê:** os overlays da edição (a madrugada, o cansaço, a mulher dormindo), no lugar das ilustrações do viral.
**Por que assim:** dor e sintoma vão em **ilustração**, não com a Malu. O rosto dela cansado e depois bem viraria antes e depois feito por IA (alegação enganosa). O Flow tende a devolver em 9:16; o Claude recorta na edição.
```
Square 1:1 simple flat illustration in a clean health-education style, soft pastel colors, thin outlines, plain light background. [CENA: A woman lying awake in bed in a dark bedroom at night, eyes wide open, staring at the ceiling, with her phone lit up on the pillow next to her showing the time 3:12. Calm, slightly sad mood.] No other text, no logo, no watermark.
```
Versão foto:
```
Horizontal 16:9 realistic photo with an authentic smartphone look: [CENA: a woman in her 40s sleeping peacefully on her side in a bed with white sheets, soft early-morning light through a window, a calm and cozy bedroom. Her face is relaxed, eyes closed]. Natural colors, no filter. No text, no logo, no watermark.
```

###### A10 · Mockup do produto (Jéssica) · Imagem → criar · Image 1 = FRASCO · 📘
**Para quê:** pote na mão em close, com fundo desfocado, para PiP quando falar do produto ("tem que ter visualmente o produto" [J-S26]).
**Por que assim:** o texto é literal da Jéssica [J 3.13]. Gera 4 variações e escolhe a de rótulo legível e mão natural.
```
Pegue esta imagem do produto e gere uma nova imagem idêntica, com o mesmo rótulo, cores, formato e textura - sem alterar nada do design original.

Apenas adicione uma mão humana segurando o frasco de forma natural, em um ambiente ao ar livre com luz natural suave (golden hour) e fundo desfocado (bokeh).

O foco deve permanecer no frasco e no rótulo, que precisam estar 100% nítidos e fiéis à imagem original.

Estilo: fotografia de produto realista em 8K, iluminação suave, proporções corretas da mão, reflexo leve no vidro/plástico, sombras coerentes e pele natural.

Evite qualquer modificação no rótulo, logo, tipografia ou cor do produto.

Gere 4 variações mantendo o mesmo enquadramento, mudando apenas a posição da mão e ângulo da luz.
```

---

##### 3. Vídeo a partir de imagem (Omni · 9:16 · duração do take: 4, 6, 8 ou 10 s)

**Tempo de cada take (PRODUCAO §3.1):** ~3 palavras por segundo. Duração = palavras ÷ 3, arredondando para cima em 4, 6, 8 ou 10 s, e a fala termina ~0,5 s antes do fim. Exemplo: 6 s → até ~17 palavras · 8 s → ~22 · 10 s → ~28. Frase só se corta entre takes numa pausa natural.
**Créditos (Omni Flash 720p):** 4 s = 7 · 6 s = 10 · 8 s = 12 · 10 s = 15.

###### V1 · Take falado, sem produto · Image 1 = IMAGEM DO TAKE ✅
**Para quê:** cada take da copy em que o produto não aparece.
**Por que assim (frase por frase):**
- Abre e fecha com "No subtitles…" e as falas vêm "spoken only, never written on screen": o Flow queima legenda. No 01 queimou em 4 takes mesmo assim, então **conferir take a take**.
- "The camera does not move… Nothing that is not in Image 1 appears": sem isso aparecem zoom e objetos.
- **Um gesto, preso a uma palavra** ("On 'X' she…"): dois gestos no mesmo take saem errados.
- "Lively and expressive… never stiff": sem essa linha o vídeo sai "morto".
- Uma linha por frase, com tom e palavra de ênfase: dá a entonação certa.
- "Ends… half a second before the end": com mais folga o Flow estica, pausa e repete palavra; sem folga, corta a última.
- "Never repeats… never freezes" e "lips closed" no fim: evitam repetição e travada.
- Nunca nomear tripé, celular ou câmera: o modelo desenha o que se nomeia.
```
No subtitles, no captions, no on-screen text of any kind at any moment.

Image 1 attached with this prompt is the first frame. Animate it as a front-camera video with exactly the same framing, the same woman, clothes, place and light in every frame. The camera does not move: no zoom, no camera moves, no cuts. Nothing that is not in Image 1 appears.

Action: [UM GESTO PRESO A UMA PALAVRA: On "X" she …]. She is lively and expressive the whole time: expressive eyebrows, smiling eyes, small head tilts and nods and a little body movement; never stiff. [SE TIVER FACA OU OBJETO NA MÃO: The knife only touches the cheese and the board, moving slowly and safely, away from her fingers.]

Voice: [VOZ]; [RITMO], clear diction, perfect lip sync, no stuttering, no filler sounds, no announcer tone. [SE PRECISAR: She clearly says the word "X". She pronounces "Quantum" as "QUÂN-tum". She pronounces the numbers as words: "…".] She speaks these words aloud, completely and in this order, in one natural flow (spoken only, never written on screen):
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
The last word ends complete, with its final syllable, about half a second before the end of the clip; then she stays silent. She never repeats any line or word and never freezes. After the last line she [EXPRESSÃO FINAL: smiles softly / nods / raises her eyebrows], lips closed.

Realistic skin, hair, shadows and physics; five fingers on each hand; no filters, no music, only her voice and soft room ambience. No subtitles, no captions, no text on screen.
```

###### V2 · Take falado, com produto · Image 1 = IMAGEM DO TAKE · Image 2 = FRASCO ✅
**Para quê:** takes com o pote na mão.
**Por que assim:**
- A mão do produto **só segura**; o gesto vai na mão livre (com a mão ocupada fazendo duas coisas, o conta-gotas sumiu no E7).
- O produto é descrito de novo e tem o tamanho travado ("keeps exactly the size it has in Image 1… never grows or shrinks").
- O FRASCO é anexado também no vídeo, como fonte das letras.
```
No subtitles, no captions, no on-screen text of any kind at any moment.

Image 1 attached with this prompt is the first frame. Animate it as a front-camera video with exactly the same framing, the same woman, clothes, place and light in every frame. The camera does not move: no zoom, no camera moves, no cuts. Nothing that is not in Image 1 appears.

Action: [UM GESTO DA MÃO LIVRE PRESO A UMA PALAVRA: On "é esse aqui" her free hand points at the bottle]. She is lively and expressive the whole time: expressive eyebrows, smiling eyes, small head tilts and nods and a little body movement; only her free hand gestures, and the hand holding the product keeps holding it; never stiff.

The product is exactly the product in Image 2 attached with this prompt in every frame: [PRODUTO], label facing the camera, readable and never mirrored, firmly held in the hand on the [right] side of the frame, never floating, the plastic reflecting the light naturally. Size: [TAMANHO]; it keeps exactly the size it has in Image 1 relative to her hand and face in every frame, with natural depth and perspective; it never grows or shrinks.

Voice: [VOZ]; [RITMO], clear diction, perfect lip sync, no stuttering, no filler sounds, no announcer tone. She pronounces "Quantum" as "QUÂN-tum". She speaks these words aloud, completely and in this order, in one natural flow (spoken only, never written on screen):
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
The last word ends complete, with its final syllable, about half a second before the end of the clip; then she stays silent. She never repeats any line or word and never freezes. After the last line she smiles, holding the bottle still, lips closed.

Realistic skin, hair, shadows and physics; five fingers on each hand; no filters, no music, only her voice and soft room ambience. No subtitles, no captions, no text on screen.
```

###### V3 · Take falado, selfie na mão · Image 1 = IMAGEM DO TAKE 🧪
**Para quê:** quando o viral pega o celular e fala perto da câmera (no 02, o T11 com a caneca).
**Por que assim:** é o V1 trocando "camera does not move" por "handheld… subtle natural hand shake". O objeto na mão tem o tamanho travado.
```
No subtitles, no captions, no on-screen text of any kind at any moment.

Image 1 attached with this prompt is the first frame. Animate it as a handheld front-camera selfie with exactly the same framing, the same woman, clothes, place and light in every frame, with only a subtle natural hand shake. No zoom, no cuts. Nothing that is not in Image 1 appears.

Action: [AÇÃO COM O OBJETO: She holds the white coffee mug near her chin the whole time; on "olha eu aqui" she lifts it slightly toward the camera with a proud smile]. The [OBJETO] stays in the same hand in every frame, at the same size, never floating. She is lively and expressive the whole time: expressive eyebrows, smiling eyes, small head tilts; never stiff.

Voice: [VOZ]; [RITMO], clear diction, perfect lip sync, no stuttering, no filler sounds, no announcer tone. She speaks these words aloud, completely and in this order, in one natural flow (spoken only, never written on screen):
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
The last word ends complete, with its final syllable, about half a second before the end of the clip; then she stays silent. She never repeats any line or word and never freezes. After the last line she [EXPRESSÃO FINAL].

Realistic skin, hair, shadows and physics; five fingers on each hand; no filters, no music, only her voice and soft room ambience. No subtitles, no captions, no text on screen.
```

###### V4 · Mockup animado (Jéssica) · Image 1 = mockup do A10 · 3–5 s · 📘
**Para quê:** um PiP curto do pote em movimento quando a fala cita o produto. É o texto literal da Jéssica [J 3.14].
```
Subtle handheld câmera, leve parallax no fundo, micro brilho no frasco, manter rótulo nítido, 3-5 segundos, produto comercial realista, outdoor bokeh, sem distorção.
```

---

##### 4. Motion control (Video 1 = BLOCO do viral)

**Regras do motion (PROMPTS-PADRAO):**
- O **bloco dita o movimento**. O prompt não descreve gesto que o bloco não tem, senão o Flow inventa movimento. Na fala vai só o tom.
- Blocos de 6, 8 ou 10 s, cortados perto de um corte do viral ou de uma pausa. Bloco com menos de 6 s: duplicar e inverter.
- Nunca começar o bloco com objeto colado na lente ou rosto em tela cheia: o 1º segundo copia o viral. Se acontecer, começar o bloco 0,5 a 1 s depois.
- Palavras: gancho ~18–20 em 8 s · corpo até (duração − 1) × 2,3 (6 s → 11 · 8 s → 16 · 10 s → 20).
- Falas **sem marcação de tempo** ("0–3 s:" trouxe legenda queimada).
- Custa ~20 créditos por geração (o Omni de 8 s custa 12).

###### M1 · Motion sem produto · Video 1 = BLOCO · Image 1 = AVATAR-CENÁRIO (ou a imagem do A5 desse take) 🧪
**Para quê:** o gancho ou um take que precisa do movimento exato do viral (no 02, o T1: ela arrumando a câmera e abrindo o queijo).
**Por que assim:**
- Abre trocando a mulher, com "do not mix or blend… bring it back to Image 1". Na E3, o rosto saiu misturado com o do viral.
- "The place in Video 1 is a different place": na E3, o carro e o teto do viral vazaram.
- "Parts of Video 1 are covered by pictures… ignore them": overlays do viral viram movimento estranho.
- Continuidade do cabelo: o cabelo pulava.
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. She must be exactly and only the woman in Image 1: [AVATAR]. Do not mix or blend her with the woman in Video 1: never show the face, hair, skin, makeup, jewelry, nail polish or body of the woman in Video 1, not even for a single frame. If her face drifts toward the woman in Video 1, bring it back to Image 1.

Her clothes come only from Image 1, exactly as she wears them there. The place behind her and the light are exactly as in Image 1. The place in Video 1 is a different place: never copy its walls, ceiling, seats, cabinets, windows, colors or any part of it. If Video 1 shows a part of the place that Image 1 does not show, create it in the same style and colors as Image 1. [SE O VIRAL TIVER OBJETO COM MARCA: The package she opens is plain, with no brand, no logo and no text.]

Video 1 is only the motion reference. Copy from it shot for shot and at the same instant: [O QUE ACONTECE NO BLOCO: the opening moment when her hand comes close to the lens to fix the framing and then moves away], the framing, distance from the lens, camera angle, any camera shake or camera move, the timing, head movements, gaze, expressions and every hand movement and gesture. Keep any jump cut exactly where Video 1 has it. Do not add, remove or reorder any movement. Parts of Video 1 are covered by pictures, screenshots, stickers or text: ignore all of them; underneath, she simply keeps talking in the same framing with small natural head and hand movements.

Continuity: her hair is always worn loose and only moves naturally with her head and hands, never jumps or teleports. The place, clothes and light stay exactly as in Image 1 in every frame; nothing changes suddenly.

Voice: [VOZ]. [RITMO]. Every word said once and clearly: no stuttering, no filler sounds, no repeated words, no announcer tone. Perfect lip sync. She says only these lines, completely, without skipping or adding words:
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
She never repeats any line or word. After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft ambience.
```

###### M2 · Motion com produto · Video 1 = BLOCO · Image 1 = base · Image 2 = FRASCO 🧪
**Para quê:** o take do viral em que ela mostra o produto dela; trocamos pelo nosso.
**Por que assim:** **tamanho, posição e movimento vêm do Video 1; a aparência vem só da Image 2.** O produto do viral é declarado como "outro produto". Se o Flow não aceitar vídeo + 2 imagens, usar só a base, já com o pote (feita no A4 ou A7).
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. She must be exactly and only the woman in Image 1: [AVATAR]. Do not mix or blend her with the woman in Video 1: never show the face, hair, skin, makeup, jewelry or body of the woman in Video 1, not even for a single frame. If her face drifts toward the woman in Video 1, bring it back to Image 1.

Her clothes and surroundings also come only from Image 1: [ROUPA], and [CENÁRIO]. The place in Video 1 is a different place: never copy its ceiling, seats, walls, colors or any part of it. If Video 1 shows a part of the place that Image 1 does not show, create it in the same style and colors as Image 1.

Video 1 is only the motion reference. Copy from it shot for shot: the handheld front-camera selfie recording, framing, distance from the lens, camera angle, camera shake and every camera move at the same instant, the timing, head movements, gaze, expressions and every hand movement and gesture, including every moment the product is shown or brought toward the lens. Keep any jump cut exactly where Video 1 has it. Do not add, remove or reorder any movement. Parts of Video 1 are covered by pictures, screenshots, stickers or text: ignore all of them; underneath, she simply keeps talking in the same framing with small natural head and hand movements.

Product: whenever Video 1 shows a bottle in her hands, replace it with the product in Image 2 attached with this prompt. Keep exactly the same size, scale, position, angle, grip and movement as the bottle in Video 1 in every frame; only its appearance changes. The bottle in Video 1 is a different product: never show its color, cap, shape or label. The product must be identical to Image 2: [PRODUTO], sharp, readable and never mirrored. Take every color and every letter only from Image 2; never invent, add, change or misspell any text or logo.

Continuity: her hair is always worn loose and only moves naturally with her head and hands, never jumps or teleports. The place, clothes and light stay exactly as in Image 1 in every frame; nothing changes suddenly.

Voice: [VOZ]. [RITMO]. Every word said once and clearly: no stuttering, no filler sounds, no repeated words, no announcer tone. Perfect lip sync. She says only these lines, completely, without skipping or adding words:
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
She never repeats any line or word. After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft ambience.
```

###### M3 · Motion com rosto travado · Video 1 = BLOCO · Image 1 = imagem do A8 · Image 2 = AVATAR ✅
**Para quê:** quando o M1/M2 sai com o rosto do viral ou misturado.
**Por que assim:** a Image 1 é o **1º quadro** ("start exactly from it") e a Image 2 só trava o rosto. Se o rosto do viral está borrado ou coberto, o Flow é mandado a mostrar o rosto nítido da Image 2.
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. Image 1 is the first frame of this video: start exactly from it. Her face must match the face in Image 2 attached with this prompt: same facial structure, eyes, nose, lips, jawline and skin texture. [AVATAR]. From the first frame her hair is her own hair as in Image 1. Never show the face, hair or identity of the woman in Video 1, not even for a single frame; if her face drifts toward the woman in Video 1, bring it back to Image 2. If her face in Video 1 is blurred or covered, that only hides her identity: always show a sharp, clear face exactly like Image 2.

Everything she wears and everything around her matches Image 1: [ROUPA], [CENÁRIO] and the product in her hand from the very first frame ([PRODUTO, se tiver]), label visible in every frame, readable and never mirrored. Never invent or change text.

Video 1 is only the motion reference. Copy from it shot for shot: the handheld front-camera selfie recording, framing, distance from the lens, camera angle, camera shake, timing, head movements, gaze, expressions and every hand movement and gesture. Do not add, remove or reorder any movement. Ignore any text in Video 1.

Voice: [VOZ]. [RITMO]. Every word said once and clearly: no stuttering, no filler sounds, no repeated words, no announcer tone. Perfect lip sync. She says only these lines, completely, without skipping or adding words:
"[FALA 1]" ([tom], stressing "[palavra]")
"[FALA 2]" ([tom], stressing "[palavra]")
She never repeats any line or word. After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft ambience.
```

###### M4 · Motion sem fala · Video 1 = BLOCO · Image 1 = base · Image 2 = AVATAR 🧪
**Para quê:** uma reação muda (tocar o rosto, olhar o pote) para PiP ou para cobrir um trecho.
**Por que assim:** boca fechada e sem som. A pele fica igual do começo ao fim, sem "rejuvenescer" no meio do clipe. ⚠️ Se a cena for um "antes" do rosto, vira antes e depois feito por IA (alegação enganosa); a decisão é do dono. Bloco curto: duplicar e inverter até 6 s e, na edição, usar só a ida.
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. Image 1 is the first frame of this video: start exactly from it. Her face and identity must match Image 2 attached with this prompt (facial structure, eyes, nose, lips), while her look stays exactly as in Image 1 in every frame: [ESTADO: pele, maquiagem, expressão]. Never show the face, hair or identity of the woman in Video 1, not even for a single frame. Her hair, clothes and the background stay exactly as in Image 1.

Video 1 is only the motion reference. Copy it shot for shot: the handheld front-camera framing, distance from the lens, camera shake, timing, head movements, gaze and every hand movement and touch. When her fingers press or move the skin, it shifts softly and settles back naturally. Do not add, remove or reorder any movement. Ignore any text or sticker in Video 1.

Continuity: hair only moves naturally with her head and hand, never jumps; skin texture stays the same from start to end, with no smoothing, aging or rejuvenation during the clip; the background and light never change.

She does not speak at all: mouth closed, lips still, only slow natural breathing and a soft blink. No voice, no music, no sound effects.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats or changes shape. Five fingers on each hand. No on-screen text, captions or stickers.
```

---

##### 5. Problema → o que fazer

| Problema | O que fazer |
|---|---|
| Legenda queimada pelo Flow | Conferir take a take antes de montar. Se cair no rosto ou no pote, refazer o take; se não, o Claude cobre na edição |
| Rosto do viral ou mistura das duas (motion) | M1/M2 já abrem com "Replace the woman". Se continuar: A8 + M3 |
| Fundo, teto ou parede do viral vazaram | "The place in Video 1 is a different place" (motion) ou o item de fundo do A5. Se continuar: A8 |
| Pote com outro tamanho, cor ou letra inventada | Rodar de novo com a base + FRASCO. Errou duas vezes: PiP do pote real por cima |
| Rótulo espelhado | Rodar de novo com a base + FRASCO |
| Ela repetiu a última frase | Sobrou tempo no clipe: completar a fala até ~0,5 s do fim ou encurtar o take |
| Última palavra cortada | Tirar palavras ou subir a duração do take |
| Fala atropelada ou gaguejada | Tirar palavras e usar o [RITMO] calmo |
| Gancho lento ou sem graça | [RITMO] de gancho, 17 a 20 palavras em 6 a 8 s |
| Vídeo "morto" | Conferir a linha "lively and expressive… never stiff" e o [RITMO] |
| Apareceu tripé, celular ou braço | Tirar do prompt qualquer palavra de equipamento |
| Objeto sumiu ou flutuou | Uma ação só para a mão ocupada; "stays in her hand in every frame" |
| A edição da imagem mudou a câmera | A edição não muda câmera: recortar a imagem ou dar zoom no CapCut |
| Saiu outra sala | Descrever o fundo como ele é na base, não como deveria ser |
| Flow não aceita vídeo + 2 imagens | Só a base, que já tem o produto |
| O 1º segundo copia o viral | O bloco começa com objeto na lente: começar 0,5 a 1 s depois |


### Apêndice · prompts das skills originais (SUBSTITUÍDOS pelo PROMPTS-FLOW acima · só consulta, não usar para gerar)

### Da fonte `cenas-ugc-ia` · Passos 2 e 3 · modos CRIAR e EDITAR, prompt de vídeo (linhas 47–88)

##### Passo 2 · Imagens (Flow → imagem · Nano Banana Pro · 2 saídas)
Cabeçalho de cada imagem: `IMG-NN · takes X–Y · modo CRIAR ou EDITAR · anexos: Image 1 = AVATAR · Image 2 = print do vídeo [A/B/C] em [mm:ss] · Image 3 = FRASCO (só se o produto aparecer)`.

###### Modo CRIAR
```
Vertical 9:16, handheld smartphone selfie framing seen from the front camera's point of view. Slight wide-angle phone lens (subtle 0.5x feel) that enhances foreground depth. Imperfect handheld framing that feels like an authentic everyday moment.

The woman is the woman in Image 1 attached with this prompt: [AVATAR]. She wears [ROUPA].

Image 2 attached with this prompt gives only the framing, camera angle, distance from the lens, composition and body position. Nothing else from Image 2 appears: not the person, not the clothes, not the place, not any product, not any text.

Scene: [ONDE ELA ESTÁ E O QUE FAZ].
Hands: [O QUE CADA MÃO FAZ].
Focus: [O QUE FICA MAIS PERTO DA CÂMERA].
[SÓ SE O PRODUTO APARECER: The product in her hand is exactly the product in Image 3 attached with this prompt: the same shape, proportions, colors and every printed letter ([TEXTO DO RÓTULO] and all other text exactly as in Image 3), label facing the camera, sharp, readable and not mirrored, at a natural size in an adult hand.]

She looks at the camera. Everything is natural and properly grounded: no distortion, no floating objects. Her real everyday surroundings behind her. Natural daylight, bright realistic colors (rich but not oversaturated), clear separation between her and the background, raw authentic social-media look. Hands clean and natural, five fingers on each hand. No text, captions, stickers or watermark.
```

###### Modo EDITAR (abrir a imagem → editar)
```
Edit the image being edited. Change only: [A MUDANÇA]. The woman's face, hair, earrings, clothes and the place are exactly as they are in this image. [SE TROCAR A ROUPA: She now wears [NOVA ROUPA]; her face, hair and identity are exactly the same.] Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand. No text or watermark.
```
Escolher a saída com o rosto mais fiel e o rótulo legível.

##### Passo 3 · Vídeos (Flow → vídeo a partir de imagem · Omni · 9:16 · duração do take)
Cabeçalho de cada take: `TAKE N · Ys · [gancho/corpo/CTA] · anexos: Image 1 = IMG-NN · Image 2 = FRASCO (só se o produto aparecer)`.
```
Image 1 attached with this prompt is the first frame. Animate it as a handheld front-camera selfie: the same woman, clothes, place and light as in Image 1 in every frame. The phone stays in her hand at the same distance, with only a subtle natural hand shake; no zoom, no camera moves, no cuts.

Action: [O QUE ELA FAZ ENQUANTO FALA, EM 1 LINHA].
[SÓ SE O PRODUTO APARECER: The bottle in her hand is exactly the product in Image 2 attached with this prompt in every frame: same shape, colors and printed text, label readable and never mirrored, firmly held, never floating.]

Voice: [VOZ]. Clear, continuous and fluent speech with perfect lip sync: no stuttering, no filler sounds, no repeated words, no announcer tone. She says only these lines, completely, without skipping or adding words:
[0–X s (tom, stressing "palavra"): "fala"]
She never repeats any line or word. She never freezes: natural head movements, blinks, expressive facial reactions and fluid hand movements until the last frame. After the last line she smiles at the camera, lips closed.

Realism: consistent face and background, realistic shadows and physics, stable light and exposure, natural conversational delivery. No robotic movement, no monotone voice, no filters, no distortion. No on-screen text, captions or music; only her voice and soft ambience.
```
- Gancho: tom mais enérgico e solto ("playful, punchy, big rises and falls in intonation").
- Se o Flow tiver Personagens: criar a avatar como personagem (imagem + nome + voz) e usar o mesmo em todos os takes, para a voz não mudar.

### Da fonte `cenas-ugc-ia` · valores de exemplo (linhas 116–fim)

##### Valores de exemplo (@dicasdamalu8)
- **[AVATAR]:** the same face, facial structure, eyes, nose, lips, age (late 40s), skin with visible pores, faint freckles and fine lines, dark brown wavy hair with grey strands worn loose just below the shoulders, small gold hoop earrings, no rings, no necklace
- **[VOZ]:** Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky, intimate and friendly like talking to a close friend
- **[PRODUTO]:** Zencial Envy Skin GHK-Cu: clear cylindrical glass dropper bottle, 30 ml, translucent blue liquid, brushed-silver label with large black "GHK-Cu" and lowercase "zencial"
- **Linha vermelha:** P-ZENCIAL-GHK-CU §14 · trocas seguras em `COPYS-VIRAIS-ZENCIAL-GHKCU.md`

### Da fonte `modelagem-ugc-ia` · 5.1, 5.2 e 6.1 (modelo v6) (linhas 77–125)

###### 5.1 · Editar o print (Image 1 = AVATAR ou a 1ª imagem gerada)
```
Edit the image being edited. Change only these three things:

1. The person: replace the person with the woman in Image 1 attached with this prompt. She is exactly the woman in Image 1: [AVATAR], and the same clothes as in Image 1. She takes exactly the person's place: the same body position, head position and tilt, gaze, expression and the same position of the arms, hands and fingers. Nothing of the original person remains: not the face, hair, skin, clothes or accessories.

2. The background: [1ª IMAGEM: a bright, real [CENÁRIO], seen from this camera angle | SEGUINTES: the room behind her is the room in Image 1 ([A SALA COMO ELA É NA IMAGE 1]), seen from this camera angle]. No objects from the original room remain.

3. Remove all captions, subtitles and any on-screen text.

Everything else is exactly as it is in this image: the framing, camera angle, distance from the lens, composition, the table and every object on the table or in her hands, in the same place, size, angle and appearance.

Photorealistic smartphone frame, natural skin with visible pores, no beauty filter, no smoothing, natural daylight. Hands clean and natural, five fingers on each hand. Vertical 9:16. No watermark.
```

###### 5.2 · Editar a base (uma mudança · com produto: Image 1 = PRODUTO)
```
Edit the image being edited. Change only: [A MUDANÇA]. [SÓ COM PRODUTO: The product is exactly the product in Image 1 attached with this prompt: the same shape, proportions, colors and every printed letter ([TEXTO DO RÓTULO] and all other text exactly as in Image 1), label facing the camera, sharp, readable and not mirrored, firmly held. Size: [TAMANHO REAL EM RELAÇÃO À MÃO]. It looks like a real object photographed with this phone, not pasted in and not a 3D render: natural reflections of the room light, realistic transparency and depth, a soft natural shadow from her fingers, correct perspective and scale for her hand, and the same light, color, grain and sharpness as the rest of the photo.] The woman's face, hair, earrings, clothes, expression, the room, the framing and the light are exactly as they are in this image. Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand. No text or watermark.
```
Close de rosto: gerar a imagem já em close (selfie); a edição não aproxima a câmera.

##### Etapa 6 · Vídeos (Flow → vídeo a partir de imagem · Omni · 9:16)
Tudo no **mesmo projeto do Flow** (mesma voz; se houver Personagem, usar). O **1º take** valida voz, ritmo e rosto; depois o resto. Errou: o dono avisa, o Claude ajusta **só aquele take** e grava a regra.

###### 6.1 · Modelo v6 (completo, preencher os colchetes)
```
No subtitles, no captions, no on-screen text of any kind at any moment.

Image 1 attached with this prompt is the first frame. Animate it as [CÂMERA] with exactly the same framing, the same woman, clothes, place and light in every frame. [MOVIMENTO] Nothing that is not in Image 1 appears.

Action: [UM GESTO LIGADO A UMA PALAVRA]. [VIDA]

[SÓ COM PRODUTO: The [PRODUTO] is exactly the product in Image 2 attached with this prompt in every frame: same shape, colors and printed text, label readable and never mirrored, firmly held, never floating, real [MATERIAL] that reflects the light naturally. Size: [TAMANHO REAL EM RELAÇÃO À MÃO]; it keeps exactly the size it has in Image 1 relative to her hand and face in every frame, with natural depth and perspective; it never grows or shrinks.]
[SÓ COM OBJETO DE CENA (boneco, cabeça, manequim): The [OBJETOS] are lifeless solid objects: they never move, blink or talk, and never change shape or position unless her hand touches them.]

Voice: [VOZ]; [TOM]. Clear diction, perfect lip sync, no stuttering, no filler sounds, no announcer tone.[PRONÚNCIA] She speaks these words aloud, completely and in this order, in one natural flow (spoken only, never written on screen):
"[FALA 1]" ([TOM DO TRECHO], stressing "[PALAVRA]")
"[FALA 2]" ([TOM DO TRECHO], stressing "[PALAVRA]")
The last word ends complete, with its final syllable, about half a second before the end of the clip; then she stays silent with a natural expression. She never repeats any line or word and never freezes. After the last line she [REAÇÃO], lips closed.

Realistic skin, hair, shadows and physics; five fingers on each hand; no filters, no music, only her voice and soft room ambience. No subtitles, no captions, no text on screen.
```
**Valores:**
- `[CÂMERA]` + `[MOVIMENTO]`: câmera parada → `a front-camera video` + `The camera does not move: no zoom, no camera moves, no cuts.` · selfie → `a handheld front-camera selfie` + `with only a subtle natural hand shake: no zoom, no camera moves, no cuts.`
- `[VIDA]`: mãos livres → `She is lively and expressive the whole time: expressive eyebrows, smiling eyes, small head tilts and nods, natural hand gestures and a little body movement while she talks; never stiff.` · uma mão com produto → `…small head tilts and nods and a little body movement; only her free hand gestures, and the hand holding the [PRODUTO] keeps holding it; never stiff.` · as duas mãos ocupadas → `Her face is lively and expressive while she talks: expressive eyebrows, smiling eyes, small head tilts and nods; her hands stay exactly in their position; never stiff.`
- `[TOM]`: gancho → `Playful, sassy and confiding, like telling her best friend a secret about something outrageous: energetic and expressive, quick natural pace, punchy delivery with big rises and falls in intonation` ✅ · corpo → `lively and warm, like excitedly telling a close friend about something she loves: energetic smiling voice, quick natural pace, big natural rises and falls in intonation`
- `[PRONÚNCIA]`: ` She clearly says the word "X".` · ` She pronounces "GHK-Cu" as "gê-agá-cá-cobre".` · números por extenso.
- **Falas sem marcação de tempo** ("0–3 s:" parece roteiro de legenda e trouxe legenda queimada). Última fala termina em ponto, não em reticências.

### Da fonte `modelagem-ugc-ia` · valores de exemplo (linhas 327–fim)

##### Valores de exemplo (@dicasdamalu8)
- `[AVATAR]`: the same face, facial structure, eyes, nose, lips, age (late 40s), skin with visible pores, faint freckles and fine lines, the same dark brown wavy hair with grey strands worn loose just below the shoulders, the same small gold hoop earrings, no rings, no necklace
- `[VOZ]`: Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky
- `[PRODUTO]` Zencial GHK-Cu: clear glass dropper bottle with translucent blue liquid, silver label with large black "GHK-Cu" and lowercase "zencial" · `[TAMANHO REAL]`: a small 30 ml dropper bottle, about as tall as her index finger is long and smaller than her palm
- Linha vermelha: `P-ZENCIAL-GHK-CU` §14 · trocas seguras em `COPYS-VIRAIS-ZENCIAL-GHKCU`
- Exemplo completo: `ROTEIROS/ROTEIRO-ZENCIAL-GHKCU-07.md` (E7 "bonecos")

### Da fonte `esteira-ugc-avatar` · modelos de prompt (linhas 228–229)

##### Modelos de prompt

### Da fonte `esteira-ugc-avatar` · modelos 1 a 10 (linhas 244–400)

###### 1 · Criar avatar (retrato, sem foto de pessoa real)
Depois, transformar em ficha de 3 painéis: corpo de frente, de costas e close do rosto.
```
CHARACTER PORTRAIT PROMPT (fill in the brackets)

Goal: one realistic portrait of a brand-new, entirely fictional adult character. Do not resemble any real person, celebrity or creator.

Character:
- Age: [age range, adult]
- Ethnicity / look: [e.g. Brazilian, light-brown skin]
- Face: [face shape], [one distinctive detail: small mole on left cheek / faint freckles / slightly uneven eyebrows]
- Hair: [length, texture, color, how it falls]
- Eyes: [color and feel]
- Expression: [e.g. relaxed, slight smile, looking at the camera]
- Makeup: [none / light / natural]
- Build: [build]

Outfit:
- Plain [color] top, [neckline], no patterns

Camera:
- Vertical 9:16
- Head and shoulders, centered, eye level

Setting:
- Plain white wall behind them
- Soft, even daylight, no harsh shadows

Style:
- Looks like a real smartphone photo, not AI
- Natural skin texture with pores and small imperfections, no smoothing or filters

Output: one sharp portrait against the white wall.
```

###### 2 · Esqueleto novo: mesma base, troca a roupa e um detalhe do fundo (abrir a base → editar, sem anexo)
```
Edit the image being edited. Keep EXACTLY the same woman (face, age, skin, hair, earrings), framing, camera angle, pose, hands, gaze, expression, light, car interior and street outside.

Change ONLY:
1. Clothing: she wears [ROUPA NOVA].
2. [DETALHE NOVO NO FUNDO]

Nothing else changes. Photorealistic smartphone selfie, natural skin with visible pores, no beauty filter, no smoothing, no watermark. Vertical 9:16.
```

###### 3 · Print do viral → avatar sem produto (Image 1 = esqueleto)
```
Edit the image being edited. Keep EXACTLY the same framing, camera angle, distance from the lens, front-camera selfie perspective, head position and tilt, shoulders, hand position, gaze, expression and the natural light.

Change ONLY these elements, copying them from the image attached with this prompt (Image 1):
1. The woman: the same woman as in Image 1. [AVATAR].
2. Clothing: [ROUPA], exactly as in Image 1.
3. Scene: [CENÁRIO] exactly as in Image 1, adapted to this camera angle.
4. Remove all on-screen text, stickers, comment bubbles and app interface.

Nothing else changes. Photorealistic smartphone selfie, natural skin, no beauty filter, no smoothing, no watermark. Vertical 9:16. Five fingers on each hand.
```

###### 4 · Print do viral → avatar + produto (Image 1 = base sem produto · Image 2 = FRASCO)
```
Edit the image being edited. Keep EXACTLY the same framing, camera angle, distance from the lens, pose, hand positions, pointing finger, gaze, expression and natural light.

Change ONLY:
1. The woman, her clothing and the scene: identical to Image 1 attached with this prompt ([AVATAR], [ROUPA], [CENÁRIO]).
2. The product in her hand: replace it with the product in Image 2 attached with this prompt. [PRODUTO]. Colors, cap and label exactly as in Image 2, label facing the camera, sharp, readable and not mirrored. Do not invent, change or misspell any text.
3. Remove all on-screen text, captions and app interface.

Nothing else changes. Same photographic style, natural skin, no beauty filter, no watermark. Vertical 9:16. Two hands, five fingers on each.
```

###### 5 · Outro cenário do mesmo viral (Image 1 = base do cenário anterior)
```
Edit the image being edited. Keep EXACTLY the same framing, camera angle, distance from the lens, front-camera selfie perspective, head position and tilt, shoulders, hand positions, gaze, expression, the position of every object in the scene and the natural light.

Change ONLY these elements, copying them from the image attached with this prompt (Image 1):
1. The woman: the same woman as in Image 1. [AVATAR].
2. Clothing: [ROUPA], exactly as in Image 1.
3. Scene: the same place as in Image 1 ([CENÁRIO]), with every object visible in this shot matching that same place.
4. Remove all on-screen text, stickers and app interface.

Nothing else changes. Photorealistic smartphone selfie, natural skin, no beauty filter, no smoothing, no watermark. Vertical 9:16. Two hands, five fingers on each.
```

###### 6 · Base do 1º quadro do bloco com rosto travado (abrir o 1º quadro do bloco · Image 1 = AVATAR rosto · Image 2 = base com roupa, cenário e produto) ✅
```
Edit the image being edited. Keep EXACTLY the same framing, camera angle, distance from the lens, pose, hand positions, the position and angle of any object in her hands, gaze, expression and natural light.

Change ONLY:
1. The woman: replace her completely. Her face must be exactly the face in Image 1 attached with this prompt (same facial structure, eyes, nose, lips, jawline, age, skin texture). [AVATAR]. Nothing of the original woman's face or hair remains.
2. Clothing, scene and product: identical to Image 2 attached with this prompt ([ROUPA], [CENÁRIO], [PRODUTO]), label visible, readable and not mirrored. Do not invent or change any text.
3. Remove all on-screen text, captions and app interface.

Nothing else changes. Photorealistic smartphone selfie, natural skin, no beauty filter, no smoothing, no watermark. Vertical 9:16. Five fingers on each hand.
```

###### 7 · Take sem produto (Video 1 = bloco · Image 1 = base). Também é o modelo das variações de gancho, com o bloco T1 e `[RITMO]` de gancho.
```
Video 1 is the motion reference. Recreate it shot for shot: same handheld front-camera selfie recording, same framing, distance from the lens and camera angle, same camera shake, and every camera move at the same instant (phone raised, lowered, tilted, re-framed or brought closer), always showing the same parts of the scene as Video 1. Same timing, head movements, gaze, expressions and every hand movement and gesture. Keep any jump cut exactly where Video 1 has it. Do not add, remove or reorder any movement. Parts of Video 1 are covered by pictures, screenshots, stickers or text: ignore all of them; underneath, she simply keeps talking in the same framing with small natural head and hand movements.

Only the elements change, and they must match Image 1 attached with this prompt in every frame: [AVATAR], [ROUPA], and [CENÁRIO].

Continuity: from the first frame, her hair, pose and framing follow Video 1 naturally; if Image 1 shows her hair in a different position, adapt it smoothly and keep it consistent. Hair only moves naturally with her head and hands, never jumps or teleports. The background, car, clothes and light stay exactly the same in every frame; nothing changes suddenly.

Voice: [VOZ]. [RITMO] Perfect lip sync. She says only these lines, completely, without skipping or adding words:
[FALAS]
After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft car ambience.
```

###### 8 · Take com produto (Video 1 = bloco · Image 1 = base com produto · Image 2 = FRASCO)
```
Video 1 is the motion reference. Recreate it shot for shot: same handheld front-camera selfie recording, same framing, distance from the lens and camera angle, same camera shake, and every camera move at the same instant (phone raised, lowered, tilted, re-framed or brought closer), always showing the same parts of the scene as Video 1. Same timing, head movements, gaze, expressions and every hand movement and gesture, including every moment the product is shown or brought toward the lens. Keep any jump cut exactly where Video 1 has it. Do not add, remove or reorder any movement. Parts of Video 1 are covered by pictures, screenshots, stickers or text: ignore all of them; underneath, she simply keeps talking in the same framing with small natural head and hand movements.

Only the elements change, and they must match the images attached with this prompt in every frame: [AVATAR] as in Image 1, [ROUPA], and [CENÁRIO].

Product: the product in her hand is the product in Image 2: [PRODUTO]. Colors and text exactly as in Image 2, identical in every frame; the label always reads correctly, never mirrored. Never invent or change text.

Continuity: from the first frame, her hair, pose and framing follow Video 1 naturally; if Image 1 shows her hair in a different position, adapt it smoothly and keep it consistent. Hair only moves naturally with her head and hands, never jumps or teleports. The background, car, clothes and light stay exactly the same in every frame; nothing changes suddenly.

Voice: [VOZ]. [RITMO] Perfect lip sync. She says only these lines, completely, without skipping or adding words:
[FALAS]
After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft car ambience.
```

###### 9 · Take com rosto travado (Video 1 = bloco que começa no plano médio · Image 1 = base do modelo 6 · Image 2 = AVATAR rosto; se o Flow deixar, marcar os três com @ no fim) ✅
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. Image 1 is the first frame of this video: start exactly from it. Her face must match the face in Image 2 attached with this prompt: same facial structure, eyes, nose, lips, jawline and skin texture. [AVATAR]. From the first frame her hair is her own hair as in Image 1. Never show the face, hair or identity of the woman in Video 1, not even for a single frame; if her face drifts toward the woman in Video 1, bring it back to Image 2. If her face in Video 1 is blurred or covered, that only hides her identity: always show a sharp, clear face exactly like Image 2.

Everything she wears and everything around her matches Image 1: [ROUPA], [CENÁRIO] and the product in her hand from the very first frame ([PRODUTO]), label visible in every frame, readable and never mirrored. Never invent or change text.

Video 1 is only the motion reference. Copy from it shot for shot: the handheld front-camera selfie recording, framing, distance from the lens, camera angle, camera shake, timing, head movements, gaze, expressions and every hand movement and gesture. Do not add, remove or reorder any movement. Ignore any text in Video 1.

Voice: [VOZ]. [RITMO] Perfect lip sync. She says only these lines, completely, without skipping or adding words:
[FALAS]
After the last line she stays silent until the end, lips closed, natural expression.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats, changes shape or passes through anything. Five fingers on each hand. No on-screen text, captions, stickers or overlays, no music; only her voice and soft car ambience.
```

###### 10 · Take sem fala, para PiP ou reação (Video 1 = bloco · Image 1 = base · Image 2 = AVATAR rosto) 🧪
⚠️ Se a cena for um "antes" do rosto, é antes e depois feito por IA, o que conta como alegação enganosa. Avisar em 1 linha; a decisão é do dono. Bloco curto: duplicar e inverter até 6 s. Na edição, usar só a parte de ida.
```
Replace the woman in Video 1 with the woman in Image 1 attached with this prompt, from the very first frame to the last. Image 1 is the first frame of this video: start exactly from it. Her face and identity must match Image 2 attached with this prompt (facial structure, eyes, nose, lips), while her look stays exactly as in Image 1 in every frame: [ESTADO: pele, maquiagem, expressão]. Never show the face, hair or identity of the woman in Video 1, not even for a single frame. Her hair, clothes and the background stay exactly as in Image 1.

Video 1 is only the motion reference. Copy it shot for shot: the handheld front-camera framing, distance from the lens, camera shake, timing, head movements, gaze and every hand movement and touch. When her fingers press or move the skin, it shifts softly and settles back naturally. Do not add, remove or reorder any movement. Ignore any text or sticker in Video 1.

Continuity: hair only moves naturally with her head and hand, never jumps; skin texture stays the same from start to end, with no smoothing, aging or rejuvenation during the clip; the background and light never change.

She does not speak at all: mouth closed, lips still, only slow natural breathing and a soft blink. No voice, no music, no sound effects.

Realism: authentic unedited smartphone footage, natural skin, no beauty filter, no cinematic look. Real physics: nothing appears, disappears, floats or changes shape. Five fingers on each hand. No on-screen text, captions or stickers.
```

## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-pacote-da-modelagem.md` | O que chega do Didi e do Ronaldinho | O ponto de partida |
| `exemplos/GERA-KIT-MG1.md` | O KIT real do MG1: F1, F2, OV1–OV3 e os 16 prompts de vídeo | Modo base única |
| `exemplos/GERA-KIT-MG2.md` | O KIT real do MG2: IMG-A/B/C, T1 motion e os 15 prompts Omni | Modo print por take, com motion |
| `exemplos/GERA-QA-1-e-QA-2.md` | Como responder a conferência | O padrão do G3 |
