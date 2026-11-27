// V-C01-MG3-E10-A1-G1 · Malu · Magnésio 3 em 1 Blasmax · E10 "sinais do corpo" · template stickman v1 (fundo sempre cheio)
window.FOTOS = '../../03-PRODUTOS/P-BLASMAX-MAGNESIO3EM1/fotos/';
const MALU = { acc: 'laco', w: 430, y: 1200 };
const balaoIlu = (n) => `<img src="ilustras/${n}.png">`;
const CENAS = {
  // CHECKLIST DE SINAIS (1 a cada ~2 s)
  1: () => fundo('sala') + boneco({ ...MALU, x: 320, barriga: [.5, 1.15, 'aperta'], poses: [[null, 'maos_cintura', 'duvida'], ['aperta', 'maos_cintura', 'dor']] }) +
     ilu('collision', 540, 640, 170, { w: 'aperta' }) + etq('APERTA', 560, 460, { w: 'cintura', tipo: 'nao', som: 'nao' }),
  2: () => fundo('raios', '#B79CFF', '#A88BF5') + boneco({ ...MALU, x: 380, w: 520, inchado: [0, 1, 'inchado'], poses: [[null, 'mao_testa', 'triste']] }) +
     etq('INCHADO', 580, 430, { w: 'inchado', tipo: 'nao', som: 'nao' }),
  3: () => fundo('quarto') + boneco({ ...MALU, x: 290, poses: [[null, 'cansado', 'cansado']] }) + grande('8H', 560, 410, 160, { w: 'oito' }) +
     bateria(560, 620, 240, .1, { w: 'exausta' }) + ilu('bed', 480, 860, 280, { w: 'dorme' }),
  4: () => fundo('raios', '#59B7FF', '#46A8F5') + boneco({ ...MALU, x: 420, ciclo: 'correndo', mover: [180, 420, 'comer'], poses: [[null, 'em_pe', 'assustado'], ['comer', 'dor_barriga', 'dor']] }) +
     ilu('hamburger', 600, 420, 160, { w: 'comer' }) + ilu('toilet', 560, 800, 200, { w: 'banheiro' }),
  5: () => fundo('raios', '#FF8FB5', '#FF7EA8') + boneco({ ...MALU, x: 380, w: 520, marcas: ['espinhas'], poses: [[null, 'mao_queixo', 'triste']] }) +
     etq('NÃO SOME', 600, 440, { w: 'some', tipo: 'nao', som: 'nao' }),
  6: () => fundo('cozinha') + boneco({ ...MALU, x: 290, poses: [[null, 'pensando', 'apaixonado']] }) +
     balao(500, 380, 400, balaoIlu('doughnut'), { w: 'vontade' }) + ilu('chocolate-bar', 560, 760, 150, { w: 'doce' }) + ilu('candy', 690, 790, 110, { w: 'doce', d: .15 }),
  7: () => fundo('sala') + boneco({ ...MALU, x: 300, barriga: [.15, 1.1, 'estufada'], segura: 'banana', poses: [[null, 'segurando', 'feliz'], ['estufada', 'dor_barriga', 'dor']] }) +
     ilu('banana', 600, 420, 170, { w: 'banana' }) + etq('ESTUFADA', 540, 640, { w: 'estufada', tipo: 'nao', som: 'nao' }),
  // VIRADA: tudo isso é uma coisa só
  8: () => fundo('raios', '#FFC53D', '#FFB31A') + ['collision', 'sleeping-face', 'toilet', 'doughnut', 'banana', 'pouting-face'].map((n, i) => {
       const a = i / 6 * Math.PI * 2 - Math.PI / 2; return ilu(n, 450 + Math.cos(a) * 280 - 70, 700 + Math.sin(a) * 280 - 70, 140, { w: 'tudo', d: i * .12 }); }).join('') +
     grande('?', 400, 560, 300, { w: 'coisa' }),
  // CAUSA: modo estresse
  9: () => fundo('raios', '#F0576B', '#E8384F') + boneco({ ...MALU, x: 280, poses: [[null, 'encolhido', 'assustado'], ['cortisol', 'bracos_cruzados', 'bravo']] }) +
     medidor(500, 420, 400, .3, .96, 'ESTRESSE', { w: 'estresse' }) + etq('CORTISOL', 560, 800, { w: 'cortisol', s: 58 }) + ilu('high-voltage', 330, 520, 120, { w: 'cima' }),
  10: () => fundo('quarto') + boneco({ ...MALU, x: 300, poses: [[null, 'cansado', 'cansado'], ['tensão', 'encolhido', 'bravo'], ['sono', 'sentado_triste', 'cansado']] }) +
     ilu('hourglass-not-done', 560, 420, 150, { w: 'passa' }) + ilu('high-voltage', 740, 420, 150, { w: 'tensão' }) + ilu('crescent-moon', 600, 640, 160, { w: 'sono' }),
  // DESCOBERTA: magnésio
  11: () => fundo('pontos', '#1F9D6B') + ilu('magnifying-glass-tilted-left', 150, 410, 200, { w: 'pesquisando', a: 'gira' }) + grande('300+', 390, 420, 190, { w: 'trezentas' }) +
     etq('REAÇÕES NO CORPO', 150, 660, { w: 'reações', s: 50 }) + ilu('chart-decreasing', 640, 700, 130, { w: 'suficiente' }) +
     grande('Mg', 300, 830, 210, { w: 'magnésio', cor: '#7FE3FF' }) + ilu('sparkles', 560, 860, 140, { w: 'magnésio', d: .2 }),
  12: () => fundo('raios', '#2F80ED', '#2670D9') + ilu('flexed-biceps', 150, 420, 190, { w: 'músculos' }) + ilu('brain', 420, 420, 190, { w: 'nervoso' }) + ilu('high-voltage', 690, 420, 190, { w: 'energia' }) +
     etq('MÚSCULOS', 140, 650, { w: 'músculos', tipo: 'sim', s: 38 }) + etq('NERVOS', 420, 650, { w: 'nervoso', tipo: 'sim', s: 38 }) + etq('ENERGIA', 680, 650, { w: 'energia', tipo: 'sim', s: 38 }) +
     boneco({ ...MALU, x: 270, w: 330, poses: [[null, 'em_pe', 'surpreso'], ['energia', 'comemorando', 'muito_feliz']] }),
  // PRODUTO como meio
  13: () => fundo('raios', '#0E4DB3', '#0A3F96') + ilu('sparkles', 150, 420, 170, { w: 'completo' }) + foto('FRASCO-MG3.jpg', 300, 400, 440, 640, { w: 'esse', fit: 'cover' }) +
     grande('3 EM 1', 180, 1070, 130, { w: 'três' }),
  14: () => fundo('raios', '#0E4DB3', '#0A3F96') + lista(140, 420, ['QUELATO · ABSORVE', 'DIMALATO · ENERGIA', 'TREONATO · CÉREBRO'], { ws: ['quelato', 'dimalato', 'treonato'] }) +
     foto('PG-MG3-formula-sem-preco.jpg', 420, 800, 340, 340, { w: 'quelato', d: .3, fit: 'cover', brilho: false }),
  15: () => fundo('pontos', '#E86A2B') + ilu('lotion-bottle', 150, 420, 150, { w: 'três' }) + ilu('lotion-bottle', 320, 420, 150, { w: 'três', d: .12 }) + ilu('lotion-bottle', 490, 420, 150, { w: 'três', d: .24 }) +
     preco('R$ $$$', 660, 470, { w: 'separados' }) + xis(280, 400, 220, { w: 'separados', d: .3 }) +
     foto('FRASCO-MG3.jpg', 240, 660, 300, 360, { w: 'só', fit: 'cover' }) + ok(590, 760, 150, { w: 'só', d: .2 }) +
     etq('SEM AÇÚCAR', 140, 1060, { w: 'açúcar', tipo: 'sim', s: 40 }) + etq('SEM GLÚTEN', 140, 1150, { w: 'glúten', tipo: 'sim', s: 40 }),
  16: () => fundo('pontos', '#1F9D6B') + ilu('shopping-cart', 690, 560, 150, { w: 'passou' }) + grande('+18 MIL', 150, 430, 170, { w: 'dezoito' }) + etq('VENDIDOS', 170, 630, { w: 'vendidos', s: 54 }) +
     grande('4,8', 160, 780, 190, { w: 'quatro', cor: '#FFD43B' }) + etq('★★★★★', 450, 850, { w: 'nota', s: 44 }),
  // CTA
  17: () => fundo('raios', '#FF8A3D', '#FF7A26') + card(160, 400, 760, 'MAGNÉSIO 3 EM 1 <em>BLASMAX</em>', { w: 'magnésio' }) +
     foto('FRASCO-MG3.jpg', 390, 580, 300, 420, { w: 'blasmax', fit: 'cover' }) +
     boneco({ ...MALU, x: 230, w: 330, poses: [[null, 'comemorando', 'muito_feliz'], ['carrinho', 'apontando', 'feliz']] }) +
     ilu('backhand-index-pointing-down', 690, 880, 90, { w: 'embaixo', a: 'desce' }) + botaoCarrinho(140, 1100, 'TOCA NO CARRINHO', { w: 'carrinho' }),
};
const ROTEIRO = Array.from({ length: 17 }, (_, i) => [i + 1, [i]]);
