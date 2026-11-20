---
name: "cenas-ugc-ia"
description: "Use quando o dono colar uma copy já dividida em takes para vídeo UGC com IA no Google Flow sem motion: devolve, por take, as imagens a anexar, o prompt de imagem e o prompt de vídeo com a fala."
---

# Cenas UGC com IA · copy em takes → imagens e prompts (Flow, sem motion)

Nível 2 da produção (processo do Nick). A copy chega pronta e dividida em takes, feita no agente de copy do dono no GPT. Esta skill devolve, take a take, o que anexar e o que colar no Google Flow.

Para recriar o movimento exato de um viral (motion control), use a `esteira-ugc-avatar`.

## Entradas (ler antes de responder)
- **A copy em takes**, no formato `CENA N — Xw / Ys` + o texto da fala.
- **PERFIL da conta:** a avatar (rosto, cabelo, idade, brincos), a roupa da esteira e a voz.
- **Arquivo do produto (P-/PRODUTO):** como é o frasco (packshot) e a linha vermelha.
- **APRENDIZADOS e `PROCESSO/UGC-IA-NICK.md`** da conta, se existirem.
- **Vídeos de referência + transcrição**, se o dono mandar. É deles que saem os prints de enquadramento.
- **Imagens fixas do dono:** AVATAR (rosto ou ficha da avatar) e FRASCO (produto de frente, nítido, alta resolução).

## Regras
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

## Passo 1 · Plano visual
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

## Passo 2 · Imagens (Flow → imagem · Nano Banana Pro · 2 saídas)
Cabeçalho de cada imagem: `IMG-NN · takes X–Y · modo CRIAR ou EDITAR · anexos: Image 1 = AVATAR · Image 2 = print do vídeo [A/B/C] em [mm:ss] · Image 3 = FRASCO (só se o produto aparecer)`.

### Modo CRIAR
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

### Modo EDITAR (abrir a imagem → editar)
```
Edit the image being edited. Change only: [A MUDANÇA]. The woman's face, hair, earrings, clothes and the place are exactly as they are in this image. [SE TROCAR A ROUPA: She now wears [NOVA ROUPA]; her face, hair and identity are exactly the same.] Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand. No text or watermark.
```
Escolher a saída com o rosto mais fiel e o rótulo legível.

## Passo 3 · Vídeos (Flow → vídeo a partir de imagem · Omni · 9:16 · duração do take)
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

## Passo 4 · Ordem de geração
1. As imagens.
2. O take 1: validar voz, ritmo e rosto.
3. Os outros. Refazer só o que falhar.

## Passo 5 · Edição e post (CapCut)
- Corte seco, ~0,2 s depois da última palavra de cada take.
- Texto do topo nos primeiros segundos, que filtra o público (fundo amarelo + emoji).
- Rótulo errado em poucos segundos: cobrir com a foto real do frasco (PiP), sem gerar de novo.
- No CTA: "resultados podem variar" (pequeno) + setinha 👇.
- Legenda: o texto do topo + 2 ou 3 hashtags neutras. Produto vinculado, rótulo de IA ligado.

## Entrega
- **No chat, nesta ordem:** checagem (tempo, frase cortada, linha vermelha) → plano visual → imagens → takes → edição.
- **No projeto:** `ROTEIRO-{PRODUTO}-{NN}.md` com os takes, as imagens, os prompts, o status de cada geração e o log do que errou e do que resolveu.

## Problemas comuns
| Problema | O que fazer |
|---|---|
| Repetiu a última frase | Sobrou tempo: completar a fala até ~1 s do fim ou baixar a duração |
| Gaguejou ou atropelou | Tirar palavras ou subir a duração (~2,5 palavras/s) |
| Ficou parada no fim | Conferir "She never freezes" e a fala até ~1 s do fim |
| Produto flutuando ou trocado | Rodar de novo; usar uma imagem com o frasco já na mão |
| Rótulo espelhado ou com letra inventada | Rodar de novo; se insistir, PiP do frasco real |
| Rosto mudou entre takes | Mesma IMG como base; personagem do Flow |
| Voz mudou entre takes | Mesmo projeto, mesmo personagem, mesma descrição de voz |

## Valores de exemplo (@dicasdamalu8)
- **[AVATAR]:** the same face, facial structure, eyes, nose, lips, age (late 40s), skin with visible pores, faint freckles and fine lines, dark brown wavy hair with grey strands worn loose just below the shoulders, small gold hoop earrings, no rings, no necklace
- **[VOZ]:** Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky, intimate and friendly like talking to a close friend
- **[PRODUTO]:** Zencial Envy Skin GHK-Cu: clear cylindrical glass dropper bottle, 30 ml, translucent blue liquid, brushed-silver label with large black "GHK-Cu" and lowercase "zencial"
- **Linha vermelha:** P-ZENCIAL-GHK-CU §14 · trocas seguras em `COPYS-VIRAIS-ZENCIAL-GHKCU.md`