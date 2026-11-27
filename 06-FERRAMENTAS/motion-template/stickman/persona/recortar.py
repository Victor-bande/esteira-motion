"""Recorta as poses das folhas do Nano Banana (fundo verde, grade 4x3) em PNG transparente · v1 · 27/11/2026
uso: python3 recortar.py   (lê folhas/folha-*.jpg, grava poses/{pose}{_variante}.png)"""
import numpy as np, os, glob
from scipy import ndimage
from PIL import Image
NOMES = ['acenando', 'apontando', 'apontando_baixo', 'pensando', 'cansado', 'triste', 'surpreso', 'comemorando', 'dor_barriga', 'bravo', 'apresentando', 'joinha']
os.makedirs('poses', exist_ok=True)
for f in sorted(glob.glob('folhas/folha-*.jpg')):
    var = os.path.basename(f)[6:-4]
    im = np.asarray(Image.open(f).convert('RGB')).astype(np.float32); H, W, _ = im.shape
    r, g, b = im[..., 0], im[..., 1], im[..., 2]
    verde = g - np.maximum(r, b)                                   # quanto o pixel é "verde de fundo"
    alfa = np.clip(1 - (verde - 35) / 70, 0, 1)
    g2 = np.where(verde > 0, np.maximum(r, b) + (g - np.maximum(r, b)) * 0.15, g)  # tira o reflexo verde da borda
    rgba = np.dstack([r, g2, b, alfa * 255]).clip(0, 255).astype(np.uint8)
    lab, n = ndimage.label(alfa > .08, structure=np.ones((3, 3)))     # peças conectadas (o boneco inteiro, mesmo passando da grade)
    cms = ndimage.center_of_mass(alfa > .08, lab, range(1, n + 1)); tam = ndimage.sum(alfa > .08, lab, range(1, n + 1))
    for k, nome in enumerate(NOMES):
        c, l = k % 4, k // 4
        x0, x1, y0, y1 = c * W / 4, (c + 1) * W / 4, l * H / 3, (l + 1) * H / 3
        sub = lab[int(y0):int(y1), int(x0):int(x1)]; cont = np.bincount(sub.ravel(), minlength=n + 1); cont[0] = 0
        ids = [int(cont.argmax())] + [i + 1 for i, (cy, cx) in enumerate(cms) if x0 <= cx < x1 and y0 <= cy < y1 and 30 < tam[i] and cont[i + 1] > .6 * tam[i]]
        m = np.isin(lab, ids)
        jan = np.zeros_like(m); mx = .2 * W / 4; jan[int(max(0, y0 - 20)):int(min(H, y1 + 20)), int(max(0, x0 - mx)):int(min(W, x1 + mx))] = True
        if (np.ptp(np.where(m)[1]) if m.any() else 0) > 1.35 * W / 4: m &= jan   # encostou no vizinho: corta na janela da célula
        l2, n2 = ndimage.label(m, structure=np.ones((3, 3)))      # depois do corte: fica o boneco, saem lascas do vizinho
        if n2 > 1:
            t2 = ndimage.sum(m, l2, range(1, n2 + 1)); m = np.isin(l2, [i + 1 for i, v in enumerate(t2) if v > .12 * t2.max()])
        ys, xs = np.where(m)
        cel = rgba.copy(); cel[..., 3] = np.where(m, cel[..., 3], 0)
        cel = cel[max(0, ys.min() - 4):ys.max() + 5, max(0, xs.min() - 4):xs.max() + 5]
        img = Image.fromarray(cel, 'RGBA'); img = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)
        img.save(f'poses/{nome}_{var}.png')
print(len(glob.glob('poses/*.png')), 'poses')
