// BONECO STICKMAN · v1 · 27/11/2026 · estilo REF-S05 (cabeça redonda branca, contorno grosso, olhos ovais, traço preto, luvinha branca)
// Esqueleto em código: pose = ângulos (graus, 0 = para baixo, +90 = para a esquerda da tela, -90 = para a direita, 180 = para cima). E = membro à esquerda da tela.
// API: STK.svg(estado, t) → string SVG do boneco no instante t. estado = { pose, expr, olhar:[dx,dy], acc, cor }.
(function () {
  const U = { cab: 64, tronco: 150, braco: 78, ante: 72, coxa: 92, canela: 90, traco: 13, contorno: 9 };
  // ---------- poses (ângulos absolutos; braços somam a inclinação do tronco) ----------
  const P = {
    em_pe:        { tr: 0,  cb: 0,   bE: 18,  aE: 8,   bD: -18, aD: -8,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    falando:      { tr: 0,  cb: -4,  bE: 30,  aE: 95,  bD: -18, aD: -8,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    apontando:    { tr: -4, cb: 6,   bE: 15,  aE: 8,   bD: -95, aD: -100, cE: 10, pE: 4,   cD: -10, pD: -4 },
    apontando_e:  { tr: 4,  cb: -6,  bE: 95,  aE: 100, bD: -15, aD: -8,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    acenando:     { tr: 0,  cb: 6,   bE: 18,  aE: 8,   bD: -140, aD: -175, cE: 10, pE: 4,  cD: -10, pD: -4 },
    pensando:     { tr: 2,  cb: 10,  bE: 40,  aE: 120, bD: -30, aD: 70,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    mao_queixo:   { tr: 0,  cb: 8,   bE: 25,  aE: 165, bD: -35, aD: 60,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    mao_testa:    { tr: 4,  cb: 14,  bE: 16,  aE: 8,   bD: -135, aD: 165, cE: 12, pE: 6,   cD: -8,  pD: -2 },
    cansado:      { tr: 6,  cb: 20,  bE: 16,  aE: 8,   bD: -10, aD: -4,  cE: 14,  pE: 2,   cD: -6,  pD: 0 },
    triste:       { tr: 4,  cb: 24,  bE: 14,  aE: 6,   bD: -12, aD: -6,  cE: 8,   pE: 2,   cD: -8,  pD: -2 },
    comemorando:  { tr: 0,  cb: -8,  bE: 150, aE: 170, bD: -150, aD: -170, cE: 22, pE: 8,  cD: -22, pD: -8 },
    bracos_abertos:{ tr: 0, cb: -4,  bE: 70,  aE: 100, bD: -70, aD: -100, cE: 14, pE: 4,   cD: -14, pD: -4 },
    bracos_cruzados:{ tr: 0, cb: -6, bE: 40,  aE: -80, bD: -40, aD: 80,  cE: 10,  pE: 4,   cD: -10, pD: -4 },
    maos_cintura: { tr: 0,  cb: -4,  bE: 45,  aE: -50, bD: -45, aD: 50,  cE: 14,  pE: 4,   cD: -14, pD: -4 },
    segurando:    { tr: 0,  cb: 6,   bE: 40,  aE: 100, bD: -40, aD: -100, cE: 10, pE: 4,   cD: -10, pD: -4 },
    oferecendo:   { tr: -6, cb: 0,   bE: 20,  aE: 10,  bD: -70, aD: -95, cE: 10,  pE: 4,   cD: -10, pD: -4 },
    dor_barriga:  { tr: 22, cb: 16,  bE: 20,  aE: 110, bD: -10, aD: 80,  cE: 24,  pE: -6,  cD: -6,  pD: 10 },
    assustado:    { tr: -10, cb: -10, bE: 120, aE: 160, bD: -120, aD: -160, cE: 18, pE: 6, cD: -18, pD: -6 },
    encolhido:    { tr: 18, cb: 24,  bE: 35,  aE: 130, bD: -35, aD: -130, cE: 18,  pE: 0,  cD: -18, pD: 0 },
    sentado:      { tr: 0,  cb: 0,   bE: 25,  aE: 80,  bD: -25, aD: -80, cE: 80,  pE: 4,   cD: 76,  pD: 2, y: 80, banco: 1 },
    sentado_triste:{ tr: 10, cb: 26, bE: 40,  aE: 100, bD: -40, aD: 150, cE: 80,  pE: 4,   cD: 76,  pD: 2, y: 80, banco: 1 },
    deitado:      { tr: 0,  cb: 0,   bE: 12,  aE: 6,   bD: -12, aD: -6,  cE: 6,   pE: 2,   cD: -6,  pD: -2, rot: -90, y: 120 },
    levantando_peso:{ tr: 0, cb: -6, bE: 160, aE: 175, bD: -160, aD: -175, cE: 28, pE: 6, cD: -28, pD: -6 },
    bebendo:      { tr: -4, cb: -18, bE: 20,  aE: 8,   bD: -50, aD: -165, cE: 10, pE: 4,   cD: -10, pD: -4 },
    pulando:      { tr: 0,  cb: -8,  bE: 140, aE: 160, bD: -140, aD: -160, cE: 40, pE: -30, cD: -40, pD: 30, y: -60 },
  };
  // ---------- expressões ----------
  // sob: [ângulo E, ângulo D, altura] · palp: pálpebra (0 aberto … 1 fechado) · boca · extra
  const X = {
    neutro:     { sob: [0, 0, 0],     palp: 0,   boca: 'reta' },
    feliz:      { sob: [-6, 6, 4],    palp: 0,   boca: 'sorriso' },
    muito_feliz:{ sob: [-10, 10, 8],  palp: 0,   boca: 'aberta_feliz', extra: 'bochecha' },
    apaixonado: { sob: [-8, 8, 6],    palp: 0,   boca: 'sorriso', extra: 'coracao' },
    confiante:  { sob: [12, -4, 0],   palp: .3,  boca: 'canto' },
    triste:     { sob: [-18, 18, 2],  palp: .25, boca: 'triste' },
    chorando:   { sob: [-20, 20, 2],  palp: .3,  boca: 'triste', extra: 'lagrima' },
    bravo:      { sob: [22, -22, -4], palp: .15, boca: 'brava' },
    surpreso:   { sob: [-6, 6, 12],   palp: 0,   boca: 'o' },
    assustado:  { sob: [-16, 16, 14], palp: 0,   boca: 'grito', extra: 'suor' },
    cansado:    { sob: [-12, 12, -2], palp: .55, boca: 'ondulada', extra: 'olheira' },
    pensativo:  { sob: [8, -14, 4],   palp: .2,  boca: 'canto', olhar: [6, -6] },
    dor:        { sob: [-20, 20, -2], palp: .45, boca: 'dentes', extra: 'suor' },
    nojo:       { sob: [16, -8, -2],  palp: .3,  boca: 'nojo' },
    duvida:     { sob: [10, -18, 6],  palp: .1,  boca: 'canto' },
    dormindo:   { sob: [0, 0, -2],    palp: 1,   boca: 'reta', extra: 'zzz' },
    tonto:      { sob: [-10, 10, 2],  palp: 0,   boca: 'ondulada', extra: 'estrelas', espiral: 1 },
    satisfeito: { sob: [-4, 4, 2],    palp: .6,  boca: 'sorriso' },
  };
  const rad = a => a * Math.PI / 180, dir = (a, L) => [-Math.sin(rad(a)) * L, Math.cos(rad(a)) * L];  // +90 = para a ESQUERDA da tela (braço/perna E abre para fora)
  const lerp = (a, b, k) => a + (b - a) * k;
  function mistura(p1, p2, k) { const o = {}; for (const c of new Set([...Object.keys(p1), ...Object.keys(p2)])) o[c] = lerp(p1[c] || 0, p2[c] || 0, k); return o; }
  // ciclos (andar / correr) por fase
  function ciclo(tipo, f) {
    const s = Math.sin(f), c = Math.cos(f), r = tipo === 'correndo';
    const A = r ? 38 : 24, B = r ? 55 : 30;
    return { tr: r ? 12 : 3, cb: r ? 6 : 0, bE: -A * s + (r ? 10 : 0), aE: -A * s + (r ? 80 : 12), bD: A * s - (r ? 10 : 0), aD: A * s - (r ? 80 : 12),
             cE: B * s, pE: B * s - (r ? 40 : 15) * Math.max(0, -c), cD: -B * s, pD: -B * s - (r ? 40 : 15) * Math.max(0, c), y: -Math.abs(c) * (r ? 16 : 6) };
  }
  // ---------- rosto ----------
  function rosto(ex, olhar, t, piscar, id) {
    const o = olhar || ex.olhar || [0, 0], ox = o[0], oy = o[1];
    const ey = -8 + oy, exs = [-24 + ox, 24 + ox];
    let palp = Math.max(ex.palp, piscar);
    let s = '';
    // olhos: ovais pretos com brilho; pálpebra = cor da cabeça descendo
    exs.forEach((cx, i) => {
      if (ex.espiral) { s += `<path d="M${cx} ${ey} m-9 0 a9 9 0 1 1 9 9 a6 6 0 1 1 -6 -6" stroke="#111" stroke-width="4" fill="none"/>`; return; }
      if (palp >= .95) { s += `<path d="M${cx - 12} ${ey + 2} Q${cx} ${ey + 10} ${cx + 12} ${ey + 2}" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`; return; }
      s += `<ellipse cx="${cx}" cy="${ey}" rx="10.5" ry="17" fill="#111"/><circle cx="${cx + 3.5}" cy="${ey - 7}" r="3.8" fill="#fff"/>`;
      if (palp > 0.02) { const h = 34 * palp; s += `<rect x="${cx - 14}" y="${ey - 19}" width="28" height="${h}" fill="url(#pele${id})"/><path d="M${cx - 13} ${ey - 19 + h} Q${cx} ${ey - 16 + h} ${cx + 13} ${ey - 19 + h}" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>`; }
    });
    // sobrancelhas
    const [aE, aD, hs] = ex.sob;
    [[exs[0], aE], [exs[1], -aD]].forEach(([cx, a], i) => {
      const y = ey - 30 - hs, L = 13, dx = Math.cos(rad(a)) * L, dy = Math.sin(rad(a)) * L * (i ? 1 : 1);
      s += `<path d="M${cx - dx} ${y - dy} L${cx + dx} ${y + dy}" stroke="#111" stroke-width="6" stroke-linecap="round"/>`;
    });
    // boca
    const mx = ox * .8, my = 30 + oy * .5;
    const B = {
      reta: `<path d="M${mx - 12} ${my} L${mx + 12} ${my}" stroke="#111" stroke-width="5" stroke-linecap="round"/>`,
      sorriso: `<path d="M${mx - 18} ${my - 4} Q${mx} ${my + 14} ${mx + 18} ${my - 4}" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      aberta_feliz: `<path d="M${mx - 20} ${my - 6} Q${mx} ${my + 26} ${mx + 20} ${my - 6} Z" fill="#111"/><path d="M${mx - 9} ${my + 9} Q${mx} ${my + 4} ${mx + 9} ${my + 9} Q${mx} ${my + 15} ${mx - 9} ${my + 9}" fill="#E8546A"/>`,
      canto: `<path d="M${mx - 12} ${my + 2} Q${mx + 4} ${my + 4} ${mx + 14} ${my - 5}" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      triste: `<path d="M${mx - 15} ${my + 6} Q${mx} ${my - 8} ${mx + 15} ${my + 6}" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      brava: `<path d="M${mx - 15} ${my + 4} Q${mx} ${my - 4} ${mx + 15} ${my + 4}" stroke="#111" stroke-width="6" fill="none" stroke-linecap="round"/>`,
      o: `<ellipse cx="${mx}" cy="${my + 2}" rx="8" ry="10" fill="#111"/>`,
      grito: `<ellipse cx="${mx}" cy="${my + 4}" rx="12" ry="15" fill="#111"/><ellipse cx="${mx}" cy="${my + 12}" rx="7" ry="4" fill="#E8546A"/>`,
      ondulada: `<path d="M${mx - 15} ${my + 2} q5 -6 10 0 t10 0 t10 0" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      dentes: `<rect x="${mx - 17}" y="${my - 6}" width="34" height="16" rx="6" fill="#fff" stroke="#111" stroke-width="4.5"/><path d="M${mx - 17} ${my + 2} L${mx + 17} ${my + 2} M${mx - 6} ${my - 6} L${mx - 6} ${my + 10} M${mx + 6} ${my - 6} L${mx + 6} ${my + 10}" stroke="#111" stroke-width="2.5"/>`,
      nojo: `<path d="M${mx - 15} ${my + 2} Q${mx - 6} ${my - 7} ${mx + 2} ${my + 2} T${mx + 16} ${my - 2}" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    };
    s += B[ex.boca] || B.reta;
    const e = ex.extra;
    if (e === 'bochecha' || e === 'coracao') s += `<ellipse cx="${-40 + ox}" cy="${18 + oy}" rx="11" ry="6" fill="#FF9DB0" opacity=".7"/><ellipse cx="${40 + ox}" cy="${18 + oy}" rx="11" ry="6" fill="#FF9DB0" opacity=".7"/>`;
    if (e === 'lagrima') s += `<path d="M${exs[0] - 2} ${ey + 16} q-7 ${14 + 10 * ((t * 1.5) % 1)} 0 ${22 + 10 * ((t * 1.5) % 1)} q7 -8 0 -${22 + 10 * ((t * 1.5) % 1)}" fill="#6EC6FF" stroke="#111" stroke-width="2.5"/>`;
    if (e === 'suor') s += `<path d="M60 -40 q-9 14 0 20 q9 -6 0 -20" fill="#6EC6FF" stroke="#111" stroke-width="3" transform="translate(0 ${4 * Math.sin(t * 4)})"/>`;
    if (e === 'olheira') s += `<path d="M${exs[0] - 10} ${ey + 20} q10 6 20 0 M${exs[1] - 10} ${ey + 20} q10 6 20 0" stroke="#8C8C99" stroke-width="3" fill="none"/>`;
    if (e === 'zzz') s += `<text x="58" y="${-60 - 8 * ((t * .8) % 1)}" font-family="Lilita One" font-size="30" fill="#4B5BD6" opacity="${1 - (t * .8) % 1}">Z</text><text x="78" y="-84" font-family="Lilita One" font-size="22" fill="#4B5BD6">z</text>`;
    if (e === 'estrelas') { for (let k = 0; k < 3; k++) { const a = t * 3 + k * 2.1; s += `<text x="${Math.cos(a) * 60 - 10}" y="${-78 + Math.sin(a) * 14}" font-size="26">⭐</text>`; } }
    if (e === 'coracao') s += `<text x="44" y="-70" font-size="34" transform="translate(0 ${-6 * Math.abs(Math.sin(t * 3))})">❤️</text>`;
    return s;
  }
  // ---------- montagem ----------
  let n = 0;
  function svg(est, t, k) {
    const id = ++n, cor = est.cor || '#111';
    const base = est.ciclo ? ciclo(est.ciclo, t * (est.ciclo === 'correndo' ? 11 : 7)) : est.p;
    // respiração e balanço (nunca parado)
    const resp = Math.sin(t * 2.4 + (est.fase || 0)) * 1.6, bal = Math.sin(t * 1.3 + (est.fase || 0)) * 2.2;
    const p = Object.assign({}, base); if (!est.ciclo) { p.bE += bal; p.bD -= bal; p.cb += bal * .6; }
    const quad = [p.x || 0, (p.y || 0) + resp];
    const pesc = dir(180 + p.tr, U.tronco); // pescoço a partir do quadril
    const ombro = [pesc[0] * .9, pesc[1] * .9];
    const L = (a0, b0, L1, L2, a1) => { const j = dir(a1, L1), m = dir(b0, L2); return [[a0[0] + j[0], a0[1] + j[1]], [a0[0] + j[0] + m[0], a0[1] + j[1] + m[1]]]; };
    const [cotE, maoE] = L(ombro, p.aE + p.tr, U.braco, U.ante, p.bE + p.tr), [cotD, maoD] = L(ombro, p.aD + p.tr, U.braco, U.ante, p.bD + p.tr);
    const [joE, peE] = L([0, 0], p.pE, U.coxa, U.canela, p.cE), [joD, peD] = L([0, 0], p.pD, U.coxa, U.canela, p.cD);
    const cab = dir(180 + p.tr, U.tronco + U.cab * .95);
    const ex = X[est.expr] || X.neutro;
    const piscar = (((t + (est.fase || 0)) % 3.4) < 0.13) ? 1 : 0;
    const ln = (a, b, c) => `<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}${c ? ` L${c[0]} ${c[1]}` : ''}" stroke="${cor}" stroke-width="${U.traco}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    const mao = (m, a) => `<g transform="translate(${m[0]} ${m[1]}) rotate(${a})"><ellipse cx="0" cy="6" rx="16" ry="18" fill="#fff" stroke="#111" stroke-width="6"/><ellipse cx="-13" cy="-2" rx="7" ry="9" fill="#fff" stroke="#111" stroke-width="5"/></g>`;
    const pe = (q, lado) => `<ellipse cx="${q[0] + lado * 9}" cy="${q[1] + 3}" rx="17" ry="8" fill="${cor}"/>`;
    const acc = est.acc ? ACC[est.acc](cab) : '';
    return `<svg viewBox="-170 -400 340 600" width="${est.w || 360}" style="overflow:visible" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="pele${id}" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#F1F1F3"/><stop offset="1" stop-color="#C9C9D2"/></radialGradient></defs>
      <ellipse cx="${quad[0]}" cy="${190}" rx="${80 - Math.abs(p.y || 0) * .3}" ry="12" fill="rgba(0,0,0,.13)"/>
      <g transform="translate(${quad[0]} ${quad[1]})${p.rot ? ` rotate(${p.rot} 0 100)` : ''}">
        ${p.banco > .5 ? `<g opacity="${Math.min(1, p.banco)}"><rect x="-70" y="18" width="140" height="22" rx="8" fill="#B07A4F" stroke="#111" stroke-width="6"/><path d="M-50 40 L-60 ${110 - (p.y || 0) + 70} M50 40 L60 ${110 - (p.y || 0) + 70}" stroke="#111" stroke-width="10" stroke-linecap="round"/></g>` : ''}
        ${ln([0, 0], joD, peD)}${pe(peD, 1)}${ln(ombro, cotD, maoD)}
        ${ln([0, 0], pesc)}
        ${ln([0, 0], joE, peE)}${pe(peE, -1)}${ln(ombro, cotE, maoE)}
        <g transform="translate(${cab[0]} ${cab[1]}) rotate(${p.cb * .6})">
          <circle r="${U.cab}" fill="url(#pele${id})" stroke="#111" stroke-width="${U.contorno}"/>
          ${rosto(ex, est.olhar, t, piscar, id)}
        </g>${acc}
        ${mao(maoE, p.aE + p.tr)}${mao(maoD, p.aD + p.tr)}
        ${est.segura ? `<g transform="translate(${(maoE[0] + maoD[0]) / 2} ${(maoE[1] + maoD[1]) / 2 - 20})">${est.segura}</g>` : ''}
      </g></svg>`;
  }
  // acessórios (identidade da conta: laço rosa da Malu)
  const ACC = {
    laco: c => `<g transform="translate(${c[0] + 40} ${c[1] - 52}) rotate(20)"><path d="M0 0 q24 -20 36 4 q-18 8 -36 -4 z M0 0 q-24 -20 -36 4 q18 8 36 -4 z" fill="#FF5C9A" stroke="#111" stroke-width="5"/><circle r="8" fill="#FF5C9A" stroke="#111" stroke-width="5"/></g>`,
    bone: c => `<path d="M${c[0] - 62} ${c[1] - 20} Q${c[0]} ${c[1] - 110} ${c[0] + 62} ${c[1] - 20} Z" fill="#3B82F6" stroke="#111" stroke-width="6"/><path d="M${c[0] + 50} ${c[1] - 24} L${c[0] + 100} ${c[1] - 14}" stroke="#111" stroke-width="10" stroke-linecap="round"/>`,
    oculos: c => `<g fill="none" stroke="#111" stroke-width="5"><circle cx="${c[0] - 24}" cy="${c[1] - 8}" r="17"/><circle cx="${c[0] + 24}" cy="${c[1] - 8}" r="17"/><path d="M${c[0] - 7} ${c[1] - 8} L${c[0] + 7} ${c[1] - 8}"/></g>`,
  };
  window.STK = { svg, P, X, mistura, poses: Object.keys(P), exprs: Object.keys(X) };
})();
