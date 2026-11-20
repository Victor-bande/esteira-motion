# SKILLS POR AGENTE · leia primeiro

v1 · 14/11/2026 · todas as skills ativas que fizeram os vídeos V-C01-MG-E01-MG1-G1 e V-C01-MG-E02-MG2-G1, separadas pelo agente que vai usar cada uma, com o texto integral e exemplos reais do que cada uma recebe, lê e gera.

**Para o OpenClaw:** cada arquivo `SKILL-*.md` é uma skill completa. Instale no agente da pasta. A hierarquia está em `00-HIERARQUIA.md`.

---

## 1. As pastas

```
00-LEIA-PRIMEIRO.md · 00-HIERARQUIA.md
1-PELE-COORDENACAO/        SKILL-perfil-conta · SKILL-mapa-do-video · exemplos/
2-ZICO-PESQUISA/           SKILL-dossie-produto (+ banco-angulos) · exemplos/
2.1-JAIRZINHO-TENDENCIA/   SKILL-mineracao-eua (NOVA) · exemplos/
2.2-TOSTAO-PAIS/           SKILL-checagem-pais (+ saude-do-produto) (NOVA) · exemplos/
3-GARRINCHA-MODELAGEM/     SKILL-extrair-dna (+ conferir-cardapio) · exemplos/
3.1-RONALDINHO-ROTEIRO/    SKILL-cardapio-matriz (+ roteiro-aprovado) · exemplos/
3.2-DIDI-CORTE/            SKILL-takes-blocos-prints · exemplos/
4-RONALDO-PRODUCAO/        SKILL-kit-de-prompts (+ ganchos-engatilhados, kit-da-conta, conferencia-flow) · exemplos/
4.1-FLOW-POR-CONTA/        SKILL-gerar-no-flow (Rivellino C01 · Bebeto C02 · Kaká C03) · exemplos/
4.4-ROMARIO-EDICAO/        SKILL-edicao-automatica (+ qa-takes, qa-final, versoes-gancho) · ferramentas/ · exemplos/
5-SOCRATES-RESULTADO/      SKILL-leitura-e-fila (+ proxima-variavel, relatorio-semanal) · exemplos/
5.1-CAFU-PUBLICACAO/       SKILL-pacote-post (+ fila-do-dia, registro-post) · exemplos/
ORIGINAIS/                 as 9 skills como estavam ativas (SKILL.md e TEMPLATE.md), sem mudança
_fontes/                   cópias dos arquivos do projeto usados nos exemplos
```

## 2. Como cada SKILL está montada (e como instalar)

| Seção | O que tem | Onde entra na plataforma |
|---|---|---|
| 1 · Configuração | Nome, agente, gatilho, quando não usar, ferramentas, onde escreve | Campos da habilidade (nome, gatilho, permissões) |
| 2 · Recebe | De quem e o quê | Instrução da habilidade |
| 3 · Lê antes | Arquivos e seções | Instrução + arquivos de conhecimento do agente |
| 4 · Entrega | O quê, onde, para quem | Instrução |
| 5 · Regras da máquina | O que vale hoje, por cima do texto original | Instrução, **antes** do procedimento |
| 6 · Procedimento integral | O texto inteiro das skills originais, cada trecho com a fonte e as linhas | Corpo da habilidade (colar inteiro) |
| 7 · Exemplos | Os arquivos em `exemplos/` e o que cada um mostra | Arquivos de conhecimento do agente |

**Precedência, quando dois textos discordam:**
1. `00-SISTEMA/REGRAS.md` do pacote dos agentes (regra 8, oferta atemporal; 18 a 20, matriz e condução);
2. a seção 5 da skill ("Regras da máquina");
3. o procedimento original (seção 6).

Exemplos do que a seção 5 troca: "1 chat por vídeo" → matriz · "nunca entregar MD" → salvar sempre na biblioteca · "oferta do dia" → oferta atemporal · "edição no CapCut" → edição automática · modelos de prompt antigos → PROMPTS-FLOW.

**Nome dos exemplos:** `RECEBE-…` = o que chega para a skill · `LE-…` = o que ela lê · `GERA-…` = o que ela entrega. Texto real copiado do projeto sem mudança, salvo onde está marcado **[EXEMPLO]** (ilustrativo) ou **[PENDENTE]** (ainda não extraído, nada inventado).

## 3. Onde foi parar cada skill ativa

