---
name: "esqueleto-viral"
description: "Extrai o esqueleto de copy de um viral em blocos rotulados (ESTRUTURA, psicologia por bloco, PARA PREENCHER) e salva na biblioteca ESTRUTURAS. Use quando o dono mandar transcrição ou vídeo pedindo a estrutura."
---

# Esqueleto viral · extrair a estrutura de um vídeo que vende

## Quando usar
- O dono manda transcrição (com ou sem tempos), quadro de estrutura, prints ou o vídeo de um viral e pede: extrair a estrutura, o esqueleto, distrinchar, dividir em blocos, "salvar esse formato", "ter esse modelo pronto".
- Não é: decupagem de produção para o Flow segundo a segundo (isso é a `dna-viral`, só se o dono chamar pelo nome). Não é copy nova do nosso produto (Fase 8); aqui só entra o encaixe se o dono pedir.

## Regra de entrega (do dono)
- **Nesta etapa, nunca entregar vídeo nem MD.** A estrutura distrinchada vai **no chat**. Arquivo em `ESTRUTURAS/` só quando o dono pedir para salvar, de preferência depois de a estrutura ter sido usada num vídeo e testada. A biblioteca cresce uma a uma, com o que já foi usado.
- Ordem do trabalho: 1) estrutura distrinchada e aprovada → 2) ângulo do vídeo (persona + pecado + sonho) → 3) opções por bloco (`encaixe-estrutura`) → 4) copy → 5) visual e takes.

## Antes de gerar: perguntar (uma rodada, numerada)
1. **Quer o detalhamento visual também?** (1) Só a copy · (2) Copy + visual linha a linha. O visual precisa do vídeo em arquivo (ou um print de cada momento); sem isso, fica pendente.
2. Só se faltar: transcrição literal com tempos (TokScript) · produto e marca do original · views e vendas, se tiver.
- Se o dono já respondeu isso na mensagem (ex.: "primeiro a copy"), não perguntar de novo.
- Se o dono disser "cria" sem responder, gerar só a copy com o que tem e marcar o visual como pendente na resposta.

## Ler antes
- A biblioteca `ESTRUTURAS/` do projeto, se existir (Projects: project_info e project_search). O viral pode ser exemplo novo de uma estrutura já salva.
- `JESSICA_METODO.md`: S12 (identificação, emoção × razão, níveis de consciência), S13 (7 pecados), S14 (gancho), S15 e 3.4 a 3.8 (CTA), 3.9 (linguagem de amiga).
- `claude/NICK_METODO.md` §3.3 a §3.7 (esqueleto, modelar × copiar, Playbook das 16 labels, retenção) e §7.2 (3 variáveis) · o `NICK/DIRECIONAMENTO-NICK-*` do mês (ganchos, estilos e dicas indicados).
- `PROCESSO_CONTA.md`: Fase 7 passo 4 e EXT-1 a EXT-3.
- O PRODUTO da vez (`PRODUTOS/`), para o mapa de ângulos.

