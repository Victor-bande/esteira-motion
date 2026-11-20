# LEIA PRIMEIRO · Operação TikTok Shop com 7 agentes

v2 · 13/11/2026 · escrito pelo Claude que produziu, do zero até o post, os vídeos V-C01-MG-E01-MG1-G1 e V-C01-MG-E02-MG2-G1 da conta @dicasdamalu8. Este pacote é aquele fluxo, separado em agentes de função única e montado como **máquina de modelar vídeo**.

**Para o OpenClaw:** execute as instruções da seção 1, na ordem. Não improvise etapa nem agente: o fluxo já foi testado na prática. Onde algo não couber na sua plataforma, diga ao dono e proponha a alternativa mais próxima.

## A máquina em 6 linhas
1. **Bibliotecas antes do vídeo:** estruturas virais (Garrincha), produtos (Zico) e contas (Pelé). Nada para no meio do vídeo pedindo print: o que o vídeo precisa já está salvo.
2. **Decidir junto:** o Pelé lê o histórico da conta e sugere; o dono decide. Unidade de trabalho = **MATRIZ** (conta × produto × estrutura).
3. **Cada matriz nasce com 3 a 5 ângulos**, e cada ângulo com **3 a 5 ganchos**. O dono aprova num cardápio só (G2).
4. **Produz uma vez, posta várias:** as imagens são da estrutura (servem a todos os ângulos); o gancho novo é 1 take + re-render.
5. **Toda versão postada já tem as próximas na FILA.** O Sócrates lê os números e reordena a fila.
6. **Oferta atemporal:** nenhuma fala ou tela com preço, %, data, contador ou estoque. O vídeo continua válido quando a promoção muda.

---

## 1. Montagem (ordem de execução)

1. **Limpar.** Arquive (não apague) os agentes, skills e arquivos antigos desta operação. Recomeça do zero com o que está neste pacote.
2. **Pastas.** Crie a estrutura do `00-SISTEMA/FLUXO.md` (seção "Pastas"): `00-SISTEMA`, `01-BASE`, `02-CONTAS`, `03-PRODUTOS`, `04-ESTRUTURAS`, `05-VIDEOS` (com `_ORDENS/` e uma pasta por matriz), `06-FERRAMENTAS`, `07-PAINEL`.
3. **Sistema.** Copie `00-SISTEMA/` e `06-FERRAMENTAS/` deste pacote para as pastas de mesmo nome.
4. **Base de conhecimento.** O dono traz do projeto do Claude os arquivos da seção 5 ("Migração") e você coloca cada um no destino indicado. **Sem `PROMPTS-FLOW.md` o Ronaldo não roda; sem `DOSSIE-ANGULOS.md` o Zico e o Ronaldinho perdem metade da força.**
5. **Agentes.** Crie os 7 agentes da pasta `AGENTES/`. Cada arquivo traz exatamente os campos da sua plataforma:
   - **Configuração:** nome, função, modelo (cérebro), esforço, cor do agente, cor do chat.
   - **Instruções:** o bloco "INSTRUÇÕES (AGENT.md)", colado inteiro.
   - **Memórias:** a lista "MEMÓRIAS", uma por item.
   - **Habilidades:** cada "H1, H2…" vira uma habilidade com o nome entre crases, o "Quando" como gatilho e o "Faz" como procedimento.
   - **Rotina:** a tabela "ROTINA" (horário de Brasília).
   - Todos os agentes têm leitura em todas as pastas e escrita só nas pastas do seu contrato.
6. **Bibliotecas e migração da C01** (seção 5): o Pelé cria `02-CONTAS/C01-MALU-BR/` e `07-PAINEL/PAINEL.md`; o Zico cria `03-PRODUTOS/INDICE.md`, `P-QUANTUM-TETRAMAG/` e `P-SOUFIT-CREATINA3EM1/` (com a §12 Oferta atemporal); o Garrincha cria `04-ESTRUTURAS/INDICE.md` e as pastas E01, E02 e E03 (com o ponto de costura); o Pelé abre as matrizes `C01-MG-E01` e `C01-MG-E02`.
7. **Teste de aceitação** (seção 6). Só depois disso a operação está no ar.

---

