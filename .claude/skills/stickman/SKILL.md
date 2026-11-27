---
name: stickman
description: STICKMAN · vídeo explicativo com bonequinho para TikTok Shop ("explica primeiro, o produto é o meio"). Do tema/produto ao MP4 no Drive, com o motor em código (bonequinho com poses e expressões, cenários, 213 ilustrações, voz neural, efeitos), sem ferramenta paga. Use quando o dono pedir "faz um stickman", "vídeo do bonequinho", "explicativo de X", ou trouxer um tema/produto/viral para esse formato.
---

# stickman · vídeo explicativo com bonequinho

v1 · 27/11/2026 · orquestrador. Formato e psicologia: `01-BASE/STICKMAN/FORMATO.md` (ler a seção que a etapa usa, não o arquivo inteiro). Estruturas: `04-ESTRUTURAS/E06–E09` (DNA frase a frase).

## Entrada (o mínimo)
Produto na biblioteca (`03-PRODUTOS/P-…/CARTAO.md` + `fotos/`) · uma estrutura (E06–E09 ou nova) · o tema (dor + porquê escondido). Faltou produto → `dossie-produto` antes. Faltou tema → propor 3 do MVM/dossiê em 1 linha cada.

## Regra de ouro (v2 · 27/11)
Ler `FORMATO.md` §0, §0b e §0c (o padrão-mestre). Gancho de conversa com frase completa · 1 coisa nova com nome + analogia · aula primeiro, produto entre 40% e 60% · **entregar Produto + Resumo + Roteiro e esperar o ok antes do motion**.

## Passo a passo (1 sessão nova por vídeo)
1. **Roteiro** (`05-VIDEOS/{CONTA}-{SIGLA}-{EST}/A{n}/motion/falas.tsv`, uma frase por linha `malu<TAB>frase`): modela o DNA **frase a frase** (mesma função, mesma ordem, ±10% de palavras). Regras do FORMATO §4: fato checável, nada fora do CARTÃO, oferta atemporal, marca só no fim. ⚠️ de política em 1 linha.
2. **Voz:** `python3 06-FERRAMENTAS/voz/falar_neural.py <motion>/falas.tsv <motion>` → `voz.wav` + `tempos.json` (tempo real por palavra).
3. **Cenas** (`<motion>/cenas.js`): uma cena por frase. Copiar o molde de `05-VIDEOS/C01-CR-E09/A1/motion/cenas.js`. Cada cena = `fundo(...)` + boneco + 2 a 5 peças, cada uma entrando **na palavra** que ela ilustra (`{ w: 'palavra' }`). A 1ª peça entra no começo da cena (sem `w`).
4. **Folha de checagem** (1 só): `TPL=stickman.html node 06-FERRAMENTAS/motion-template/render.js <motion> <scratch>/q 30 --frames t1,t2,…` com o fim de cada cena; juntar com `ffmpeg … tile` e olhar uma vez. Conferir: margens (grade verde), nada vazio >1,5 s, texto legível.
5. **Render:** `TPL=stickman.html node 06-FERRAMENTAS/motion-template/render.js <motion> <A{n}>/final/V-….mp4 30 4 1` (voz + efeitos automáticos).
6. **Entrega:** versão leve `-drive.mp4` (`-crf 28 -maxrate 260k -bufsize 520k`, áudio 64k) → Drive por referência de arquivo (`sha256:<hash>:<caminho>`) → `POST.md` + linha na `MATRIZ.md` → commit + push.

## Peças (`06-FERRAMENTAS/motion-template/stickman/cena.js`)
Todas aceitam `o = { w, o, d, a, som }`: `w` = palavra em que entra, `o` = palavra em que sai, `d` = atraso (s), `a` = pop|sobe|desce|esq|dir|gira|traco|fade, `som` = pop|ding|whoosh|nao.
- `fundo(nome, …)`:
  - Cenários de vida: `rua` · `cozinha` · `sala` · `quarto` · `academia` · `consultorio`.
  - Explicação: `raios(cor1,cor2)` · `pontos(cor)` · `liso(cor)`.
  - Mecanismo: `dentro` (corpo por dentro).
  - Pacote pintado: `img('nome')` (se existir `stickman/cenarios/nome.jpg`).
