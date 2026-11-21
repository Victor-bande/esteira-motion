// uso: node render.js <pasta-motion do vídeo> <saida.mp4> [fps] [--frames t1,t2,...]
const { chromium } = require('playwright'); const { spawn } = require('child_process'); const fs = require('fs'); const path = require('path');
(async () => {
  const [dir, out, fpsArg, flag, lista] = process.argv.slice(2); const fps = +(fpsArg || 30);
  const tempos = JSON.parse(fs.readFileSync(path.join(dir, 'tempos.json')));
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(__dirname, 'video.html')); await p.waitForLoadState('networkidle'); await p.evaluate(() => document.fonts.ready);
  const dur = await p.evaluate(t => window.setup(t), tempos);
  if (flag === '--frames') { for (const t of lista.split(',')) { await p.evaluate(x => window.render(x), +t); await p.screenshot({ path: `${out}-${t}.jpg`, type: 'jpeg', quality: 80 }); } await b.close(); return; }
  const ff = spawn('ffmpeg', ['-v','error','-y','-f','image2pipe','-framerate',String(fps),'-i','-','-i',path.join(dir,'voz.wav'),
    '-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','20','-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart', out], { stdio: ['pipe','inherit','inherit'] });
  const n = Math.ceil(dur * fps);
  for (let i = 0; i < n; i++) { await p.evaluate(x => window.render(x), i / fps); const img = await p.screenshot({ type: 'jpeg', quality: 88 });
    if (!ff.stdin.write(img)) await new Promise(r => ff.stdin.once('drain', r)); if (i % 300 === 0) console.log(`${i}/${n}`); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close(); console.log('ok', out, dur.toFixed(1) + 's');
})();