## 2. O time

| # | Agente | Função | Cérebro | Esforço | Cor do agente | Cor do chat |
|---|---|---|---|---|---|---|
| 1 | **Pelé** | GESTÃO | Claude Sonnet | Médio | Dourado `#C9A227` | Creme `#FFF4CC` |
| 2 | **Garrincha** | VIRAL | Gemini Pro (vê o vídeo e ouve o áudio) | Alto | Verde `#009C3B` | Verde-claro `#DFF5E6` |
| 3 | **Zico** | PRODUTO | Claude Opus | Alto | Vermelho `#C8102E` | Rosa-claro `#FBE3E6` |
| 4 | **Ronaldinho** | COPY | Claude Opus | Alto | Amarelo `#FFDF00` | Amarelo-claro `#FFF9D6` |
| 5 | **Ronaldo** | PRODUÇÃO | Claude Sonnet | Alto | Azul `#002776` | Azul-claro `#DCE6F7` |
| 6 | **Romário** | EDIÇÃO | OpenCode + Claude Sonnet (roda código) | Médio | Laranja `#F28C28` | Pêssego `#FDEBDC` |
| 7 | **Sócrates** | MÉTRICAS | GPT (raciocínio) | Médio | Roxo `#6A3D9A` | Lilás `#EEE6F7` |

Por que esses cérebros: o Garrincha precisa **assistir** o viral (o Gemini aceita vídeo e áudio nativamente; os outros precisam de quadros extraídos e transcrição colada). Zico e Ronaldinho fazem o trabalho que mais exige nuance e rigor (fato × hipótese, copy em português). Ronaldo e Romário seguem moldes testados e precisam de precisão, não de criatividade. Romário precisa executar código. Sócrates lê números e prints e ordena a fila. Se a plataforma não tiver algum modelo, use Claude Sonnet com o mesmo esforço.

---

## 3. Análise do fluxo proposto pelo dono

O dono propôs 6 etapas: (1) DNA do viral · (2) material do produto · (3) encaixe viral + produto · (4) produção UGC · (5) edição e QA · (6) métricas e gestão de contas. A espinha está certa: é o que fizemos. O que **faltava** ou precisava **ajuste**, pelo que aconteceu na prática:

**Faltava**
1. **Etapa 0 · conta e kit da avatar.** Sem o PERFIL (público, personas, formatos, linha da conta) e o KIT (avatar, cenários com roupa, voz por escrito), a copy e os prompts improvisam. Agora é do Pelé, com os prompts do Ronaldo.
2. **Bibliotecas antes do vídeo.** DNA e produto entram na biblioteca **antes** de qualquer matriz. O vídeo nunca para no meio pedindo print de produto. A saúde do produto (ainda no Shop, comissão, avaliações) é rotina semanal do Zico, fora do fluxo do vídeo.
3. **Oferta atemporal.** No V-C01-MG-E01-MG1-G1 a oferta mudou entre a copy e a produção ("relâmpago -40%" virou "11.11 -46% até 11/11") e duas falas tiveram de ser refeitas. Agora a copy não cita preço, %, data nem estoque: "eu paguei bem baratinho", "geralmente tem promoção", "se aparecer nessa faixa, eu pegaria" (REGRAS 8 e Zico §12).
4. **Matriz em vez de vídeo avulso.** Um vídeo de cada vez desperdiça o trabalho caro (DNA, imagens, edição). A matriz aprova 3 a 5 ângulos e 3 a 5 ganchos por ângulo de uma vez; as imagens da estrutura servem a todos.
5. **FILA.** Toda versão postada já tem as próximas prontas. Cadência: 1 versão por dia por matriz, nunca o mesmo gancho no mesmo dia. 3 ganchos sem venda → próximo ângulo; 3 ângulos sem validar → nova estrutura ou novo produto.
6. **Portões do dono explícitos** (G1 a G5). O dono decide a matriz, lê todas as copys antes de produzir e valida a 1ª imagem e o 1º take antes de gastar os créditos.
7. **QA em 5 pontos (QA-0 a QA-4), não só na edição.** Erro pego na 1ª imagem custa 1 geração; no take 16, custa o vídeo. O pote diferente do vinculado já custou uma violação (-15 pontos).
8. **Pacote de post.** Legenda do post, produto vinculado, rótulo de IA e checklist, um bloco por versão. No Zencial, subiu o texto de outro vídeo e uma legenda com hashtag arriscada.
9. **Fechar o ciclo.** O resultado volta para a MATRIZ (célula e fila), para a estrutura ("onde já rodou"), para o ângulo (status), para o REGISTRO e para o PAINEL. Sem isso, a operação não aprende.
10. **Gestão separada de métricas.** O Pelé é porteiro e memória (contas, matrizes, fila do dia). O Sócrates é analista (régua do Nick) e quem ordena a fila. Juntos num agente só, um atrapalha o outro. Se o dono preferir 6 agentes, o Sócrates vira habilidade do Pelé.

