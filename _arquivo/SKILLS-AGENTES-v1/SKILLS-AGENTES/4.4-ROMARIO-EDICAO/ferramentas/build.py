#!/usr/bin/env python3
"""Monta um corpo (ou uma versão de gancho) a partir dos takes. Exemplo preenchido: V-C01-MG-E01-MG1-G1 (16 takes). Gancho empilhado = TEXT[0] + takes/T00.mp4."""
import json, re, math, subprocess, os, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.environ.get("EDIT_ROOT", os.getcwd())  # pasta edicao/ do vídeo
OUT = f"{ROOT}/out"; os.makedirs(OUT, exist_ok=True)
ART = f"{ROOT}/art"; os.makedirs(ART, exist_ok=True)
SEG = f"{ROOT}/seg"; os.makedirs(SEG, exist_ok=True)
W, H, FPS = 1080, 1920, 24
POP = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"
EMO = "/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf"

# ---------------- falas ----------------
TEXT = {
 1: "Se a sua madrugada tá assim… e a sua energia tá assim… você não é preguiçosa, querida.",
 2: "Você só tá com o cortisol lá em cima. A cabeça que não desliga na hora de dormir.",
 3: "Acordar já cansada, pavio curto e ombro tenso, esquecer o que ia falar. E tudo isso tem a ver com magnésio baixo.",
 4: "Eu vivi isso por anos, até pesquisar e descobrir o porquê.",
 5: "A coisa número {um|1} que eu aprendi tentando de tudo pra ter energia, e que quase ninguém te conta, é essa.",
 6: "O corpo gasta mais magnésio quando você vive no estresse, e sem ele fica difícil relaxar e desligar. Quando o seu magnésio tá baixo, o seu estresse sobe.",
 7: "Magnésio na medida certa pode ajudar a dormir mais fundo, acordar com mais disposição e acalmar a cabeça. A maioria das pessoas toma magnésio só pra dormir.",
 8: "Mas no fim das contas: magnésio baixo, estresse alto. E a gente precisa repor.",
 9: "Essa rotina corrida vai queimando o magnésio que ainda te resta, e é por isso que o cansaço e o sono ruim só vão se acumulando cada vez mais.",
 10: "A maioria não sabe que existem vários tipos de magnésio, como óxido, malato, quelato e cloreto. E o corpo usa cada um pra uma coisa diferente.",
 11: "Em vez de comprar {quatro|4} potes separados, existe um magnésio que junta os {quatro|4} numa fórmula só. Se você quer uma boa recomendação.",
 12: "É esse aqui da Quantum. Ele junta {quatro|4} tipos de magnésio numa fórmula só. {Duas|2} cápsulas por dia, dura {trinta dias|30 dias}, por menos de {trinta e seis reais|R$ 36}.",
 13: "Ele tem mais de {cento e trinta mil|130 mil} vendidos e mais de {noventa e dois por cento|92%} de comentários positivos. No carrinho laranja você vê as avaliações você mesma.",
 14: "Mas vou te avisar: ele tá na liquidação do {onze do onze|11.11}, quase metade do preço, e isso só vale até o dia {onze de novembro|11 de novembro}.",
 15: "Deixei o link certinho da loja oficial da Quantum aqui embaixo só pra você. Se o carrinho laranja ainda tá aparecendo.",
 16: "Eu garantiria o meu se fosse você, porque sai mais barato que um cafezinho por dia.",
}
HL = {"madrugada","energia","preguiçosa","cortisol","desliga","cansada","magnésio","baixo","anos",
      "1","ninguém","estresse","sobe","dormir","disposição","alto","repor","queimando","cansaço","sono",
      "óxido","malato","quelato","cloreto","4","fórmula","quantum","r$ 36","130 mil","92%",
      "liquidação","11.11","metade","11 de novembro","oficial","embaixo","cafezinho","30 dias","2"}

