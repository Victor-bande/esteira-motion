---
name: "encaixe-estrutura"
description: "Encaixa um produto numa estrutura salva: devolve a copy completa com 2 opções por colchete, no lugar de cada slot, para o dono escolher vendo o contexto; com as escolhas, confere e entrega a copy no ROTEIRO."
---

# Encaixe · produto + estrutura → copy

## Quando usar
- O dono quer montar a copy de um vídeo: "encaixa o [produto] nessa estrutura", "monta a copy", "me dá as opções", ou acabou de escolher a estrutura e o ângulo.
- Precisa existir: a **estrutura distrinchada e aprovada pelo dono** (no chat, pela `esqueleto-viral`, ou um arquivo em `ESTRUTURAS/`) e o PRODUTO em `PRODUTOS/` (ou, se ainda não houver arquivo, os prints da página e do rótulo no chat). Faltando um, dizer qual falta e oferecer a skill que cria (`esqueleto-viral` ou `material-produto`).

## Ordem do trabalho (do dono)
1. Estrutura distrinchada e aprovada (com os slots 🔧 marcados e a mecânica visual de cada bloco).
2. **Ângulo do vídeo escolhido:** persona do PRODUTO + pecado + nível de consciência (2 ou 4/5) + sonho [J-S12, J-S13]. Sem ângulo, não montar opções: trazer primeiro 2 a 4 ângulos e perguntar.
3. **Copy completa com as opções no lugar de cada slot**, para o dono escolher, misturar e reescrever vendo o contexto.
4. Com as escolhas: a copy no chat, conferida (coerência, linha vermelha, tempo). O dono pode montar a copy ele mesmo; aí só conferir.
5. `ROTEIRO-{PRODUTO}-{NN}.md` só quando o dono aprovar a copy. Takes e prompts só se ele pedir.
- Nesta etapa, não entregar vídeo nem MD sem o dono pedir.

## Antes de gerar
Uma rodada, numerada, só o que faltar, com as opções do método:
1. A estrutura (aprovada no chat ou salva em `ESTRUTURAS/`).
2. O ângulo: persona do PRODUTO → pecado e nível.
3. Formato (os da conta, no PERFIL, ou o estilo indicado no direcionamento do Nick) [J-S20, J-S21].
4. Oferta do dia: preço, cupom, frete, parcelamento (print da página). Sem isso, o CTA sai sem número.
Linha-base do vídeo [PROCESSO Fase 8]: 1 persona · 1 produto · 1 formato · 1 ângulo (pecado) · nível.

## Ler antes
- A estrutura: molde e mecânica de cada bloco, PARA PREENCHER, política.
- O PRODUTO: bancos, personas, corpos do produto, linha vermelha, lacunas.
- PERFIL · `JESSICA_METODO.md` S12 a S15 e 3.1 a 3.9 · `REGISTRO` (o que já foi testado e o que deu violação) · `NICK/DIRECIONAMENTO-NICK-*` (dicas do mês para aquele gancho) · `claude/NICK_METODO.md` §3.7 (retenção) e §7.4 (ferramentas de iteração).

## Montar as opções
- **Formato (regra do dono): as opções vêm dentro da copy completa.** Escrever a estrutura inteira, bloco a bloco, como texto corrido, com cada slot 🔧 no lugar dele: `**[opção a | opção b]**`. A imagem ou a mecânica visual vai em itálico, entre parênteses, na frase em que entra. O dono escolhe vendo o contexto e a copy por completo. Nunca entregar as opções soltas, numa lista separada da copy.
- **2 opções por colchete:** as duas que mais combinam com o contexto e a persona. Mais só se o dono pedir. Slot sem alternativa real (o ativo, o nº de tipos, a dose do rótulo): escrever o fato direto, sem colchete.
- Cada opção já escrita para encaixar na frase (gênero, artigo, verbo): ler a frase com a opção a e com a b e as duas precisam soar naturais.
- **Seguir a estrutura bloco a bloco, sem trocar a mecânica.** Se o bloco depende de imagem (ex.: imagem falsa por cima no "vai fazer", ela real no "não vai fazer"), cada opção já diz qual imagem entra. Nunca substituir a mecânica por outra ideia.
- **Coerência com o produto:** a imagem e a dor mostram o que o NOSSO produto resolve. Se o original tinha outro objetivo, avisar em uma linha e trocar o conteúdo, mantendo a mecânica.
- As opções saem do banco do PRODUTO que serve para aquela persona, no molde do bloco e na voz dela (linguagem de amiga, J 3.9).
- **Partes variáveis, criadas aqui** (não vêm do PRODUTO): experiência pessoal/história [J 3.1], urgência e oportunidade [J 3.7], oferta [J 3.6], CTA [J 3.4, 3.5, 3.8]. Oferta e números só da página do dia; sem dado, versão sem número.
- Nada fora da Linha vermelha do PRODUTO. Ingrediente, selo ou benefício que não está no rótulo não entra. Respeitar ângulos que o dono já descartou. Opção que depende do rótulo ou de fonte: `[CONFERIR]`.
- **Embaixo da copy:**
  - "Combinações que brigam": opções que repetem informação (ex.: preço dito duas vezes) ou quebram a lógica entre blocos.
  - ⚠️ em uma linha cada.
- Formato da resposta (celular):
```
Ângulo: [persona] · [pecado] · nível · sonho
Em cada colchete: [a | b]

B1 · GANCHO
Se [o seu sono | a sua madrugada] tá assim (img: [relógio 3:00 | celular 3h12])…

B2 · AUTORIDADE
…

Combinações que brigam
- …
⚠️ …
```
- No fim: "Responde com as letras por bloco (B1 a,b,a · B2 b…) ou cola a copy montada."

## Com as escolhas
1. Montar a copy na ordem, só com as opções escolhidas; ajustar só as palavras de ligação. Se o dono colar a copy montada por ele, partir dela.
2. Conferir: coerência entre os blocos (a pergunta aberta no começo fecha no fim? a dor do gancho é a que o produto resolve?), a Linha vermelha do PRODUTO e o ⚠️ da estrutura.
3. Contar palavras e tempo (~3 palavras por segundo, NICK §2.4); avisar se passar do tempo do original.
4. Três variações de gancho, cada uma de um tipo da Jéssica [J-S14].
5. Notas de voz (entonação por trecho) e de edição (headline, produto na tela, setinha pro carrinho, rodapé "resultados podem variar" quando houver antes e depois) [PROCESSO Fase 8, J-S26].
6. Mostrar no chat. Quando o dono aprovar: `ROTEIRO-{PRODUTO}-{NN}.md` (Write + SendUserFile) com linha-base · copy em blocos rotulados · variações · notas de voz e edição · pendências `[CONFERIR]`.
7. Divisão em takes e prompts só se o dono pedir (a skill do Flow que ele chamar).

## Regras
- Perguntar antes de produzir, uma rodada só.
- Não inventar dado de produto, avaliação, depoimento ou resultado. Experiência pessoal é dramatização sem fato verificável (prazo, número, efeito fora do rótulo).
- Risco de política: uma linha; a decisão é do dono.
- CTA como indicação, nunca "compre agora" [J-S12, J-S15].
- Português direto; opções curtas.