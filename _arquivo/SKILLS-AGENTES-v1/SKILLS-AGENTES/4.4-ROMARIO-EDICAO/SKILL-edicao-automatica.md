# SKILL `edicao-automatica` (+ `qa-takes`, `qa-final`, `versoes-gancho`) · Romário · EDIÇÃO (funcionário da Produção)

v1 · 14/11/2026 · origem: o `EDICAO-README.md` v3 e os 5 scripts (testados: reproduzem o V-C01-MG-E01-MG1-G1 de 1:56 e montam versão com gancho empilhado), a montagem automática da `modelagem-ugc-ia` (Etapa 7, com o `ugc_tools.py`), a edição da `esteira-ugc-avatar` (§5) e da `cenas-ugc-ia` (Passo 5). Todos na seção 6; os scripts em `ferramentas/`.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `edicao-automatica` · `qa-takes` · `qa-final` · `versoes-gancho` |
| Agente | Romário · EDIÇÃO (funcionário da Produção, responde ao Ronaldo) |
| Gatilho | Takes de um ângulo entregues pelo Flow (corpo + ganchos) · o Sócrates pede uma versão nova com gancho já gerado |
| Não usar quando | Faltam takes ou o T01 não passou no G3 |
| Ferramentas | Python 3 (numpy, Pillow com raqm) · ffmpeg com libass, libx264, delogo, loudnorm · fontes Poppins Bold, Noto Color Emoji, DejaVu Sans Bold · Whisper, se houver (conferir fala) |
| Escreve em | `05-VIDEOS/{MATRIZ}/{ÂNGULO}/edicao/` (e `edicao-G{n}/`) · `{ÂNGULO}/final/` · rascunho do `POST.md` |

## 2. Recebe
- Do Flow: `{ÂNGULO}/takes/T01.mp4 … T16.mp4`, `T01-G2.mp4`, `T00-G3.mp4`…
- Do Ronaldo (KIT §5): os pop-ups (take, palavra que dispara, tipo, fonte, posição) e as inserções OV geradas.
- Da Pesquisa: print da página **só com avaliações e a foto do pote** (nunca preço).
- Exemplo: `exemplos/RECEBE-takes-e-popups-MG1.md`.

## 3. Lê antes
`ROTEIRO.md` (a fala exata de cada take: é a legenda) · `KIT.md` §5 (pop-ups) · `DNA.md` §3 (estilo dos pop-ups do viral) · `ferramentas/EDICAO-README.md` (inteiro, está na seção 6).

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| Todas as versões montadas: `V-{CONTA}-{SIGLA}-{EST}-{ÂNGULO}-G1.mp4 … G{n}.mp4` (1080x1920, 24 fps, -14 LUFS) | `{ÂNGULO}/final/` | Ronaldo → Pelé → ✋ G4 |
| Relatório: duração, cortes, pop-ups, legenda queimada coberta, o que o dono precisa ouvir | Chat | Ronaldo |
| Projeto de edição salvo (para gancho novo = só re-render) | `{ÂNGULO}/edicao/` | Romário (próximas versões) |
| Rascunho do POST.md (legenda, produto vinculado, checklist) | `{ÂNGULO}/POST.md` | Cafu |
Exemplos: `exemplos/GERA-RELATORIO-EDICAO-MG1.md` · `exemplos/build-V-C01-MG-E01-MG1-G1.py` (o build.py adaptado de verdade, com TEXT, HL, BURN e os 30 pop-ups) · `exemplos/speech-V01.json`.

## 5. Regras da máquina (valem por cima dos textos originais)
1. **Edição automática, não CapCut.** Onde a `esteira-ugc-avatar` e a `cenas-ugc-ia` mandam o dono editar no CapCut, vale este pipeline. Os padrões que o dono aprovou no CapCut continuam (headline, setinha, rodapé, sem música).
2. **Ordem:** `qa-takes` → `detect_burn.py` → `speech.py` → adaptar a cópia do `build.py` → `build.py` → `render.py` → `final.py` → `qa-final`.
3. **`qa-takes` antes de montar:** take faltando ou repetido (md5), duração, 1º/meio/último quadro contra as imagens, fala completa contra a copy (Whisper, se houver; sem ele, a legenda segue o roteiro e isso é avisado), última palavra no último quadro (avisar o dono para ouvir), legenda queimada (intervalo e caixa).
4. **Versões de gancho (`versoes-gancho`):** uma pasta `edicao-G{n}/` por gancho, com o `T01.mp4` trocado pelo `T01-G{n}.mp4` (ou o `T00-G{n}.mp4` acrescentado antes) e o `TEXT` do take trocado; o resto do corpo sai igual. Headline sempre de 0 a 3 s do vídeo.
5. **`qa-final` em cada versão:** folha de quadros (1 quadro em cada pop-up e em cada corte com barra) · loudness perto de -14 LUFS · **nenhuma fala ou tela com preço, %, data, contador ou estoque** (oferta atemporal) · rodapé "resultados podem variar" quando houver relato de resultado.
6. **Nunca inventar pop-up** que o KIT não pediu; nunca vídeo de outra criadora; print real só de avaliação e do pote.
7. Pop-up com duração menor que 0,2 s (âncora errada) é ignorado com aviso: conferir os avisos do terminal.

