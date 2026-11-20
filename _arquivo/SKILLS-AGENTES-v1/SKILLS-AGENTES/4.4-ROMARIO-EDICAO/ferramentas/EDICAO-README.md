# EDIÇÃO AUTOMÁTICA · como o Romário monta o vídeo

v3 · 13/11/2026 · versões de gancho (G2…) e gancho empilhado (T00) · testado de ponta a ponta com os 16 takes do V-C01-MG-E01-MG1-G1 (1:56, 25 cortes, 30 pop-ups, 129 legendas, -14 LUFS).

## Requisitos do ambiente
- Python 3 com `numpy` e `Pillow` (com suporte a **raqm**, para emoji).
- `ffmpeg` com `libass`, `libx264`, `delogo`, `loudnorm`.
- Fontes: **Poppins Bold** (`POP` no build.py e `fontsdir` no final.py), **Noto Color Emoji** (`EMO`), **DejaVu Sans Bold** (setas). Se estiverem em outra pasta, trocar os 3 caminhos no topo do build.py e o `fontsdir` do final.py.

## Pasta de trabalho (uma por vídeo)
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

## Ordem
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

## O que adaptar no build.py (por vídeo)
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

## Padrões que o dono aprovou
- Corte: 0,10 s antes e 0,12 s depois da fala de cada take; pausas internas > 0,45 s saem. Segmentos com quadros inteiros e sem passar do fim da fonte (senão o áudio desalinha).
- Zoom de 8% alternando a cada corte.
- Legenda Poppins Bold 84, branca, contorno 7, palavras-chave amarelas, 2–3 palavras por vez, quebra pela frase, números em algarismo.
- Legenda queimada: delogo + desfoque com máscara + barra escura translúcida (camada ASS) com a nossa legenda por cima.
- Headline 0–3 s · seta vermelha no CTA · 👇 + "resultados podem variar" no fim.
- Áudio -14 LUFS (loudnorm em 2 passos) · 1080x1920 · 24 fps · H.264 CRF 20 · AAC 192k.

## QA antes de entregar
- Folha de quadros: 1 quadro em cada pop-up e em cada corte com barra.
- `ffmpeg -nostdin -i out/{VIDEO_NOME}.mp4 -af ebur128 -f null - 2>&1 | grep "I:"` → perto de -14 LUFS.
- Nenhuma fala ou tela com preço, %, data, contador ou estoque (oferta atemporal).

## Limites conhecidos
- Sem transcrição automática a legenda é sincronizada pelas **pausas do áudio** com o texto do roteiro: se o take falou algo diferente do roteiro, a legenda mostra o roteiro. Se o ambiente tiver Whisper, transcrever cada take e comparar antes de montar.
- O `speech.py` usa limiar de volume adaptativo; take com música ou ruído forte pode precisar de ajuste manual das ilhas no `speech.json`.

## Versões de gancho (G2, G3…)
Para cada gancho: uma pasta `edicao-G{n}/` com cópia de `takes/` onde o `T01.mp4` é trocado pelo `T01-G{n}.mp4` (ou com o `T00-G{n}.mp4` acrescentado antes, se for gancho empilhado), cópia do `build.py` com `TEXT[1]` (e os eventos do T01) trocados, e rodar `speech.py` → `build.py` → `render.py` → `final.py` com `VIDEO_NOME=V-…-G{n}`. O resto do corpo sai igual.
Gancho empilhado (ferramenta 5 do Nick): pôr o take extra como `takes/T00.mp4` e a fala em `TEXT[0]`; o `build.py` monta na ordem das chaves do `TEXT` (0, 1, 2…), sem renumerar nada. A headline fica sempre de 0 a 3 s do vídeo. Testado em 13/11 (V-C01-MG-E01 com um T00 na frente: 1:59, pop-ups no lugar).
