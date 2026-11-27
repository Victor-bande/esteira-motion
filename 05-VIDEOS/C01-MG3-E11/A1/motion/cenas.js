// V-C01-MG3-E11-A1-G1 · Magnésio 3 em 1 Blasmax · "acelerador e freio" · STICKMAN 3D (cena 3D de massinha + persona apresentando)
// Persona: esquerda/centro (x 260–420), pés y1190, nunca no extremo direito, embaixo ou em cima.
window.FOTOS = '../../03-PRODUTOS/P-BLASMAX-MAGNESIO3EM1/fotos/';
const P = (poses, extra = {}) => persona({ x: 270, y: 1190, h: 640, poses, ...extra });
const M = (chaves) => tres('musculo', { chaves });
const CENAS = {
  1: () => M([[null, { c: .9, treme: 1, ca: .6 }]]) + P([[null, 'acenando', 'a'], ['ombro', 'pensando', 'b'], ['pedra', 'bravo', 'b']]) +
     etq('DURO FEITO PEDRA', 470, 1010, { w: 'pedra', tipo: 'nao', som: 'nao', s: 44 }),
  2: () => M([[null, { c: .9, treme: 1, ca: .6 }]]) + P([[null, 'cansado', 'a'], ['sabe', 'surpreso', 'a']]) + grande('?', 600, 960, 220, { w: 'sabe' }),
  3: () => M([[null, { c: .5, ca: 0, mg: 0 }], ['cálcio', { c: .95, ca: 1, mg: 0 }], ['magnésio', { c: .1, ca: .3, mg: 1 }]]) + P([[null, 'apresentando', 'a'], ['magnésio', 'apontando', 'a']]) +
     etq('CÁLCIO = CONTRAI', 460, 960, { w: 'cálcio', s: 44 }) + etq('MAGNÉSIO = SOLTA', 460, 1050, { w: 'magnésio', tipo: 'sim', s: 44 }),
  4: () => M([[null, { fibra: 0, pedais: 1, acel: 0, freio: 0 }], ['acelerador', { fibra: 0, pedais: 1, acel: 1, freio: 0 }], ['freio', { fibra: 0, pedais: 1, acel: 0, freio: 1 }]]) +
     P([[null, 'pensando', 'a'], ['freio', 'joinha', 'a']]) + etq('ACELERADOR', 360, 420, { w: 'acelerador', s: 46 }) + etq('FREIO', 680, 420, { w: 'freio', tipo: 'sim', s: 46 }),
  5: () => M([[null, { c: .3, mg: 1, ca: .3 }], ['gasta', { c: .6, mg: 1, ca: .5, foge: 1 }]]) + P([[null, 'apresentando', 'b'], ['ninguém', 'surpreso', 'b']]) +
     medidor(520, 860, 300, .9, .15, 'MAGNÉSIO', { w: 'gasta' }),
  6: () => M([[null, { c: .95, ca: 1, mg: 0, treme: 1 }]]) + P([[null, 'bravo', 'a'], ['tensa', 'cansado', 'b']]) +
     etq('TENSA', 470, 960, { w: 'tensa', tipo: 'nao', s: 44 }) + etq('CANSADA', 470, 1050, { w: 'cansada', tipo: 'nao', s: 44 }),
  7: () => M([[null, { c: .9, ca: 1 }], ['alivia', { c: .2, ca: .3 }], ['seguinte', { c: .95, ca: 1, treme: 1 }]]) + P([[null, 'pensando', 'c'], ['alivia', 'joinha', 'b'], ['duro', 'triste', 'a']]) +
     etq('MASSAGEM', 470, 960, { w: 'massagem', s: 44 }) + xis(650, 940, 130, { w: 'duro' }),
  8: () => M([[null, { c: .9, ca: 1 }], ['melhora', { c: .4, ca: .5 }], ['minutos', { c: .9, ca: 1 }]]) + P([[null, 'pensando', 'a'], ['minutos', 'triste', 'b']]) +
     etq('ALONGAR', 470, 960, { w: 'alongar', s: 44 }) + ilu('hourglass-not-done', 650, 1000, 120, { w: 'minutos' }),
  9: () => M([[null, { fibra: 0, cartao: 1 }]]) + P([[null, 'surpreso', 'c'], ['chora', 'bravo', 'c']]) +
     etq('SPA TODA SEMANA', 460, 960, { w: 'spa', s: 44 }) + preco('R$ $$$', 520, 1060, { w: 'chora' }),
  10: () => M([[null, { fibra: 0, capsula: 0 }], ['magnésio', { fibra: 0, capsula: 1 }]]) + P([[null, 'surpreso', 'a'], ['magnésio', 'comemorando', 'a']]) +
     titulo('FINALMENTE!', { top: 1000, s: 110 }),
  11: () => M([[null, { fibra: 0, capsula: 1, tres: 0 }], ['quelato', { fibra: 0, capsula: 1, tres: 1 }], ['dimalato', { fibra: 0, capsula: 1, tres: 2 }], ['treonato', { fibra: 0, capsula: 1, tres: 3 }]]) +
     P([[null, 'apresentando', 'a']]) + lista(470, 930, ['QUELATO', 'DIMALATO', 'TREONATO'], { ws: ['quelato', 'dimalato', 'treonato'] }),
  12: () => M([[null, { c: .9, ca: 1, mg: 0 }], ['ajuda', { c: .1, ca: .3, mg: 1 }]]) + P([[null, 'apresentando', 'b'], ['ajuda', 'joinha', 'a']]) +
     etq('SEM AÇÚCAR', 470, 960, { w: 'açúcar', tipo: 'sim', s: 42 }) + etq('SEM GLÚTEN', 470, 1050, { w: 'glúten', tipo: 'sim', s: 42 }),
  13: () => M([[null, { fibra: 0, pedais: 1, acel: 1, freio: 0 }], ['freio', { fibra: 0, pedais: 1, acel: 0, freio: 1 }]]) + P([[null, 'bravo', 'b'], ['freio', 'apontando', 'c']]) +
     titulo('PRECISA DE FREIO', { w: 'freio', top: 1000, s: 96 }),
  14: () => fundo('raios', '#1E88E5', '#1976D2') + card(160, 400, 760, 'MAGNÉSIO 3 EM 1 <em>BLASMAX</em>', { w: 'magnésio' }) +
     foto('FRASCO-MG3.jpg', 470, 580, 300, 420, { w: 'blasmax', fit: 'cover' }) + grande('+18 MIL', 470, 1030, 100, { w: 'dezoito' }) +
     P([[null, 'acenando', 'b'], ['carrinho', 'apontando_baixo', 'a']], { x: 270 }) + botaoCarrinho(140, 1130, 'TOCA NO CARRINHO', { w: 'carrinho' }),
};
const ROTEIRO = Array.from({ length: 14 }, (_, i) => [i + 1, [i]]);