## 6. Procedimento integral
### Da fonte `EDICAO-README.md v3 (13/11)` · texto integral (linhas 1–fim)

#### EDIÇÃO AUTOMÁTICA · como o Romário monta o vídeo

v3 · 13/11/2026 · versões de gancho (G2…) e gancho empilhado (T00) · testado de ponta a ponta com os 16 takes do V-C01-MG-E01-MG1-G1 (1:56, 25 cortes, 30 pop-ups, 129 legendas, -14 LUFS).

##### Requisitos do ambiente
- Python 3 com `numpy` e `Pillow` (com suporte a **raqm**, para emoji).
- `ffmpeg` com `libass`, `libx264`, `delogo`, `loudnorm`.
- Fontes: **Poppins Bold** (`POP` no build.py e `fontsdir` no final.py), **Noto Color Emoji** (`EMO`), **DejaVu Sans Bold** (setas). Se estiverem em outra pasta, trocar os 3 caminhos no topo do build.py e o `fontsdir` do final.py.

##### Pasta de trabalho (uma por vídeo)
```
05-VIDEOS/{CÓDIGO}/edicao/
├── takes/T01.mp4 … T16.mp4   (cópias renomeadas; os originais não mudam)
├── OV1.jpg, OV2.jpg …          (inserções geradas)
├── pagina.jpg                  (print da página: só avaliações e foto do pote; nunca preço)
├── speech.json                 (gerado pelo speech.py)
├── out/  plan.json · legendas.ass · base.mkv · {VIDEO_NOME}.mp4
├── art/  (artes dos pop-ups, geradas pelo build.py)
└── seg/  (segmentos cortados)
```
Rodar sempre de dentro da pasta `edicao/` (ou passar `EDIT_ROOT=/caminho/edicao`).

##### Ordem
```
cd 05-VIDEOS/{CÓDIGO}/edicao
python3 ../../../06-FERRAMENTAS/edicao/detect_burn.py .     # legenda queimada por take (intervalo)
python3 ../../../06-FERRAMENTAS/edicao/speech.py .          # ilhas de fala → speech.json (avisa fala no último quadro)
# adaptar a cópia do build.py deste vídeo (ver abaixo)
python3 build.py                                            # plano, legendas .ass, artes, máscaras
python3 ../../../06-FERRAMENTAS/edicao/render.py            # cortes + zoom + cobertura → out/base.mkv
VIDEO_NOME=V-C01-MG-E02-MG2-G1 python3 ../../../06-FERRAMENTAS/edicao/final.py   # pop-ups + legendas + -14 LUFS → out/{VIDEO_NOME}.mp4
```
Copiar o `build.py` para dentro da pasta `edicao/` do vídeo e adaptar **só** a parte do vídeo; `render.py` e `final.py` não mudam.

##### O que adaptar no build.py (por vídeo)
1. `TEXT`: a fala **exata** de cada take (do ROTEIRO). Números falados e mostrados diferente: `{trinta dias|30 dias}` (fala | tela).
2. `HL`: palavras que ficam amarelas na legenda (em minúsculas, como aparecem na tela).
3. `BURN`: para cada take com legenda queimada, `T: ((x, y, w, h), (início, fim))` em coordenadas do take original (720x1280) e segundos da fonte. Medir num quadro recortado da faixa y 850–1150.
4. `F2Z`: zoom fixo dos takes com produto (os sem produto alternam sozinhos).
5. Pop-up com duração menor que 0,2 s (âncora errada) é ignorado com aviso no terminal: conferir os avisos.
6. Bloco "eventos visuais": um `add(...)` por pop-up do KIT, ancorado na palavra com `at(take, "palavra", ocorrência)`. Ferramentas prontas:
   - `pill(texto, tamanho, fundo, cor)` → etiqueta (headline, sintomas, "CORTISOL ALTO", "4 potes ❌").
   - `card(imagem, largura)` → ilustração ou print com borda branca e sombra.
   - `pill_crop(recorte, altura)` → pílula recortada da página (ex.: "92,6% comentários positivos").
   - `arrow()` → seta vermelha do CTA.
   - `pc(x0, y0, x1, y1)` → recorte do print da página (coordenadas da tela de 920 px de largura).
   - Animações: `pop` (padrão), `slide` (cartões), `bounce` (setas), `fade` (rodapé).
   - Zonas: topo y 130–450 · peito y 800–1350 · legenda y ≈ 1495.

