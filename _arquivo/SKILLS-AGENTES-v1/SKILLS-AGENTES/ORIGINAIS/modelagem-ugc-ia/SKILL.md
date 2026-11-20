---
name: "modelagem-ugc-ia"
description: "Use para modelar um vídeo UGC com IA no Google Flow a partir de virais (gancho A, estrutura B, argumentos C): copy por etapa, takes, prints, prompts de imagem e vídeo, montagem automática e variação."
---

# Modelagem UGC com IA · do viral ao vídeo montado

Máquina de modelar vídeo de venda do TikTok Shop. **Modelar = pegar a estrutura de um vídeo que já vende ou viralizou e preencher com os argumentos que vendem o nosso produto.** Nada se cria do zero [J-S7, S16, S19]. Processo do Nick (Nível 2, sem motion) [EXT-4] com o filtro da Jéssica (persona, pecado, nível, CTA de indicação).

**1 chat por vídeo.** Vale para qualquer conta: tudo o que é da conta sai dos arquivos do projeto.

## Antes de responder, ler do projeto
- `PROCESSO_CONTA.md` e `JESSICA_METODO.md` (método; o que é [EXT] só entra onde não contradiz a Jéssica).
- `PERFIL-{CONTA}`: personas, pecados, níveis, avatar, voz.
- Arquivo do produto (`P-…`/`PRODUTO-…`): packshot, tamanho real, linha vermelha, provas.
- Copys do produto (`COPYS-…`), `REGISTRO-{CONTA}`, `ROTINA-DIARIA` (matriz), o último `ROTEIRO-…` (aprendizados).

## Regras fixas
- **A copy é do dono.** O Claude dá opções e checa; não reescreve a fala aprovada.
- **Linha vermelha:** 1 linha por trecho com risco (promessa, antes e depois, autoridade médica, prazo, escassez falsa) + a troca segura. A decisão é do dono.
- **Fato × hipótese:** nunca inventar número, avaliação, ingrediente ou resultado. Número de avaliações, preço e parcelamento: conferir na página no dia.
- **CTA [J-S15]:** indicação, uma ação só, nunca "compre agora". Sem escassez falsa.
- **Respostas curtas e numeradas**, com códigos para o dono escolher pelo celular.
- **Cada erro de geração vira regra** no log do ROTEIRO (o que errou → por quê → a regra nova).

---

## Etapa 0 · Linha-base (1 pergunta)
Produto · persona do PERFIL · pecado · nível de consciência (2 ou 4/5) · formato. Isso decide o tom, a fala, as expressões e o cenário.

