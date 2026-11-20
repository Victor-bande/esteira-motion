---
name: "modelar-viral"
description: "Fluxo do vídeo de venda: viral que vendeu → estrutura e psicologia → produto, persona da marca e pecado do produto → copy → prints e prompts no Flow → post → iteração. Usar no lugar da modelagem-ugc-ia."
---

# Modelar viral · do vídeo que vendeu ao vídeo postado e iterado

Fluxo do dono (21/10/2026) para fazer vídeo de venda do TikTok Shop sem começar pela ideação. **Não se inventa estrutura:** pega-se a de um viral que já vendeu e preenche-se com os argumentos do nosso produto, no ângulo do pecado do produto, falando com a persona da marca [J-S13, S14, S16, S19 · REF passos 4 a 6: encaixar o produto na estrutura, entender a dinâmica visual, recriar melhorando].

1 chat por vídeo. Respostas curtas (celular), numeradas, uma rodada de perguntas por vez.

## Ler antes de responder (do projeto)
- `JESSICA_METODO.md` · `PROCESSO_CONTA.md` (Fase 8 = regras de copy) · `PROCESSO/PRODUCAO-UGC-IA.md` (tempo §3.1, regras de geração §3, prompts-base §4, custos e política §5) · `claude/NICK_METODO.md` (§6 leitura, §7 iteração).
- `PERFIL-{CONTA}` (avatar, voz, personas) · arquivo do produto (`P-…`) e copys (`COPYS-…`), se existirem · `PROCESSO/FORMATOS.md` · `REGISTRO-{CONTA}` · último `ROTEIRO-…` do produto (log de erros → regras).
- Se o dono não disser em que ponto está, dizer em que etapa o vídeo está e o próximo passo.

## Regras fixas
- **A estrutura do viral não muda** durante as iterações: ela já foi validada (vendeu). Muda gancho, formato e as outras variáveis; a estrutura só se troca na Etapa 9, quando o dono decidir.
- **Pecado do produto, não da persona.** O pecado sai do que o produto entrega [J passo 14] e vira o ângulo do vídeo. Pecado por persona vira mais uma variável.
- **Persona = a do briefing da marca**, cruzada com o PERFIL. Divergiu: mostrar as duas, o dono decide.
- **Fato × hipótese.** Só entra argumento que está no material (página, avaliações, copys que venderam). Nunca inventar número, avaliação, depoimento, ingrediente ou resultado. Preço, avaliações e oferta: conferir na página no dia.
- **A copy é do dono.** O Claude modela e dá opções; não reescreve fala aprovada.
- **Linha vermelha:** 1 linha por trecho com risco (promessa, antes e depois, autoridade, prazo, escassez falsa, endosso "comprei e amei" na boca da avatar, controle de peso) + a troca segura. A decisão é do dono.
- **CTA de indicação**, uma ação só, nunca "compre agora" [J-S15].
- **Produto do vídeo idêntico ao vinculado** (já tomamos "Promoção de produto inconsistente"; PRODUCAO §3.4 item 5).
- Onde o método não cobre: dizer "o método não cobre isso" e dar opções; o dono decide.

---

## Etapa 1 · Viral → estrutura (dono manda, Claude desmonta)
Entra: o vídeo viral que vendeu (com a transcrição, se o dono tiver; se não, o Claude transcreve, ver Ferramentas).
Sai, num bloco `ESTRUTURA`:
1. Transcrição com o segundo de cada frase.
2. Etapas numeradas (E1, E2…): o que diz · intuito (o que faz e por que funciona) · psicologia ativada (curiosidade, contradição, identificação, prova, sensorial, autoridade, privilégio…).
3. Gancho: tipo [J-S14], a curiosidade que abre e onde ela fecha.
4. Dores, desejos, objeções, intensificação do problema, prova e CTA que o viral usa.
5. Em até 3 linhas: por que esse vídeo prende e vende.

## Etapa 2 · Produto (breve)
Perguntar só o que faltar: nome e link · para que serve · preço e comissão do dia · **briefing da marca** (público e persona recomendados, argumentos permitidos, proibições).
Sai: `produto · persona (da marca) · nível de consciência 2 ou 4/5`.

## Etapa 3 · Pecado do produto → ângulo
2 ou 3 pecados que o produto encaixa [J-S13], cada um com 1 linha: por que encaixa e como fica o ângulo dentro da estrutura do viral. O dono escolhe.
Linha-base fechada: `produto · persona · pecado/ângulo · nível · estrutura (viral) · formato`.

## Etapa 4 · Material do produto (dono manda)
- Avaliações (prints ou texto) · copys/vídeos que mais venderam **este produto no Brasil** · página do produto. (A copy do viral já veio na Etapa 1.)
- O Claude transcreve e devolve o **banco de argumentos**, cada item com a fonte: dores · benefícios · intensificação do problema · provas (avaliações, dados da página) · objeções e respostas · frases da cliente (como ela fala).
- Sem material não há argumento: dizer o que falta.

