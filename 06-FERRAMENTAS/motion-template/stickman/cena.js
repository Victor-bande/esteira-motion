// MOTOR STICKMAN · v1 · 27/11/2026 · peças + cenários + animação. Fixo: cada vídeo só escreve cenas.js com estas funções.
// Zona útil 1080×1920: x120–960 (y240–840) · x120–780 (y840–1240). Legenda (pílula) no topo y262–352. Palco y380–1240.
// Toda peça aceita o = { w:'palavra que entra', o:'palavra que sai', d:atraso, a:'pop|sobe|desce|esq|dir|gira|traco|fade', som:'pop|ding|whoosh|nao' }.
(function () {
let _bi = 0; const BON = [];
const A = (o) => `data-a="${o.a || 'pop'}" data-w="${o.w || ''}" ${o.o ? `data-o="${o.o}"` : ''} ${o.d ? `data-d="${o.d}"` : ''} ${o.som ? `data-som="${o.som}"` : ''}`;
const FOTOS = () => window.FOTOS || 'fotos/';
// ---------- cenários (fundo inteiro; o chão fica em y≈1180) ----------
const vin = `<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%,rgba(0,0,0,0) 55%,rgba(0,0,0,.28) 100%)"></div>`;
const grao = `<svg style="position:absolute;inset:0;opacity:.08" width="1080" height="1920"><filter id="gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2"/></filter><rect width="1080" height="1920" filter="url(#gr)"/></svg>`;
const S = (corpo, ceu) => `<svg style="position:absolute;inset:0;filter:blur(1.2px)" width="1080" height="1920" viewBox="0 0 1080 1920"><rect width="1080" height="1920" fill="${ceu}"/>${corpo}</svg>`;
const CEN = {
  rua: () => S(`<rect y="1160" width="1080" height="760" fill="#C9C2B4"/><rect y="1160" width="1080" height="26" fill="#ADA595"/>
    <g opacity=".85"><rect x="40" y="520" width="230" height="660" fill="#E8B99A"/><rect x="300" y="380" width="260" height="800" fill="#B9C8D8"/><rect x="590" y="600" width="200" height="580" fill="#D9C7A6"/><rect x="820" y="460" width="240" height="720" fill="#C3B3CF"/></g>
    ${[60, 120, 330, 400, 470, 620, 680, 850, 920, 990].map((x, i) => `<rect x="${x}" y="${640 + (i % 3) * 120}" width="44" height="64" rx="6" fill="#FFF6DA" opacity=".9"/>`).join('')}
    <circle cx="880" cy="1000" r="110" fill="#7DB36B"/><rect x="866" y="1040" width="28" height="130" fill="#7A5A3E"/>`, '#BFE3F5'),
  cozinha: () => S(`<rect y="0" width="1080" height="1180" fill="#F3E7D3"/>${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${560 + i * 50}" x2="1080" y2="${560 + i * 50}" stroke="#E6D6BC" stroke-width="3"/>`).join('')}
    <rect x="60" y="330" width="960" height="210" rx="16" fill="#9CC5B8"/><line x1="380" y1="340" x2="380" y2="530" stroke="#86B0A3" stroke-width="5"/><line x1="700" y1="340" x2="700" y2="530" stroke="#86B0A3" stroke-width="5"/>
    <rect x="0" y="1000" width="1080" height="40" fill="#D8C7A8"/><rect x="0" y="1040" width="1080" height="140" fill="#9CC5B8"/><rect y="1180" width="1080" height="740" fill="#CDB89A"/>`, '#F3E7D3'),
  sala: () => S(`<rect width="1080" height="1180" fill="#E9E2F2"/><rect x="620" y="360" width="320" height="380" rx="14" fill="#CFE8F6" stroke="#fff" stroke-width="16"/><line x1="780" y1="360" x2="780" y2="740" stroke="#fff" stroke-width="10"/>
    <rect x="120" y="420" width="220" height="160" rx="8" fill="#F6D7A7" stroke="#C9A97A" stroke-width="10"/><rect x="60" y="900" width="560" height="200" rx="40" fill="#8E7CC3"/><rect x="40" y="860" width="120" height="240" rx="40" fill="#7A69AE"/><rect x="520" y="860" width="120" height="240" rx="40" fill="#7A69AE"/>
    <rect y="1180" width="1080" height="740" fill="#C8B7A0"/>`, '#E9E2F2'),
  quarto: () => S(`<rect width="1080" height="1180" fill="#2E3561"/><rect x="600" y="340" width="300" height="320" rx="12" fill="#1B2140" stroke="#4A5288" stroke-width="14"/><circle cx="800" cy="440" r="46" fill="#FFF3B0"/>
    <rect x="80" y="880" width="680" height="200" rx="26" fill="#6F7CC7"/><rect x="80" y="820" width="140" height="120" rx="30" fill="#F2F2F7"/><rect x="60" y="760" width="40" height="420" rx="10" fill="#4A5288"/>
    <rect y="1180" width="1080" height="740" fill="#3C4373"/>`, '#2E3561'),
  academia: () => S(`<rect width="1080" height="1180" fill="#DDE6EE"/><rect x="80" y="320" width="920" height="460" rx="10" fill="#C7D6E3" stroke="#AFC2D2" stroke-width="10"/>
    <rect x="140" y="860" width="800" height="20" rx="10" fill="#555"/><rect x="120" y="820" width="40" height="100" rx="8" fill="#333"/><rect x="920" y="820" width="40" height="100" rx="8" fill="#333"/>
    <rect y="1180" width="1080" height="740" fill="#7A8794"/>`, '#DDE6EE'),
  consultorio: () => S(`<rect width="1080" height="1180" fill="#E3F2EF"/><rect x="120" y="380" width="300" height="220" rx="10" fill="#fff"/><path d="M230 430 h80 M270 390 v80" stroke="#E8546A" stroke-width="26"/>
    <rect x="560" y="860" width="420" height="80" rx="20" fill="#9FD3C7"/><rect y="1180" width="1080" height="740" fill="#B9D7D0"/>`, '#E3F2EF'),
  // fundos de explicação (sem cenário): raios coloridos (REF-S01) e "por dentro do corpo"
  raios: (c1 = '#7B5CFF', c2 = '#6A4BEF') => `<div style="position:absolute;inset:0;background:${c1}"></div><svg style="position:absolute;inset:0" width="1080" height="1920">${Array.from({ length: 24 }, (_, i) => { const a = i * Math.PI / 12, b = a + Math.PI / 24; return `<path d="M540 800 L${540 + Math.cos(a) * 2200} ${800 + Math.sin(a) * 2200} L${540 + Math.cos(b) * 2200} ${800 + Math.sin(b) * 2200} Z" fill="${c2}" opacity=".55"/>`; }).join('')}</svg><div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,rgba(255,255,255,.28),rgba(255,255,255,0) 45%)"></div>`,
  pontos: (c1 = '#1F9D6B') => `<div style="position:absolute;inset:0;background:${c1};background-image:radial-gradient(rgba(255,255,255,.14) 3px,transparent 3.5px);background-size:34px 34px"></div>`,
  dentro: () => S(`<rect width="1080" height="1920" fill="#F7B9C4"/>${Array.from({ length: 30 }, (_, i) => `<ellipse cx="${(i * 173) % 1080}" cy="${300 + (i * 97) % 1500}" rx="${60 + (i % 5) * 18}" ry="${30 + (i % 4) * 10}" fill="#F29BAA" opacity=".6"/>`).join('')}`, '#F7B9C4'),
  liso: (c = '#FBF6EE') => `<div style="position:absolute;inset:0;background:${c}"></div>`,
  // pacote de cenários pintados (feito UMA vez no Nano Banana; ver 01-BASE/STICKMAN/PROMPTS-CENARIOS.md)
  img: (nome) => `<img src="stickman/cenarios/${nome}.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`,
};
function fundo(nome, ...args) { const f = CEN[nome] || CEN.liso; return `<div class="fundo">${f(...args)}${nome === 'raios' || nome === 'pontos' || nome === 'liso' ? '' : vin + grao}</div>`; }
// ---------- peças ----------
const ilu = (nome, x, y, w, o = {}) => `<img class="peca ilu" ${A(o)} ${o.vira ? 'data-vira="1"' : ''} src="ilustras/${nome}.png" style="left:${x}px;top:${y}px;width:${w}px">`;
const foto = (f, x, y, w, h, o = {}) => `<div class="peca" ${A({ a: 'sobe', som: 'ding', ...o })} style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><img class="foto" src="${FOTOS()}${f}" style="width:100%;height:100%;object-fit:${o.fit || 'contain'}">${o.brilho !== false ? '<span class="brilho" style="left:-26px;top:-30px">✦</span><span class="brilho" style="right:-22px;bottom:-26px">✦</span>' : ''}</div>`;
const titulo = (t, o = {}) => `<div class="peca titulo" ${A({ a: 'desce', ...o })} style="${o.top ? 'top:' + o.top + 'px;' : ''}${o.s ? 'font-size:' + o.s + 'px;' : ''}">${t}</div>`;
const grande = (t, x, y, s, o = {}) => `<div class="peca grande" ${A({ a: 'gira', ...o })} style="left:${x}px;top:${y}px;font-size:${s}px;${o.cor ? 'color:' + o.cor : ''}">${t}</div>`;
const etq = (t, x, y, o = {}) => `<div class="peca etq ${o.tipo || ''}" ${A(o)} style="left:${x}px;top:${y}px;${o.s ? 'font-size:' + o.s + 'px;' : ''}">${o.tipo === 'nao' ? '<i>✕</i>' : o.tipo === 'sim' ? '<i>✓</i>' : ''}${t}</div>`;
const preco = (t, x, y, o = {}) => `<div class="peca preco" ${A({ a: 'gira', ...o })} style="left:${x}px;top:${y}px">${t}</div>`;
const xis = (x, y, s, o = {}) => `<svg class="peca" ${A({ a: 'gira', som: 'nao', ...o })} style="left:${x}px;top:${y}px;z-index:16" width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M14 14 L86 86 M86 14 L14 86" stroke="#fff" stroke-width="26" stroke-linecap="round"/><path d="M14 14 L86 86 M86 14 L14 86" stroke="#E8384F" stroke-width="15" stroke-linecap="round"/></svg>`;
const ok = (x, y, s, o = {}) => `<svg class="peca" ${A({ a: 'gira', som: 'ding', ...o })} style="left:${x}px;top:${y}px;z-index:16" width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M12 54 L40 80 L90 20" stroke="#fff" stroke-width="28" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 54 L40 80 L90 20" stroke="#25C26E" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const svgp = (x, y, w, h, vb, corpo, o = {}) => `<svg class="peca" ${A(o)} style="left:${x}px;top:${y}px;z-index:${o.z || 7};overflow:visible" width="${w}" height="${h}" viewBox="${vb}">${corpo}</svg>`;
const seta = (x1, y1, x2, y2, c = .25, o = {}) => { const mx = (x1 + x2) / 2 - (y2 - y1) * c, my = (y1 + y2) / 2 + (x2 - x1) * c, ang = Math.atan2(y2 - my, x2 - mx), L = 42, cor = o.cor || '#E8384F';
  return `<svg class="peca" ${A({ a: 'traco', som: 'whoosh', ...o })} style="left:0;top:0;z-index:11" width="1080" height="1920"><path class="tr" d="M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}" stroke="${cor}" stroke-width="16" fill="none" stroke-linecap="round"/><path class="ponta" d="M${x2 + L * Math.cos(ang + 2.6)} ${y2 + L * Math.sin(ang + 2.6)} L${x2} ${y2} L${x2 + L * Math.cos(ang - 2.6)} ${y2 + L * Math.sin(ang - 2.6)}" stroke="${cor}" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };
