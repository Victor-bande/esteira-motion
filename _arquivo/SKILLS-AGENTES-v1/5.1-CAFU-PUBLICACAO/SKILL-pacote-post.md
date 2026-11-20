# SKILL `pacote-post` (+ `fila-do-dia`, `registro-post`) · Cafu · PUBLICAÇÃO (funcionário do Resultado)

v1 · 14/11/2026 · origem: "Postar e testar" da `esteira-ugc-avatar` (§6), "Edição e post" da `cenas-ugc-ia` (Passo 5), o post e o REGISTRO da `modelagem-ugc-ia` (Etapa 9) e da `modelar-viral` (Etapa 9), mais os modelos POST e REGISTRO do pacote v2. Todos na seção 6.

## 1. Configuração
| Campo | Valor |
|---|---|
| Nome da habilidade | `pacote-post` · `fila-do-dia` · `registro-post` |
| Agente | Cafu · PUBLICAÇÃO (funcionário do Resultado, responde ao Sócrates) |
| Gatilho | Versão aprovada no G4 · todo dia às 9h (fila do dia) · o dono diz "postei" |
| Não usar quando | A versão não passou no G4 |
| Ferramentas | Só texto |
| Escreve em | `{ÂNGULO}/POST.md` · `02-CONTAS/{CONTA}/REGISTRO.md` (linha do post) · células "postado" da `MATRIZ.md` |

## 2. Recebe
- Do Romário: a versão final e o rascunho do POST.md.
- Do Sócrates: a FILA ordenada.
- Do dono: "postei às 18h" (e o link, se tiver).
- Exemplo: `exemplos/RECEBE-versao-aprovada-e-fila.md`.

## 3. Lê antes
`MATRIZ.md` (fila) · `ROTEIRO.md` (headline, gancho) · `PRODUTO.md` (produto vinculado, linha vermelha) · `REGISTRO.md` (o que postou ontem; violações) · `PERFIL.md` (país: conta fora do Brasil posta com VPN no país de venda [J-S8, S29]).

## 4. Entrega
| O quê | Onde | Para quem |
|---|---|---|
| Lembrete da fila do dia (o que postar, de qual matriz, a que horas) | Chat → Pelé → dono | Dono |
| POST.md de cada versão: legenda (texto do topo + 2 ou 3 hashtags neutras), produto a vincular, rótulo de IA, checklist antes de postar | `{ÂNGULO}/POST.md` | Dono |
| Linha no REGISTRO (data, hora, versão, persona, pecado, estrutura, formato, gancho; números ficam para o Sócrates) | `REGISTRO.md` | Sócrates |
| Pedido dos prints 48 a 72 h depois | Chat → Pelé | Dono |
Exemplos: `exemplos/GERA-POST-V-C01-MG-E02-MG2-G1.md` · `exemplos/GERA-LINHA-REGISTRO.md`.