**Ajustes**
- O agente viral entrega **quadros-chave por bloco, a tabela de pop-ups com tempo e palavra-gatilho e o ponto de costura** (onde o gancho termina e o corpo começa). Os **prints por take** só existem depois que a copy é dividida em takes, então saem da Produção (Ronaldo), uma vez por estrutura.
- O **banco de ângulos** é do produto (Zico, reaproveitável). A **escolha** dos 3 a 5 ângulos para uma matriz é do Ronaldinho.
- **"Matriz literal"** ficou definida: A1 = a adaptação mais fiel ao viral (mesmos blocos, ordem, mecânica e proporção; ±10% das palavras), com uma **tabela de encaixe** ao lado (função do bloco · fala do viral · nossa fala), para o dono conferir se encaixou. Os outros ângulos vêm completos, na mesma estrutura.
- **Gancho novo = só o trecho até a costura**, mesma duração, mesma imagem e mesmo bloco de motion. Gancho empilhado = take extra T00 na frente. O Romário renderiza todas as versões do projeto de edição salvo.
- **Motion control** ganhou regra: onde o movimento do viral segura (quase sempre o gancho), com custo ao lado, e protocolo quando o rosto do viral vaza (A8 + M3).

**Skills antigas → onde foram parar**
| Skill antiga | Agora |
|---|---|
| `dna-viral` + `esqueleto-viral` + etapa 1 da `modelar-viral` | Garrincha · `extrair-dna`, `classificar-estrutura`, `ficha-indice` |
| `material-produto` + DOSSIE-ANGULOS | Zico · `dossie-produto`, `banco-angulos`, `saude-do-produto`, `indice-produtos` |
| `encaixe-estrutura` + etapas 3 e 5 da `modelar-viral` | Ronaldinho · `matriz-literal`, `variacoes-angulo`, `banco-ganchos`, `roteiro-aprovado` |
| `cenas-ugc-ia` + `esteira-ugc-avatar` + `modelagem-ugc-ia` + PROMPTS-FLOW | Ronaldo · `takes-e-imagens`, `cortar-viral`, `prompts-flow`, `conferencia-flow`, `ganchos-engatilhados`, `kit-da-conta` |
| Edição feita à mão no chat (scripts) | Romário · `qa-takes`, `edicao-automatica`, `qa-final`, `pacote-post`, `versoes-gancho` |
| `jessica-fase-5-6-venda-perfil` + PROCESSO Fases 0–6 | Pelé · `painel-contas`, `decidir-matriz`, `status-matriz`, `perfil-conta`, `registro-post` |
| Etapa 9 da `modelar-viral` + NICK §6–7 | Sócrates · `leitura-nick`, `proxima-variavel`, `ordenar-fila`, `relatorio-semanal` |

**Aposentadas** (não recriar): `modelagem-ugc-ia`, `esteira-ugc-avatar` (motion antigo no carro, já absorvido no PROMPTS-FLOW), `modelar-viral` (dividida entre os agentes), `pagina-do-dia` (virou `saude-do-produto` + oferta atemporal), `reedicao` (virou `versoes-gancho`).

---