const balao = (x, y, w, dentro, o = {}) => `<div class="peca balao" ${A(o)} style="left:${x}px;top:${y}px;width:${w}px;height:${w * .78}px"><svg width="${w}" height="${w * .78}" viewBox="0 0 200 156" style="position:absolute;inset:0;overflow:visible"><path d="M40 120 Q8 118 14 88 Q-6 60 26 44 Q30 10 70 16 Q96 -6 128 12 Q170 6 176 42 Q206 58 190 90 Q196 122 160 124 Q140 140 108 130 Q76 142 40 120 Z" fill="#fff" stroke="#111" stroke-width="5"/><circle cx="${o.cauda === 'd' ? 168 : 34}" cy="146" r="9" fill="#fff" stroke="#111" stroke-width="4"/><circle cx="${o.cauda === 'd' ? 184 : 18}" cy="166" r="5" fill="#fff" stroke="#111" stroke-width="3"/></svg><div class="dentro">${dentro}</div></div>`;
const medidor = (x, y, w, v0, v1, rot, o = {}) => svgp(x, y, w, w * .8, '0 0 200 160', `<path d="M20 110 A80 80 0 0 1 180 110" stroke="#fff" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M20 110 A80 80 0 0 1 60 41" stroke="#E8384F" stroke-width="22" fill="none" stroke-linecap="round"/><path d="M60 41 A80 80 0 0 1 140 41" stroke="#FFC53D" stroke-width="22" fill="none"/><path d="M140 41 A80 80 0 0 1 180 110" stroke="#25C26E" stroke-width="22" fill="none" stroke-linecap="round"/>
  <g class="agulha" data-v0="${v0}" data-v1="${v1}" style="transform-origin:100px 110px"><path d="M100 110 L100 40" stroke="#111" stroke-width="9" stroke-linecap="round"/></g><circle cx="100" cy="110" r="13" fill="#111"/><text x="100" y="152" text-anchor="middle" font-family="Lilita One" font-size="26" fill="#111" stroke="#fff" stroke-width="6" paint-order="stroke">${rot}</text>`, o);
