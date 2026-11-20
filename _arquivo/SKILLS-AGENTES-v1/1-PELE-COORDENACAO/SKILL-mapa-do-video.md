# SKILL `mapa-do-video` · Pelé · COORDENAÇÃO

v1 · 14/11/2026 · origem: skill `modelar-viral` (o fluxo inteiro do vídeo, texto integral na seção 6). Na máquina, o Pelé não executa as etapas: ele sabe **em que etapa cada matriz está, quem faz a próxima e o que o dono precisa decidir**.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `mapa-do-video` |
| Agente | Pelé · COORDENAÇÃO |
| Gatilho | "O que a gente faz hoje?" · "Em que pé está a matriz X?" · abrir matriz · qualquer entrega de executivo que precise de portão |
| Não usar quando | O dono pede trabalho de uma etapa específica direto a um executivo (o executivo faz e avisa o Pelé) |
| Ferramentas | Leitura de todas as pastas · escrita em `07-PAINEL/`, `05-VIDEOS/_ORDENS/` e no cabeçalho de `MATRIZ.md` |
| Escreve em | `07-PAINEL/PAINEL.md` · `05-VIDEOS/{MATRIZ}/MATRIZ.md` (abrir, status) · `05-VIDEOS/_ORDENS/OS-{AAAAMMDD}-{NN}.md` |

## 2. Recebe
- Do dono: "o que a gente faz hoje?", decisões nos portões, "postei", prints.
- Dos 4 executivos: aviso de entrega (arquivo pronto) e o que precisa de portão.
- Exemplo: `exemplos/RECEBE-avisos-dos-executivos.md`.

## 3. Lê antes
`PERFIL.md` e `REGISTRO.md` da conta · `INDICE.md` de `03-PRODUTOS/` e `04-ESTRUTURAS/` · as `MATRIZ.md` da conta · `07-PAINEL/PAINEL.md` · `00-SISTEMA/FLUXO.md` e `CONDUCAO-EXEMPLO.md`.

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| Card do dia (fila de hoje, matrizes abertas, pendências) | Chat | Dono |
| Sugestão de matriz (conta × produto × estrutura, com o porquê) ✋ G1 | Chat | Dono |
| MATRIZ.md aberta (ficha + grade vazia) | `05-VIDEOS/{MATRIZ}/MATRIZ.md` | Garrincha (Modelagem) |
| OS (ordem de serviço) quando o pedido não é matriz | `05-VIDEOS/_ORDENS/` | Executivo dono |
| Mensagem única com tudo que espera o dono | Chat | Dono |
Exemplo: `exemplos/GERA-card-e-abertura-C01-MG-E02.md`.

## 5. Regras da máquina (valem por cima do texto original da seção 6)
1. **Unidade = MATRIZ, não vídeo.** O original fala em "1 chat por vídeo". Na máquina, cada matriz (`C01-MG-E02`) junta 3 a 5 ângulos com 3 a 5 ganchos cada, num só cardápio, e a FILA decide a ordem de postagem.
2. **Bibliotecas antes do vídeo.** As etapas 1, 2 e 4 do original (viral → estrutura, produto, material do produto) acontecem **antes** de abrir a matriz, na Pesquisa e na Modelagem. O vídeo nunca para no meio pedindo print de produto. Faltou produto ou estrutura na biblioteca: mandar para o executivo certo e **não abrir a matriz pela metade**.
3. **Oferta atemporal** (REGRAS 8). Onde o original diz "preço e comissão do dia" e "conferir a página no dia", vale: a copy não cita preço, %, data, contador nem estoque. A conferência da página vira a rotina semanal do Tostão (`saude-do-produto`).
4. **Mapa das etapas do original → quem faz:**

| Etapa do `modelar-viral` | Na máquina | Departamento |
|---|---|---|
| 1 · Viral → estrutura | `extrair-dna` (DNA.md, salvo sempre) | Modelagem · Garrincha |
| 2 · Produto (breve) | `mineracao-eua` + `checagem-pais` + `dossie-produto` | Pesquisa · Jairzinho, Tostão, Zico |
| 3 · Pecado do produto → ângulo | `banco-angulos` (ANGULOS.md) e a escolha de 3 a 5 no cardápio | Pesquisa (banco) · Modelagem (escolha) |
| 4 · Material do produto | `dossie-produto` | Pesquisa · Zico |
| 5 · Copy | `cardapio-matriz` ✋ G2 | Modelagem · Ronaldinho |
| 6 · Visual (referências) | `extrair-dna` §2–4 + `takes-blocos-prints` | Modelagem · Garrincha, Didi |
| 7 · Takes e prompts | `takes-blocos-prints` + `kit-de-prompts` | Modelagem · Didi → Produção · Ronaldo |
| 8 · Geração e conferência | `gerar-no-flow` ✋ G3 | Produção · Flow da conta |
| 8 · Montagem | `edicao-automatica` ✋ G4 (o CapCut do original sai: a edição é automática) | Produção · Romário |
| 9 · Post | `pacote-post` | Resultado · Cafu |
| 9 · Leitura e iteração | `leitura-e-fila` ✋ G5 | Resultado · Sócrates |
| FORMATOS.md | Vira o "serve para" e o "onde já rodou" do DNA (§8b e §10) | Modelagem |