# legenda queimada pelo Flow: caixa (coords nativas 720x1280) e intervalo na fonte
BURN = {1: ((160, 982, 400, 52), (2.30, 4.80)),
        12: ((88, 938, 532, 84), (0.00, 7.75)),
        15: ((220, 1006, 278, 46), (0.98, 3.98)),
        16: ((236, 1012, 254, 48), (1.32, 2.45))}

VOW = re.compile(r"[aeiouáéíóúâêôãõàüy]+", re.I)
def syl(w):
    return max(1, len(VOW.findall(w)))

def tokens(t):
    out = []
    for m in re.finditer(r"\{([^|}]+)\|([^}]+)\}([.,:…!?]*)|(\S+)", TEXT[t]):
        if m.group(1):
            spoken, disp, punct = m.group(1), m.group(2), m.group(3)
            out.append({"sp": spoken, "disp": disp, "punct": punct})
        else:
            w = m.group(4)
            core = w.rstrip(".,:…!?")
            out.append({"sp": core, "disp": core, "punct": w[len(core):]})
    for tk in out:
        tk["syl"] = sum(syl(x) for x in tk["sp"].split()) + (0.6 if tk["punct"] else 0)
    return out

# ---------------- alinhamento palavra → ilha de fala ----------------
SP = json.load(open(f"{ROOT}/speech.json"))
def islands(t):
    isl = [tuple(x) for x in SP[str(t)]["islands"] if x[1] - x[0] >= 0.12]
    return isl

def align(t):
    toks = tokens(t); isl = islands(t)
    n, k = len(toks), len(isl)
    S = [tk["syl"] for tk in toks]
    D = [b - a for a, b in isl]
    rate = sum(D) / sum(S)
    pref = [0]
    for s in S: pref.append(pref[-1] + s)
    INF = 1e18
    # dp[i][j]: primeiras i palavras em j ilhas
    dp = [[INF] * (k + 1) for _ in range(n + 1)]; bk = [[0] * (k + 1) for _ in range(n + 1)]
    dp[0][0] = 0
    for j in range(1, k + 1):
        for i in range(1, n + 1):
            for p in range(j - 1, i):
                if dp[p][j - 1] >= INF: continue
                ss = pref[i] - pref[p]
                c = math.log(D[j - 1] / (rate * ss)) ** 2
                if i < n and not toks[i - 1]["punct"]: c += 0.08
                v = dp[p][j - 1] + c
                if v < dp[i][j]: dp[i][j] = v; bk[i][j] = p
    if dp[n][k] >= INF:  # mais ilhas que palavras: junta tudo
        isl = [(isl[0][0], isl[-1][1])]; k = 1; D = [isl[0][1] - isl[0][0]]
        groups = [(0, n)]
    else:
        groups = []; i = n
        for j in range(k, 0, -1):
            p = bk[i][j]; groups.append((p, i)); i = p
        groups.reverse()
    for (a, b), (s0, s1) in zip(groups, isl):
        tot = sum(S[a:b]); cur = s0
        for i in range(a, b):
            d = (s1 - s0) * S[i] / tot
            toks[i]["s"] = cur; toks[i]["e"] = cur + d; cur += d
    return toks, isl

# ---------------- segmentos (cortes) ----------------
def segments(t, isl):
    dur = SP[str(t)]["dur"]
    st = max(0.0, isl[0][0] - 0.10); en = min(dur, isl[-1][1] + 0.12)
    cuts = [st]
    segs = []
    cur = st
    for (a0, a1), (b0, b1) in zip(isl, isl[1:]):
        if b0 - a1 > 0.45 and t not in BURN:
            segs.append((cur, a1 + 0.12)); cur = b0 - 0.09
    segs.append((cur, en))
    return segs

ALIGN = {}; SEGS = []
for t in sorted(TEXT):
    toks, isl = align(t); ALIGN[t] = toks
    for s in segments(t, isl): SEGS.append({"t": t, "s": s[0], "e": s[1]})

