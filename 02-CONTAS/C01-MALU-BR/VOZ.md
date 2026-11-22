# VOZ · C01 · Malu · BR
v1 · 20/11/2026 · orquestrador

**v2 · 22/11/2026 · Provedor: voz neural Microsoft pt-BR** (`06-FERRAMENTAS/voz/falar_neural.py`, sem chave, tempo real de cada palavra). Padrão: `pt-BR-ThalitaMultilingualNeural`, rate +6%. Kokoro saiu (dono 22/11: "robótica e sem graça"). ⚠️ serviço gratuito de leitura em voz alta da Microsoft, uso não oficial.

(histórico) **Provedor: voz local Kokoro (pt-BR), sem chave** · `06-FERRAMENTAS/voz/` (instalar.sh uma vez por sessão; falar.py gera voz.wav + tempos.json). ElevenLabs saiu (21/11, decisão do dono). Vozes: `pf_dora` (feminina) · `pm_alex` · `pm_santa` (masculinas).

A voz é gerada **dentro da etapa do motion**, sem passo extra: o ROTEIRO aprovado diz a persona do corpo → eu pego a voz daquela persona neste banco → gero a fala com o tempo de cada palavra → o tempo da fala monta as cenas e a legenda.

## Banco de vozes (persona → voz)
Cada voz é escolhida **uma vez** (✋ G3: o dono ouve 3 amostras e escolhe); depois é reaproveitada em todo vídeo daquela persona.

| Perfil de narradora | Para personas | Voz | Tom · ritmo | Status |
|---|---|---|---|---|
| V1 · amiga 30–45, animada | jovem adulta, rotina corrida | _a escolher_ | conversa de amiga, rápido, sobe no fim da frase | pendente |
| V2 · madura 45+, calma e confiável | mulher madura, já tentou de tudo | _a escolher_ | mais grave, pausada só na revelação | pendente |
| V3 · desconfiada que testou | cética, nível 4/5 | _a escolher_ | irônica no começo, aliviada no fim | pendente |

## Regras
- **Dicção primeiro** (dono 21/11): velocidade até 1,12 e **sem mudar o tom** (o ajuste de tom deixava a fala embolada). Personagens se diferenciam pelo ritmo e pela legenda/rótulo na tela. O ritmo rápido do vídeo vem dos cortes, não da voz.
- O pecado do ângulo dá a emoção da leitura (Ira = indignada · Inveja = cochichando segredo · Preguiça = aliviada · Avareza = "achei barato").
- Ritmo acelerado e sem silêncio (KIT-VISUAL); número por extenso na copy.
- Modelo e ajustes (estabilidade, estilo, velocidade) salvos aqui na 1ª aprovação de cada voz.