## Passo a passo
1. **Classificar.** Comparar o esqueleto com os salvos (se houver): mesmo esqueleto → exemplo novo daquela estrutura; esqueleto novo → estrutura nova (EST-NN).
2. **Conferir a mecânica no vídeo.** Se o vídeo veio em arquivo, tirar quadros do gancho (`ffmpeg -t 6 -vf "fps=2,scale=240:-1,tile=6x2" gancho.png`) e olhar antes de descrever. A mecânica visual de cada bloco faz parte da estrutura (ex.: no "vai fazer" entra a imagem falsa por cima; no "não vai fazer" ela aparece real). Nunca trocar a mecânica por outra ideia.
3. **Comparar o objetivo do produto original com o nosso.** Dizer em uma linha se é o mesmo objetivo. Se não for, a estrutura e a mecânica ficam; o conteúdo da imagem e da dor muda para o que o NOSSO produto resolve (ex.: barriga estufada não serve para creatina).
4. **Dividir em blocos.** Quando o objetivo da frase muda, o bloco muda; quando é o mesmo, fica junto (NICK §3.6). Anotar início e fim de cada bloco pelos tempos da transcrição.
5. **Rotular** com o vocabulário abaixo, em maiúsculas. Mais de um rótulo por bloco é normal: `[OFERTA + ESCASSEZ]`. Não inventar rótulo; se nenhum servir, dizer e perguntar ao dono.
6. **Traduzir** para PT-BR natural. Fala truncada ou sem sentido: `[transcrição incerta]`. Erro evidente de transcrição: corrigir e avisar (ex.: "weekly job" = "weekly jab", a injeção semanal).
7. **Distrinchar cada bloco** (no chat, curto, para celular):
   - **Tempo · rótulos** e a fala traduzida, entre aspas.
   - Uma linha de **por que funciona** (leitura nossa, sempre ligada ao método: [J-Sn], [J 3.n], NICK §n, EXT-n): pecado [J-S13], nível de consciência [J-S12] e tipo de gancho [J-S14] quando houver.
   - **🔧 o que é alterável** (os slots que o nosso produto preenche) e, se houver, a mecânica visual que fica fixa.
   - ⚠️ política, em uma linha, se houver.
8. **PARA PREENCHER:** a estrutura inteira com as informações trocadas por `[colchetes]` e as palavras de ligação mantidas, num bloco de código.
9. **Fixo × muda:** 4 a 6 linhas do que é a estrutura (ordem, onde o produto entra, que pergunta fica aberta e onde fecha, âncora de preço, tipo de CTA) [EXT-1, EXT-2, NICK §7.2].
10. **Números do formato (fato):** duração, em que segundo o produto entra, quantas linhas por bloco.
11. **⚠️ do original que não vem para o nosso:** uma linha.
12. **Ângulos possíveis · escolha 1:** 2 a 4 opções de persona (do PRODUTO) + pecado + nível + sonho + o gancho já adaptado, dizendo qual encaixa melhor na estrutura e por quê. Respeitar ângulos que o dono já descartou. Se o Nick deu uma dica para esse gancho, ela pesa na recomendação.
13. Perguntar o visual linha a linha: agora ou depois da copy.

## Detalhamento visual (linha a linha), quando pedido
Com o vídeo em arquivo:
```
ffprobe -v error -show_entries format=duration -of csv=p=0 video.mp4
mkdir -p frames && ffmpeg -i video.mp4 -vf fps=2 frames/f_%04d.jpg
ffmpeg -i video.mp4 -vf "select='gt(scene,0.3)',showinfo" -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'
```
Ler (Read) os quadros do intervalo de cada linha da transcrição antes de descrever. Uma linha da tabela por linha da transcrição:

| Tempo | Fala (PT) | Plano | Ação / movimento | Interação | Elemento na tela | Corte |
|---|---|---|---|---|---|---|

- **Plano:** close, médio ou aberto; selfie ou tripé; cenário.
- **Ação / movimento:** gesto, expressão, para onde olha, se a câmera mexe.
- **Interação:** com o produto, um objeto, outra pessoa ou a câmera (aponta, mostra, pega, empurra, joga fora).
- **Elemento na tela:** headline, legenda, overlay, PiP, print, sticker, seta.
- **Corte:** sim ou não, e o tipo (seco, zoom, troca de cenário).
- Nunca descrever o que não viu. Sem vídeo: `[sem vídeo]`. Com print: só o que o print mostra.

