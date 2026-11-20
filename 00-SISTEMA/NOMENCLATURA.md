# NOMENCLATURA · como tudo se chama

Regra: **todo código tem que ser lido por gente.** O código vem primeiro (o robô acha), o apelido vem junto (o dono entende). Nunca mostrar só o código ao dono: sempre `código · apelido`.

## Códigos

| Coisa | Código | Exemplo | Como aparece para o dono |
|---|---|---|---|
| Conta | `C{NN}-{APELIDO}-{PAÍS}` | `C01-MALU-BR` | C01 · Malu · BR (@dicasdamalu8) |
| Produto | `P-{MARCA}-{PRODUTO}` + sigla de 2 letras | `P-QUANTUM-TETRAMAG` · sigla **MG** | MG · Tetra Magnésio · Quantum |
| Estrutura (viral desmontado) | `E{NN}-{CENA}-{VIRADA}` | `E02-COZINHA-DESCONFIADA` | E02 · cortando queijo, a desconfiada que testou |
| Ângulo | `{SIGLA}{N}` | `MG1` | MG1 · "Não é preguiça, é cortisol" |
| Matriz | `{CONTA}-{SIGLA}-{EST}` | `C01-MG-E02` | Malu · Magnésio Quantum · E02 cozinha desconfiada |
| Corpo (um ângulo na matriz) | `{MATRIZ}-{ÂNGULO}` | `C01-MG-E02-MG2` | … · ângulo MG2 "não é genética" |
| Vídeo (corpo + gancho) | `V-{CONTA}-{SIGLA}-{EST}-{ÂNGULO}-G{n}` | `V-C01-MG-E02-MG2-G3` | Malu · Magnésio · E02 cozinha · "não é genética" · gancho 3 |
| Outras variações | sufixo depois do gancho: `-H{n}` headline · `-F{n}` formato | `V-C01-MG-E02-MG2-G3-H2` | … · gancho 3 · headline 2 |
| Ordem de serviço | `OS-{AAAAMMDD}-{NN}` | `OS-20261113-01` | Pedido de 13/11, nº 1 |
| Cardápio de copy | `CARDAPIO.md` dentro da pasta da matriz | `05-VIDEOS/C01-MG-E02/CARDAPIO.md` | Todas as copys da matriz, para aprovar |

`G1` é sempre o gancho original do corpo. O código do vídeo já diz a célula da matriz: linha = ângulo, coluna = gancho.

**Tags de formato** (aparecem junto do nome da estrutura): `[TH]` talking head · `[DUO]` dupla ou clone · `[TXT]` texto na tela · `[DEMO]` demonstração · `[HANDS]` só mãos · `[POD]` podcast · `[TV]` tela verde.
Exemplo no índice: `E02-COZINHA-DESCONFIADA [TH] · cortando queijo · jornada da desconfiada que testou · 1:46 · EUA`.

**Nome da estrutura** = o que se vê (CENA) + a virada psicológica (VIRADA), em 2 palavras cada no máximo. O dono tem que lembrar do vídeo só pelo nome.

## Arquivos de produção
Da **estrutura** (na pasta da matriz, servem a todos os ângulos): `PRINT-{TT}.jpg`, `BLOCO-{TT}.mp4`, `IMG-{NN}.png`.
Do **corpo** (na pasta do ângulo): `T{TT}.mp4`, `T{TT}-G{n}.mp4` (take do gancho n), `OV{NN}.png`, o vídeo final.

| Arquivo | O que é |
|---|---|
| `PRINT-{TT}.jpg` | Quadro do viral usado no take TT (01, 02…) · da estrutura |
| `BLOCO-{TT}.mp4` | Trecho do viral (6, 8 ou 10 s) para motion control no take TT |
| `IMG-{NN}.png` | Imagem gerada (base, base com produto, take NN) |
| `T{TT}.mp4` | Clipe gerado no Flow para o take TT |
| `T{TT}-G{n}.mp4` | Take do gancho n (substitui o T{TT} naquela versão) |
| `OV{NN}.png` | Inserção (pop-up) gerada: ilustração ou foto |
| `PG-{SIGLA}-{AAAA-MM-DD}-{n}.jpg` | Print da página do produto (saúde do produto e prints de avaliação para pop-up) |
| `{CÓDIGO-DO-VÍDEO}.mp4` | Vídeo final, em `final/` |

**Kit fixo da conta** (em `02-CONTAS/{CONTA}/KIT/`): `AVATAR-{NOME}.png` (retrato, só identidade) · `CEN-{LUGAR}.png` (a avatar já com roupa e fundo: `CEN-SALA`, `CEN-COZINHA`, `CEN-CARRO`) · `VOZ.md` (texto da voz e dos ritmos).
**Kit fixo do produto** (em `03-PRODUTOS/{PRODUTO}/`): `FRASCO-{SIGLA}.png` (pote real, de frente, nítido, sem mão nem selo).

## Datas e versões
- Datas sempre `AAAA-MM-DD` em arquivo e `DD/MM` no texto para o dono.
- Todo .md tem no topo: `vN · DD/MM/AAAA · quem atualizou (agente)`. Mudou, sobe a versão. Nunca apagar histórico: o que saiu vai para uma seção `Histórico` no fim.

## Mapa do que já existe (migração da C01)
| Antes (projeto do Claude) | Agora |
|---|---|
| `ROTEIRO-QUANTUM-TETRAMAGNESIO-01` | matriz `C01-MG-E01` · vídeo `V-C01-MG-E01-MG1-G1` · estrutura `E01-SALA-NAOEPREGUICA [TH]` (viral "Toplux", sintomas → cortisol → 4 tipos) |
| `ROTEIRO-QUANTUM-TETRAMAGNESIO-02` | matriz `C01-MG-E02` · vídeo `V-C01-MG-E02-MG2-G1` · estrutura `E02-COZINHA-DESCONFIADA [TH]` (viral do cheddar) |
| Formato clone do Nick (F-N3) | `E03-CLONE-MESMAIDADE [DUO]` (ainda sem DNA completo: falta o vídeo) |
| `PRODUTO-SOUFIT-CREATINA3EM1` | `P-SOUFIT-CREATINA3EM1` · sigla **CR** |
| Tetra Magnésio | `P-QUANTUM-TETRAMAG` · sigla **MG** (ainda sem PRODUTO.md: o Zico monta) |
| `PRODUTO-SOUFIT-SUPERFIBRAS` | `P-SOUFIT-SUPERFIBRAS` · sigla **SF** · pausado |
| Ângulos MG1–MG15, CR1–CR15 (DOSSIE-ANGULOS) | ficam com o mesmo código, em `ANGULOS.md` de cada produto |