# zoom alternado: F2 (T12–T16) fixo; F1 alterna para trás a partir de T11 = 1.0
F2Z = {12: 1.08, 13: 1.0, 14: 1.08, 15: 1.0, 16: 1.08}
f1 = [g for g in SEGS if g["t"] <= 11]
z = 1.0
for g in reversed(f1):
    g["z"] = z; z = 1.08 if z == 1.0 else 1.0
for g in SEGS:
    if g["t"] >= 12: g["z"] = F2Z[g["t"]]

g0 = 0.0
for g in SEGS:
    g["e"] = min(g["e"], SP[str(g["t"])]["dur"] - 0.03); nf = int((g["e"] - g["s"]) * FPS); g["dur"] = nf / FPS; g["e"] = g["s"] + g["dur"]; g["nf"] = nf; g["g0"] = g0; g0 += g["dur"]
TOTAL = g0

def to_global(t, ts):
    for g in SEGS:
        if g["t"] == t and g["s"] - 1e-6 <= ts <= g["e"] + 1e-6:
            return g["g0"] + ts - g["s"]
    # na lacuna cortada: cola no início do próximo segmento
    for g in SEGS:
        if g["t"] == t and ts < g["s"]:
            return g["g0"]
    gs = [g for g in SEGS if g["t"] == t]
    return gs[-1]["g0"] + gs[-1]["dur"]

def take_range(t):
    gs = [g for g in SEGS if g["t"] == t]
    return gs[0]["g0"], gs[-1]["g0"] + gs[-1]["dur"]

def at(t, word, occ=1):
    n = 0
    for tk in ALIGN[t]:
        if tk["sp"].lower() == word.lower() or tk["disp"].lower() == word.lower():
            n += 1
            if n == occ: return to_global(t, tk["s"])
    raise KeyError((t, word, occ))

def zmap(x, y, zf):
    return ((x - 360) * zf + 360) * 1.5, ((y - 640) * zf + 640) * 1.5

# ---------------- desenho ----------------
EMO_RE = re.compile("([\U0001F000-\U0001FAFF☀-➿⬀-⯿️‍]+)")
EF = ImageFont.truetype(EMO, 109, layout_engine=ImageFont.Layout.RAQM)

def emoji_img(s, size):
    tmp = Image.new("RGBA", (400, 160), (0, 0, 0, 0))
    ImageDraw.Draw(tmp).text((10, 10), s, font=EF, embedded_color=True)
    bb = tmp.getbbox(); tmp = tmp.crop(bb)
    r = size / 109 * 1.05
    return tmp.resize((max(1, int(tmp.width * r)), max(1, int(tmp.height * r))), Image.LANCZOS)