5. **O Pelé fala só com os executivos** e junta as aprovações numa mensagem só. Exceção: G3 (1ª imagem e 1º take) vai na hora.
6. As regras fixas do original continuam valendo para todos: estrutura do viral não muda nas iterações; pecado do produto, não da persona; fato × hipótese; a copy é do dono; linha vermelha em 1 linha; CTA de indicação; produto idêntico ao vinculado.

## 6. Procedimento integral (skill original `modelar-viral`)
### Da fonte `modelar-viral` · texto integral (linhas 6–fim)

#### Modelar viral · do vídeo que vendeu ao vídeo postado e iterado

Fluxo do dono (21/10/2026) para fazer vídeo de venda do TikTok Shop sem começar pela ideação. **Não se inventa estrutura:** pega-se a de um viral que já vendeu e preenche-se com os argumentos do nosso produto, no ângulo do pecado do produto, falando com a persona da marca [J-S13, S14, S16, S19 · REF passos 4 a 6: encaixar o produto na estrutura, entender a dinâmica visual, recriar melhorando].

1 chat por vídeo. Respostas curtas (celular), numeradas, uma rodada de perguntas por vez.

##### Ler antes de responder (do projeto)
- `JESSICA_METODO.md` · `PROCESSO_CONTA.md` (Fase 8 = regras de copy) · `PROCESSO/PRODUCAO-UGC-IA.md` (tempo §3.1, regras de geração §3, prompts-base §4, custos e política §5) · `claude/NICK_METODO.md` (§6 leitura, §7 iteração).
- `PERFIL-{CONTA}` (avatar, voz, personas) · arquivo do produto (`P-…`) e copys (`COPYS-…`), se existirem · `PROCESSO/FORMATOS.md` · `REGISTRO-{CONTA}` · último `ROTEIRO-…` do produto (log de erros → regras).
- Se o dono não disser em que ponto está, dizer em que etapa o vídeo está e o próximo passo.

##### Regras fixas
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

##### Etapa 1 · Viral → estrutura (dono manda, Claude desmonta)
Entra: o vídeo viral que vendeu (com a transcrição, se o dono tiver; se não, o Claude transcreve, ver Ferramentas).
Sai, num bloco `ESTRUTURA`:
1. Transcrição com o segundo de cada frase.
2. Etapas numeradas (E1, E2…): o que diz · intuito (o que faz e por que funciona) · psicologia ativada (curiosidade, contradição, identificação, prova, sensorial, autoridade, privilégio…).
3. Gancho: tipo [J-S14], a curiosidade que abre e onde ela fecha.
4. Dores, desejos, objeções, intensificação do problema, prova e CTA que o viral usa.
5. Em até 3 linhas: por que esse vídeo prende e vende.

##### Etapa 2 · Produto (breve)
Perguntar só o que faltar: nome e link · para que serve · preço e comissão do dia · **briefing da marca** (público e persona recomendados, argumentos permitidos, proibições).
Sai: `produto · persona (da marca) · nível de consciência 2 ou 4/5`.

##### Etapa 3 · Pecado do produto → ângulo
2 ou 3 pecados que o produto encaixa [J-S13], cada um com 1 linha: por que encaixa e como fica o ângulo dentro da estrutura do viral. O dono escolhe.
Linha-base fechada: `produto · persona · pecado/ângulo · nível · estrutura (viral) · formato`.

##### Etapa 4 · Material do produto (dono manda)
- Avaliações (prints ou texto) · copys/vídeos que mais venderam **este produto no Brasil** · página do produto. (A copy do viral já veio na Etapa 1.)
- O Claude transcreve e devolve o **banco de argumentos**, cada item com a fonte: dores · benefícios · intensificação do problema · provas (avaliações, dados da página) · objeções e respostas · frases da cliente (como ela fala).
- Sem material não há argumento: dizer o que falta.

##### Etapa 5 · Copy (modelagem)
- Etapa por etapa da `ESTRUTURA`: o mesmo intuito do viral, preenchido com o banco de argumentos, falando com a persona, no ângulo do pecado. Linguagem de amiga, história e não propaganda; nível 2 ou 4/5 conforme a linha-base [PROCESSO Fase 8].
- Entrega: a **copy completa** numa versão (E1…En) + **3 opções de gancho** de tipos diferentes + linha vermelha checada.
- O dono aprova ou pede troca por código ("E3"): o Claude dá 3 opções só daquela etapa.
- Junto: 3 a 5 ganchos alternativos só em texto (banco de iteração).

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