- **`persona({ x, y: pés, h: 700, poses: [[palavra|null, 'pose', 'a'|'b'|'c'], …], pula: [[palavra, xNovo], …], vira })`**: o APRESENTADOR oficial (Nano Banana, lenço rosa), desde 27/11. Usar ele, não o `boneco` antigo. Poses em `stickman/persona/POSES.txt`: acenando, apontando, apontando_baixo, apresentando, pensando, cansado, triste, surpreso, comemorando, dor_barriga, bravo, joinha (variantes a/b/c). Pose nova = gerar folha nova no Nano Banana (prompt em `01-BASE/STICKMAN/PROMPTS-PERSONA.md`) e rodar `persona/recortar.py`.
- `boneco({ x, y: pés, w, acc:'laco', poses:[[palavra|null, pose, expr], …], ciclo:'andando'|'correndo', mover:[x0,x1,'palavraFim'], segura:'ilustração', vira })`.
  - **Corpo/rosto que muda com a fala:** `barriga: 1` ou `[de, para, 'palavra']` (gordinho, estufada) · `inchado: [0, 1, 'palavra']` (rosto inchado) · `marcas: ['espinhas']`.
  - **Fundo sempre cheio** (correção 27/11): nunca `liso` claro; usar cenário ou raios/pontos coloridos.
  - **Roteiro primeiro** (✋ G2): falas + cena prevista numa tabela no ROTEIRO.md; motion só depois do ok.
  - **Poses:** em_pe, falando, apontando, apontando_e, acenando, pensando, mao_queixo, mao_testa, cansado, triste, comemorando, bracos_abertos, bracos_cruzados, maos_cintura, segurando, oferecendo, dor_barriga, assustado, encolhido, sentado, sentado_triste, deitado, levantando_peso, bebendo, pulando.
  - **Expressões:** neutro, feliz, muito_feliz, apaixonado, confiante, triste, chorando, bravo, surpreso, assustado, cansado, pensativo, dor, nojo, duvida, dormindo, tonto, satisfeito.
  - Ver tudo de uma vez: abrir `stickman/folha-modelo.html`.
- `ilu(nome, x, y, w)`: Fluent 3D (lista em `ilustras/LISTA.txt`).
- `foto(arquivo, x, y, w, h)`: pote real, cartão branco com brilho, **só no bloco do produto**. Outro produto: `const FOTOS = '<caminho>/fotos/'` no cenas.js.
- Textos: `titulo(t)` (topo, Anton) · `grande(t, x, y, tamanho)` (número de impacto) · `etq(t, x, y, {tipo:'nao'|'sim'})` (✕ vermelho / ✓ verde) · `preco(t,x,y)` (etiqueta $$$) · `card(x,y,w,html)`.
- Sinais: `xis(x,y,s)` · `ok(x,y,s)` · `seta(x1,y1,x2,y2,curva)` (se desenha).
- Infográficos: `medidor(x,y,w,v0,v1,rótulo)` · `barra(x,y,w,pct,cor)` · `colunas(x,y,[[rótulo,0–1,cor,valor]])` · `lista(x,y,[itens],{ws:[palavras]})` · `calendario(x,y,w,diasMarcados)` · `bateria(x,y,w,nivel)` · `copo(x,y,w,cor,{grumos})` · `balao(x,y,w,html)`.
- CTA: `botaoCarrinho(x, y)` + `ilu('backhand-index-pointing-down', …)`.
- `ROTEIRO = [[cena, [falas]], …]` liga cena ↔ frases do `tempos.json`.

## Layout (1080 × 1920)
Legenda em pílula no topo (y262–352, automática). Palco: x120–960 até y840 · x120–780 de y840 a y1240. Boneco com `w:430`, pés em `y:1200`, `x` 270–340 (lado esquerdo); peças à direita e no alto. Título em `top:400` (some com `o:` quando o produto entra no mesmo lugar).

## Economia (obrigatório)
- Não reler este arquivo, o FORMATO nem o motor inteiro: o molde (`cenas.js` do E09) basta.
- 1 folha de checagem; corrigir só o que ela mostrar; 1 render final.
- Sem ferramenta paga. Nano Banana/Flow só para o pacote de cenários (feito uma vez) ou para pedido explícito do dono.

## Entrega no chat
3 linhas: o que é (código · apelido) · onde está (Drive) · ⚠️ que o dono decide. Fecha com "Próximo passo:".
