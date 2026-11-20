# SKILL `gerar-no-flow` · Rivellino (C01) · Bebeto (C02) · Kaká (C03) · FLOW (funcionários da Produção)

v1 · 14/11/2026 · origem: a ordem de geração e os problemas comuns da `cenas-ugc-ia` (Passo 4), da `modelagem-ugc-ia` (Etapa 6 e "Problemas comuns") e da `esteira-ugc-avatar` (§4, Aprendizados e Problemas comuns), mais a §5 do `PROMPTS-FLOW` ("Problema → o que fazer"). Todos na seção 6. **A mesma skill para os três;** muda só a conta e o KIT da avatar.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `gerar-no-flow` |
| Agente | Rivellino · FLOW-C01 · Bebeto · FLOW-C02 · Kaká · FLOW-C03 (funcionários da Produção, respondem ao Ronaldo) |
| Gatilho | KIT do ângulo pronto para a conta dele · o Ronaldo pede refação de um take · ganchos novos de um corpo que validou |
| Não usar quando | O KIT não passou pelo Ronaldo · a conta não é a dele |
| Ferramentas | Navegador logado na conta Google do Flow daquela conta do TikTok · leitura de imagem e vídeo · ffprobe (duração) |
| Escreve em | `05-VIDEOS/{MATRIZ}/imagens/` · `{ÂNGULO}/takes/` · `{ÂNGULO}/LOG-FLOW.md` · células "gerado" da `MATRIZ.md` |

**Se o OpenClaw não conseguir operar o Flow pelo navegador:** o funcionário monta o "pacote de colagem" (para cada geração: onde clicar no Flow, o que abrir, os anexos na ordem e o prompt completo) e o dono cola e clica. O QA continua dele.

## 2. Recebe
- Do Ronaldo: `KIT.md` do ângulo + os arquivos para anexar (AVATAR, CEN-…, FRASCO, PRINT-…, BLOCO-…).
- Do KIT da conta: `02-CONTAS/{CONTA}/KIT/` (AVATAR, CEN-*, VOZ.md).
- Exemplo: `exemplos/RECEBE-KIT.md`.

## 3. Lê antes
`KIT.md` inteiro · `01-BASE/PROMPTS-FLOW.md` §0 (mapa) e §5 (problemas) · o `LOG-FLOW.md` das gerações anteriores da conta (erros que viraram regra).

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| Imagens geradas (a saída com o rosto mais fiel e o rótulo legível) | `{MATRIZ}/imagens/IMG-{NN}.png` | Ronaldo (QA-1) |
| 1º take (T01) **antes de todo o resto** | `{ÂNGULO}/takes/T01.mp4` | Ronaldo (QA-2) → Pelé → ✋ G3 |
| Todos os takes, renomeados (`T01…T16`, `T01-G2`, `T00-G3`…) | `{ÂNGULO}/takes/` | Romário |
| LOG: o que gerou, quantas vezes, créditos, o que errou e a regra nova | `{ÂNGULO}/LOG-FLOW.md` | Ronaldo · Sócrates (custo) |
Exemplos: `exemplos/GERA-LOG-FLOW-MG1.md` (o status e log real do 1º vídeo).

## 5. Regras da máquina
1. **Ordem fixa:** imagem 1 → QA-1 → T01 → QA-2 e ✋ G3 → as outras imagens → os outros takes → os ganchos. Nada depois do T01 antes do G3.
2. **Tudo do mesmo vídeo no mesmo projeto do Flow** (mantém a voz). Se o Flow tiver Personagem, usar o da conta em todos os takes.
3. **Colar o prompt inteiro**, exatamente como está no KIT. Nunca editar o texto; se precisar, pedir ao Ronaldo.
4. **Anexos na ordem do KIT** (Image 1, Image 2, Video 1). Imagem aberta no "editar" não conta como anexo.
5. **1 render por take**; refazer só o que falhar, e só depois de dizer ao Ronaldo o que falhou.
6. **Conferir cada take antes de entregar:** duração, fala inteira (contra a copy), última palavra completa, rosto, pote idêntico, **legenda queimada** (o Flow queima mesmo com "No subtitles": no MG1 queimou em 4 de 16 takes). Legenda em cima do rosto ou do pote: refazer; fora deles: o Romário cobre.
7. **Renomear** pelo número do take do KIT ao baixar (o Flow baixa com nomes longos). Arquivo repetido ou take faltando: conferir antes de mandar ao Romário.
8. **Créditos:** anotar no LOG o gasto por geração e somar antes de começar (corpo de 16 takes ≈ 200 créditos de vídeo + imagens e refações). Capacidade vista na prática: ~16 gerações por dia, somando todas as contas [`esteira-ugc-avatar` §4].
9. **Cada erro vira regra** no LOG (o que errou → por quê → a regra nova) e o Ronaldo leva para o `ROTEIRO.md`.

## 6. Procedimento integral
### Da fonte `cenas-ugc-ia` · Passo 4 · ordem de geração (linhas 89–93)

##### Passo 4 · Ordem de geração
1. As imagens.
2. O take 1: validar voz, ritmo e rosto.
3. Os outros. Refazer só o que falhar.

### Da fonte `modelagem-ugc-ia` · Etapa 6 · vídeos no mesmo projeto (linhas 98–100)