def text_runs(txt, size, color):
    f = ImageFont.truetype(POP, size)
    parts = [p for p in EMO_RE.split(txt) if p]
    ims = []
    for p in parts:
        if EMO_RE.fullmatch(p):
            ims.append(emoji_img(p, size))
        else:
            for q in [x for x in re.split(r"([→←↑↓])", p) if x]:
                ff = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size) if q in "→←↑↓" else f
                w = ff.getlength(q); h = size * 1.35
                im = Image.new("RGBA", (int(w) + 2, int(h)), (0, 0, 0, 0))
                ImageDraw.Draw(im).text((0, h / 2), q, font=ff, fill=color, anchor="lm")
                ims.append(im)
    gap = int(size * 0.12)
    tw = sum(i.width for i in ims) + gap * (len(ims) - 1)
    th = max(i.height for i in ims)
    out = Image.new("RGBA", (tw, th), (0, 0, 0, 0)); x = 0
    for i in ims:
        out.alpha_composite(i, (x, (th - i.height) // 2)); x += i.width + gap
    return out

def shadowed(im, rad=14, off=(0, 6), alpha=110):
    pad = rad * 3
    base = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    sh = Image.new("RGBA", im.size, (0, 0, 0, alpha))
    sh.putalpha(Image.eval(im.getchannel("A"), lambda a: a * alpha // 255))
    base.alpha_composite(sh, (pad + off[0], pad + off[1]))
    base = base.filter(ImageFilter.GaussianBlur(rad))
    base.alpha_composite(im, (pad, pad))
    return base, pad

def pill(txt, size, bg, fg, padx=None, pady=None, radius=None, name=None):
    tx = text_runs(txt, size, fg)
    padx = padx or int(size * 0.55); pady = pady or int(size * 0.22)
    w, h = tx.width + padx * 2, tx.height + pady * 2
    radius = radius if radius is not None else int(h * 0.32)
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(im).rounded_rectangle((0, 0, w - 1, h - 1), radius, fill=bg)
    im.alpha_composite(tx, (padx, pady))
    out, pad = shadowed(im)
    p = f"{ART}/{name}.png"; out.save(p)
    return p, out.size, pad

def card(img, width, name, radius=30, border=8):
    r = width / img.width
    im = img.convert("RGBA").resize((width, int(img.height * r)), Image.LANCZOS)
    w, h = im.width + border * 2, im.height + border * 2
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(out).rounded_rectangle((0, 0, w - 1, h - 1), radius + border, fill=(255, 255, 255, 255))
    m = Image.new("L", im.size, 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, im.width - 1, im.height - 1), radius, fill=255)
    out.paste(im, (border, border), m)
    out2, pad = shadowed(out, rad=18, alpha=130)
    p = f"{ART}/{name}.png"; out2.save(p)
    return p, out2.size, pad

def pill_crop(img, height, name):
    r = height / img.height
    im = img.convert("RGBA").resize((int(img.width * r), height), Image.LANCZOS)
    m = Image.new("L", im.size, 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, im.width - 1, im.height - 1), height // 2, fill=255)
    im.putalpha(m)
    out, pad = shadowed(im)
    p = f"{ART}/{name}.png"; out.save(p)
    return p, out.size, pad

def arrow(name, w=230, h=280, color=(235, 30, 40, 255)):
    im = Image.new("RGBA", (w + 20, h + 20), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    sw = w * 0.42
    pts = [(10 + (w - sw) / 2, 10), (10 + (w + sw) / 2, 10), (10 + (w + sw) / 2, 10 + h * 0.5),
           (10 + w, 10 + h * 0.5), (10 + w / 2, 10 + h), (10, 10 + h * 0.5), (10 + (w - sw) / 2, 10 + h * 0.5)]
    d.polygon(pts, fill=color, outline=(255, 255, 255, 255), width=8)
    out, pad = shadowed(im)
    p = f"{ART}/{name}.png"; out.save(p); return p, out.size, pad

# ---------------- eventos visuais ----------------
EV = []  # dict: path, x, y (canto sup. esq. do conteúdo), s, e, anim
def add(spec, s, e, cx=None, x=None, cy=None, y=None, anim="pop"):
    s = max(0.0, s); e = min(e, TOTAL)
    if e - s < 0.2:
        print(f"aviso: pop-up ignorado (duração {e - s:.2f} s): {spec[0]}"); return
    path, (w, h), pad = spec
    cw, ch = w - 2 * pad, h - 2 * pad
    X = (cx - cw / 2) if cx is not None else x
    Y = (cy - ch / 2) if cy is not None else y
    EV.append({"path": path, "x": int(X - pad), "y": int(Y - pad), "s": round(s, 3), "e": round(e, 3), "anim": anim})

YEL, BLK, WHT, RED, PINK = (255, 214, 10, 255), (15, 15, 15, 255), (255, 255, 255, 255), (229, 40, 45, 255), (255, 79, 154, 255)

def T(t): return take_range(t)

# T1 · gancho
s1, e1 = T(1)
add(pill("Não é preguiça 😮‍💨", 66, YEL, BLK, name="t1_headline"), 0.0, 3.0, cx=540, cy=265)  # headline: sempre 0–3 s do vídeo
ov1 = Image.open(f"{ROOT}/OV1.jpg").crop((0, 200, 768, 1200))
ov2 = Image.open(f"{ROOT}/OV2.jpg").crop((0, 200, 768, 1200))
add(card(ov1, 420, "ov1"), at(1, "assim", 1) - 0.25, e1, x=70, y=790, anim="slide")
add(card(ov2, 420, "ov2"), at(1, "assim", 2) - 0.25, e1, x=574, y=790, anim="slide")

# T2–T3 · sintomas
s2, e2 = T(2); s3, e3 = T(3)
add(pill("CORTISOL ALTO", 84, RED, WHT, name="cortisol"), at(2, "cortisol") - 0.05, at(2, "cabeça") + 0.6, cx=540, cy=1110)
sy = 165; step = 86
add(pill("Cabeça que não desliga", 46, PINK, WHT, name="sym1"), at(2, "cabeça") - 0.05, e3, x=40, y=sy, anim="slide")
add(pill("Acordar já cansada", 46, PINK, WHT, name="sym2"), at(3, "acordar") - 0.05, e3, x=40, y=sy + step, anim="slide")
add(pill("Pavio curto e ombro tenso", 46, PINK, WHT, name="sym3"), at(3, "pavio") - 0.05, e3, x=40, y=sy + step * 2, anim="slide")
add(pill("Esquecer o que ia falar", 46, PINK, WHT, name="sym4"), at(3, "esquecer") - 0.05, e3, x=40, y=sy + step * 3, anim="slide")
add(pill("MAGNÉSIO BAIXO", 84, RED, WHT, name="magbaixo"), at(3, "magnésio") - 0.05, e3, cx=540, cy=1110)

# T6 · explicação
s6, e6 = T(6)
add(pill("Estresse ⬆️ → gasta magnésio", 54, WHT, BLK, name="t6card"), at(6, "gasta") - 0.1, at(6, "quando", 2) - 0.05, cx=540, cy=1120)
add(pill("Magnésio ⬇️ = Estresse ⬆️", 60, YEL, BLK, name="tag1"), at(6, "quando", 2) - 0.05, e6, cx=540, cy=1120)

# T7 · OV3
ov3 = Image.open(f"{ROOT}/OV3.jpg").crop((0, 470, 768, 1046))
add(card(ov3, 700, "ov3"), at(7, "dormir", 1) - 0.2, at(7, "maioria") - 0.1, cx=540, cy=1065, anim="slide")

# T8 · etiqueta de novo
s8, e8 = T(8)
add(pill("Magnésio ⬇️ = Estresse ⬆️", 60, YEL, BLK, name="tag2"), at(8, "magnésio") - 0.05, e8, cx=540, cy=1120)

# T9 · empilhando
s9, e9 = T(9)
add(pill("Cansaço", 56, PINK, WHT, name="st1"), at(9, "cansaço") - 0.05, e9, cx=540, cy=1270)
add(pill("Sono ruim", 56, PINK, WHT, name="st2"), at(9, "sono") - 0.05, e9, cx=540, cy=1160)
add(pill("Pavio curto", 56, PINK, WHT, name="st3"), at(9, "acumulando") - 0.05, e9, cx=540, cy=1050)

# T10 · os 4 tipos
s10, e10 = T(10)
for i, (w, nm) in enumerate([("óxido", "Óxido"), ("malato", "Malato"), ("quelato", "Quelato"), ("cloreto", "Cloreto")]):
    cx = 330 if i % 2 == 0 else 750; cy = 1060 if i < 2 else 1185
    add(pill(nm, 58, WHT, RED, name=f"tipo{i}"), at(10, w) - 0.05, e10, cx=cx, cy=cy)

# T11 · 4 potes → 1 fórmula
s11, e11 = T(11)
add(pill("4 potes ❌", 62, WHT, BLK, name="potes"), at(11, "4", 1) - 0.05, e11, cx=540, cy=1050)
add(pill("1 fórmula só ✅", 62, YEL, BLK, name="formula"), at(11, "fórmula") - 0.05, e11, cx=540, cy=1180)

# T12 · revelação + PiP da página real
s12, e12 = T(12)
page = Image.open(f"{ROOT}/pagina.jpg"); k = 1185 / 920
def pc(x0, y0, x1, y1): return page.crop(tuple(int(v * k) for v in (x0, y0, x1, y1)))
add(card(pc(80, 222, 825, 1135), 360, "pip"), at(12, "esse") - 0.05, e12, x=34, y=170, anim="slide")
add(pill("2 cápsulas/dia · 30 dias", 54, YEL, BLK, name="dose"), at(12, "2") - 0.05, e12, cx=540, cy=1290)

# T13 · prova social (prints)
s13, e13 = T(13)
add(card(pc(15, 1398, 790, 1552), 980, "rating", radius=22, border=6), at(13, "130 mil") - 0.15, e13, cx=540, cy=1040, anim="slide")
add(pill_crop(pc(38, 294, 470, 344), 74, "pct92"), at(13, "92%") - 0.1, e13, cx=540, cy=1230)

# T14 · oferta do dia
s14, e14 = T(14)
add(card(pc(0, 1140, 920, 1288), 1000, "price", radius=22, border=6), at(14, "liquidação") - 0.15, e14, cx=540, cy=1150, anim="slide")

# T15 · seta pro carrinho
s15, e15 = T(15)
add(arrow("seta"), at(15, "aqui") - 0.1, e15, cx=540, cy=1240, anim="bounce")

# T16 · setinha + aviso
s16, e16 = T(16)
add((emoji_spec := None) or pill("👇", 140, (0, 0, 0, 0), WHT, padx=4, pady=4, name="dedo"), s16 + 0.2, e16, cx=540, cy=1250, anim="bounce")
add(pill("resultados podem variar", 28, (0, 0, 0, 110), WHT, name="aviso"), s16, e16, cx=540, cy=1385, anim="fade")

# ---------------- legendas (ASS) ----------------
FUNC = {"a", "o", "e", "de", "da", "do", "das", "dos", "que", "com", "no", "na", "um", "uma", "pra", "por", "se", "te", "em", "os", "as", "é", "só", "mais", "você"}
def ass_time(x):
    x = max(0, x); h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60
    return f"{h}:{m:02d}:{s:05.2f}"

def burn_window(t):
    if t not in BURN: return None
    (bx, by, bw, bh), (a, b) = BURN[t]
    g = [g for g in SEGS if g["t"] == t][0]
    _, cy = zmap(bx + bw / 2, by + bh / 2, g["z"])
    return to_global(t, a), to_global(t, b), cy

NOSPLIT = {("sono", "ruim"), ("ombro", "tenso"), ("vez", "mais"), ("pavio", "curto"), ("não", "desliga"),
           ("não", "sabe"), ("ia", "falar"), ("cada", "vez"), ("coisa", "diferente"), ("loja", "oficial"),
           ("carrinho", "laranja"), ("medida", "certa"), ("130 mil", "vendidos"), ("fórmula", "só"), ("número", "1"),
           ("já", "cansada"), ("mais", "barato"), ("cada", "um")}
def split_phrase(ph):
    n = len(ph); best = [(0, [])] + [(1e9, None)] * n
    for i in range(1, n + 1):
        for j in range(max(0, i - 5), i):
            words = ph[j:i]; chars = len(" ".join(w["disp"] for w in words))
            c = ((chars - 13) / 6) ** 2 + (6 if chars > 24 else 0)
            if i < n:
                last = ph[i - 1]["disp"].lower(); nxt = ph[i]["disp"].lower()
                if last in FUNC: c += 3
                if (last, nxt) in NOSPLIT: c += 8
            v = best[j][0] + c
            if v < best[i][0]: best[i] = (v, best[j][1] + [(j, i)])
    return [ph[a:b] for a, b in best[n][1]]

chunks = []
for t in sorted(TEXT):
    toks = ALIGN[t]; ph = []
    for i, tk in enumerate(toks):
        ph.append(tk)
        nxt = toks[i + 1] if i + 1 < len(toks) else None
        if tk["punct"] or nxt is None or (nxt["s"] - tk["e"] > 0.2):
            for c in split_phrase(ph): chunks.append((t, c))
            ph = []

lines = []
evs = []
for idx, (t, cur) in enumerate(chunks):
    s = to_global(t, cur[0]["s"]) - 0.04
    e = to_global(t, cur[-1]["e"]) + 0.08
    evs.append([t, s, e, cur])
for i in range(len(evs) - 1):
    if evs[i + 1][1] - evs[i][2] < 0.35: evs[i][2] = evs[i + 1][1]
    else: evs[i][2] += 0.15
for t, s, e, cur in evs:
    parts = []
    for c in cur:
        d = c["disp"]
        if d.lower() in HL: parts.append("{\\c&H0AD6FF&}" + d + "{\\c&HFFFFFF&}")
        else: parts.append(d)
    y = 1495
    bw = burn_window(t)
    if bw and s < bw[1] and e > bw[0]: y = bw[2]
    txt = " ".join(parts)
    lines.append(f"Dialogue: 0,{ass_time(s)},{ass_time(e)},Cap,,0,0,0,,{{\\pos(540,{int(y)})\\fscx82\\fscy82\\t(0,90,\\fscx104\\fscy104)\\t(90,150,\\fscx100\\fscy100)}}{txt}")

ASS = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Poppins,84,&H00FFFFFF,&H00FFFFFF,&H00000000,&H90000000,-1,0,0,0,100,100,0,0,1,7,3,5,60,60,0,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
""" + "\n".join(lines) + "\n"
def rrect(w, h, r):
    return (f"m {r} 0 l {w-r} 0 b {w} 0 {w} 0 {w} {r} l {w} {h-r} b {w} {h} {w} {h} {w-r} {h} "
            f"l {r} {h} b 0 {h} 0 {h} 0 {h-r} l 0 {r} b 0 0 0 0 {r} 0")
bars = []
for t, ((bx, by, bw, bh), (a, b_)) in BURN.items():
    zf = [g for g in SEGS if g["t"] == t][0]["z"]
    x0, y0 = zmap(bx - 30, by - 22, zf); x1, y1 = zmap(bx + bw + 30, by + bh + 22, zf)
    cx = (x0 + x1) / 2; w = max(x1 - x0, 700); x0 = cx - w / 2; h = y1 - y0
    gs, ge = to_global(t, a), to_global(t, b_)
    bars.append(f"Dialogue: 0,{ass_time(gs)},{ass_time(ge)},Cap,,0,0,0,,{{\\an7\\pos({int(x0)},{int(y0)})\\bord0\\shad0\\1c&H000000&\\1a&H68&\\blur3\\fad(120,120)\\p1}}{rrect(int(w), int(h), int(min(h/2, 46)))}{{\\p0}}")
ASS = ASS.replace("[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n",
                  "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n" + "\n".join(bars) + "\n")
ASS = "\n".join((l.replace("Dialogue: 0,", "Dialogue: 1,", 1) if l.startswith("Dialogue") and "\\p1" not in l else l) for l in ASS.split("\n"))
open(f"{OUT}/legendas.ass", "w").write(ASS)

# ---------------- máscaras da cobertura ----------------
for t, ((bx, by, bw, bh), _) in BURN.items():
    pad = 26
    cw, ch = bw + pad * 2, bh + pad * 2
    m = Image.new("L", (cw, ch), 0)
    ImageDraw.Draw(m).rounded_rectangle((10, 10, cw - 11, ch - 11), 22, fill=255)
    m = m.filter(ImageFilter.GaussianBlur(7))
    m.save(f"{ART}/mask_T{t:02d}.png")

json.dump({"SEGS": SEGS, "EV": EV, "TOTAL": TOTAL, "BURN": {str(k): v for k, v in BURN.items()}}, open(f"{OUT}/plan.json", "w"), indent=1)
print("segmentos", len(SEGS), "total", round(TOTAL, 2), "s; eventos", len(EV), "; legendas", len(lines))
for g in SEGS: print(f"T{g['t']:02d} {g['s']:.2f}-{g['e']:.2f} z={g['z']} g0={g['g0']:.2f}")