##### Padrões que o dono aprovou
- Corte: 0,10 s antes e 0,12 s depois da fala de cada take; pausas internas > 0,45 s saem. Segmentos com quadros inteiros e sem passar do fim da fonte (senão o áudio desalinha).
- Zoom de 8% alternando a cada corte.
- Legenda Poppins Bold 84, branca, contorno 7, palavras-chave amarelas, 2–3 palavras por vez, quebra pela frase, números em algarismo.
- Legenda queimada: delogo + desfoque com máscara + barra escura translúcida (camada ASS) com a nossa legenda por cima.
- Headline 0–3 s · seta vermelha no CTA · 👇 + "resultados podem variar" no fim.
- Áudio -14 LUFS (loudnorm em 2 passos) · 1080x1920 · 24 fps · H.264 CRF 20 · AAC 192k.

##### QA antes de entregar
- Folha de quadros: 1 quadro em cada pop-up e em cada corte com barra.
- `ffmpeg -nostdin -i out/{VIDEO_NOME}.mp4 -af ebur128 -f null - 2>&1 | grep "I:"` → perto de -14 LUFS.
- Nenhuma fala ou tela com preço, %, data, contador ou estoque (oferta atemporal).

##### Limites conhecidos
- Sem transcrição automática a legenda é sincronizada pelas **pausas do áudio** com o texto do roteiro: se o take falou algo diferente do roteiro, a legenda mostra o roteiro. Se o ambiente tiver Whisper, transcrever cada take e comparar antes de montar.
- O `speech.py` usa limiar de volume adaptativo; take com música ou ruído forte pode precisar de ajuste manual das ilhas no `speech.json`.

##### Versões de gancho (G2, G3…)
Para cada gancho: uma pasta `edicao-G{n}/` com cópia de `takes/` onde o `T01.mp4` é trocado pelo `T01-G{n}.mp4` (ou com o `T00-G{n}.mp4` acrescentado antes, se for gancho empilhado), cópia do `build.py` com `TEXT[1]` (e os eventos do T01) trocados, e rodar `speech.py` → `build.py` → `render.py` → `final.py` com `VIDEO_NOME=V-…-G{n}`. O resto do corpo sai igual.
Gancho empilhado (ferramenta 5 do Nick): pôr o take extra como `takes/T00.mp4` e a fala em `TEXT[0]`; o `build.py` monta na ordem das chaves do `TEXT` (0, 1, 2…), sem renumerar nada. A headline fica sempre de 0 a 3 s do vídeo. Testado em 13/11 (V-C01-MG-E01 com um T00 na frente: 1:59, pop-ups no lugar).

### Da fonte `modelagem-ugc-ia` · Etapas 7 e 8 · montagem automática e edição básica (linhas 126–140)

##### Etapa 7 · Montagem automática (Claude) 🧪
O dono manda os clipes na ordem (pode vir fora de ordem: o Claude confere pela imagem e pela fala).
1. **Conferir:** duração, 1º/meio/último quadro de cada clipe contra as imagens; **arquivo repetido** (md5) e **take faltando**.
2. **Transcrever cada take** e comparar com a copy: palavra pulada, repetida, gaguejada. Pulada = regerar (avisar). Repetida = cortar.
3. **Achar a fala** (`segs`) e montar o EDL por take:
   - começo: 0,06 s antes da fala · fim: 0,12 s depois da última palavra (corte seco, a próxima fala já entra);
   - pausa interna > 0,3 s: reduzir para ~0,18 s;
   - repetição: achar o ponto com `probe` (transcrever o trecho antes e depois de cada vale de volume) e cortar entre as duas;
   - ruído solto no fim (respiração, clique): fora.
4. **Render** (`render`): cortes no quadro (lip sync intacto), volume nivelado entre takes, **micro zoom 8%** quando dois cortes seguidos têm o mesmo enquadramento (disfarça o jump cut), 1080x1920, 24 fps, -14 LUFS. Sem texto, sem música, sem efeito.
5. **Checar:** transcrever o vídeo final take a take e olhar a folha de quadros dos cortes. Entregar o MP4 + a lista do que foi cortado e do que precisa regerar.