## Etapa 1 · Mineração (dono)
| Ref | O que é | Dela sai |
|---|---|---|
| **A · gancho** | anúncio ou viral de IA da mesma dor, pode ser de outro produto (Biblioteca de Anúncios da Meta, Reels, #syntheticperformer) | o gancho e o visual do gancho, quase literal |
| **B · estrutura** | viral que vendeu muito, de produto parecido, de preferência gringo | a estrutura e a psicologia, etapa por etapa |
| **C · argumentos** | o vídeo BR que mais vendeu o produto exato + as copys do produto no projeto | as informações que convencem |

O dono manda os vídeos. A transcrição o Claude faz (seção Ferramentas); se não der, o dono cola (TokScript/WayinVideo).
Gancho de A quase literal só porque A é de outro produto; se A for do mesmo produto, vira cópia [EXT-1].

## Etapa 2 · Desmontagem (Claude)
1. **Folha de quadros** de A, B e C (1 quadro/s, com o segundo marcado) e os **prints** de cada momento visual do gancho de A, enviados como arquivo.
2. **Estrutura do B em etapas numeradas (E1, E2…)**, cada uma com o **intuito**: o que faz, por que funciona, que psicologia ativa (curiosidade, contradição, prova, sensorial, autoridade, privilégio…).
3. **Gancho de A em cenas (G1, G2…)**, cada uma com o print e o que a mão, o olhar e o objeto fazem.
4. **Edição de cada referência:** onde entra imagem, insert, close, PiP, texto, para sugerir na montagem.

## Etapa 3 · Copy por etapa
Para cada etapa, nesta ordem:
- **Intuito** da etapa original (1 linha).
- **O que fica:** a copy que segue igual (ou só adaptada ao produto).
- **3 opções** numeradas (G2.1, G2.2, G2.3 · E4.1…), já com as informações de C e a linha vermelha checada.

O dono responde com os códigos (pode editar). O Claude junta e devolve a **copy completa**, com 1 linha de ajuste de ligação se precisar.
Junto, **3 a 5 ganchos alternativos só em texto** (banco de variação; sem prompt).

## Etapa 4 · Takes
- **Tempo** 🧪 (dono, 21/10): contar as palavras **faladas** (sigla e número por extenso: "GHK-Cu" = 4, "47" = 3). Tempo de fala ≈ palavras ÷ 3. Duração = a menor opção do Flow (4/6/8/10 s) que deixa **~0,3 a 0,7 s** de sobra no fim.
  - Sobra maior que ~0,8 s: completar com uma palavra ou expressão natural de ligação (o dono aprova) ou dividir/encurtar o take. Sobra grande faz o Flow esticar a fala, pausar e repetir palavra (3 de 17 takes no E7).
  - Falta tempo: dividir o take numa pausa natural.
  - Take recheado de fala, conversacional; nunca tagarela, nunca palavra solta.
- **Um gesto por take**, ligado a uma palavra. Fala que aponta para duas coisas ("assim… assim") = dois takes, cada um com a imagem já apontando para o objeto certo.
- **Mão ocupada = uma ação só** (segurar, pingar, mostrar). Pingar e esfregar no mesmo take fez o conta-gotas sumir.
- Palavra que o modelo tende a pular (estrangeira, sensível): marcar para o prompt ("She clearly says the word X").
- Corte entre takes em pausa natural da frase.

Tabela: `T | s · palavras | fala | imagem | produto | gesto`.

## Etapa 5 · Imagens (Flow → imagem · Nano Banana Pro)
- **Imagem que vem de print = editar o próprio print**, trocando só a pessoa e o fundo e tirando a legenda; o resto do print fica exatamente igual (enquadramento, objetos, mesa). Nunca mudar objeto do print sem o dono pedir.
- **CRIAR com uma imagem anterior anexada faz o modelo copiar a anterior.** Por isso: print editado, ou base editada.
- 1ª imagem: Image 1 = AVATAR. As seguintes: Image 1 = a 1ª imagem gerada (mantém roupa e sala), com o fundo descrito **como ele é na imagem gerada** (descrição errada do fundo = sala diferente).
- **Corpo:** sai **editando a base** (tira objeto, põe o produto, muda a pose), uma mudança por vez.
- **Produto:** tamanho real em relação à mão e ao rosto, sempre. Nunca "looks bigger because it is closer".
- **Nunca nomear equipamento** (tripé, celular, câmera, braço): o modelo desenha o que se nomeia.
- O Claude confere cada imagem que o dono mandar (rosto, mão, rótulo, proporção, fundo) antes do vídeo.

### 5.1 · Editar o print (Image 1 = AVATAR ou a 1ª imagem gerada)
```
Edit the image being edited. Change only these three things:

1. The person: replace the person with the woman in Image 1 attached with this prompt. She is exactly the woman in Image 1: [AVATAR], and the same clothes as in Image 1. She takes exactly the person's place: the same body position, head position and tilt, gaze, expression and the same position of the arms, hands and fingers. Nothing of the original person remains: not the face, hair, skin, clothes or accessories.

2. The background: [1ª IMAGEM: a bright, real [CENÁRIO], seen from this camera angle | SEGUINTES: the room behind her is the room in Image 1 ([A SALA COMO ELA É NA IMAGE 1]), seen from this camera angle]. No objects from the original room remain.

3. Remove all captions, subtitles and any on-screen text.

Everything else is exactly as it is in this image: the framing, camera angle, distance from the lens, composition, the table and every object on the table or in her hands, in the same place, size, angle and appearance.

Photorealistic smartphone frame, natural skin with visible pores, no beauty filter, no smoothing, natural daylight. Hands clean and natural, five fingers on each hand. Vertical 9:16. No watermark.
```

### 5.2 · Editar a base (uma mudança · com produto: Image 1 = PRODUTO)
```
Edit the image being edited. Change only: [A MUDANÇA]. [SÓ COM PRODUTO: The product is exactly the product in Image 1 attached with this prompt: the same shape, proportions, colors and every printed letter ([TEXTO DO RÓTULO] and all other text exactly as in Image 1), label facing the camera, sharp, readable and not mirrored, firmly held. Size: [TAMANHO REAL EM RELAÇÃO À MÃO]. It looks like a real object photographed with this phone, not pasted in and not a 3D render: natural reflections of the room light, realistic transparency and depth, a soft natural shadow from her fingers, correct perspective and scale for her hand, and the same light, color, grain and sharpness as the rest of the photo.] The woman's face, hair, earrings, clothes, expression, the room, the framing and the light are exactly as they are in this image. Vertical 9:16, raw authentic smartphone look, natural light, hands clean and natural, five fingers on each hand. No text or watermark.
```
Close de rosto: gerar a imagem já em close (selfie); a edição não aproxima a câmera.

## Etapa 6 · Vídeos (Flow → vídeo a partir de imagem · Omni · 9:16)
Tudo no **mesmo projeto do Flow** (mesma voz; se houver Personagem, usar). O **1º take** valida voz, ritmo e rosto; depois o resto. Errou: o dono avisa, o Claude ajusta **só aquele take** e grava a regra.

### 6.1 · Modelo v6 (completo, preencher os colchetes)
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

## Etapa 7 · Montagem automática (Claude) 🧪
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

## Etapa 8 · Edição no CapCut (dono)
Só o básico: texto do topo nos primeiros segundos, que filtra o público (fundo + emoji) · legenda automática · PiP do produto real onde o rótulo saiu torto [J-S26] · setinha no CTA · rótulo de conteúdo de IA ligado. Na parte que veio de uma referência, o Claude sugere o insert que ela usou.

## Etapa 9 · Post e REGISTRO
Produto vinculado. Linha no `REGISTRO-{CONTA}` (data, produto, persona, pecado, gancho, views, tempo médio, % até o fim, CTR, vendas). Leitura 2 a 3 dias depois, pela matriz.

## Modo variação (dia seguinte, ou quando o dono pedir)
- **O que variar vem da análise** (REGISTRO + matriz da ROTINA-DIARIA): pouca view → gancho · fica mas não clica → corpo/CTA · clica e não compra → produto, oferta, preço. Pode ser gancho, corpo, CTA, persona, avatar, formato ou produto.
- **Uma variável por vídeo** [EXT-2] e **uma variação por dia** (se tomar violação, não são várias no mesmo dia).
- Reaproveitar as imagens e os takes validados; gerar só o que mudou.

## Custo
Anotar no ROTEIRO os créditos gastos por vídeo (imagens, takes, refações). Com 2 ou 3 vídeos medidos, decidir o plano pago com número real (E7, estimado: ~190 créditos de vídeo limpo, ~250–300 com imagens e refações).

## Entrega no projeto
`ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`: linha-base · referências · estrutura e escolhas (códigos) · copy aprovada · checagem · takes · imagens (prompts) · vídeos (prompts) · montagem (EDL) · status e log de erros → regras · créditos.

---

## Ferramentas (workspace)
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
```python
"""ugc_tools.py · montagem de vídeo UGC (Flow) · uso: python3 -I ugc_tools.py <cmd> ...
  asr    <modelo_dir> <lang> <arquivo...>          transcreve (wav/mp4; corta em blocos de ~25 s)
  probe  <modelo_dir> <lang> <arquivo> <ini> <fim> transcreve só um trecho (achar repetição)
  segs   <arquivo...>                              trechos de fala pelo volume (ini-fim)
  render <edl.json> <saida.mp4>                    junta os pedaços (cortes no quadro, volume nivelado, micro zoom)
edl.json = [["T1","/caminho/clip.mp4","F1",[[ini,fim],[ini,fim]]], ...]  (tempos do clipe, em s)
"""
import sys, os, re, json, wave, subprocess, tempfile
import numpy as np

def wav16(path):
    if path.endswith('.wav'):
        return path
    out = tempfile.mktemp(suffix='.wav')
    subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-i', path, '-ac', '1', '-ar', '16000', out], check=True)
    return out

def load(path):
    w = wave.open(wav16(path))
    a = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768
    return w.getframerate(), a

def env(a, sr):
    hop, win = int(0.01 * sr), int(0.03 * sr)
    n = max(1, (len(a) - win) // hop)
    return np.array([20 * np.log10(np.sqrt(np.mean(a[i*hop:i*hop+win] ** 2)) + 1e-9) for i in range(n)])

def segs(a, sr, gap=0.18):
    db = env(a, sr)
    thr = max(np.percentile(db, 8) + 10, np.percentile(db, 98) - 32)
    on, out, i = db > thr, [], 0
    while i < len(on):
        if on[i]:
            j = i
            while j < len(on) and on[j]:
                j += 1
            out.append([i * 0.01, j * 0.01 + 0.03]); i = j
        else:
            i += 1
    m = []
    for s, e in out:
        if m and s - m[-1][1] < gap:
            m[-1][1] = e
        else:
            m.append([s, e])
    return [x for x in m if x[1] - x[0] > 0.06]

def recognizer(mdir, lang):
    import sherpa_onnx
    n = [f for f in os.listdir(mdir) if f.endswith('-encoder.int8.onnx')][0].split('-encoder')[0]
    return sherpa_onnx.OfflineRecognizer.from_whisper(
        encoder=f'{mdir}/{n}-encoder.int8.onnx', decoder=f'{mdir}/{n}-decoder.int8.onnx',
        tokens=f'{mdir}/{n}-tokens.txt', language=lang, task='transcribe', num_threads=4)

def tr(rec, a, sr, s=0, e=None):
    x = a[int(s * sr):int((e if e is not None else len(a) / sr) * sr)]
    st = rec.create_stream(); st.accept_waveform(sr, x); rec.decode_stream(st)
    return st.result.text.strip()

def chunks(a, sr, maxlen=25.0):
    """corta em blocos de até ~25 s nas pausas (o Whisper lê 30 s por vez)"""
    sg, out, start = segs(a, sr), [], 0.0
    dur = len(a) / sr
    while dur - start > maxlen:
        cut = max([e for s, e in sg if start < e <= start + maxlen] or [start + maxlen])
        out.append((start, cut)); start = cut
    out.append((start, dur))
    return out

def mean_vol(path, s, e):
    r = subprocess.run(['ffmpeg', '-nostdin', '-hide_banner', '-nostats', '-ss', str(s), '-to', str(e), '-i', path,
                        '-af', 'volumedetect', '-f', 'null', '-'], capture_output=True, text=True).stderr
    return float(re.search(r'mean_volume: (-?[0-9.]+)', r).group(1))

def render(edl, out, zoom=1.08, target=-22.0, fps=24):
    snap = lambda t: round(t * fps) / fps
    clips, idx = [], {}
    for take, clip, fr, pieces in edl:
        if clip not in idx:
            idx[clip] = len(clips); clips.append(clip)
    fc, labels, prev, z, n, T, log = [], [], None, 1.0, 0, 0.0, []
    for take, clip, fr, pieces in edl:
        i = idx[clip]
        mv = sum(mean_vol(clip, s, e) * (e - s) for s, e in pieces) / sum(e - s for s, e in pieces)
        g = max(-6, min(8, target - mv))
        for s, e in pieces:
            s, e = snap(s), snap(e); d = e - s
            z = ((zoom if z == 1.0 else 1.0) if prev == fr else 1.0); prev = fr
            fc.append(f'[{i}:v]trim=start={s:.5f}:end={e:.5f},setpts=PTS-STARTPTS,scale=iw*{z}:ih*{z}:flags=lanczos,'
                      f'crop=iw/{z}:ih/{z},scale=1080:1920:flags=lanczos,setsar=1,format=yuv420p[v{n}]')
            fc.append(f'[{i}:a]atrim=start={s:.5f}:end={e:.5f},asetpts=PTS-STARTPTS,volume={g:.1f}dB,'
                      f'afade=t=in:st=0:d=0.012,afade=t=out:st={d-0.018:.4f}:d=0.018[a{n}]')
            labels.append(f'[v{n}][a{n}]'); log.append([take, round(T, 2), round(d, 2), z]); T += d; n += 1
    fc.append(''.join(labels) + f'concat=n={n}:v=1:a=1[vc][ac]')
    fc.append('[ac]loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[ao]')
    script = out + '.fc.txt'; open(script, 'w').write(';\n'.join(fc))
    cmd = ['ffmpeg', '-nostdin', '-v', 'error', '-y']
    for c in clips:
        cmd += ['-i', c]
    cmd += ['-filter_complex_script', script, '-map', '[vc]', '-map', '[ao]', '-r', str(fps), '-c:v', 'libx264',
            '-preset', 'slow', '-crf', '20', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
            '-ar', '48000', '-movflags', '+faststart', out]
    subprocess.run(cmd, check=True)
    json.dump(log, open(out + '.edl_out.json', 'w'))
    print('pedaços', n, 'duração', round(T, 2), 's')
    for l in log:
        print(l)

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'asr':
        rec = recognizer(sys.argv[2], sys.argv[3])
        for f in sys.argv[4:]:
            sr, a = load(f)
            print(os.path.basename(f), '|', ' '.join(tr(rec, a, sr, s, e) for s, e in chunks(a, sr)), flush=True)
    elif cmd == 'probe':
        rec = recognizer(sys.argv[2], sys.argv[3]); sr, a = load(sys.argv[4])
        print(tr(rec, a, sr, float(sys.argv[5]), float(sys.argv[6])))
    elif cmd == 'segs':
        for f in sys.argv[2:]:
            sr, a = load(f)
            print(os.path.basename(f), f'{len(a)/sr:.2f}s |', ' '.join(f'{s:.2f}-{e:.2f}' for s, e in segs(a, sr)))
    elif cmd == 'render':
        render(json.load(open(sys.argv[2])), sys.argv[3])
```

---

## Problemas comuns (aprendidos)
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

## Valores de exemplo (@dicasdamalu8)
- `[AVATAR]`: the same face, facial structure, eyes, nose, lips, age (late 40s), skin with visible pores, faint freckles and fine lines, the same dark brown wavy hair with grey strands worn loose just below the shoulders, the same small gold hoop earrings, no rings, no necklace
- `[VOZ]`: Brazilian Portuguese, natural São Paulo accent, woman in her late 40s, warm mid-low pitch, slightly husky
- `[PRODUTO]` Zencial GHK-Cu: clear glass dropper bottle with translucent blue liquid, silver label with large black "GHK-Cu" and lowercase "zencial" · `[TAMANHO REAL]`: a small 30 ml dropper bottle, about as tall as her index finger is long and smaller than her palm
- Linha vermelha: `P-ZENCIAL-GHK-CU` §14 · trocas seguras em `COPYS-VIRAIS-ZENCIAL-GHKCU`
- Exemplo completo: `ROTEIROS/ROTEIRO-ZENCIAL-GHKCU-07.md` (E7 "bonecos")