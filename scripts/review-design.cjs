// Browser evidence for the public portfolio. Test tooling is isolated from application dependencies.
const { chromium } = require(process.env.UI_TOOLS + '/node_modules/playwright');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const out = path.resolve('design-review');
const root = path.resolve('dist');
const report = { references: [], pages: [] };
(async () => {
  await fs.mkdir(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  if (process.env.REFERENCE_AUDIT === '1') {
    for (const [name, url] of [['adrenlabs', 'https://adrenlabs.ai/'], ['adren', 'https://adren.ai/']]) {
      try {
        const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        const brand = await page.evaluate(() => {
          const counts = new Map();
          for (const el of document.querySelectorAll('body *')) {
            const style = getComputedStyle(el);
            for (const key of ['color', 'backgroundColor', 'borderColor']) {
              const value = style[key];
              if (value && value !== 'rgba(0, 0, 0, 0)') counts.set(value, (counts.get(value) || 0) + 1);
            }
          }
          const styleOf = (el) => {
            if (!el) return null;
            const s = getComputedStyle(el);
            return { font: s.fontFamily, size: s.fontSize, weight: s.fontWeight, tracking: s.letterSpacing, color: s.color, background: s.backgroundColor, radius: s.borderRadius };
          };
          return { title: document.title, text: document.body.innerText.slice(0, 12000), body: styleOf(document.body), heading: styleOf(document.querySelector('h1')), buttons: [...document.querySelectorAll('button,a')].filter(el => el.getBoundingClientRect().width > 70).slice(0, 12).map(el => ({ text: el.textContent.trim().slice(0, 80), ...styleOf(el) })), palette: [...counts].sort((a,b) => b[1]-a[1]).slice(0, 20), images: [...document.images].map(i => ({ alt: i.alt, src: i.src })).slice(0, 15), stylesheets: [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href) };
        });
        report.references.push({ name, status: response?.status(), ...brand });
        console.log('REFERENCE ' + name + ' ' + JSON.stringify(brand));
        await page.screenshot({ path: path.join(out, name + '-desktop.png') });
        await fs.writeFile(path.join(out, name + '.html'), await page.content());
      } catch (error) { report.references.push({ name, error: String(error) }); console.log('REFERENCE_UNAVAILABLE', name, String(error)); }
    }
  }
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.pdf': 'application/pdf' };
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (!url.pathname.startsWith('/caleb-portfolio/')) { res.writeHead(404).end(); return; }
      let file = path.resolve(root, decodeURIComponent(url.pathname.slice('/caleb-portfolio/'.length)));
      if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
      if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(await fs.readFile(file));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('http://127.0.0.1:4173/caleb-portfolio/', { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(out, `portfolio-${width}.png`), fullPage: true });
    const data = await page.evaluate(() => ({ title: document.title, width: innerWidth, scrollWidth: document.documentElement.scrollWidth, h1: document.querySelector('h1')?.textContent }));
    report.pages.push(data);
    console.log('PAGE', JSON.stringify(data));
  }
  await fs.writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  await new Promise(resolve => server.close(resolve));
})().catch(error => { console.error(error); process.exit(1); });