const barra = (x, y, w, pct, cor, rot, o = {}) => svgp(x, y, w, 70, `0 0 ${w} 70`, `<rect x="4" y="4" width="${w - 8}" height="56" rx="28" fill="#fff" stroke="#111" stroke-width="7"/><rect class="enche" data-p="${pct}" x="13" y="13" width="0" height="38" rx="19" fill="${cor}"/>${rot ? `<text x="${w / 2}" y="44" text-anchor="middle" font-family="Lilita One" font-size="30" fill="#111">${rot}</text>` : ''}`, o);
const colunas = (x, y, itens, o = {}) => svgp(x, y, 640, 520, '0 0 640 520', itens.map((it, i) => { const cx = itens.length > 1 ? 110 + i * (420 / (itens.length - 1)) : 320, h = 360 * it[1];
  return `<rect class="cresce" data-h="${h}" x="${cx - 60}" y="${420 - h}" width="120" height="${h}" rx="14" fill="${it[2] || '#FF8A3D'}" stroke="#111" stroke-width="6"/><text x="${cx}" y="470" text-anchor="middle" font-family="Lilita One" font-size="44" fill="#111" stroke="#fff" stroke-width="8" paint-order="stroke">${it[0]}</text><text class="val" x="${cx}" y="${400 - h}" text-anchor="middle" font-family="Lilita One" font-size="46" fill="#111" stroke="#fff" stroke-width="8" paint-order="stroke">${it[3] || ''}</text>`; }).join(''), o);