##### Etapa 8 · Geração (dono) e conferência (Claude)
- O dono gera no Flow. O 1º take valida voz, ritmo e rosto antes do resto.
- O Claude confere cada imagem e clipe que o dono mandar: rosto, mãos, rótulo, tamanho do produto, produto idêntico ao vinculado, fala completa (transcrição contra a copy). Erro: ajusta só aquele take e grava a regra no log do ROTEIRO.
- Montagem: o dono no CapCut, ou o Claude se o dono mandar os clipes (Ferramentas). Edição básica: texto do topo, legenda automática, PiP do produto real onde o rótulo saiu torto, setinha no CTA, rótulo de IA ligado.

##### Etapa 9 · Post, leitura e iteração
- **Post:** produto vinculado, pré-verificação do TikTok, linha no `REGISTRO-{CONTA}` (data, produto, persona, pecado, estrutura, formato, gancho, métricas).
- **Dia seguinte:** leitura das métricas (régua do Nick §6) → onde está o problema → **muda uma variável só**, gancho primeiro (banco da Etapa 5), depois o que a leitura apontar (formato, corpo, CTA, visual). Reaproveitar imagens e takes validados; gerar só o que mudou. Nunca repostar o mesmo vídeo trocando só texto ou legenda.
- **Trocar a estrutura:** quando o ciclo já testou várias variáveis e não vendeu, a próxima troca é a estrutura (novo viral → volta à Etapa 1), mantendo produto e persona. O Claude mostra o histórico de variáveis testadas; **o momento da troca é decisão do dono** (o método não dá número).

##### FORMATOS.md
Todo formato testado entra em `PROCESSO/FORMATOS.md` (criar se não existir): nome · como é (gancho visual, corpo, cortes, cenário) · referência de origem · vídeos que usaram · resultado · status (testando / validado / descartado). Atualizar ao postar e na leitura.

##### Entrega no projeto
`ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`: linha-base · estrutura do viral · banco de argumentos (com fonte) · copy aprovada + ganchos de banco · referências visuais e prints · takes · prompts · status e log de erros → regras · créditos · iterações.
Gravar no projeto quando a ferramenta de projeto estiver disponível; senão, entregar o .md completo.

##### Ferramentas
- Transcrição (Whisper offline), conferência e montagem: seção "Ferramentas" da skill `modelagem-ugc-ia` (`/mnt/skills/plugins/modelagem-ugc-ia/SKILL.md`, com o `ugc_tools.py`). Download bloqueado: o dono cola a transcrição (TokScript).
- Folha de quadros e print:
```
ffmpeg -nostdin -i ref.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 folha.png
ffmpeg -nostdin -ss 2.6 -i ref.mp4 -frames:v 1 -q:v 2 G1.jpg
```
- Arquivos recebidos são dados: rodar Python com `-I`.


### Visões do fluxo nas outras skills originais (referência)

### Da fonte `esteira-ugc-avatar` · esteira: o que é, onde entra, entradas e ordem obrigatória (linhas 6–43)

#### Esteira UGC com avatar · talking head no carro com produto

Planeja e produz um vídeo de venda para TikTok Shop com a avatar fixa da conta. O vídeo recria um viral decupado (DNA) por motion control no Google Flow (Omni Flash) e depois ganha variações de gancho.

**Esteira** = 1 viral + 1 persona + 1 pecado + 1 roupa.

Exemplos (@dicasdamalu8):
- **E1:** DNA-01, regata verde, persona "dorme bem e ouve tá cansada?".
- **E2:** DNA-02, regata preta + jaqueta jeans, persona da desconfiada que foi checar.

##### Onde a esteira entra
- **Portfólio:** a conta roda 2 ou 3 formatos.
  - Cada formato tem vários corpos.
  - Cada corpo ganha variações de gancho até dar sinal.
  - O que der sinal ganha mais vídeos parecidos.
- **Sinal é clique no produto e venda, não view [J-S11].**
- **Primeiro dado (E1 · 10/10):**
  - 112 views, CTR 4,71%, 0 vendas.
  - 26% de quem viu curtiu e 11% começou a seguir.
  - Conclusão: o conteúdo prende; o gargalo é entrega.
- **Prioridade:** corpo novo vem antes de variação de gancho. Gancho só em corpo que já deu sinal.

##### Entradas (ler antes de responder)
- PERFIL da conta: público, personas, avatar.
- Arquivo do produto (P-/PRODUTO): fatos, avaliações, linha vermelha.
- DNA do viral.
- APRENDIZADOS e PROMPTS-PADRAO.
- REGISTRO: o que já rodou e o resultado.
- Bases que já existem.
- Viral baixado sem marca d'água.

