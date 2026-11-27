// TRES · cenas 3D "de massinha" (estilo dos virais E09/E11–E13) · v1 · 27/11/2026 · three.js local, grátis
// No cenas.js: tres('nome', { chaves: [[palavra|null, {estado}], …] }) dentro da cena. O motor chama TRES.monta() e TRES.quadro(t).
(function () { // usa three.min.js (r149, global THREE): módulo ES não carrega em file://
THREE.ColorManagement.legacyMode = false;  // cores hex em sRGB de verdade (sem isso tudo sai lavado)
const W = 1080, H = 1920;
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
r.setPixelRatio(1); r.setSize(W, H); r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
r.outputEncoding = THREE.sRGBEncoding; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.0;
r.domElement.id = 'tres'; r.domElement.style.cssText = 'position:absolute;inset:0;width:1080px;height:1920px;z-index:0;display:none';
document.getElementById('palco').prepend(r.domElement);
const argila = (cor, rough = .55) => new THREE.MeshStandardMaterial({ color: cor, roughness: rough, metalness: 0 });
const lerp = (a, b, k) => a + (b - a) * k, cl = x => Math.min(1, Math.max(0, x)), eio = x => { x = cl(x); return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; };
let cena = null, cam = null, upd = null;
function mundo(ceu = 0x9FDCEB, chao = 0xF0D9BE) {
  const s = new THREE.Scene(); s.background = new THREE.Color(ceu); s.fog = new THREE.Fog(ceu, 18, 40);
  s.add(new THREE.HemisphereLight(0xffffff, 0xb8a898, 1.05));
  const sol = new THREE.DirectionalLight(0xfff4e6, 2.0); sol.position.set(4, 9, 7); sol.castShadow = true; sol.shadow.mapSize.set(1024, 1024);
  Object.assign(sol.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 }); sol.shadow.radius = 6; s.add(sol);
  const piso = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, .5, 64), argila(chao)); piso.position.y = -1.6; piso.receiveShadow = true; s.add(piso);
  // nuvens de massinha
  for (let i = 0; i < 4; i++) { const g = new THREE.Group(); for (let k = 0; k < 4; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.55 + (k % 2) * .2, 24, 16), argila(0xffffff, .9)); b.position.set(k * .55 - .8, (k % 2) * .25, 0); g.add(b); } g.position.set(-6 + i * 4.2, 4.6 + (i % 2) * .6, -9); s.add(g); }
  const c = new THREE.PerspectiveCamera(36, W / H, .1, 100); c.position.set(0, 1.2, 17); c.lookAt(0, 0, 0);
  return [s, c];
}
const esfera = (cor, raio = .26) => { const m = new THREE.Mesh(new THREE.SphereGeometry(raio, 28, 20), argila(cor, .35)); m.castShadow = true; return m; };
// interpola o estado pelas chaves (palavra → estado) com 0,6 s de transição
function estado(chaves, t, hitT) {
  const ks = chaves.map(([w, e]) => ({ t: w ? (hitT(w) ?? 0) : 0, e })); let a = ks[0].e, b = ks[0].e, k = 1;
  for (let i = 0; i < ks.length; i++) if (ks[i].t <= t) { a = i ? ks[i - 1].e : ks[i].e; b = ks[i].e; k = eio((t - ks[i].t) / .6); }
  const o = {}; for (const n of new Set([...Object.keys(a), ...Object.keys(b)])) { const va = a[n] ?? b[n], vb = b[n] ?? a[n]; o[n] = typeof va === 'number' ? lerp(va, vb, k) : (k > .5 ? vb : va); } return o;
}
const CENAS3D = {
  // fibra muscular + cálcio (amarelo) + magnésio (azul) · estado: c (contração 0–1), ca (0–1 bolinhas), mg (0–1), treme, pedais, cartao, capsula, foge (mg indo embora)
  musculo(op, hitT) {
    const [s, c] = mundo(op.ceu, op.chao); const g = new THREE.Group(); s.add(g); g.position.set(.75, 1.7, 0); g.scale.setScalar(.6); g.rotation.z = Math.PI / 2;
    const fibras = []; for (let i = 0; i < 7; i++) { const f = new THREE.Mesh(new THREE.CapsuleGeometry(.42, 3.6, 12, 32), argila(0xE8606A)); f.rotation.z = Math.PI / 2;
      f.position.set(0, Math.sin(i * 2.4) * .9, Math.cos(i * 2.4) * .9 - .2); f.castShadow = true; g.add(f); fibras.push(f); }
    const tendao = [-1, 1].map(sx => { const t = new THREE.Mesh(new THREE.CylinderGeometry(.35, .6, 1.2, 24), argila(0xF7EBDD)); t.rotation.z = Math.PI / 2; t.position.x = sx * 3.1; t.castShadow = true; g.add(t); return t; });
    const CA = Array.from({ length: 10 }, () => { const e = esfera(0xFFC93C); s.add(e); return e; });
    const MG = Array.from({ length: 10 }, () => { const e = esfera(0x3FA2FF); s.add(e); return e; });
    // pedais (acelerador amarelo / freio azul)
    const ped = new THREE.Group(); [[-.85, 0xFFC93C], [.85, 0x3FA2FF]].forEach(([x, cor], i) => { const p = new THREE.Group(); const sola = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, .3), argila(cor, .45)); const haste = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, 1.6, 16), argila(0x444a55, .4)); haste.position.set(0, .9, -.5); haste.rotation.x = .6;
      [-.45, -.15, .15, .45].forEach(y => { const fr = new THREE.Mesh(new THREE.BoxGeometry(1.0, .07, .06), argila(0x2b2f38)); fr.position.set(0, y, .17); sola.add(fr); });
      [sola, haste].forEach(m => { m.castShadow = true; p.add(m); }); p.position.set(x + .75, 1.6, 1.5); p.rotation.x = -.5; p.userData.i = i; ped.add(p); }); s.add(ped);
    // cartão de crédito
    const cart = new THREE.Mesh(new THREE.BoxGeometry(3, 1.9, .14), argila(0x6C5CE7, .4)); cart.position.set(.75, 1.9, 2); cart.scale.setScalar(.8); cart.castShadow = true; const tarja = new THREE.Mesh(new THREE.BoxGeometry(3.02, .35, .16), argila(0x222222)); tarja.position.y = .45; cart.add(tarja); s.add(cart);
    const gota = esfera(0x7EC8FF, .28); gota.scale.set(1, 1.4, 1); cart.add(gota);
    // cápsula do produto (preto + azul) e as 3 formas de magnésio
    const cap = new THREE.Group(); const m1 = new THREE.Mesh(new THREE.CapsuleGeometry(.75, 1.4, 16, 32), argila(0x1B1F2A, .3)); const m2 = new THREE.Mesh(new THREE.CapsuleGeometry(.77, .7, 16, 32), argila(0x1E88E5, .3)); m2.position.y = .75;
    [m1, m2].forEach(m => { m.castShadow = true; cap.add(m); }); cap.rotation.z = -.5; s.add(cap);
    const tres3 = [0x3FA2FF, 0x7FD3FF, 0x1565C0].map(cor => { const e = esfera(cor, .45); s.add(e); return e; });
    return [s, c, (t) => {
      const E = estado(op.chaves, t, hitT), cc = E.c || 0;
      fibras.forEach((f, i) => { f.scale.set(1 + .45 * cc, 1 - .32 * cc, 1 + .45 * cc); f.material.color.setRGB(lerp(.93, .78, cc), lerp(.42, .12, cc), lerp(.45, .16, cc));
        const tr = (E.treme || 0) * .06; f.position.x = Math.sin(t * 40 + i) * tr; });
      tendao.forEach((td, k) => { td.position.x = (k ? 1 : -1) * (3.1 - 1.15 * cc); });
      g.visible = (E.fibra ?? 1) > .5; g.rotation.x = Math.sin(t * .4) * .35; g.position.y = 1.7 + Math.sin(t * 1.2) * .06;
      const orbita = (arr, n, cor, foge, alvo) => arr.forEach((e, i) => { const on = i < Math.round(n * arr.length), a = t * 1.3 + i * 0.63;
        const R = 1.15 + (i % 3) * .2, x = .75 + Math.cos(a) * R, y = 1.7 + Math.sin(a * .9 + i) * 2.1, z = Math.sin(a) * R;
        e.visible = on; e.position.set(x + (foge || 0) * 6 * (i % 2 ? 1 : -1), y - (foge || 0) * 4, z); });
      orbita(CA, E.ca || 0); orbita(MG, E.mg || 0, 0, E.foge);
      ped.visible = (E.pedais || 0) > .5; ped.children.forEach(p => { const k = p.userData.i ? (E.freio || 0) : (E.acel || 0); p.rotation.x = -.5 + .45 * k; p.position.y = 1.6 + Math.sin(t * 2 + p.userData.i) * .05; });
      cart.visible = (E.cartao || 0) > .5; cart.rotation.y = Math.sin(t * 1.5) * .4; gota.position.set(.9, -1.2 - ((t * 1.2) % 1) * 1.2, .2);
      const cv = E.capsula || 0; cap.visible = cv > .02; cap.position.set(.75, lerp(8, 1.9, eio(cv)), 1); cap.rotation.y = t * 1.2; cap.scale.setScalar(.7);
      tres3.forEach((e, i) => { const k = cl((E.tres || 0) * 3 - i); e.visible = (E.tres || 0) > i / 3 + .01 && k < .98; const a = i * 2.1; e.position.set(lerp(.75 + Math.cos(a) * 1.8, .75, eio(k)), lerp(3.6 + Math.sin(a) * .5, 1.9, eio(k)), 1); });
      c.position.x = Math.sin(t * .25) * .6; c.lookAt(0, 0, 0);
    }];
  },
  // INTESTINO · balão (barriga), esteira, fibra/água, mamão, laxante, copo com gosma, semente→gel, cápsula · estados 0–1:
  // balao, infla, esteira, anda, fibra, agua, mamao, laxante, copo, gosma, semente, gel, capsula, treme
  intestino(op, hitT) {
    const [s, c] = mundo(op.ceu || 0xBFE9D9, op.chao); const X = .75, Y = 1.7;
    const transl = (cor, o) => new THREE.MeshStandardMaterial({ color: cor, roughness: .15, metalness: 0, transparent: true, opacity: o });
    const bal = new THREE.Group(); const bola = new THREE.Mesh(new THREE.SphereGeometry(1.3, 48, 32), argila(0xF7A1B5, .35)); bola.castShadow = true; bal.add(bola);
    const no = new THREE.Mesh(new THREE.ConeGeometry(.25, .4, 20), argila(0xE57A95)); no.position.y = -1.4; no.rotation.x = Math.PI; bal.add(no); bal.position.set(X, Y, 0); s.add(bal);
    const est = new THREE.Group(); const corr = new THREE.Mesh(new THREE.BoxGeometry(4.2, .3, 1.4), argila(0x3A3F4A, .7)); corr.castShadow = true; corr.receiveShadow = true; est.add(corr);
    const rolos = [-2.1, 2.1].map(x => { const r0 = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, 1.5, 24), argila(0xB0B6C2, .3)); r0.rotation.x = Math.PI / 2; r0.position.x = x; est.add(r0); return r0; });
    const faixas = Array.from({ length: 8 }, (_, i) => { const f = new THREE.Mesh(new THREE.BoxGeometry(.08, .32, 1.42), argila(0x5B6170)); est.add(f); return f; });
    const comida = Array.from({ length: 5 }, (_, i) => { const m = new THREE.Mesh(new THREE.SphereGeometry(.28, 24, 16), argila([0xC9A27A, 0x9FC56B, 0xE0B65A, 0xB98A62, 0x8FBF5A][i])); m.castShadow = true; m.scale.y = .8; est.add(m); return m; });
    const pes = [-1.6, 1.6].map(x => { const p0 = new THREE.Mesh(new THREE.CylinderGeometry(.12, .12, 1.3, 16), argila(0x9AA0AC)); p0.position.set(x, -.75, 0); est.add(p0); return p0; });
    est.position.set(X, Y - .2, 0); est.rotation.x = .35; est.scale.setScalar(.85); s.add(est);
    const fib = Array.from({ length: 8 }, () => { const e = esfera(0x58B85C, .17); s.add(e); return e; }), gota = Array.from({ length: 6 }, () => { const e = esfera(0x5DB8FF, .15); e.scale.y = 1.3; s.add(e); return e; });
    const mam = new THREE.Group(); const casca = new THREE.Mesh(new THREE.SphereGeometry(.9, 40, 24), argila(0xF2994A)); casca.scale.set(1, 1.35, 1); const folha = new THREE.Mesh(new THREE.ConeGeometry(.18, .5, 12), argila(0x5BA84E)); folha.position.y = 1.3;
    [casca, folha].forEach(m => { m.castShadow = true; mam.add(m); }); mam.position.set(X, Y, 0); s.add(mam);
    const lax = new THREE.Group(); const cx = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.9, .7), argila(0xFFFFFF, .4)); const cruz1 = new THREE.Mesh(new THREE.BoxGeometry(.7, .2, .72), argila(0xE8384F)), cruz2 = new THREE.Mesh(new THREE.BoxGeometry(.2, .7, .72), argila(0xE8384F));
    [cx, cruz1, cruz2].forEach(m => { m.castShadow = true; lax.add(m); }); lax.position.set(X, Y, 0); s.add(lax);
    const copo = new THREE.Group(); const vidro = new THREE.Mesh(new THREE.CylinderGeometry(.85, .7, 2.2, 40, 1, true), transl(0xDDF3FF, .35)); vidro.material.side = THREE.DoubleSide;
    const liq = new THREE.Mesh(new THREE.CylinderGeometry(.8, .66, 1.5, 40), transl(0x8FD3FF, .18)); liq.position.y = -.3;
    const gos = new THREE.Mesh(new THREE.SphereGeometry(.7, 32, 24), argila(0x7CB342, .15)); gos.position.y = -.2; gos.renderOrder = 2; vidro.renderOrder = 3;
    [vidro, liq, gos].forEach(m => copo.add(m)); copo.position.set(X, Y, 0); s.add(copo);
    const sem = new THREE.Mesh(new THREE.SphereGeometry(.22, 24, 16), argila(0x9C7B55)); sem.scale.set(1, .6, .6); sem.position.set(X, Y, .5); sem.castShadow = true; s.add(sem);
    const gelm = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), transl(0xA8E6A1, .6)); gelm.position.set(X, Y, 0); s.add(gelm);
    const cap = new THREE.Group(); const k1 = new THREE.Mesh(new THREE.CapsuleGeometry(.6, 1.1, 16, 32), argila(0xFFFFFF, .3)), k2 = new THREE.Mesh(new THREE.CapsuleGeometry(.62, .55, 16, 32), argila(0x2E8B57, .3)); k2.position.y = .6;
    [k1, k2].forEach(m => { m.castShadow = true; cap.add(m); }); cap.rotation.z = -.5; s.add(cap);
    return [s, c, (t) => {
      const E = estado(op.chaves, t, hitT), tr = (E.treme || 0) * .05;
      bal.visible = (E.balao || 0) > .02; bal.scale.setScalar(.6 + .55 * (E.infla || 0) + Math.sin(t * 6) * .015 * (E.infla || 0)); bal.position.x = X + Math.sin(t * 30) * tr;
      est.visible = (E.esteira || 0) > .02; const v = E.anda || 0, fase = t * v * 1.6;
      faixas.forEach((f, i) => { f.position.x = ((i * .55 + fase) % 4.4) - 2.2; }); rolos.forEach(r0 => r0.rotation.y = fase * 3);
      comida.forEach((m, i) => { m.position.set(((i * .9 + fase) % 4.4) - 2.2, .38, (i % 2 ? .25 : -.25)); m.visible = (E.comida ?? 1) > .5; });
      fib.forEach((e, i) => { const k = ((t * .7 + i / fib.length) % 1); e.visible = (E.fibra || 0) > i / fib.length; e.position.set(X - 1.4 + i * .4, Y + 2.6 - k * 2.4, .3); });
      gota.forEach((e, i) => { const k = ((t * .9 + i / gota.length) % 1); e.visible = (E.agua || 0) > i / gota.length; e.position.set(X - 1.2 + i * .5, Y + 2.8 - k * 2.6, -.2); });
      mam.visible = (E.mamao || 0) > .02; mam.rotation.y = t * .8; mam.scale.setScalar(E.mamao || 0);
      lax.visible = (E.laxante || 0) > .02; lax.rotation.y = Math.sin(t) * .5; lax.scale.setScalar(E.laxante || 0);
      copo.visible = (E.copo || 0) > .02; copo.scale.setScalar(E.copo || 0); gos.visible = (E.gosma || 0) > .02; gos.scale.set(1 + Math.sin(t * 7) * .06, (E.gosma || 0) * (1 + Math.cos(t * 6) * .08), 1);
      sem.visible = (E.semente || 0) > .02 && (E.gel || 0) < .9; sem.scale.set(1 + 2 * (E.gel || 0), .6 + 2.4 * (E.gel || 0), .6 + 2.4 * (E.gel || 0)); sem.rotation.y = t;
      gelm.visible = (E.gel || 0) > .05; gelm.scale.setScalar(.2 + 1.1 * (E.gel || 0) + Math.sin(t * 4) * .03);
      const cv = E.capsula || 0; cap.visible = cv > .02; cap.position.set(X, lerp(8, Y + .2, eio(cv)), 1); cap.rotation.y = t * 1.2; cap.scale.setScalar(.8);
      c.position.x = Math.sin(t * .25) * .6; c.lookAt(0, 0, 0);
    }];
  },
};
window.TRES = {
  monta(nome, op, hitT) { const [s, c, u] = CENAS3D[nome](op, hitT); cena = s; cam = c; upd = u; r.domElement.style.display = 'block'; },
  apaga() { cena = null; r.domElement.style.display = 'none'; },
  quadro(t) { if (!cena) return; upd(t); r.render(cena, cam); },
};
window.TRES_PRONTO = true;
})();
