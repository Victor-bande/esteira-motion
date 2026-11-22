// v2 · 22/11/2026 · uso: node render.js <pasta-motion> <saida.mp4> [fps=30] [workers=4] [escala=1]
//                       node render.js <pasta-motion> <prefixo> 30 --frames t1,t2,...   (quadros soltos COM a grade de margens)
// A pasta-motion tem: cenas.js (a lista de cenas do vídeo) · tempos.json · voz.wav. O template (video.html) é fixo.
const { chromium } = require('playwright'); const { execFileSync } = require('child_process'); const fs = require('fs'); const path = require('path');
(async () => {
  const [dirArg, out, fpsArg, w4, lista] = process.argv.slice(2); const fps = +(fpsArg || 30); const dir = path.resolve(dirArg);
  const tempos = JSON.parse(fs.readFileSync(path.join(dir, 'tempos.json')));
  const frames = w4 === '--frames'; const escala = frames ? 0.5 : +(process.argv[6] || 1);
  const url = 'file://' + path.join(__dirname, 'video.html') + '?c=' + encodeURIComponent('file://' + path.join(dir, 'cenas.js')) + (frames ? '&grade=1' : '');
  const b = await chromium.launch();
  const abre = async () => { const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: escala });
    await p.goto(url); await p.waitForLoadState('networkidle'); await p.evaluate(() => document.fonts.ready);
    const d = await p.evaluate(t => window.setup(t), tempos); return [p, d]; };
  if (frames) { const [p] = await abre(); for (const t of lista.split(',')) { await p.evaluate(x => window.render(x), +t); await p.screenshot({ path: `${out}-${t}.jpg`, type: 'jpeg', quality: 75 }); } await b.close(); return; }
  const W = +(w4 || 4); const tmp = path.join(path.dirname(path.resolve(out)), '.quadros'); fs.rmSync(tmp, { recursive: true, force: true }); fs.mkdirSync(tmp, { recursive: true });
  const pags = await Promise.all(Array.from({ length: W }, abre)); const n = Math.ceil(pags[0][1] * fps); const t0 = Date.now();
  await Promise.all(pags.map(async ([p], k) => { for (let i = k; i < n; i += W) {
    await p.evaluate(x => window.render(x), i / fps);
    await p.screenshot({ path: path.join(tmp, String(i).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 90 });
    if (k === 0 && i % 300 === 0) console.log(`${i}/${n} · ${((Date.now() - t0) / 1000).toFixed(0)}s`); } }));
  await b.close();
  execFileSync('ffmpeg', ['-v','error','-y','-framerate',String(fps),'-i',path.join(tmp,'%05d.jpg'),'-i',path.join(dir,'voz.wav'),
    '-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','21','-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart', out]);
  fs.rmSync(tmp, { recursive: true, force: true }); console.log('ok', out, n, 'quadros', ((Date.now() - t0) / 1000).toFixed(0) + 's');
})();