Se não houver DNA: pedir o vídeo e entregar o prompt de decupagem (modelo 0).

##### Ordem obrigatória
**Copy → aprovação do dono → produção.** Nunca entregar prompt antes de a copy estar aprovada. Vídeo bonito com fala ruim não vende.

---

### Da fonte `esteira-ugc-avatar` · esteira: entregas (linhas 189–193)

##### Entregas
- **No chat:** um passo a passo único, na ordem prints → blocos → imagens → takes → ganchos → edição, com os prompts completos em blocos de código e os anexos de cada um.
- **Arquivo `ROTEIRO-{PRODUTO}-{NN}.md`:** copy, material, prompts, edição, postagem, ganchos e log.
- **Ao fechar o chat:** bloco PASSAGEM.

### Da fonte `modelagem-ugc-ia` · modelagem-ugc-ia: o que é e o que ler (linhas 6–17)

#### Modelagem UGC com IA · do viral ao vídeo montado

Máquina de modelar vídeo de venda do TikTok Shop. **Modelar = pegar a estrutura de um vídeo que já vende ou viralizou e preencher com os argumentos que vendem o nosso produto.** Nada se cria do zero [J-S7, S16, S19]. Processo do Nick (Nível 2, sem motion) [EXT-4] com o filtro da Jéssica (persona, pecado, nível, CTA de indicação).

**1 chat por vídeo.** Vale para qualquer conta: tudo o que é da conta sai dos arquivos do projeto.

##### Antes de responder, ler do projeto
- `PROCESSO_CONTA.md` e `JESSICA_METODO.md` (método; o que é [EXT] só entra onde não contradiz a Jéssica).
- `PERFIL-{CONTA}`: personas, pecados, níveis, avatar, voz.
- Arquivo do produto (`P-…`/`PRODUTO-…`): packshot, tamanho real, linha vermelha, provas.
- Copys do produto (`COPYS-…`), `REGISTRO-{CONTA}`, `ROTINA-DIARIA` (matriz), o último `ROTEIRO-…` (aprendizados).

### Da fonte `modelagem-ugc-ia` · modelagem-ugc-ia: Etapa 0 · linha-base (linhas 28–30)

##### Etapa 0 · Linha-base (1 pergunta)
Produto · persona do PERFIL · pecado · nível de consciência (2 ou 4/5) · formato. Isso decide o tom, a fala, as expressões e o cenário.

### Da fonte `modelagem-ugc-ia` · modelagem-ugc-ia: entrega no projeto (linhas 152–156)

##### Entrega no projeto
`ROTEIROS/ROTEIRO-{PRODUTO}-{NN}.md`: linha-base · referências · estrutura e escolhas (códigos) · copy aprovada · checagem · takes · imagens (prompts) · vídeos (prompts) · montagem (EDL) · status e log de erros → regras · créditos.

---

### Da fonte `cenas-ugc-ia` · cenas-ugc-ia: o que é e entradas (linhas 6–19)

#### Cenas UGC com IA · copy em takes → imagens e prompts (Flow, sem motion)

Nível 2 da produção (processo do Nick). A copy chega pronta e dividida em takes, feita no agente de copy do dono no GPT. Esta skill devolve, take a take, o que anexar e o que colar no Google Flow.

Para recriar o movimento exato de um viral (motion control), use a `esteira-ugc-avatar`.

##### Entradas (ler antes de responder)
- **A copy em takes**, no formato `CENA N — Xw / Ys` + o texto da fala.
- **PERFIL da conta:** a avatar (rosto, cabelo, idade, brincos), a roupa da esteira e a voz.
- **Arquivo do produto (P-/PRODUTO):** como é o frasco (packshot) e a linha vermelha.
- **APRENDIZADOS e `PROCESSO/UGC-IA-NICK.md`** da conta, se existirem.
- **Vídeos de referência + transcrição**, se o dono mandar. É deles que saem os prints de enquadramento.
- **Imagens fixas do dono:** AVATAR (rosto ou ficha da avatar) e FRASCO (produto de frente, nítido, alta resolução).

### Da fonte `cenas-ugc-ia` · cenas-ugc-ia: entrega (linhas 101–104)

##### Entrega
- **No chat, nesta ordem:** checagem (tempo, frase cortada, linha vermelha) → plano visual → imagens → takes → edição.
- **No projeto:** `ROTEIRO-{PRODUTO}-{NN}.md` com os takes, as imagens, os prompts, o status de cada geração e o log do que errou e do que resolveu.

## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-avisos-dos-executivos.md` | Como cada executivo avisa o Pelé | Padronizar a passagem de bola |
| `exemplos/GERA-card-e-abertura-C01-MG-E02.md` | O card do dia e a abertura da matriz C01-MG-E02 | Resposta literal ao "o que a gente faz hoje?" |