const lista = (x, y, itens, o = {}) => itens.map((t, i) => `<div class="peca item" ${A({ a: 'esq', ...o, w: Array.isArray(o.ws) ? o.ws[i] : o.w, d: (o.d || 0) + (Array.isArray(o.ws) ? 0 : i * .35) })} style="left:${x}px;top:${y + i * 118}px"><b>${i + 1}</b><span>${t}</span></div>`).join('');
const calendario = (x, y, w, marcados, o = {}) => svgp(x, y, w, w * .95, '0 0 200 190', `<rect x="6" y="20" width="188" height="164" rx="18" fill="#fff" stroke="#111" stroke-width="6"/><rect x="6" y="20" width="188" height="40" rx="18" fill="#E8384F" stroke="#111" stroke-width="6"/><rect x="50" y="6" width="12" height="30" rx="6" fill="#111"/><rect x="138" y="6" width="12" height="30" rx="6" fill="#111"/>
  ${Array.from({ length: 30 }, (_, i) => { const cx = 24 + (i % 7) * 25.5, cy = 76 + Math.floor(i / 7) * 24; return `<g class="dia" data-i="${i}" data-n="${marcados}"><rect x="${cx - 9}" y="${cy - 9}" width="18" height="18" rx="4" fill="#F1EEF7"/><text class="mk" x="${cx}" y="${cy + 7}" text-anchor="middle" font-size="18" font-family="Lilita One" fill="${o.cor || '#25C26E'}" opacity="0">${o.marca || '✓'}</text></g>`; }).join('')}`, o);
