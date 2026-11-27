// V-C01-PSY-E11-A1-G1 · Psyllium Etron · "intestino é uma esteira" · STICKMAN 3D (cena 3D de massinha + persona à esquerda)
window.FOTOS = '../../03-PRODUTOS/P-ETRON-PSYLLIUM/fotos/';
const P = (poses, extra = {}) => persona({ x: 270, y: 1190, h: 640, poses, ...extra });
const I = (chaves) => tres('intestino', { chaves });
const ESTEIRA = { esteira: 1, anda: 1 };
const CENAS = {
  1: () => I([[null, { balao: 1, infla: .3 }], ['estufada', { balao: 1, infla: 1, treme: 1 }]]) + P([[null, 'pensando', 'a'], ['estufada', 'dor_barriga', 'a']]) +
     etq('ESTUFADA', 470, 1000, { w: 'balão', tipo: 'nao', som: 'nao', s: 48 }),
  2: () => I([[null, { balao: 1, infla: 1, treme: .5 }]]) + P([[null, 'cansado', 'a'], ['sabe', 'surpreso', 'a']]) +
     etq('COME BEM', 470, 940, { w: 'direitinho', tipo: 'sim', s: 42 }) + etq('BEBE ÁGUA', 470, 1030, { w: 'água', tipo: 'sim', s: 42 }) + grande('?', 660, 880, 150, { w: 'sabe' }),
  3: () => I([[null, { ...ESTEIRA, anda: .6 }]]) + P([[null, 'apresentando', 'a']]) + etq('INTESTINO = ESTEIRA', 440, 1010, { w: 'esteira', s: 44 }),
  4: () => I([[null, { ...ESTEIRA, anda: .3 }], ['volume', { ...ESTEIRA, anda: .6, fibra: .5 }], ['água', { ...ESTEIRA, anda: .8, fibra: .5, agua: 1 }], ['fibra', { ...ESTEIRA, anda: 1.4, fibra: 1, agua: 1 }]]) +
     P([[null, 'apontando', 'a'], ['fibra', 'joinha', 'a']]) + etq('VOLUME', 470, 950, { w: 'volume', s: 44 }) + etq('ÁGUA', 470, 1040, { w: 'água', s: 44 }) + etq('= FIBRA', 470, 1130, { w: 'fibra', tipo: 'sim', s: 44 }),
  5: () => I([[null, { ...ESTEIRA, anda: 1.2, fibra: 1 }], ['menos', { ...ESTEIRA, anda: 0, fibra: .1, comida: 1 }]]) + P([[null, 'apresentando', 'b'], ['menos', 'surpreso', 'b']]) +
     medidor(500, 900, 280, .8, .2, 'FIBRA', { w: 'menos' }),
  6: () => I([[null, { mamao: 1 }]]) + P([[null, 'joinha', 'b'], ['enjoou', 'cansado', 'b']]) + calendario(520, 950, 200, 21, { w: 'terceira', marca: '✓' }) + etq('ENJOOU', 470, 1170, { w: 'enjoou', tipo: 'nao', som: 'nao', s: 40 }),
  7: () => I([[null, { laxante: 1 }]]) + P([[null, 'pensando', 'b'], ['todo', 'bravo', 'a']]) + etq('NÃO É PRA TODO DIA', 440, 1010, { w: 'todo', tipo: 'nao', som: 'nao', s: 42 }),
  8: () => I([[null, { copo: 1, gosma: 0 }], ['gosma', { copo: 1, gosma: 1 }]]) + P([[null, 'surpreso', 'b'], ['gosma', 'dor_barriga', 'c']]) + etq('GOSMA', 470, 1010, { w: 'gosma', tipo: 'nao', som: 'nao', s: 50 }),
  9: () => I([[null, { semente: 1, gel: 0 }], ['água', { semente: 1, gel: 1 }]]) + P([[null, 'apresentando', 'a'], ['gel', 'surpreso', 'c']]) +
     etq('CASCA DA SEMENTE', 440, 960, { w: 'casca', s: 42 }) + etq('+ ÁGUA = GEL', 440, 1050, { w: 'gel', tipo: 'sim', s: 42 }),
  10: () => I([[null, { gel: 1 }], ['beliscar', { gel: .8 }]]) + P([[null, 'apresentando', 'b'], ['saciedade', 'joinha', 'a'], ['emagrecer', 'comemorando', 'b'], ['mágica', 'pensando', 'a']]) +
     etq('SACIEDADE', 470, 930, { w: 'saciedade', tipo: 'sim', s: 44 }) + etq('MENOS BELISCAR', 440, 1020, { w: 'beliscar', tipo: 'sim', s: 42 }) + etq('PODE AJUDAR', 470, 1110, { w: 'ajudar', s: 44 }),
  11: () => I([[null, { capsula: 0 }], ['cápsula', { capsula: 1 }]]) + P([[null, 'surpreso', 'a'], ['cápsula', 'comemorando', 'a']]) + titulo('FINALMENTE!', { top: 1010, s: 110 }),
  12: () => I([[null, { capsula: 1 }], ['rotina', { ...ESTEIRA, anda: 1.2, fibra: .6, agua: .6 }]]) + P([[null, 'apresentando', 'a'], ['rotina', 'joinha', 'b']]) +
     lista(460, 900, ['2 CÁPSULAS', 'COPO DE ÁGUA', 'SEM GOSMA'], { ws: ['duas', 'copo', 'gosma'] }),
  13: () => fundo('pontos', '#1F9D6B') + P([[null, 'apresentando', 'b'], ['duzentos', 'comemorando', 'c']]) +
     etq('SEM GLÚTEN', 470, 420, { w: 'glúten', tipo: 'sim', s: 44 }) + etq('SEM AÇÚCAR', 470, 520, { w: 'açúcar', tipo: 'sim', s: 44 }) + etq('SEM LACTOSE', 470, 620, { w: 'lactose', tipo: 'sim', s: 44 }) +
     grande('+200 MIL', 450, 760, 120, { w: 'duzentos' }) + etq('VENDIDOS', 480, 920, { w: 'vendidos', s: 44 }),
  14: () => I([[null, { ...ESTEIRA, anda: 0, comida: 1 }], ['fibra', { ...ESTEIRA, anda: 1.4, fibra: 1 }]]) + P([[null, 'pensando', 'c'], ['para', 'apontando', 'c']]) +
     titulo('SEM FIBRA, ELA PARA', { w: 'esteira', top: 1010, s: 84 }),
  15: () => fundo('raios', '#2E8B57', '#26784A') + card(160, 400, 760, 'PSYLLIUM <em>ETRON</em>', { w: 'psyllium' }) +
     foto('FRASCO-PSY.jpg', 480, 570, 290, 440, { w: 'etron', fit: 'cover' }) + P([[null, 'acenando', 'b'], ['carrinho', 'apontando_baixo', 'a']]) +
     botaoCarrinho(140, 1130, 'TOCA NO CARRINHO', { w: 'carrinho' }),
};
const ROTEIRO = Array.from({ length: 15 }, (_, i) => [i + 1, [i]]);