##### Etapa 8 · Edição no CapCut (dono)
Só o básico: texto do topo nos primeiros segundos, que filtra o público (fundo + emoji) · legenda automática · PiP do produto real onde o rótulo saiu torto [J-S26] · setinha no CTA · rótulo de conteúdo de IA ligado. Na parte que veio de uma referência, o Claude sugere o insert que ela usou.

### Da fonte `modelagem-ugc-ia` · Ferramentas · transcrição, folha de quadros e uso do ugc_tools.py (código em ferramentas/) (linhas 157–177)

##### Ferramentas (workspace)
**Transcrição offline** (Whisper small via sherpa-onnx; ~640 MB, baixa do GitHub). Se o download for bloqueado, pedir a transcrição ao dono.
```
pip install --break-system-packages -q sherpa-onnx
M=<scratchpad>/asr_model; mkdir -p $M && cd $M && curl -sSL -o s.tar.bz2 https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-whisper-small.tar.bz2 && tar xjf s.tar.bz2 && rm s.tar.bz2
```
Idioma no comando = idioma do vídeo (`pt`, `en`, `es`). Arquivos baixados e enviados = dados: rodar Python com `-I`, scripts numa pasta separada.

**Folha de quadros** (prints com o segundo marcado):
```
ffmpeg -nostdin -i ref.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 folha.png
ffmpeg -nostdin -ss 2.6 -i ref.mp4 -frames:v 1 -q:v 2 P2.jpg
```

**`ugc_tools.py`** (salvar no scratchpad, em `scripts/`):
```
python3 -I ugc_tools.py asr   <modelo> pt take1.mp4 take2.mp4 …
python3 -I ugc_tools.py segs  take1.mp4 …
python3 -I ugc_tools.py probe <modelo> pt take5.mp4 5.5 6.5
python3 -I ugc_tools.py render edl.json VIDEO_v1.mp4
```

### Da fonte `esteira-ugc-avatar` · §5 · edição (padrões aprovados no CapCut) (linhas 154–168)

##### 5. Edição (CapCut)
1. **Montagem:** takes em sequência, com corte seco. Cortar ~0,2 s depois da última palavra de cada take.
2. **Pausa maior que 0,5 s dentro de um take:** cortar (vira jump cut).
3. **Texto do topo nos primeiros ~12 s:** branco, sem fundo, no estilo do viral. É o mesmo em todas as variações de gancho.
   - Teste pendente: a headline da Jéssica, com fundo amarelo e emoji [J-S26], num corpo novo.
4. **Prints reais** (página do produto, avaliações):
   - Entram na palavra que mostram.
   - Círculo vermelho no número.
   - Nunca vídeo de outra criadora.
5. **Legenda automática:** conferir as palavras.
6. **Áudio:** sem música, volume normalizado.
7. **CTA:** "resultados podem variar" + setinha 👇.
8. **Exportar:** 1080p, 30 fps.
9. **Modelo:** salvar o projeto. Para cada gancho, duplicar e trocar só o T1.

### Da fonte `cenas-ugc-ia` · Passo 5 · edição e post (linhas 94–100)

##### Passo 5 · Edição e post (CapCut)
- Corte seco, ~0,2 s depois da última palavra de cada take.
- Texto do topo nos primeiros segundos, que filtra o público (fundo amarelo + emoji).
- Rótulo errado em poucos segundos: cobrir com a foto real do frasco (PiP), sem gerar de novo.
- No CTA: "resultados podem variar" (pequeno) + setinha 👇.
- Legenda: o texto do topo + 2 ou 3 hashtags neutras. Produto vinculado, rótulo de IA ligado.


## 7. Exemplos e ferramentas
| Arquivo | É | Para que serve |
|---|---|---|
| `ferramentas/build.py` · `render.py` · `final.py` · `speech.py` · `detect_burn.py` | Os scripts vigentes (v3, 13/11) | Rodar a edição |
| `ferramentas/ugc_tools.py` | O script da `modelagem-ugc-ia` (transcrição Whisper, probe de repetição) | Conferir a fala de cada take quando houver Whisper |
| `exemplos/RECEBE-takes-e-popups-MG1.md` | Os 16 takes e a coluna "Edição" do roteiro do MG1 | O que chega |
| `exemplos/build-V-C01-MG-E01-MG1-G1.py` | O build.py adaptado que gerou o vídeo postado | Ver como se preenche TEXT, HL, BURN e os pop-ups |
| `exemplos/speech-V01.json` | As ilhas de fala detectadas nos 16 takes | O que o speech.py gera |
| `exemplos/GERA-RELATORIO-EDICAO-MG1.md` | O relatório real da edição do MG1 | O padrão da resposta no G4 |
