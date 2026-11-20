# SKILL `checagem-pais` (+ `saude-do-produto`) · Tostão · PAÍS (funcionário da Pesquisa)

v1 · 14/11/2026 · **skill nova**. Junta o que fizemos na prática (os prints da página do Tetra Magnésio de 22/10 e 30/10 e da Creatina de 22/10, nos ROTEIROS e no PRODUTO) com o método: `PROCESSO_CONTA` Fase 7 passos 1 e 2 [MVM] · Jéssica S16 e S31 · `material-produto` "Antes de gerar" (incluído na seção 6) · a habilidade `saude-do-produto` do pacote v2.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `checagem-pais` · `saude-do-produto` |
| Agente | Tostão · PAÍS (funcionário da Pesquisa, responde ao Zico) |
| Gatilho | Chegou FICHA DE ACHADO do Jairzinho · rotina semanal de saúde dos produtos ativos · o Sócrates suspeita de preço ou página (clique sem venda) |
| Não usar quando | Escrever bancos de dor e ângulo (é o Zico) |
| Ferramentas | Navegador ou prints do dono: TikTok Shop do país da conta, TikTok Studio → TikTok Shop para Criadores → Mercado de Produtos · leitura de imagem |
| Escreve em | `03-PRODUTOS/_ACHADOS/ACH-…/CHECAGEM-{PAÍS}.md` · `03-PRODUTOS/P-…/PAGINA/PG-{SIGLA}-{AAAA-MM-DD}.md` |

## 2. Recebe
- Do Jairzinho: a FICHA DE ACHADO com o termo de busca do equivalente.
- Do dono (quando não der para navegar): prints da página no app (todas as fotos, preço, avaliações, vendidos, comissão), feitos no país da conta.
- Exemplo: `exemplos/RECEBE-prints-da-pagina.md`.

## 3. Lê antes
`PERFIL.md` da conta (país, moeda, nicho) · `01-BASE/MARCAS-PARCEIRAS.md` (política por marca) · `03-PRODUTOS/INDICE.md` · `REGISTRO.md` (a violação de "promoção de produto inconsistente").

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| CHECAGEM do equivalente no país | `_ACHADOS/ACH-…/CHECAGEM-{PAÍS}.md` | Zico (decide e escreve o dossiê) |
| SAÚDE DO PRODUTO (semanal, datada) | `03-PRODUTOS/P-…/PAGINA/PG-{SIGLA}-{data}.md` | Zico (atualiza os pisos do §12) · Pelé (alerta se saiu do Shop) |
Exemplos: `exemplos/GERA-CHECAGEM-MG-BR.md` · `exemplos/GERA-SAUDE-MG-2210-e-3010.md` (as duas páginas reais do Tetra Magnésio).

## 5. Regras
1. **O país é o da conta**: BR para a C01 e a C02, UK para a C03. Moeda e idioma do país.
2. **Equivalente** = o mesmo produto, ou um que resolve o mesmo problema [J-S16]. Diga qual dos dois é.
3. **Loja oficial.** Conferir se é a loja oficial da marca (cuidado com loja falsa) e se tem amostra grátis ou reembolsável [MVM, PROCESSO Fase 7 passo 2].
4. **Comissão** em moeda e em % do preço praticado. Abaixo de 15% (ou de 2 a 3 €/£ por venda) [J-S31]: ⚠️ em 1 linha; decide o dono. Ex. real: Tetra Magnésio R$4,37 ≈ 13,5% na promoção; o dono seguiu.
5. **Preço sempre com data e hora**, cheio e promocional, e o tipo de promoção (relâmpago, liquidação, cupom). Serve para a faixa da oferta atemporal; **nunca vai para a fala**.
6. **Números da página com data:** nota, nº de avaliações, vendidos, % de comentários positivos, recompras. O Zico transforma em pisos que só crescem.
7. **Todas as fotos da página** (inclusive composição, tabela, rótulo) e a foto limpa do pote para o FRASCO. Produto do vídeo tem que ser idêntico ao vinculado.
8. **Nunca inventar.** O que a página não mostra fica "não informado".
9. **Saúde semanal** dos produtos ativos: continua no Shop? mesma loja? comissão mudou? nota caiu? Se saiu do Shop ou trocou de loja: alerta imediato ao Zico, que avisa o Pelé (os vídeos na fila daquele produto param).