const copo = (x, y, w, cor, o = {}) => svgp(x, y, w, w * 1.25, '0 0 200 250', `<path d="M24 14 L176 14 L156 236 L44 236 Z" fill="rgba(220,240,255,.6)" stroke="#111" stroke-width="7"/><path d="M34 70 L166 70 L156 228 L44 228 Z" fill="${cor || '#FF8FB5'}"/>${o.grumos ? [[70, 200], [110, 214], [140, 196], [90, 170], [128, 160]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="${11 + (a % 7)}" fill="#EDE6D6" stroke="#111" stroke-width="3"/>`).join('') : ''}<ellipse cx="100" cy="70" rx="66" ry="8" fill="rgba(255,255,255,.5)"/>`, o);
const bateria = (x, y, w, nivel, o = {}) => svgp(x, y, w, w * .55, '0 0 200 110', `<rect x="6" y="10" width="170" height="90" rx="16" fill="#fff" stroke="#111" stroke-width="7"/><rect x="176" y="38" width="18" height="34" rx="6" fill="#111"/><rect class="enche" data-p="${nivel}" data-max="150" x="16" y="20" width="0" height="70" rx="10" fill="${nivel < .3 ? '#E8384F' : nivel < .6 ? '#FFC53D' : '#25C26E'}"/>`, o);
const botaoCarrinho = (x, y, t, o = {}) => `<div class="peca carrinho" ${A({ a: 'sobe', som: 'ding', ...o })} style="left:${x}px;top:${y}px"><span>🛒</span>${t || 'TOCA NO CARRINHO'}</div>`;
const card = (x, y, w, dentro, o = {}) => `<div class="peca card" ${A(o)} style="left:${x}px;top:${y}px;width:${w}px">${dentro}</div>`;
// ---------- boneco (registrado; desenhado a cada quadro pelo motor) ----------
// b = { x, y (pés), w, poses: [[palavra|null, pose, expr], ...], ciclo, mover:[x0,x1,'palavraFim'], acc:'laco', vira, olhar, segura:'ilustra' }
const boneco = (b, o = {}) => { const i = _bi++; BON[i] = b; return `<div class="peca boneco" ${A({ a: 'fade', ...o })} data-bi="${i}" style="left:0;top:0"></div>`; };
window.CN = { fundo, ilu, foto, titulo, grande, etq, preco, xis, ok, svgp, seta, balao, medidor, barra, colunas, lista, calendario, copo, bateria, botaoCarrinho, card, boneco, CEN };
Object.assign(window, window.CN);
// ---------- motor ----------
const Q = new URLSearchParams(location.search);
let plano = [], palavras = [], blocos = [], atual = -1, EV = [];
const limpa = w => w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[.,:;!?…"]/g, '');
const cl = x => Math.min(Math.max(x, 0), 1), ease = x => 1 - Math.pow(1 - cl(x), 3), easeIO = x => { x = cl(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const back = x => { x = cl(x); const c = 2.0; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
window.setup = (tempos) => {
  palavras = tempos.flatMap(f => f.palavras.map(p => ({ ...p, w: p.p.replace(/[.,:;!?"]/g, '') })));
  let b = []; palavras.forEach((p, k) => { b.push(k); if (b.length === 3 || /[.,:;!?]$/.test(p.p)) { blocos.push(b); b = []; } }); if (b.length) blocos.push(b);
  palavras.forEach((p, k) => p.bloco = blocos.findIndex(bl => bl.includes(k)));
  plano = ROTEIRO.map(([c, idx]) => ({ c, ini: tempos[idx[0]].inicio, fim: tempos[idx[idx.length - 1]].fim, ws: idx.flatMap(i => tempos[i].palavras) }));
  plano[0].ini = 0; for (let i = 0; i < plano.length - 1; i++) plano[i].fim = plano[i + 1].ini;
  plano[plano.length - 1].fim += 1.2;
  // eventos de som (entradas de peça) para a trilha de efeitos
  plano.forEach((p, k) => { EV.push({ t: p.ini, s: 'whoosh' }); const tmp = document.createElement('div'); _bi = 0; tmp.innerHTML = CENAS[p.c](); tmp.querySelectorAll('[data-a]').forEach(el => {
    if (el.dataset.som === 'nao' && el.dataset.a !== 'gira') return; const ti = el.dataset.w ? hitT(p, el.dataset.w) : null; if (ti == null && el.dataset.w) return;
    EV.push({ t: (ti ?? p.ini) + (+el.dataset.d || 0), s: el.dataset.som || (el.classList.contains('fundo') ? '' : 'pop') }); }); });
  return plano[plano.length - 1].fim;
};
window.eventos = () => { const o = []; EV.filter(e => e.s).sort((a, b) => a.t - b.t).forEach(e => { if (!o.length || e.t - o[o.length - 1].t > .22) o.push(e); }); return o; };
const hitT = (p, w, desde) => { const alvo = limpa(w); const h = p.ws.find(q => q.inicio >= (desde || 0) - 1e-3 && limpa(q.p).startsWith(alvo)); return h ? h.inicio : null; };
window.render = async (t) => {
  const k = plano.findIndex(p => t >= p.ini && t < p.fim); const i = k < 0 ? plano.length - 1 : k; const p = plano[i];
  const cena = document.getElementById('cena'), leg = document.getElementById('leg');
  if (i !== atual) {
    atual = i; _bi = 0; BON.length = 0; cena.innerHTML = CENAS[p.c]();
    await Promise.all([...cena.querySelectorAll('img')].map(im => im.decode().catch(() => { })));
    cena.querySelectorAll('[data-a]').forEach((el, n) => {
      const ti = el.dataset.w ? hitT(p, el.dataset.w) : null; el.dataset.t = (ti ?? p.ini) + (+el.dataset.d || 0) - 0.06;
      el.dataset.to = el.dataset.o ? (hitT(p, el.dataset.o, +el.dataset.t) ?? 1e9) - 0.05 : 1e9; el.dataset.n = n;
      const tr = el.querySelector('.tr'); if (tr) { const L = tr.getTotalLength(); tr.style.strokeDasharray = L; el.dataset.L = L; }
    });
    BON.forEach(b => { b._k = (b.poses || [[null, 'em_pe', 'neutro']]).map(([w, pose, expr]) => ({ t: w ? (hitT(p, w) ?? p.ini) : p.ini, pose, expr })); if (b.mover && b.mover[2]) b._fim = hitT(p, b.mover[2]); });
  }
  const loc = t - p.ini, dur = p.fim - p.ini;
  cena.style.transform = `scale(${1.0 + 0.04 * ease(loc / Math.max(dur, 1)) + 0.06 * (1 - ease(loc / 0.3))})`;
  cena.querySelectorAll('[data-a]').forEach(el => {
    const x = (t - +el.dataset.t) / 0.36, sai = cl((t - +el.dataset.to) / 0.2), a = el.dataset.a, n = +el.dataset.n;
    const bob = x > 1 && !el.classList.contains('boneco') && !el.classList.contains('fundo') ? Math.sin((t + n) * 2.3) * 5 : 0;
    let tf = '';
    if (a === 'pop') tf = `translateY(${bob}px) scale(${Math.max(back(x), .001) * (1 - sai)})`;
    else if (a === 'sobe') tf = `translateY(${(1 - ease(x)) * 260 + bob}px)`;
    else if (a === 'desce') tf = `translateY(${-(1 - ease(x)) * 180 + bob}px)`;
    else if (a === 'esq') tf = `translateX(${-(1 - back(x)) * 760}px) translateY(${bob}px)`;
    else if (a === 'dir') tf = `translateX(${(1 - back(x)) * 760}px) translateY(${bob}px)`;
    else if (a === 'gira') tf = `rotate(${(1 - ease(x)) * -200}deg) scale(${Math.max(back(x), .001) * (1 - sai)})`;
    else if (a === 'fade') tf = '';
    if (a === 'traco') { const tr = el.querySelector('.tr'); tr.style.strokeDashoffset = +el.dataset.L * (1 - easeIO(x / 1.4)); el.querySelector('.ponta').style.opacity = x > 1.3 ? 1 : 0; }
    if (el.dataset.vira) tf += ' scaleX(-1)';
    el.style.transform = tf; el.style.opacity = (x > 0 ? (a === 'fade' ? ease(x * 2) : 1) : 0) * (1 - sai);
    const ag = el.querySelector('.agulha'); if (ag) ag.style.transform = `rotate(${-90 + 180 * (+ag.dataset.v0 + (+ag.dataset.v1 - +ag.dataset.v0) * easeIO((x - .5) / 2.4))}deg)`;
    el.querySelectorAll('.enche').forEach(en => { const max = +(en.dataset.max || (+el.getAttribute('width') - 26)); en.setAttribute('width', Math.max(0, max * +en.dataset.p * easeIO(x / 1.6))); });
    el.querySelectorAll('.cresce').forEach(c => { const h = +c.dataset.h * easeIO(x / 1.6); c.setAttribute('height', h); c.setAttribute('y', 420 - h); });
    el.querySelectorAll('.dia').forEach(d => { const on = +d.dataset.i < +d.dataset.n && x > 0.4 + +d.dataset.i * 0.05; d.querySelector('.mk').setAttribute('opacity', on ? 1 : 0); });
    if (el.classList.contains('boneco')) desenhaBoneco(el, t, p);
  });
  // legenda (pílula no topo, palavra da vez em vermelho)
  let w = -1; for (let j = 0; j < palavras.length; j++) { if (palavras[j].inicio <= t) w = j; else break; }
  if (w < 0) { leg.innerHTML = ''; return; }
  const bl = blocos[palavras[w].bloco];
  leg.innerHTML = `<span>${bl.map(j => j === w ? `<em>${palavras[j].w}</em>` : palavras[j].w).join(' ')}</span>`;
  leg.firstChild.style.transform = `scale(${0.9 + 0.1 * ease((t - palavras[bl[0]].inicio) / 0.12)})`;
};
function desenhaBoneco(el, t, p) {
  const b = BON[+el.dataset.bi]; if (!b) return;
  let k = 0; for (let j = 0; j < b._k.length; j++) if (b._k[j].t <= t) k = j;
  const cur = b._k[k], prev = b._k[Math.max(0, k - 1)], m = k > 0 ? easeIO((t - cur.t) / 0.32) : 1;
  const pose = STK.mistura(STK.P[prev.pose] || STK.P.em_pe, STK.P[cur.pose] || STK.P.em_pe, m);
  let x = b.x; if (b.mover) { const fim = b._fim ?? p.fim; x = b.mover[0] + (b.mover[1] - b.mover[0]) * cl((t - p.ini) / Math.max(.1, fim - p.ini)); }
  const andando = b.ciclo && (!b.mover || t < (b._fim ?? p.fim));
  const w = b.w || 380, h = w * 600 / 340, topo = b.y - h * (590 / 600);
  el.innerHTML = `<div style="position:absolute;left:${x - w / 2}px;top:${topo}px;width:${w}px;${b.vira ? 'transform:scaleX(-1)' : ''}">${STK.svg({ p: pose, ciclo: andando ? b.ciclo : null, expr: cur.expr || 'neutro', olhar: b.olhar, acc: b.acc, w, fase: +el.dataset.bi * 1.7, segura: b.segura ? `<image href="ilustras/${b.segura}.png" x="-60" y="-60" width="120" height="120"/>` : '' }, t)}</div>`;
}
})();
