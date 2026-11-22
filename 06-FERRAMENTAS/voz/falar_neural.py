"""Voz neural (Microsoft, pt-BR) · v1 · 22/11/2026 · troca da Kokoro (dono: "robótica e sem graça").
uso: python3 falar_neural.py falas.tsv saida_dir [--voz pt-BR-ThalitaMultilingualNeural] [--rate +6%]
falas.tsv: personagem<TAB>frase. Lê o texto inteiro de uma vez (entonação natural) e usa o tempo REAL de cada palavra.
Saída: voz.wav + tempos.json (mesmo formato da falar_elenco.py). Sem chave; precisa de rede (speech.platform.bing.com)."""
import argparse, asyncio, json, os, re, subprocess, unicodedata, difflib
import certifi
if os.path.exists('/root/.ccr/ca-bundle.crt'): certifi.where = lambda: '/root/.ccr/ca-bundle.crt'  # proxy da nuvem
import edge_tts
p = argparse.ArgumentParser(); p.add_argument('falas'); p.add_argument('saida')
p.add_argument('--voz', default='pt-BR-ThalitaMultilingualNeural'); p.add_argument('--rate', default='+6%'); p.add_argument('--pitch', default='+0Hz')
a = p.parse_args(); os.makedirs(a.saida, exist_ok=True)
falas = [l.rstrip('\n').split('\t', 1) for l in open(a.falas, encoding='utf-8') if l.strip()]
texto = ' '.join(f for _, f in falas)
norm = lambda w: re.sub(r'[^a-z0-9]', '', unicodedata.normalize('NFD', w.lower()).encode('ascii', 'ignore').decode())
async def gera():
    c = edge_tts.Communicate(texto, a.voz, rate=a.rate, pitch=a.pitch, boundary='WordBoundary'); bs = []
    with open(os.path.join(a.saida, 'voz.mp3'), 'wb') as f:
        async for ch in c.stream():
            if ch['type'] == 'audio': f.write(ch['data'])
            elif ch['type'] == 'WordBoundary': bs.append((ch['text'], ch['offset'] / 1e7, (ch['offset'] + ch['duration']) / 1e7))
    return bs
bs = asyncio.run(gera())
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', os.path.join(a.saida, 'voz.mp3'), '-ar', '24000', '-ac', '1', os.path.join(a.saida, 'voz.wav')], check=True)
nossas = [(i, w) for i, (_, f) in enumerate(falas) for w in f.split()]
A, B = [norm(w) for _, w in nossas], [norm(t) for t, _, _ in bs]
ini = [None] * len(nossas); fim = [None] * len(nossas)
for blk in difflib.SequenceMatcher(None, A, B, autojunk=False).get_matching_blocks():
    for k in range(blk.size): ini[blk.a + k] = bs[blk.b + k][1]; fim[blk.a + k] = bs[blk.b + k][2]
for k in range(len(ini)):  # palavras sem par: interpola
    if ini[k] is None:
        ant = next((fim[j] for j in range(k - 1, -1, -1) if fim[j] is not None), 0.0)
        ini[k] = ant; fim[k] = ant + 0.2
tempos = []
for i, (quem, frase) in enumerate(falas):
    ks = [k for k, (j, _) in enumerate(nossas) if j == i]
    tempos.append({'quem': quem, 'frase': frase, 'inicio': round(ini[ks[0]], 3), 'fim': round(max(fim[k] for k in ks), 3),
                   'palavras': [{'p': nossas[k][1], 'inicio': round(ini[k], 3)} for k in ks]})
json.dump(tempos, open(os.path.join(a.saida, 'tempos.json'), 'w'), ensure_ascii=False, indent=1)
print(f'voz.wav {tempos[-1]["fim"]:.1f}s · {len(tempos)} falas · {sum(x is not None for x in ini)}/{len(ini)} palavras com tempo real')