## 6. Procedimento

### Checagem (produto novo)
1. Buscar no Shop do país com o termo do Jairzinho (e variações).
2. Achou o mesmo produto? Se não, o que resolve o mesmo problema? Listar até 3 candidatos.
3. Para cada um: loja (oficial?), preço cheio e promocional com data e hora, parcelamento, frete, nota e nº de avaliações, vendidos, % positivos, recompras, comissão (valor e %), amostra.
4. Prints de todas as fotos e das 5 avaliações mais úteis (com e sem foto).
5. Critério [J-S31] com o número do país: passa? Comissão ≥15%?
6. Escrever a CHECAGEM e avisar o Zico.

### Saúde do produto (semanal, segunda 10h)
1. Abrir a página de cada produto ativo.
2. Preencher o PG datado (modelo em `exemplos/`).
3. Comparar com o PG anterior: o que mudou?
4. Avisar o Zico só se mudou algo que afeta a copy (piso novo, loja, comissão, saiu do Shop).

### Da skill original `material-produto` · o que pedir da página
### Da fonte `material-produto` · "Antes de gerar" · o que pedir da página (linhas 17–23)

##### Antes de gerar
Uma rodada, numerada, só do que faltar:
1. Página do produto no TikTok Shop: prints de todas as fotos (inclusive composição e tabela nutricional), preço, avaliações e vendidos. Ou foto dos 4 lados da embalagem.
2. Comissão (TikTok Studio → TikTok Shop para Criadores → Mercado de Produtos).
3. Transcrições dos vídeos que mais venderam o produto e de produtos parecidos (com @, views e vendas, se tiver).
Se o dono disser “cria”, gerar com o que tem e listar o resto em Lacunas.

### Da fonte `MODELOS/KIT-POST-REGISTRO-PAGINA.md (pacote v2)` · modelo SAÚDE DO PRODUTO (linhas 89–fim)

##### SAÚDE DO PRODUTO (`03-PRODUTOS/{PRODUTO}/PAGINA/PG-{SIGLA}-{AAAA-MM-DD}.md`) · rotina semanal do Zico, fora do fluxo do vídeo
Serve para: saber se o produto continua vendável (no Shop, loja oficial, comissão, nota) e atualizar os pisos de número do PRODUTO.md. A copy não depende disto, porque é atemporal.
```markdown
# PG-MG-2026-11-13 · Tetra Magnésio · Quantum
Conferido: 13/11 HH:MM · Zico · prints: PG-MG-2026-11-13-1.jpg …
| Item | Hoje | Última (data) | Mudou? |
| Preço | R$ … | R$ 32,35 (30/10) | |
| Oferta e validade | … | 11.11 -46% até 11/11 | |
| Vendidos | … | 132,8 mil | |
| Nota (avaliações) | … | 4,7 (22,6 mil) | |
| % positivos · recompras | … | 92,6% · 3,9 mil+ | |
| Comissão | R$ … (…%) | R$ 4,37 | |
| Cupom · frete | … | R$8 em R$80 · grátis | |
⚠️ Algum vídeo no ar afirma algo que deixou de ser verdade (produto saiu do Shop, nota caiu abaixo do piso dito)? …
```


## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-prints-da-pagina.md` | A lista do que precisa vir da página | Pedir certo ao dono |
| `exemplos/GERA-CHECAGEM-MG-BR.md` | A checagem do Tetra Magnésio no Shop BR | O formato da entrega |
| `exemplos/GERA-SAUDE-MG-2210-e-3010.md` | As duas páginas reais (22/10 e 30/10) e o que mudou | Por que a oferta atemporal existe |
