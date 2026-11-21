// uso: node render.js <pasta-motion> <saida.mp4> [fps=30] [workers=4]   ·   node render.js <pasta> <prefixo> 30 --frames t1,t2
// Renderiza quadros em paralelo (720x1280) para uma pasta e monta o MP4 com a voz no fim.
const { chromium } = require('playwright'); const { execFileSync } = require('child_process'); const fs = require('fs'); const path = require('path');
(async () => {
  const [dir, out, fpsArg, w4, lista] = process.argv.slice(2); const fps = +(fpsArg || 30);
  const tempos = JSON.parse(fs.readFileSync(path.join(dir, 'tempos.json')));
  const b = await chromium.launch();
  const abre = async () => { const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 / 3 });
    await p.goto('file://' + path.join(__dirname, 'video.html')); await p.waitForLoadState('networkidle'); await p.evaluate(() => document.fonts.ready);
    const d = await p.evaluate(t => window.setup(t), tempos); return [p, d]; };
  if (w4 === '--frames') { const [p] = await abre(); for (const t of lista.split(',')) { await p.evaluate(x => window.render(x), +t); await p.screenshot({ path: `${out}-${t}.jpg`, type: 'jpeg', quality: 80 }); } await b.close(); return; }
  const W = +(w4 || 4); const tmp = path.join(path.dirname(out), '.quadros'); fs.rmSync(tmp, { recursive: true, force: true }); fs.mkdirSync(tmp, { recursive: true });
  const pags = await Promise.all(Array.from({ length: W }, abre)); const n = Math.ceil(pags[0][1] * fps); const t0 = Date.now();
  await Promise.all(pags.map(async ([p], k) => { for (let i = k; i < n; i += W) {
    await p.evaluate(x => window.render(x), i / fps);
    await p.screenshot({ path: path.join(tmp, String(i).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 90 });
    if (k === 0 && i % 200 === 0) console.log(`${i}/${n} · ${((Date.now() - t0) / 1000).toFixed(0)}s`); } }));
  await b.close();
  execFileSync('ffmpeg', ['-v','error','-y','-framerate',String(fps),'-i',path.join(tmp,'%05d.jpg'),'-i',path.join(dir,'voz.wav'),
    '-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','20','-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart', out]);
  fs.rmSync(tmp, { recursive: true, force: true }); console.log('ok', out, n, 'quadros', ((Date.now() - t0) / 1000).toFixed(0) + 's');
})();