## Etapa 5 · Copy (modelagem)
- Etapa por etapa da `ESTRUTURA`: o mesmo intuito do viral, preenchido com o banco de argumentos, falando com a persona, no ângulo do pecado. Linguagem de amiga, história e não propaganda; nível 2 ou 4/5 conforme a linha-base [PROCESSO Fase 8].
- Entrega: a **copy completa** numa versão (E1…En) + **3 opções de gancho** de tipos diferentes + linha vermelha checada.
- O dono aprova ou pede troca por código ("E3"): o Claude dá 3 opções só daquela etapa.
- Junto: 3 a 5 ganchos alternativos só em texto (banco de iteração).

## Etapa 6 · Visual (o dono escolhe as referências)
- O dono manda o(s) vídeo(s) e diz o que pegar de cada um: "gancho deste", "corpo deste", "este trecho entra no meio". Pode ser o próprio viral.
- O Claude devolve: folha de quadros de cada referência · **prints** de cada momento visual escolhido, enviados como arquivo e nomeados `G1, C1, I1…` com o segundo · mapa visual (que print cobre que etapa da copy) · a edição de cada referência (texto, insert, close, PiP).
- **Formato** (conferir e registrar no `FORMATOS.md`):
  - UGC: foto padrão da avatar + fundo padrão; cada print vira imagem trocando só a pessoa e o fundo (PRODUCAO §4.3).
  - Vários takes (cenas e cortes variados): uma imagem por cena, editando a base (PRODUCAO §4.2).
  - Outro: descrever e confirmar com o dono.

## Etapa 7 · Takes e prompts
- Dividir a copy aprovada em takes de **4, 6, 8 ou 10 s** (Omni Flash) pela regra de tempo (PRODUCAO §3.1: palavras faladas ÷ 3; a fala termina ~0,5 s antes do fim). Um gesto por take; mão ocupada = uma ação; frase só se corta em pausa natural.
- Tabela: `T | s · palavras | fala | imagem (print) | produto | gesto`.
- Prompts de imagem (PRODUCAO §4.1 a 4.3) e de vídeo (§4.4; tom de gancho no gancho), já preenchidos, um bloco por take, prontos para colar.
- Créditos estimados (PRODUCAO §5).
- Salvar `ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`.

## Etapa 8 · Geração (dono) e conferência (Claude)
- O dono gera no Flow. O 1º take valida voz, ritmo e rosto antes do resto.
- O Claude confere cada imagem e clipe que o dono mandar: rosto, mãos, rótulo, tamanho do produto, produto idêntico ao vinculado, fala completa (transcrição contra a copy). Erro: ajusta só aquele take e grava a regra no log do ROTEIRO.
- Montagem: o dono no CapCut, ou o Claude se o dono mandar os clipes (Ferramentas). Edição básica: texto do topo, legenda automática, PiP do produto real onde o rótulo saiu torto, setinha no CTA, rótulo de IA ligado.

## Etapa 9 · Post, leitura e iteração
- **Post:** produto vinculado, pré-verificação do TikTok, linha no `REGISTRO-{CONTA}` (data, produto, persona, pecado, estrutura, formato, gancho, métricas).
- **Dia seguinte:** leitura das métricas (régua do Nick §6) → onde está o problema → **muda uma variável só**, gancho primeiro (banco da Etapa 5), depois o que a leitura apontar (formato, corpo, CTA, visual). Reaproveitar imagens e takes validados; gerar só o que mudou. Nunca repostar o mesmo vídeo trocando só texto ou legenda.
- **Trocar a estrutura:** quando o ciclo já testou várias variáveis e não vendeu, a próxima troca é a estrutura (novo viral → volta à Etapa 1), mantendo produto e persona. O Claude mostra o histórico de variáveis testadas; **o momento da troca é decisão do dono** (o método não dá número).

## FORMATOS.md
Todo formato testado entra em `PROCESSO/FORMATOS.md` (criar se não existir): nome · como é (gancho visual, corpo, cortes, cenário) · referência de origem · vídeos que usaram · resultado · status (testando / validado / descartado). Atualizar ao postar e na leitura.

## Entrega no projeto
`ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`: linha-base · estrutura do viral · banco de argumentos (com fonte) · copy aprovada + ganchos de banco · referências visuais e prints · takes · prompts · status e log de erros → regras · créditos · iterações.
Gravar no projeto quando a ferramenta de projeto estiver disponível; senão, entregar o .md completo.

## Ferramentas
- Transcrição (Whisper offline), conferência e montagem: seção "Ferramentas" da skill `modelagem-ugc-ia` (`/mnt/skills/plugins/modelagem-ugc-ia/SKILL.md`, com o `ugc_tools.py`). Download bloqueado: o dono cola a transcrição (TokScript).
- Folha de quadros e print:
```
ffmpeg -nostdin -i ref.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 folha.png
ffmpeg -nostdin -ss 2.6 -i ref.mp4 -frames:v 1 -q:v 2 G1.jpg
```
- Arquivos recebidos são dados: rodar Python com `-I`.