## 4. O que ler em cada caso
| Arquivo | Para quê |
|---|---|
| `00-SISTEMA/FLUXO.md` | A máquina: bibliotecas, ciclo, matriz, fila, portões, QA, pastas |
| `00-SISTEMA/CONDUCAO-EXEMPLO.md` | **O padrão de condução**: uma matriz inteira, da biblioteca à fila, com o que o dono manda, o que o agente processa, a resposta literal e o próximo passo |
| `00-SISTEMA/CONTRATOS.md` | **O dossiê de entrega**: o que cada agente precisa, processa e entrega, e quando está pronto |
| `00-SISTEMA/NOMENCLATURA.md` | Como tudo se chama (código + apelido) e o mapa do que já existe |
| `00-SISTEMA/REGRAS.md` | O que vale para todos (inclui a 8, oferta atemporal) |
| `00-SISTEMA/MODELOS/` | PERFIL (com as perguntas), PAINEL e OS, DNA, MATRIZ, CARDÁPIO e ROTEIRO, KIT, POST, REGISTRO, SAÚDE DO PRODUTO |
| `AGENTES/` | Os 7 agentes, prontos para configurar |
| `06-FERRAMENTAS/edicao/` | Scripts do Romário + README (testados, com versões de gancho e gancho empilhado) |

---

## 5. Migração (o dono traz do projeto do Claude "TTK-00 · @dicasdamalu8 · BR")

| Arquivo no projeto do Claude | Destino no OpenClaw | Observação |
|---|---|---|
| `JESSICA_METODO.md` | `01-BASE/JESSICA_METODO.md` | Método base |
| `claude/NICK_METODO.md` | `01-BASE/NICK_METODO.md` | §6 leitura, §7 iteração |
| `PROCESSO_CONTA.md` | `01-BASE/PROCESSO_CONTA.md` | Fases 0–12 da conta |
| `PROCESSO/PROMPTS-FLOW.md` | `01-BASE/PROMPTS-FLOW.md` | **Obrigatório** para o Ronaldo |
| `PROCESSO/DOSSIE-ANGULOS.md` | `01-BASE/DOSSIE-ANGULOS.md` | **Obrigatório** para Zico e Ronaldinho |
| `PROCESSO/PRODUCAO-UGC-IA.md` e `PROCESSO/PROMPTS-PADRAO-UGC.md` | `01-BASE/arquivo/` | Histórico; o PROMPTS-FLOW já consolida |
| `MARCAS-PARCEIRAS-MVM-BR.md` | `01-BASE/MARCAS-PARCEIRAS.md` | Política por marca |
| `NICK/DIRECIONAMENTO-NICK-2026-10.md` | `01-BASE/NICK/DIRECIONAMENTO-2026-10.md` | Plano do mês |
| `PERFIL-MALUCAPILARR-2.md` | `02-CONTAS/C01-MALU-BR/PERFIL.md` | **Desatualizado** (diz beleza): o Pelé reescreve no modelo novo; nicho é saúde desde 22/10 |
| `claude/REGISTRO-MALUCAPILARR.md` | `02-CONTAS/C01-MALU-BR/REGISTRO.md` | Converter para o modelo novo, mantendo o histórico |
| `PRODUTOS/PRODUTO-SOUFIT-CREATINA3EM1.md` | `03-PRODUTOS/P-SOUFIT-CREATINA3EM1/PRODUTO.md` | Completo; ângulos CR1–CR15 do DOSSIE → `ANGULOS.md`; o Zico acrescenta a §12 (oferta atemporal) |
| `PRODUTOS/PRODUTO-SOUFIT-SUPERFIBRAS.md` | `03-PRODUTOS/P-SOUFIT-SUPERFIBRAS/PRODUTO.md` | Pausado |
| (não existe) | `03-PRODUTOS/P-QUANTUM-TETRAMAG/PRODUTO.md` | **O Zico monta**, com os dados dos dois ROTEIROS e os prints da página; ângulos MG1–MG15 do DOSSIE → `ANGULOS.md`; §12 com a faixa vista (R$32 a R$60) |
| `ROTEIROS/ROTEIRO-QUANTUM-TETRAMAGNESIO-01.md` | `05-VIDEOS/C01-MG-E01/MG1/ROTEIRO.md` | Vídeo V-C01-MG-E01-MG1-G1, postado em 30/10. O Pelé cria a `MATRIZ.md` com 1 corpo e a célula "postado" |
| `ROTEIROS/ROTEIRO-QUANTUM-TETRAMAGNESIO-02.md` | `05-VIDEOS/C01-MG-E02/MG2/ROTEIRO.md` | Copy aprovada (V-C01-MG-E02-MG2-G1); confirmar com o dono se foi gerado e postado. **O Ronaldinho troca as falas de preço e "esgotou" pelas atemporais** (ver CONDUCAO-EXEMPLO) e completa o cardápio com mais ângulos e ganchos |
| `PROCESSO/EDICAO/*` | já está em `06-FERRAMENTAS/edicao/` (versão nova) | — |
| Arquivos de imagem e vídeo (AVATAR, F1, AVATAR-COZINHA, FRASCO, virais Toplux e cheddar, takes) | `02-CONTAS/…/KIT/`, `03-PRODUTOS/…/`, `04-ESTRUTURAS/…/`, `05-VIDEOS/{MATRIZ}/…` | O dono tem no celular ou no Drive; o Pelé pede um por um e diz para onde vai |

