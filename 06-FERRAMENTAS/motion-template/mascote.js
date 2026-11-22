// Mascotes 2D da C01 (SVG). tipo: rica | media | pobre | malu (narradora, moletom bege). expr: feliz | duvida | nojo | esperta | surpresa
window.mascote = function (tipo, expr, w) {
  const C = { rica: { roupa: '#7B3FE4', cabelo: '#3B2414' }, media: { roupa: '#8A94A6', cabelo: '#6B3E1F' }, pobre: { roupa: '#FF4F8B', cabelo: '#2A1A10' }, malu: { roupa: '#E9DCC6', cabelo: '#3A2618' } }[tipo];
  const boca = { feliz: '<path d="M88 132 Q110 152 132 132" stroke="#222" stroke-width="6" fill="none" stroke-linecap="round"/>',
    duvida: '<path d="M92 140 L128 134" stroke="#222" stroke-width="6" stroke-linecap="round"/>',
    nojo: '<path d="M90 142 Q100 130 110 142 Q120 154 130 140" stroke="#222" stroke-width="6" fill="none" stroke-linecap="round"/>',
    esperta: '<path d="M90 134 Q115 150 134 128" stroke="#222" stroke-width="6" fill="none" stroke-linecap="round"/>',
    surpresa: '<ellipse cx="110" cy="138" rx="10" ry="13" fill="#222"/>' }[expr || 'feliz'];
  const olhos = expr === 'esperta' ? '<path d="M78 98 L98 98" stroke="#222" stroke-width="6" stroke-linecap="round"/><circle cx="140" cy="98" r="8" fill="#222"/>'
    : '<circle cx="88" cy="98" r="8" fill="#222"/><circle cx="132" cy="98" r="8" fill="#222"/>';
  const extra = {
    rica: '<rect x="66" y="84" width="38" height="24" rx="8" fill="#111"/><rect x="116" y="84" width="38" height="24" rx="8" fill="#111"/><rect x="102" y="92" width="16" height="5" fill="#111"/>' +
          '<g fill="#fff" stroke="#ddd" stroke-width="2">' + [0,1,2,3,4,5,6].map(i => `<circle cx="${80+i*10}" cy="${208+Math.abs(3-i)*-2}" r="6"/>`).join('') + '</g>',
    media: '<circle cx="110" cy="28" r="26" fill="' + C.cabelo + '"/>',
    malu: '<path d="M30 100 Q14 200 40 270 L70 260 Q50 190 52 110 Z M190 100 Q206 200 180 270 L150 260 Q170 190 168 110 Z" fill="#3A2618"/><circle cx="110" cy="232" r="7" fill="#222"/>',
    pobre: '<path d="M40 62 Q110 10 180 62 L176 72 Q110 40 44 72 Z" fill="#9BD12E"/><path d="M176 62 L206 76 L184 84 Z" fill="#9BD12E"/>'
  }[tipo];
  return `<svg viewBox="0 0 220 520" width="${w||300}" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 120 Q20 20 110 30 Q200 20 190 120 L200 200 L20 200 Z" fill="${C.cabelo}"/>
    <rect x="58" y="190" width="104" height="170" rx="40" fill="${C.roupa}" stroke="#222" stroke-width="5"/>
    <path d="M62 230 L20 320 M158 230 L200 320" stroke="#222" stroke-width="8" stroke-linecap="round"/>
    <path d="M85 355 L75 500 M135 355 L145 500" stroke="#222" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="68" cy="502" rx="22" ry="10" fill="#222"/><ellipse cx="152" cy="502" rx="22" ry="10" fill="#222"/>
    <circle cx="110" cy="110" r="82" fill="#F6C9A4" stroke="#222" stroke-width="5"/>
    <path d="M32 96 Q40 30 110 30 Q180 30 188 96 Q150 60 110 64 Q70 60 32 96 Z" fill="${C.cabelo}"/>
    ${olhos}${boca}${extra}
  </svg>`;
};