##### Etapa 6 · Vídeos (Flow → vídeo a partir de imagem · Omni · 9:16)
Tudo no **mesmo projeto do Flow** (mesma voz; se houver Personagem, usar). O **1º take** valida voz, ritmo e rosto; depois o resto. Errou: o dono avisa, o Claude ajusta **só aquele take** e grava a regra.

### Da fonte `esteira-ugc-avatar` · §4 · takes, créditos e capacidade (linhas 147–153)

##### 4. Takes
Flow → vídeo → elementos · Omni Flash · 9:16 · 720p · 1 render. Modelos 7 a 10.
- Gerar o T1 primeiro, para validar o prompt.
- Refazer só o take que falhar.
- ~20 créditos por geração de até 10 s. Somar as gerações antes de começar.
- **Capacidade:** ~16 gerações por dia, contando todas as contas.

### Da fonte `esteira-ugc-avatar` · Aprendizados (linhas 194–208)

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

### Da fonte `cenas-ugc-ia` · Problemas comuns (linhas 105–115)

##### Problemas comuns
| Problema | O que fazer |
|---|---|
| Repetiu a última frase | Sobrou tempo: completar a fala até ~1 s do fim ou baixar a duração |
| Gaguejou ou atropelou | Tirar palavras ou subir a duração (~2,5 palavras/s) |
| Ficou parada no fim | Conferir "She never freezes" e a fala até ~1 s do fim |
| Produto flutuando ou trocado | Rodar de novo; usar uma imagem com o frasco já na mão |
| Rótulo espelhado ou com letra inventada | Rodar de novo; se insistir, PiP do frasco real |
| Rosto mudou entre takes | Mesma IMG como base; personagem do Flow |
| Voz mudou entre takes | Mesmo projeto, mesmo personagem, mesma descrição de voz |

### Da fonte `modelagem-ugc-ia` · Problemas comuns (aprendidos) (linhas 307–326)

##### Problemas comuns (aprendidos)
| Problema | Regra |
|---|---|
| Imagem nova copiou a anterior | Não CRIAR com a anterior anexada: editar o print ou a base |
| Mexeu em objeto do print | Editar o print trocando só pessoa e fundo; o resto "exactly as it is" |
| Fundo diferente entre imagens | Descrever a sala como ela é na imagem gerada |
| Produto grande ou pequeno demais | Tamanho real em relação à mão, na imagem e no vídeo; "keeps exactly the size it has in Image 1" |
| Produto colado ou com cara de render | Bloco de realismo do produto (reflexo, profundidade, sombra dos dedos, mesma luz e grão) |
| Apareceu tripé, celular ou braço | Nunca nomear equipamento; "Nothing that is not in Image 1 appears" |
| Legenda queimada no vídeo | Proibir no começo e no fim do prompt; falas sem marcação de tempo; "spoken only, never written on screen". Se vier na borda, zoom leve na montagem corta |
| Cortou a última palavra | Duração pela regra de tempo; "the last word ends complete… about half a second before the end" |
| Repetiu palavra, gaguejou, pausou | Sobra de tempo grande: encher com fala natural ou encurtar; na montagem, cortar |
| Pulou uma palavra | "She clearly says the word X"; se pulou mesmo, regerar |
| Apontou para o objeto errado | Um gesto por take; imagem já apontando para o objeto certo; nomear posição e aparência e para onde ela nunca aponta |
| Objeto sumiu da mão | Mão ocupada = uma ação só; "stays in her hand in every frame" |
| Vídeo "morto" | Linha de [VIDA] + [TOM] animado em todo take |
| Boneco/manequim se mexeu | "lifeless solid objects… never move, blink or talk" |
| Rótulo torto em poucos segundos | PiP do produto real na edição, sem gerar de novo |
| Arquivo repetido ou take faltando na montagem | Conferir md5 e a transcrição antes de montar; avisar o dono |

### Da fonte `esteira-ugc-avatar` · Problemas comuns (linhas 401–fim)

##### Problemas comuns
| Problema | O que fazer |
|---|---|
| Ficou o rosto do viral | Bloco começando no plano médio + modelo 6 + modelo 9. Se continuar, borrar o rosto no bloco |
| O 1º segundo copia o viral (cabelo, frasco sem rótulo) | O bloco começa com objeto na lente ou em close: começar 0,5 a 1 s depois |
| Cabelo pula ou fundo muda | Conferir o parágrafo de continuidade; rodar de novo |
| Ela vestiu a jaqueta | Rodar de novo; se insistir, tirar a jaqueta do prompt |
| Rótulo espelhado ou com letra inventada | Rodar de novo com base + FRASCO |
| Flow não aceita vídeo + 2 imagens | Só a base, que já tem o produto |
| Fala atropelada, cortada ou gaguejada | Tirar palavras (orçamento) e usar o `[RITMO]` calmo |
| Gancho lento ou sem graça | Até ~2,8 palavras/s com o `[RITMO]` de gancho |
| Movimento estranho sob overlay do viral | Cortar na edição |
| Bloco do viral com menos de 6 s | Duplicar e inverter a cópia |

### Da fonte `01-BASE/PROMPTS-FLOW.md (vigente, 12/11)` · §5 · problema → o que fazer (linhas 452–fim)

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


## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-KIT.md` | O que chega do Ronaldo e o que separar antes de abrir o Flow | O ponto de partida |
| `exemplos/GERA-LOG-FLOW-MG1.md` | O status e log real do V-C01-MG-E01-MG1-G1 | O padrão do LOG |
