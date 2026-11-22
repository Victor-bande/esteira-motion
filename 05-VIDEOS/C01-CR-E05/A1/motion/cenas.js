// V-C01-CR-E05-A1-G1 · Malu · Creatina Rosa · E05 tábua "1 kg de carne" · só a lista de cenas (template fixo em 06-FERRAMENTAS/motion-template)
// Zona útil: x120–960 (y240–840) · x120–780 (y840–1260). Legenda em y1100–1212.
const ROXO = ['#2B1C6B', '#F4D06F', '#C98B4B'], ROSA = ['#FF8FB5', '#FFE3EC', '#F7B7CB'], AZUL = ['#1F4E79', '#D9D2C3', '#9C8F7B'], VERDE = ['#2E6B3F', '#E9E4C9', '#B79B62'];
const F = c => fundo(...c);
const tabua = () => `<svg style="position:absolute;left:140px;top:420px" width="780" height="420" viewBox="0 0 780 420">
  <rect x="0" y="0" width="780" height="420" rx="40" fill="#F2F2EE" stroke="#222" stroke-width="8"/><line x1="390" y1="20" x2="390" y2="400" stroke="#222" stroke-width="8" stroke-dasharray="22 18"/></svg>`;
const po = (x, y) => `<svg style="position:absolute;left:${x}px;top:${y}px;z-index:8" width="230" height="150" viewBox="0 0 230 150"><ellipse cx="115" cy="120" rx="100" ry="26" fill="#fff" stroke="#bbb" stroke-width="4"/><path d="M30 118 Q115 -10 200 118 Z" fill="#fff" stroke="#bbb" stroke-width="4"/><circle cx="90" cy="70" r="6" fill="#ddd"/><circle cx="135" cy="85" r="5" fill="#ddd"/></svg>`;
const bife = (x, y) => `<svg style="position:absolute;left:${x}px;top:${y}px;z-index:8" width="360" height="330" viewBox="0 0 360 330"><path d="M40 60 Q120 0 230 30 Q340 50 330 160 Q320 290 190 310 Q60 320 30 220 Q0 130 40 60 Z" fill="#B0222E" stroke="#5a0d12" stroke-width="10"/><path d="M90 120 Q170 90 250 140 M80 200 Q170 170 270 220" stroke="#F3B6B6" stroke-width="14" fill="none" stroke-linecap="round"/></svg>`;
const caixa = (x, y, aberta) => `<svg style="position:absolute;left:${x}px;top:${y}px;z-index:4" width="380" height="320" viewBox="0 0 380 320"><rect x="20" y="110" width="340" height="200" rx="10" fill="#C8995B" stroke="#222" stroke-width="8"/>${aberta ? '<path d="M20 110 L-10 40 L170 60 L190 110 Z M360 110 L390 40 L210 60 L190 110 Z" fill="#D9AE72" stroke="#222" stroke-width="8"/>' : '<rect x="10" y="80" width="360" height="50" rx="8" fill="#D9AE72" stroke="#222" stroke-width="8"/><rect x="170" y="80" width="40" height="230" fill="#E8D7A8"/>'}<text x="190" y="250" font-size="60" text-anchor="middle">📦</text></svg>`;
const barra = (x, y, pct, cor, txt) => `<div style="position:absolute;left:${x}px;top:${y}px;width:300px;z-index:14"><div style="height:46px;border:7px solid #111;border-radius:23px;background:#fff;overflow:hidden"><div style="width:${pct}%;height:100%;background:${cor}"></div></div><div class="rotulo" style="position:static;width:300px;font-size:50px;margin-top:8px">${txt}</div></div>`;
const pagina = (img) => `<img src="fotos/${img}" style="height:100%;object-fit:cover;object-position:top">`;