| Skill ativa | Onde está agora | Agente |
|---|---|---|
| `jessica-fase-5-6-venda-perfil` | `perfil-conta` (inteira) | Pelé |
| `modelar-viral` | `mapa-do-video` (inteira) · etapas espalhadas pelos departamentos (tabela na seção 5 da skill) | Pelé |
| `material-produto` | `dossie-produto` (inteira) · "Antes de gerar" também em `checagem-pais` | Zico · Tostão |
| `esqueleto-viral` | `extrair-dna` (inteira) · detalhamento visual também em `takes-blocos-prints` | Garrincha · Didi |
| `dna-viral` + `TEMPLATE.md` | `extrair-dna` (inteiras) | Garrincha |
| `encaixe-estrutura` | `cardapio-matriz` (inteira) | Ronaldinho |
| `cenas-ugc-ia` | regras e plano visual → `takes-blocos-prints` · prompts → `kit-de-prompts` (apêndice) · ordem e problemas → `gerar-no-flow` · edição e post → `edicao-automatica` e `pacote-post` · entradas → `mapa-do-video` | Didi · Ronaldo · Flow · Romário · Cafu · Pelé |
| `modelagem-ugc-ia` | mineração → `mineracao-eua` · desmontagem → `extrair-dna` · copy → `cardapio-matriz` · takes → `takes-blocos-prints` · imagens e vídeos → `kit-de-prompts` · problemas → `gerar-no-flow` · montagem + `ugc_tools.py` → `edicao-automatica` · variação → `leitura-e-fila` · post → `pacote-post` | todos os departamentos |
| `esteira-ugc-avatar` | planejar copy e checklist de gancho → `cardapio-matriz` · blocos, orçamento e material → `takes-blocos-prints` · modelo 0 → `extrair-dna` · imagens, takes, valores e modelos 1–10 → `kit-de-prompts` · aprendizados e problemas → `gerar-no-flow` · edição → `edicao-automatica` · postar → `pacote-post` · analisar → `leitura-e-fila` · visão geral → `mapa-do-video` | todos os departamentos |
| (não era skill) `PROMPTS-FLOW.md` | `kit-de-prompts` seção 6 (inteiro, é a versão vigente dos prompts) | Ronaldo |
| (não era skill) scripts de edição v3 | `4.4-ROMARIO-EDICAO/ferramentas/` + README inteiro em `edicao-automatica` | Romário |
| (não existia) | `mineracao-eua` e `checagem-pais`: **novas**, montadas só com o método (Fase 7 do PROCESSO, Jéssica S11, S14, S16, S19, S31, Nick §2.4, §3.1, §8) | Jairzinho · Tostão |

**Cobertura:** 100% das linhas das 9 skills ativas estão no texto de alguma SKILL. A única exceção é o código do `ugc_tools.py`, que foi para `ferramentas/ugc_tools.py`.

| Skill ativa | Linhas com texto | No pacote |
|---|---|---|
| jessica-fase-5-6-venda-perfil | 184 | 184 |
| modelar-viral | 75 | 75 |
| material-produto | 71 | 71 |
| esqueleto-viral | 104 | 104 |
| dna-viral (+ TEMPLATE) | 121 + 88 | 121 + 88 |
| encaixe-estrutura | 61 | 61 |
| cenas-ugc-ia | 92 | 92 |
| modelagem-ugc-ia | 276 | 159 no texto + 117 do código em `ferramentas/ugc_tools.py` |
| esteira-ugc-avatar | 323 | 323 |

## 4. Os exemplos que vêm de material real

| Exemplo | Origem real |
|---|---|
| PERFIL da C01 · rodadas | `PERFIL-MALUCAPILARR-2` (05/10) · `REGISTRO` |
| PRODUTO da Creatina · ângulos MG e CR | `PRODUTO-SOUFIT-CREATINA3EM1` (22/10) · `DOSSIE-ANGULOS` (13/11) |
| Checagem e saúde do Tetra Magnésio | Páginas de 22/10 e 30/10 (`ROTEIRO-…-01`) |
| DNA da E02 · DNA parcial da E01 | `ROTEIRO-…-02` (viral do cheddar) · `ROTEIRO-…-01` (viral Toplux) |
| Copy aprovada MG1 e MG2 · cardápio | `ROTEIRO-…-01` e `-02` · `CONDUCAO-EXEMPLO` |
| Takes, prints e KIT de prompts MG1 e MG2 | `ROTEIRO-…-01` e `-02` (os prompts colados no Flow) |
| Log do Flow · relatório de edição | `ROTEIRO-…-01` (status e log, edição de 30/10) |
| build.py e speech.json do vídeo postado | Pasta de edição do V-C01-MG-E01-MG1-G1 (30/10) |
| Leitura e REGISTRO | `REGISTRO-MALUCAPILARR` (E3 do Zencial, 21/10) |

## 5. O que ficou pendente
1. **AGENT.md dos 7 agentes novos** (Jairzinho, Tostão, Didi, Rivellino, Bebeto, Kaká, Cafu) e o ajuste dos 7 do pacote v2 à hierarquia: com o ok da hierarquia.
2. **E01 e E02 incompletas** na biblioteca: falta a transcrição literal com tempos e o visual linha a linha (o Garrincha extrai assistindo os dois virais).
3. **Personas de saúde da C01**: a conta mudou de nicho em 22/10 e o PERFIL ainda tem as 5 de beleza.

## 6. Correção feita nesta versão
No MG2, o 1º take termina em "metabolismo rápido" e o 2º começa em "Não, ela só repôs…". Dois ganchos do exemplo de condução (G2 e G4) não emendavam nessa fala. Foram reescritos. A regra agora está no Ronaldinho, no Didi e nos modelos MATRIZ, CARDÁPIO e DNA: **o gancho termina numa frase que a 1ª fala do take seguinte continua.**
