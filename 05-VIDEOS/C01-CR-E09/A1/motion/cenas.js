// V-C01-CR-E09-A1-G1 · Malu · Creatina Rosa · E09 "rotina que falha" · template stickman v1
// Zona útil: x120–960 (y380–840) · x120–780 (y840–1240). Pés do boneco em y1180.
const MALU = { acc: 'laco', w: 430, y: 1200 };
const CENAS = {
  // 1 · gancho: rotina que você já faz + resultado que não vem
  1: () => fundo('rua') + boneco({ ...MALU, x: 330, ciclo: 'andando', mover: [170, 330, 'mesmo'], poses: [[null, 'em_pe', 'feliz'], ['mesmo', 'em_pe', 'duvida'], ['pernas', 'cansado', 'cansado']] }) +
     ilu('tear-off-calendar', 600, 400, 190, { w: 'todo' }) + ilu('green-salad', 790, 420, 160, { w: 'come' }) +
     etq('PERNAS FRACAS', 430, 640, { w: 'fracas', tipo: 'nao', som: 'nao' }) + ilu('leg', 560, 740, 170, { w: 'pernas' }),
  // 2 · sabe por quê?
  2: () => fundo('raios', '#FFC53D', '#FFB31A') + boneco({ ...MALU, x: 330, poses: [[null, 'pensando', 'pensativo']] }) +
     grande('?', 600, 430, 380, { w: 'sabe' }) + ilu('light-bulb', 610, 880, 150, { w: 'quê' }),
  // 3 · a causa real + crença derrubada
  3: () => fundo('liso', '#EAF3FF') + titulo('DEPOIS DOS 30', { w: 'trinta', s: 110 }) +
     colunas(180, 560, [['30', .85, '#25C26E'], ['50', .62, '#FFC53D'], ['70', .4, '#E8384F']], { w: 'perde', a: 'fade' }) +
     ilu('person-running', 760, 560, 170, { w: 'ativo' }) + etq('ATÉ QUEM É ATIVO', 140, 1110, { w: 'ativo', s: 48 }),
  // 4 · o culpado: a reserva de energia do músculo
  4: () => fundo('dentro') + ilu('flexed-biceps', 200, 500, 440, { w: 'músculo' }) + ilu('high-voltage', 640, 440, 200, { w: 'energia' }) +
     seta(700, 760, 560, 680, .3, { w: 'creatina' }) + etq('CREATINA', 600, 760, { w: 'creatina', s: 58 }),
  // 5 · analogia: bateria do músculo
  5: () => fundo('raios', '#2F80ED', '#2670D9') + titulo('BATERIA DO MÚSCULO', { w: 'bateria', s: 96 }) +
     ilu('flexed-biceps', 150, 560, 270, { w: 'ela' }) + grande('=', 445, 600, 200, { w: 'funciona' }) + bateria(560, 590, 360, .92, { w: 'bateria' }),
  // 6 · mecanismo do problema no dia a dia
  6: () => fundo('sala') + boneco({ ...MALU, x: 300, segura: 'shopping-bags', poses: [[null, 'segurando', 'neutro'], ['subir', 'segurando', 'dor'], ['pesar', 'cansado', 'cansado']] }) +
     bateria(560, 430, 300, .14, { w: 'bateria' }) + ilu('chart-decreasing', 590, 620, 170, { w: 'menos' }) + etq('PESA', 540, 860, { w: 'pesar', tipo: 'nao', som: 'nao', s: 64 }),
  // 7 · o que você faz não resolve (1 kg de carne)
  7: () => fundo('cozinha') + boneco({ ...MALU, x: 290, poses: [[null, 'segurando', 'duvida'], ['quilo', 'assustado', 'assustado']], segura: 'cut-of-meat' }) +
     ilu('fork-and-knife-with-plate', 520, 410, 170, { w: 'compensar' }) + etq('5 G DE CREATINA', 470, 610, { w: 'cinco', s: 46 }) +
     ilu('cut-of-meat', 530, 700, 190, { w: 'quilo' }) + ilu('meat-on-bone', 690, 640, 170, { w: 'quilo', d: .15 }) + ilu('poultry-leg', 600, 560, 160, { w: 'quilo', d: .3 }) + ilu('cut-of-meat', 760, 560, 150, { w: 'quilo', d: .45 }) +
     grande('≈ 1 KG', 470, 900, 130, { w: 'quilo', d: .5 }) + etq('POR DIA', 480, 1070, { w: 'dia', tipo: 'nao', som: 'nao', s: 48 }),
  // 8 · finalmente: o produto como meio
  8: () => fundo('raios', '#FF7EB3', '#FF69A6') + titulo('FINALMENTE!', { o: 'essa', s: 130, top: 560 }) + ilu('sparkles', 170, 420, 180, { w: 'entra' }) + foto('FRASCO-CR.png', 420, 390, 340, 500, { w: 'essa' }) +
     etq('5 G POR DOSE', 140, 950, { w: 'cinco', tipo: 'sim', s: 50 }) + etq('+ GABA', 140, 1050, { w: 'gaba', tipo: 'sim', s: 46 }) + etq('+ L-TEANINA', 420, 1050, { w: 'l-teanina', tipo: 'sim', s: 46 }),
  // 9 · prova
  9: () => fundo('pontos', '#1F9D6B') + ilu('microscope', 150, 420, 220) + ilu('clipboard', 390, 440, 200, { w: 'estudados', d: .2 }) + ilu('page-facing-up', 610, 430, 190, { w: 'estudados', d: .4 }) +
     grande('+60 MIL', 160, 740, 170, { w: 'sessenta' }) + etq('VENDIDOS', 180, 960, { w: 'vendidos', s: 54 }) + ilu('shopping-cart', 540, 930, 200, { w: 'vendidos', d: .2 }),
  // 10 · bônus: sabor
  10: () => fundo('raios', '#FFB3D1', '#FFA3C7') + ilu('wrapped-gift', 150, 410, 190, { w: 'bônus' }) + foto('FOTO-CR-03-copo-rosa.jpg', 420, 380, 340, 470, { w: 'gosto', fit: 'cover' }) +
     ilu('lemon', 170, 640, 150, { w: 'lemonade' }) + ilu('strawberry', 300, 690, 120, { w: 'pink' }) + etq('PARECE SUCO', 140, 900, { w: 'suco', tipo: 'sim' }) +
     copo(540, 930, 180, '#EDE6D6', { w: 'empelota', grumos: 1 }) + xis(550, 960, 160, { w: 'empelota', d: .3 }),
  // 11 · uso ridículo de fácil
  11: () => fundo('cozinha') + boneco({ ...MALU, x: 270, w: 380, segura: 'cup-with-straw', poses: [[null, 'segurando', 'feliz'], ['pronto', 'comemorando', 'muito_feliz']] }) +
     lista(450, 420, ['2 DOSADORES', 'ÁGUA', 'MEXE'], { ws: ['dosadores', 'água', 'mexe'] }) + grande('10 S', 470, 820, 170, { w: 'dez' }) + ilu('alarm-clock', 640, 860, 130, { w: 'segundos' }),
  // 12 · frase-síntese
  12: () => fundo('rua') + boneco({ ...MALU, x: 320, segura: 'shopping-bags', poses: [[null, 'segurando', 'confiante'], ['mantém', 'comemorando', 'muito_feliz']] }) +
     titulo('SE MANTÉM<br>TODO DIA', { w: 'mantém', s: 104 }) + ilu('flexed-biceps', 600, 620, 200, { w: 'forte' }) + calendario(560, 840, 210, 30, { w: 'dia' }),
  // 13 · nome + CTA (uma ação)
  13: () => fundo('raios', '#FF8A3D', '#FF7A26') + card(160, 400, 760, 'CREATINA ROSA <em>DA SOUFIT</em>', { w: 'creatina' }) +
     foto('FRASCO-CR.png', 320, 600, 300, 400, { w: 'soufit' }) + etq('★★★★★', 650, 640, { w: 'avaliações', s: 40 }) +
     ilu('backhand-index-pointing-down', 640, 860, 140, { w: 'embaixo', a: 'desce' }) + botaoCarrinho(170, 1050, 'TOCA NO CARRINHO', { w: 'carrinho' }),
};
const ROTEIRO = [[1, [0]], [2, [1]], [3, [2]], [4, [3]], [5, [4]], [6, [5]], [7, [6]], [8, [7]], [9, [8]], [10, [9]], [11, [10]], [12, [11]], [13, [12]]];