const CENAS = {
  // E1 · gancho: público + objeção em pergunta
  1: () => F(ROXO) + masc('malu', 'duvida', 230, 140, 520) +
     W('quarenta', tit('40+ E NÃO TREINA?')) + W('treina', emo('🏋️‍♀️', 520, 480, 220)) + W('treina', xis(560, 440, 260)) +
     W('adianta', pop('ADIANTA? 🤔', 400, 860)),
  // E1 · prova visual: tábua creatina × carne
  2: () => F(ROXO) + tit('5 G DE CREATINA') + tabua() + rot('CREATINA', 180, 440, 310) + rot('CARNE', 570, 440, 310) +
     W('colherzinha', po(220, 600)) + W('carne', bife(555, 490)) + W('quilo', pop('= QUASE 1 KG 🥩', 140, 880)),
  // E2 · afirmação forte
  3: () => F(AZUL) + masc('malu', 'esperta', 230, 140, 520) + W('suplemento', pote('CREA<br>TINA', '#666', 560, 560)) +
     W('rotina', emo('📅', 740, 470, 150)) + W('faltar', tit('NÃO PODE FALTAR')) + W('creatina', chip('<b>✓</b> TODO DIA', 430, 860)),
  // E2 · quebra de crença
  4: () => F(AZUL) + masc('malu', 'nojo', 230, 140, 520) + W('ideia', tit('SÓ PRA ACADEMIA?')) +
     W('creatina', emo('💪', 520, 470, 260)) + W('marombada', xis(540, 420, 300)) + W('marombada', pop('MITO!', 440, 860)),
  // E2 · autoridade: print real da página
  5: () => F(VERDE) + masc('malu', 'surpresa', 200, 140, 560) + W('quarenta', tit('DEPOIS DOS 40…')) +
     W('embora', chip('📉 FORÇA', 140, 420, 70)) + W('ajuda', cel(560, 270, pagina('PG-CR-formula-sem-preco.jpg'))) +
     W('massa', pop('✓ AJUDA A MANTER', 140, 960, 72)),
  // E3 · descoberta (a caixa chegando = expectativa)
  6: () => F(ROXO) + masc('malu', 'surpresa', 230, 140, 520) + W('pesquisar', emo('🔍', 470, 450, 200)) +
     W('encontrei', caixa(500, 480, false)) + W('completinha', tit('A MAIS COMPLETINHA ⭐')),
  // E3 · ingrediente 1 + objeção respondida citando a página
  7: () => F(ROXO) + caixa(150, 640, true) + W('três', tit('3 EM 1')) + W('cinco', chip('<b>✓</b> 5 G DE CREATINA', 140, 420, 70)) +
     W('página', cel(560, 270, pagina('PG-CR-comotomar-sem-preco.jpg'))) + W('treinar', pop('MESMO SEM TREINAR', 130, 960, 66)),
  // E3 · ingredientes 2 e 3 (segundo a página)
  8: () => F(ROXO) + caixa(560, 520, true) + tit('3 EM 1') + W('gaba', chip('<b>+</b> GABA', 150, 420)) + W('l-teanina', chip('<b>+</b> L-TEANINA', 150, 520)) +
     W('tensão', chip('😌 MENOS TENSÃO', 150, 640, 60)) + W('foco', chip('🎯 MAIS FOCO', 150, 740, 60)) + rot('segundo a página', 130, 900, 380),
  // E4 · revelação
  9: () => F(ROSA) + caixa(390, 700, true) + W('essa', emo('✨', 160, 380, 160)) + W('essa', foto('FRASCO-CR.png', 300, 300, 420, 650, 'contain')) + W('essa', emo('✨', 760, 330, 140)),
  // E4 · tudo num pote só + sabor
  10: () => F(ROSA) + foto('FOTO-CR-02-na-mao.jpg', 520, 300, 400, 560) + W('pote', chip('<b>✓</b> 3 EM 1', 140, 380)) +
     W('gostosa', chip('<b>✓</b> GOSTOSA', 140, 500)) + W('pink', chip('🍋 PINK<br>LEMONADE', 140, 620, 58)) + W('suco', pop('PARECE SUCO!', 140, 920, 80)),
  // E4 · uso
  11: () => F(ROSA) + foto('FOTO-CR-03-copo-rosa.jpg', 520, 300, 400, 600) + W('dissolve', chip('<b>✓</b> DISSOLVE<br>FÁCIL', 140, 420)) +
     W('resíduo', chip('<b>✓</b> ZERO<br>RESÍDUO', 140, 640)),
  // E5 · recompra
  12: () => F(VERDE) + W('detalhe', emo('👀', 150, 400, 140)) + W('pessoas', emo('👩‍🦳👩👩‍🦱', 330, 420, 130)) +
     W('duas', pop('+2 MIL', 260, 590, 150)) + W('comprar', chip('🔁 RECOMPRARAM', 150, 900, 66)),
  // E5 · um acabando, outro chegando
  13: () => F(VERDE) + foto('FRASCO-CR.png', 160, 320, 300, 460, 'contain') + foto('FRASCO-CR.png', 560, 320, 300, 460, 'contain') +
     W('finalzinho', barra(160, 800, 12, '#FF2E2E', 'FINALZINHO')) + W('chegando', chip('📦 CHEGANDO', 560, 800, 54)),
  // E6 · nome (1ª vez) + onde está
  14: () => F(ROSA) + masc('malu', 'feliz', 200, 140, 560) + W('rotina', chip('<b>✓</b> NA ROTINA', 140, 420)) +
     W('rosa', tit('CREATINA ROSA<br>DA SOUFIT')) + W('rosa', foto('FRASCO-CR.png', 500, 440, 280, 400, 'contain')) + W('tiktok', pop('AQUI NO TIKTOK', 140, 1000, 70)),
  // E6 · oferta atemporal + uma ação
  15: () => F(ROXO) + cel(560, 270, `<img src="fotos/FRASCO-CR.png" style="height:260px;object-fit:contain;margin:20px auto 0">
       <div style="padding:10px 26px;font:800 40px/1.1 'Baloo 2';color:#111">Creatina 3 em 1 · Soufit · Pink Lemonade</div>
       <div style="padding:0 26px;color:#FFB400;font-size:52px">★★★★★</div><div style="padding:0 26px;font:800 36px 'Baloo 2';color:#111">mais de 10 mil avaliações</div>`) +
     W('promoção', chip('🧡 PROMO NO<br>CARRINHO', 140, 420, 60)) + W('carrinho', emo('👇', 580, 860, 160)) + W('confere', pop('CONFERE AÍ!', 140, 960, 84)),
};
const ROTEIRO = [[1,[0,1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[6]],[7,[7]],[8,[8]],[9,[9]],[10,[10]],[11,[11]],[12,[12]],[13,[13]],[14,[14]],[15,[15,16]]];
