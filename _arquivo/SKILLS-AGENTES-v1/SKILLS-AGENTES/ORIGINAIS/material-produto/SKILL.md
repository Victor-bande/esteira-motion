---
name: "material-produto"
description: "Monta ou atualiza o arquivo PRODUTO de um produto afiliado: bancos de dores, benefícios, objeções, ganchos, especificações e modo de uso, com fonte e risco. Use quando chegar material de um produto."
---

# Material do produto · PRODUTO-{MARCA}-{NOME}.md

## Quando usar
- O dono vai trabalhar um produto ou mandou material dele: página do TikTok Shop, rótulo, avaliações, comentários, transcrições de vídeos do produto ou de produtos parecidos (BR ou gringos), corpos de copy de mentores.
- Atualizar o arquivo quando chegar rótulo, preço, comissão, avaliação ou copy nova (versão +1 no topo).
- Não é: montar a copy do vídeo (isso é a `encaixe-estrutura`) nem extrair estrutura de viral (é a `esqueleto-viral`).

## O que entra e o que não entra
- **Entra (específico do produto):** ficha · o que falta do rótulo · para que serve · personas do produto (rascunho) · dores · mecanismo/explicação · benefícios · especificações e modo de uso · objeções + quebras · piores alternativas · autoridade · prova social · ganchos · moldes de CTA vistos · pecados e ângulos · encaixe nas estruturas salvas · visual e cenas · linha vermelha (trocas seguras) · lacunas · apêndice com as copys.
- **Não entra** (a `encaixe-estrutura` cria vídeo a vídeo): experiência pessoal/história, urgência, escassez, oferta, preço e cupom do dia.

## Antes de gerar
Uma rodada, numerada, só do que faltar:
1. Página do produto no TikTok Shop: prints de todas as fotos (inclusive composição e tabela nutricional), preço, avaliações e vendidos. Ou foto dos 4 lados da embalagem.
2. Comissão (TikTok Studio → TikTok Shop para Criadores → Mercado de Produtos).
3. Transcrições dos vídeos que mais venderam o produto e de produtos parecidos (com @, views e vendas, se tiver).
Se o dono disser “cria”, gerar com o que tem e listar o resto em Lacunas.

## Ler antes
- PERFIL da conta: público-mãe, personas, nicho, formatos.
- `JESSICA_METODO.md`: S12 (níveis), S13 (pecados), S14 (gancho), S15 e 3.4 a 3.8 (CTA), S17 e 3.11 (persona), S31 (critério de produto).
- `claude/NICK_METODO.md` §3.1 (pesquisa: concorrentes BR e EUA, repertório + ingredientes, comentários) e §2.4 (exemplo de fibra e as trocas que tiraram a violação).
- `MARCAS-PARCEIRAS-MVM-BR.md` (política por marca) · `REGISTRO` (violações já tomadas) · os PRODUTO já salvos (modelo) · `ESTRUTURAS/` (para o encaixe).

## Pesquisa
- Composição, porção, modo de uso, alegação oficial e selos: só do rótulo, da página ou do site da marca (WebSearch e WebFetch). Nunca de memória, nunca com dado de outro produto.
- Não achou: escrever “falta” e pôr em Lacunas.
- Links usados no fim do arquivo.

## Marcação (sempre)
- `[FATO]` = página, rótulo ou comunicado da marca.
- `[CONFERIR]` = veio de copy do próprio produto; falta ver no rótulo.
- `[REF-Cn]` = veio da copy n do apêndice. Se for de outro produto, só a ideia entra; número e promessa não.
- `[HIPÓTESE]` = leitura nossa.
- ⚠️ = risco de política, em uma linha.

## Bancos
- Cada banco com o máximo de opções que o material der (mínimo 3 quando der), cada opção com fonte e risco.
- Dores escritas em cena (o que ela vê, sente, faz), nunca nome de doença.
- Benefício como relato de uso (“é o que eu tomo todo dia”), não cura (NICK §2.4).
- Ganchos com o tipo da Jéssica [J-S14], já adaptados à linha da conta.
- Toda promessa arriscada das copys ganha uma troca segura na Linha vermelha.
- Personas: uma linha cada (nome, idade, situação, dor, pecado, nível) [PROCESSO Fase 5 passo 3], marcadas hipótese até o dono ajustar ou rodar o prompt J 3.11.
- Encaixe: para cada estrutura salva, qual variante o produto permite e o que depende do rótulo.

## Formato do arquivo
```
# PRODUTO · {Marca} · {Nome}
vN · data · Fase 7 · salvar em PRODUTOS/ · status (COMPLETO ou PARCIAL e por quê)
> Para que serve · o que não fica aqui · marcação · ⚠️ nicho, se diferente do PERFIL

## 0. Ficha (tabela: item · o que temos · fonte)
## 1. O que falta do rótulo (trava)
## 2. Para que serve (o que dá para dizer hoje × com o rótulo) + o rótulo emocional [J-S13]
## 3. Personas do produto · rascunho
## 4. Banco de DORES (D1…, opções em cena, fonte, ⚠️)
## 5. Banco de MECANISMO / EXPLICAÇÃO (E1…)
## 6. Banco de BENEFÍCIOS (B1…) + o que fica fora
## 7. ESPECIFICAÇÕES e COMO USAR + molde de fala
## 8. Banco de OBJEÇÕES + QUEBRAS (O1…)
## 9. Banco de PIORES ALTERNATIVAS
## 10. AUTORIDADE · opções (A1…)
## 11. Banco de GANCHOS (G1…, tipo, fonte)
## 12. CTA · moldes vistos
## 13. Pecados e ângulos
## 14. Encaixe nas estruturas salvas
## 15. Visual e cenas
## 16. Linha vermelha · trocas seguras
## 17. Lacunas
## Apêndice · copys mineradas (índice + textos)
Fontes
```

## Entregar
- Write + SendUserFile (display attach). Se o dono pedir para salvar, Projects project_write em `PRODUTOS/PRODUTO-{MARCA}-{NOME}.md`.
- No chat: 3 a 5 linhas — o que saiu, o que trava (geralmente o rótulo) e o próximo passo (escolher a estrutura e encaixar).

## Regras
- Nunca inventar dado de produto, avaliação, depoimento, resultado ou número.
- Produto de nicho diferente do PERFIL: avisar em uma linha [J-S31]; a decisão é do dono.
- Siga só a Jéssica; Nick e EXT onde o PROCESSO marca e onde o dono já usa. Onde nada cobre: “o método não cobre isso” + opções.
- Português direto; o detalhe vai no arquivo.