Estruturas a montar na migração: **E01-SALA-NAOEPREGUICA** (viral "Toplux", `ssstik_io_1792721406695.mp4`) e **E02-COZINHA-DESCONFIADA** (viral do cheddar, `ssstik.io_1793420301654.mp4`): o Garrincha roda o `extrair-dna` com o vídeo. **E03-CLONE-MESMAIDADE**: só o texto do Nick (F-N3) até chegar o vídeo.

---

## 6. Teste de aceitação (antes de produzir de verdade)

1. **Pelé:** "Como está a C01?" → card com as matrizes C01-MG-E01 e C01-MG-E02, a fila de hoje, a CR sem matriz e as pendências (métricas do V-C01-MG-E01-MG1-G1; PERFIL desatualizado).
2. **Pelé:** "O que a gente faz hoje na C01?" → sugere com base no REGISTRO e nas bibliotecas (ex.: abrir C01-CR-E02, porque a cozinha já tem imagens). Se o produto ou a estrutura não estiver na biblioteca, manda primeiro para o Zico ou o Garrincha; **nunca abre matriz pela metade**.
3. **Garrincha:** com o viral do cheddar → `DNA.md` com blocos E1–E11 (gancho "sua genética não é ruim" que fecha na revelação do cheddar), tabela de pop-ups com tempo e palavra (headline 0–8 s, selfie da barriga 0:20, antes e depois 0:37, avaliações 0:42, listas 0:46–1:08…), quadros-chave, **ponto de costura no fim do E1 (0:08)**, o T1 marcado como candidato a motion e "serve para" preenchido.
4. **Ronaldinho:** com a matriz C01-CR-E02 → cardápio com **3 a 5 ângulos** (A1 literal com tabela de encaixe; ex.: CR2 "a primeira creatina que eu consigo tomar" e CR4 "força depois dos 40") e **3 a 5 ganchos por ângulo**, cada um com até as palavras do trecho que substitui e terminando na costura. Nenhum ingrediente fora do rótulo; **nenhum preço, %, data ou estoque** na fala.
5. **Ronaldo:** com uma copy aprovada → KIT com imagens da estrutura (1 vez, só as com pote mudam), modo "print por take", motion no T1, **ganchos engatilhados** (`T01-G2`, `T00-G3`), prompts completos sem colchete sobrando, pop-ups com palavra-gatilho e nenhum print de preço.
6. **Romário:** com os takes do V-C01-MG-E01-MG1-G1 → reproduz o vídeo de 1:56 (25 cortes, 30 pop-ups, -14 LUFS) e detecta legenda queimada em T1, T12, T15 e T16. Com um `T00` acrescentado → versão empilhada com headline de 0 a 3 s e o resto do corpo igual.
7. **Sócrates:** com o caso do Zencial (4.323 views, 11,8 s, 4,51%, ~49 cliques, 0 pedidos, 57% homens) → veredito "investigar", causa "público errado (gancho não filtra gênero)", recomendação "empilhar gancho que filtra" (ferramenta 5), e **a fila reordenada** com a versão de filtro na frente.

Passou nos 7: a operação está no ar. Falhou em algum: corrigir o agente (instrução ou memória) antes de seguir.
