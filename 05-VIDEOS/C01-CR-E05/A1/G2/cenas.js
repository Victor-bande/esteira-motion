// V-C01-CR-E05-A1-G2 · Malu · Creatina Rosa · E05 tábua · gancho 2 "nunca pisou numa academia" · template v3 (estilo REF-02)
// Zona útil: x120–960 (y240–840) · x120–780 (y840–1060) · legenda y1080–1240.
const C = { rosa: '#FFD6E5', amar: '#FFF0B8', menta: '#CFF5E1', lilas: '#E6DCFF', azul: '#D4ECFF', pess: '#FFE0CC' };
const E = { verm: '#E8384F', verde: '#36C275', roxo: '#7B5CFF', lar: '#FF8A3D', azul: '#2F9BFF', rosa: '#FF5FA2', esc: '#1E1B2E' };
const fundo = (c1, c2) => mancha(c1, 330, 520, 300) + mancha(c2, 760, 760, 240) + mancha(c1, 860, 330, 150);
const CENAS = {
  // E1 · gancho 2: público + objeção
  1: () => fundo(C.lilas, C.amar) + boneco('duvida', 150, 430, 540, { w: 'passou' }) + num('40+', 560, 280, 180, { w: 'quarenta', a: 'gira' }) +
     ilu('woman-lifting-weights', 540, 470, 330, { w: 'academia' }) + ilu('prohibited', 560, 490, 290, { w: 'academia', d: 0.25 }),
  2: () => fundo(C.amar, C.azul) + ilu('thinking-face', 170, 400, 300, { w: 'será' }) + etq('CREATINA?', E.roxo, 540, 330, { w: 'creatina' }) +
     seta(480, 470, 600, 600, 0.3, { w: 'serve' }) + ilu('woman', 580, 560, 280, { w: 'você', a: 'sobe' }),
  // E1 · prova visual: tábua
  3: () => fundo(C.pess, C.menta) + titulo('5 g de creatina', { w: 'olha' }) + tabua(150, 400, 780, 420, { w: 'olha' }) +
     etq('CREATINA', E.esc, 200, 430, { w: 'colherzinha', s: 40 }) + etq('CARNE', E.verm, 640, 430, { w: 'carne', s: 40 }) +
     po(210, 560, 300, { w: 'colherzinha' }) + num('=', 500, 540, 140, { w: 'equivale' }) + ilu('cut-of-meat', 580, 500, 300, { w: 'carne', a: 'desce' }) +
     num('≈ 1 kg', 270, 860, 130, { w: 'quilo' }),
  // E2 · afirmação forte
  4: () => fundo(C.menta, C.amar) + boneco('esperta', 600, 420, 500, { w: 'suplemento' }) + ilu('tear-off-calendar', 170, 400, 270, { w: 'rotina' }) +
     etq('TODO DIA', E.verde, 170, 700, { w: 'rotina', d: 0.3 }) + titulo('não pode <em>faltar</em>', { w: 'faltar' }),
  // E2 · quebra de crença
  5: () => fundo(C.pess, C.rosa) + titulo('só pra quem malha?', { w: 'ideia' }) + ilu('flexed-biceps', 170, 430, 320, { w: 'creatina', a: 'esq' }) +
     ilu('woman-lifting-weights', 560, 430, 320, { w: 'quer', a: 'dir' }) + ilu('cross-mark', 370, 420, 340, { w: 'marombada', a: 'gira' }) +
     etq('MITO!', E.verm, 380, 860, { w: 'marombada', d: 0.3, s: 70 }),
  // E2 · autoridade: força indo embora → print real da página
  6: () => fundo(C.azul, C.menta) + num('40+', 170, 290, 150, { w: 'depois', o: 'creatina' }) + medidor(430, 300, 440, 0.85, 0.12, 'FORÇA', { w: 'força', o: 'creatina' }) +
     ilu('chart-decreasing', 200, 520, 250, { w: 'embora', o: 'creatina' }) + cel(560, 244, '<img src="fotos/PG-CR-formula-sem-preco.jpg" style="height:100%;object-fit:cover;object-position:top">', { w: 'ajuda' }) +
     ilu('flexed-biceps', 190, 330, 250, { w: 'manter' }) + etq('✓ ajuda a manter', E.verde, 140, 640, { w: 'manter', d: 0.2, s: 50 }) + etq('força e massa muscular', E.roxo, 140, 880, { w: 'massa', s: 44 }),
  // E3 · descoberta
  7: () => fundo(C.lilas, C.amar) + boneco('surpresa', 140, 440, 500, { w: 'depois' }) + ilu('magnifying-glass-tilted-left', 420, 330, 250, { w: 'pesquisar', a: 'gira' }) +
     ilu('microscope', 700, 320, 200, { w: 'muito' }) + ilu('package', 480, 560, 300, { w: 'encontrei', a: 'desce' }) +
     ilu('sparkles', 760, 560, 170, { w: 'completinha' }) + etq('a mais completinha ⭐', E.rosa, 140, 890, { w: 'completinha', s: 54 }),
  // E3 · ingrediente 1 + objeção (citando a página)
  8: () => fundo(C.rosa, C.lilas) + num('3 EM 1', 200, 290, 170, { w: 'três', a: 'gira', o: 'página' }) + etq('5 g de creatina', E.roxo, 150, 520, { w: 'cinco' }) +
     cel(560, 244, '<img src="fotos/PG-CR-comotomar-sem-preco.jpg" style="height:100%;object-fit:cover;object-position:top">', { w: 'página' }) +
     ilu('woman-walking', 200, 620, 220, { w: 'tomar' }) + etq('mesmo sem treinar', E.verde, 140, 880, { w: 'treinar', s: 54 }),
  // E3 · ingredientes 2 e 3 (segundo a página)
  9: () => fundo(C.menta, C.azul) + etq('+ GABA', E.roxo, 150, 290, { w: 'gaba', a: 'esq' }) + etq('+ L-TEANINA', E.azul, 150, 390, { w: 'l-teanina', a: 'esq' }) +
     ilu('person-in-lotus-position', 640, 280, 260, { w: 'ajudam' }) + ilu('relieved-face', 170, 500, 230, { w: 'tensão' }) + etq('menos tensão', E.rosa, 140, 750, { w: 'tensão', s: 46 }) +
     ilu('bullseye', 500, 500, 230, { w: 'foco', a: 'gira' }) + etq('mais foco', E.lar, 480, 750, { w: 'foco', s: 46 }) + etq('segundo a página', '#8A8698', 140, 880, { w: 'dia', s: 38 }),
  // E4 · revelação
  10: () => mancha(C.rosa, 540, 600, 380) + mancha(C.amar, 300, 420, 150) + ilu('package', 360, 520, 340, { w: 'creatina', o: 'essa' }) +
     foto('FRASCO-CR.png', 330, 270, 420, 620, { w: 'essa', a: 'sobe', fit: 'contain' }) + ilu('sparkles', 160, 300, 180, { w: 'essa', d: 0.2 }) + ilu('sparkles', 760, 600, 160, { w: 'aqui' }),
  // E4 · tudo num pote + sabor
  11: () => fundo(C.rosa, C.amar) + foto('FOTO-CR-02-na-mao.jpg', 560, 250, 370, 540, { w: 'tudo', a: 'dir' }) + etq('3 em 1', E.roxo, 150, 290, { w: 'pote' }) +
     ilu('face-savoring-food', 160, 400, 220, { w: 'gostosa' }) + ilu('strawberry', 170, 640, 150, { w: 'pink' }) + ilu('lemon', 330, 640, 160, { w: 'lemonade' }) +
     ilu('tropical-drink', 380, 420, 190, { w: 'suco' }) + etq('parece suco!', E.rosa, 140, 870, { w: 'suco', d: 0.2, s: 60 }),
  // E4 · uso
  12: () => fundo(C.azul, C.rosa) + foto('FOTO-CR-03-copo-rosa.jpg', 560, 250, 370, 560, { w: 'dissolve', a: 'dir' }) + ilu('droplet', 180, 300, 180, { w: 'dissolve' }) +
     etq('dissolve fácil', E.azul, 140, 520, { w: 'fácil' }) + ilu('check-mark-button', 160, 640, 150, { w: 'resíduo', a: 'gira' }) + etq('zero resíduo', E.verde, 330, 680, { w: 'resíduo', s: 50 }),
  // E5 · recompra
  13: () => fundo(C.menta, C.lilas) + ilu('eyes', 160, 300, 190, { w: 'olha' }) + num('+2 MIL', 330, 290, 170, { w: 'duas' }) + ilu('repeat-button', 750, 300, 180, { w: 'voltaram', a: 'gira' }) +
     ilu('woman', 160, 560, 200, { w: 'pessoas' }) + ilu('old-woman', 380, 560, 200, { w: 'pessoas', d: 0.15 }) + ilu('woman-walking', 600, 540, 180, { w: 'pessoas', d: 0.3 }) +
     etq('recompraram', E.verde, 150, 870, { w: 'comprar', s: 58 }),
  // E5 · um acabando, outro chegando
  14: () => fundo(C.amar, C.pess) + foto('FRASCO-CR.png', 160, 290, 280, 420, { w: 'pote', fit: 'contain' }) + barra(160, 740, 280, 0.12, E.verm, { w: 'finalzinho' }) +
     etq('finalzinho', E.verm, 170, 820, { w: 'finalzinho', s: 44 }) + seta(470, 500, 560, 500, 0.25, { w: 'outro' }) +
     foto('FRASCO-CR.png', 580, 290, 280, 420, { w: 'outro', a: 'dir', fit: 'contain' }) + ilu('delivery-truck', 570, 720, 200, { w: 'chegando', a: 'dir' }),
  // E6 · nome (1ª vez) + onde está
  15: () => fundo(C.rosa, C.menta) + boneco('feliz', 150, 440, 500, { w: 'quiser' }) + ilu('tear-off-calendar', 560, 360, 220, { w: 'rotina', o: 'rosa' }) +
     titulo('creatina <em>rosa</em> da Soufit', { w: 'rosa' }) + foto('FRASCO-CR.png', 470, 400, 300, 440, { w: 'rosa', a: 'sobe', fit: 'contain' }) +
     etq('aqui no TikTok', E.esc, 150, 880, { w: 'tiktok', s: 54 }),
  // E6 · oferta atemporal + uma ação
  16: () => fundo(C.pess, C.lilas) + cel(560, 244, `<img src="fotos/FRASCO-CR.png" style="height:300px;width:auto;margin:20px auto 0">
       <div style="padding:8px 24px;font:800 34px/1.1 'Baloo 2';color:#1E1B2E">Creatina 3 em 1 · Soufit · Pink Lemonade</div>
       <div style="padding:0 24px;color:#FFB400;font-size:46px">★★★★★</div><div style="padding:0 24px;font:700 30px 'Baloo 2';color:#1E1B2E">mais de 10 mil avaliações</div>`, { w: 'geralmente' }) +
     ilu('shopping-cart', 160, 320, 260, { w: 'carrinho' }) + etq('promoção no carrinho', E.lar, 140, 620, { w: 'promoção', s: 46 }) +
     ilu('backhand-index-pointing-down', 300, 700, 170, { w: 'embaixo', a: 'desce' }) + etq('confere aí!', E.verm, 150, 900, { w: 'confere', s: 62 }),
};
const ROTEIRO = [[1,[0]],[2,[1]],[3,[2]],[4,[3]],[5,[4]],[6,[5]],[7,[6]],[8,[7]],[9,[8]],[10,[9]],[11,[10]],[12,[11]],[13,[12]],[14,[13]],[15,[14]],[16,[15,16]]];