## Vocabulário de rótulos
| Rótulo | Playbook (NICK §3.6) | O que marca |
|---|---|---|
| GANCHO | — | A primeira frase, quando não é dor |
| DORES | Pain Points | A dor que a pessoa já vive |
| DORES → INGREDIENTE / PRODUTO / FORMA | Pain Points + Education | Dor ligada a uma solução na mesma frase |
| EXPLICAÇÃO | Education | Causa, mecanismo, "por que" |
| OBJEÇÃO | Objections | A dúvida que trava |
| QUEBRA DE OBJEÇÃO | Objections | A resposta à dúvida |
| PIOR(ES) ALTERNATIVA(S) | Worse Alternatives | O que ela faria sem o produto e é pior |
| JORNADA DO CONSUMIDOR | Customer Journey | Gasta, tenta, descobre |
| ANCORAGEM DE PREÇO | — | Preço alto de referência |
| ENTRADA DO PRODUTO | Product Introduction | 1ª vez do produto como solução |
| CARACTERÍSTICAS / ESPECIFICAÇÕES | Features | O que é ou tem |
| BENEFÍCIOS | Benefits | O ganho |
| CASOS DE USO | Use Cases | Onde entra na rotina |
| RODANDO A FACA | Twisting the Knife | A dor aprofundada |
| AUTORIDADE | Authority | Quem fala ou o dado que dá crédito |
| EXPERIÊNCIA PESSOAL | Personal Testimonial | "Eu tomo", "eu paguei" |
| PROVA SOCIAL | Social Proof | Avaliações, quantos compram |
| PROVA VISUAL | — | Uma imagem como argumento |
| TRANSFORMAÇÃO | Before & After | Antes × depois |
| OFERTA | — | Preço especial, kit, 2 por 1 |
| ESCASSEZ / URGÊNCIA | Scarcity + Urgency | Motivo para agir agora |
| CTA | — | A ação pedida |
| QUEBRA DE CENA · REAÇÃO | — | Fala de cena, sem argumento |
| FECHAMENTO + IDENTIFICAÇÃO | Relatability | Última fala que gera simpatia |

## Quando o dono pedir para salvar
Arquivo `ESTRUTURAS/EST-NN-{NOME-CURTO}.md` (Write + SendUserFile, display attach; Projects project_write se ele pedir). Se a estrutura já foi usada num vídeo, anotar o vídeo e o resultado.
```
# EST-NN · "[molde da frase-chave]" · [nicho]
vN · data · nº de exemplos · salvar em ESTRUTURAS/ · fonte
> Para que serve · Fato · Leitura nossa · Não informado · Visual (feito ou pendente) · usada em (vídeo, resultado)

## 0. Ficha do formato   (em uma frase · quando usar · variantes · números · produto e persona originais · objetivo do original × o nosso)
## 1. Esqueleto mestre    (M1…Mn: trecho · visual · Faz · Psicologia · Ângulo · Escrita · Rótulos · FIXO × ALTERÁVEL · ⚠️) + blocos opcionais
## 2. PARA PREENCHER mestre
## 3. Variantes
## 4. Exemplos            (EX-NN: título · variante · duração · ESTRUTURA rotulada com tempos · o que muda · PARA PREENCHER se diferente · visual se pedido)
## 5. Modelar: o que fica fixo, o que muda (EXT-1, EXT-2, NICK §7.2)
## 6. ⚠️ Política
## 7. Encaixe no produto da vez
## 8. Vocabulário de rótulos
## 9. Pendências
## Apêndice · transcrições originais
```

## Regras
- Fato e leitura sempre separados. Tempos, falas e quadros = fato; psicologia = leitura nossa.
- Não inventar dado de produto, número, view, venda, avaliação ou depoimento. O que não veio fica "não informado".
- Siga só o método da Jéssica; Nick e EXT entram onde o PROCESSO marca e onde o dono já usa (o Playbook de rótulos). Onde nada cobre: "o método não cobre isso" + opções; a decisão é do dono.
- Ingrediente, selo ou benefício que não está no rótulo do nosso produto nunca entra no encaixe (risco de "promoção de produto inconsistente").
- Risco de política: uma linha, sem sermão; a decisão é do dono.
- Português, direto, pensado para celular.