## 5. Regras da máquina (valem por cima dos textos originais)
1. **Checklist antes de postar** (em todo POST.md):
   - produto vinculado é **o mesmo** do vídeo (pote idêntico ou PiP do pote real; regra da violação de 21/10);
   - rótulo de conteúdo de IA ligado;
   - o texto do topo e a legenda são **desta** versão (no Zencial subiu o texto de outro vídeo);
   - nenhuma hashtag ou palavra da linha vermelha (#rejuvenescer, #ofertalimitada…);
   - nunca "não estão me pagando" (afiliado ganha comissão);
   - nenhuma fala ou tela com preço, %, data ou estoque (oferta atemporal);
   - produto ainda no Shop (o Tostão confere toda segunda).
2. **Cadência:** 1 versão por dia por matriz, nunca o mesmo gancho no mesmo dia [NICK §7.1]; pelo menos 1 h entre posts da mesma conta; variação de gancho só 24 h depois do corpo, se não houve violação [`esteira-ugc-avatar` §6].
3. **Nunca repostar o mesmo vídeo** trocando só texto, legenda ou cor.
4. **Violação:** parar a fila daquela conta, registrar o motivo e a pena no REGISTRO e avisar o Sócrates e o Pelé na hora.
5. **Conta fora do Brasil** (C03 · UK): postar com VPN no país de venda; o método da Jéssica manda entrar no modo avião, ligar a VPN, postar, sair da conta e desligar a VPN [J-S8, S29].

## 6. Procedimento integral
### Da fonte `esteira-ugc-avatar` · §6 · postar e testar (linhas 169–178)

##### 6. Postar e testar
- **Antes de postar:** produto vinculado e rótulo de IA ligado.
- **Legenda:** o texto do topo + 2 ou 3 hashtags neutras.
  - Nunca termo da linha vermelha (ex.: #rejuvenescer).
  - Nunca "não estão me pagando": afiliado ganha comissão, então é afirmação enganosa.
- **Intervalos:** pelo menos 1 h entre posts. Ganchos só 24 h depois do corpo, se não tiver violação.
- **Variação:** muda só o T1 (fala + clipe). Texto do topo, legenda, produto e corpo ficam iguais.
- **Nunca repostar o mesmo vídeo** trocando só texto, legenda ou cor. A política do TikTok Shop trata isso como conteúdo repetitivo e pode limitar o alcance.
- **REGISTRO por post:** data · esteira · gancho · views · tempo médio · % até o fim · CTR · cliques · vendas.

### Da fonte `cenas-ugc-ia` · Passo 5 · edição e post (linhas 94–100)

##### Passo 5 · Edição e post (CapCut)
- Corte seco, ~0,2 s depois da última palavra de cada take.
- Texto do topo nos primeiros segundos, que filtra o público (fundo amarelo + emoji).
- Rótulo errado em poucos segundos: cobrir com a foto real do frasco (PiP), sem gerar de novo.
- No CTA: "resultados podem variar" (pequeno) + setinha 👇.
- Legenda: o texto do topo + 2 ou 3 hashtags neutras. Produto vinculado, rótulo de IA ligado.

### Da fonte `modelagem-ugc-ia` · Etapa 9 · post e REGISTRO (linhas 141–143)

##### Etapa 9 · Post e REGISTRO
Produto vinculado. Linha no `REGISTRO-{CONTA}` (data, produto, persona, pecado, gancho, views, tempo médio, % até o fim, CTR, vendas). Leitura 2 a 3 dias depois, pela matriz.

### Da fonte `modelar-viral` · Etapa 9 · post (linhas 78–82)

##### Etapa 9 · Post, leitura e iteração
- **Post:** produto vinculado, pré-verificação do TikTok, linha no `REGISTRO-{CONTA}` (data, produto, persona, pecado, estrutura, formato, gancho, métricas).
- **Dia seguinte:** leitura das métricas (régua do Nick §6) → onde está o problema → **muda uma variável só**, gancho primeiro (banco da Etapa 5), depois o que a leitura apontar (formato, corpo, CTA, visual). Reaproveitar imagens e takes validados; gerar só o que mudou. Nunca repostar o mesmo vídeo trocando só texto ou legenda.
- **Trocar a estrutura:** quando o ciclo já testou várias variáveis e não vendeu, a próxima troca é a estrutura (novo viral → volta à Etapa 1), mantendo produto e persona. O Claude mostra o histórico de variáveis testadas; **o momento da troca é decisão do dono** (o método não dá número).

### Da fonte `MODELOS/KIT-POST-REGISTRO-PAGINA.md (pacote v2)` · modelos POST e REGISTRO (linhas 57–88)

##### POST (`05-VIDEOS/{MATRIZ}/{ÂNGULO}/POST.md`) · um bloco por versão (G1…Gn)
```markdown
# POST · C01-MG-E02-MG2
Versões: final/V-C01-MG-E02-MG2-G1.mp4 · …-G2.mp4 · …-G3.mp4 (duração de cada)
Ordem de postagem: a da FILA (MATRIZ.md)
Produto a vincular: Tetra Magnésio · loja oficial Quantum (conferir que é o mesmo do vídeo)
Legenda do post: … (do ROTEIRO) · hashtags: 2–3 neutras
Texto do topo: …
Checklist antes de postar:
- [ ] Nenhuma fala ou tela com preço, %, data, contador ou estoque (oferta atemporal)
- [ ] Produto ainda no Shop, na loja oficial (última saúde do produto do Zico)
- [ ] Rótulo de conteúdo de IA ligado
- [ ] Produto vinculado é o do vídeo
- [ ] Legenda sem promessa (sem #emagrecer, #cura…)
- [ ] Não é o mesmo gancho de outro post de hoje
Depois de postar: mandar ao Pelé o código da versão, data, hora e link.
```

##### REGISTRO (`02-CONTAS/{CONTA}/REGISTRO.md`)
```markdown
# REGISTRO · C01 · Malu · BR
vN · DD/MM · Pelé/Sócrates
Régua: NICK §6 (3 mil views; público → tempo médio → conclusão → conversão)

| Data · hora | Vídeo (célula da matriz) | Produto | Estrutura | Ângulo · pecado · nível | Gancho | Views | Tempo médio | % fim | CTR | Pedidos | Comissão | Veredito |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Leituras
### LEITURA DD/MM · V-…
Números · veredito · causa provável [HIPÓTESE] · próxima ação (1 variável · ferramenta nº · quem) · decisão do dono
```


## 7. Exemplos
| Arquivo | É | Para que serve |
|---|---|---|
| `exemplos/RECEBE-versao-aprovada-e-fila.md` | O que chega do Romário e do Sócrates | O ponto de partida |
| `exemplos/GERA-POST-V-C01-MG-E02-MG2-G1.md` | O POST.md preenchido | O padrão da entrega |
| `exemplos/GERA-LINHA-REGISTRO.md` | A linha real do post do MG1 (30/10) e a do E7 que tomou violação | Como registrar |
