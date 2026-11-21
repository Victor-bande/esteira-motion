# KIT-VISUAL · C01 · Malu · BR
v1 · 20/11/2026 · orquestrador · referência escolhida pelo dono: `referencia-visual/REF-01-curiosidades.mp4` (56 s, 9:16, canal de curiosidades em cartoon).

> O motion é só a forma de visualizar a copy: dinâmico, que segura o olho, e que segue os princípios de vídeo que vende. **O trabalho de verdade é a copy.** O visual é um template fixo; cada vídeo só troca o conteúdo.

## A gramática da referência (o que copiamos dela: método, não o conteúdo nem os personagens)
| Elemento | Na referência | Regra para nós |
|---|---|---|
| Formato | 720 × 1280, 30 fps | 1080 × 1920, 30 fps |
| Legenda | uma palavra por vez, branca, no centro da tela, sempre na tela | igual: palavra por palavra, sincronizada com a voz |
| Ritmo | troca de plano a cada 1 a 2 s (zoom, corte, câmera andando); nunca parado | troca de cena ou movimento a cada 1–2 s; nada parado mais de 1 s |
| Voz | narração rápida e contínua, sem silêncio | igual (ElevenLabs, ritmo acelerado) |
| Personagem fixo | um mascote recorrente que reage (surpresa, dúvida, sorriso) | um mascote próprio da C01 (a desenhar), reagindo à fala |
| Pop-up de número | número grande vermelho com contorno no topo ("-R$ 10 MI") | pop-up grande para a palavra-chave do bloco (dor, prova, piso de número) |
| Tela de celular | o celular entra em close mostrando app, extrato, cronômetro | **é aqui que entra o produto real:** página do produto, avaliações, foto do pote |
| Mundo | cenário cartoon colorido que muda a cada bloco | um cenário por bloco do DNA (casa, cozinha, rua, banheiro…) |

## Decisão (21/11): **2D em código** · template em `06-FERRAMENTAS/motion-template/`
A referência é **animação 3D**. Em código (a `claude-video`) dá para fazer a mesma gramática em **2D chapado** (mascote e cenários desenhados em vetor), barato e reaproveitável. O visual 3D igual ao da referência exige gerar imagem ou clipe por IA em cada cena (custo em créditos por vídeo).
- (a) **2D em código**: o template é feito uma vez; cada vídeo novo custa quase só a copy.
- (b) **3D com IA**: mais parecido com a referência; custo por cena.

## Margens seguras (TikTok Shop · 21/11) · OBRIGATÓRIO
Em 1080 × 1920 (em 720 × 1280, multiplicar por 2/3). Fonte: modelos de safe zone do In-Feed do TikTok (não há número oficial nas páginas de ajuda; usar o mais conservador e conferir no celular).
- **Topo:** nada importante acima de **y = 240** (abas "Seguindo / Para você", busca, LIVE).
- **Baixo:** nada importante abaixo de **y = 1260** (@, legenda do post, música e a **âncora do produto** do TikTok Shop, que sobe mais quando a legenda é longa).
- **Esquerda:** margem de **120 px**.
- **Direita:** **120 px** no alto; de **y = 840 para baixo, 300 px** (coluna de curtir, comentar, salvar, compartilhar, perfil).
- **Zona útil:** x 120–960 entre y 240–840 · x 120–780 entre y 840–1260. Legenda da fala, produto, pop-ups e rótulos vivem **só** aí. Abaixo de 1260 só fundo e chão.
- Todo render gera uma folha de checagem com a grade de margens por cima; nada importante pode encostar nela.

## Dinamismo (correção do dono · 21/11, vídeo 1 "não ficou dinâmico")
- **Cada frase tem um desenho que mostra o que é dito** (exemplo visual, ícone, objeto, mini-cena), não só a mascote parada.
- **Storytelling visual:** a cena conta a história sozinha sem som (a rica cercada de potes, a classe média brigando com o copo, a pobre tranquila).
- Algo novo entra na tela a cada **1 a 2 s**; mascotes reagem (expressão muda na palavra-chave).
- Mais elementos por cena: setas, riscos, contadores, ícones, comparação lado a lado.

## Fixos
- Cor de destaque: 1 só (vermelho dos pop-ups) · fonte da legenda: Google Fonts, pesada, com contorno.
- Produto: só foto real (`03-PRODUTOS/P-…/fotos/`), dentro da tela de celular ou em close.
- Música: escolhida no app, na biblioteca comercial (CLAUDE.md, regra 5).
