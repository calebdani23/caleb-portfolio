// Browser checks use isolated CI tools, not application dependencies.
const { chromium } = require(process.env.UI_TOOLS + '/node_modules/playwright');
const AxeBuilder = require(process.env.UI_TOOLS + '/node_modules/@axe-core/playwright').default;
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const root = path.resolve('dist');
const out = path.resolve('design-review');
const base = '/caleb-portfolio/';
const origin = 'http://127.0.0.1:4173';
const routes = ['', 'proyectos/adren-ai/', 'proyectos/zalmar-travel/', 'proyectos/ai-agent-observability-dashboard/', 'proyectos/ai-codebase-explainer/', 'proyectos/visual-runner-server/', 'proyectos/family-home-server-private-cloud/'];
const report = { layouts: [], accessibility: [], interactions: [], failures: [] };
const check = (condition, message) => { if (!condition) report.failures.push(message); };
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.pdf':'application/pdf', '.mp4':'video/mp4' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, origin);
    if (!url.pathname.startsWith(base)) { res.writeHead(404).end(); return; }
    let file = path.resolve(root, decodeURIComponent(url.pathname.slice(base.length)));
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(await fs.readFile(file));
  } catch { res.writeHead(404).end(); }
});

async function loadImages(page) {
  await page.evaluate(async () => {
    const visible = [...document.images].filter(image => image.getClientRects().length > 0);
    await Promise.all(visible.map(async image => {
      image.loading = 'eager';
      try { await image.decode(); } catch {}
    }));
  });
}
async function audit(page, name) {
  const result = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  const violations = result.violations.map(v => ({ id:v.id, impact:v.impact, description:v.description, nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary})).slice(0,8) }));
  report.accessibility.push({ name, violations, incomplete:result.incomplete.map(v=>v.id) });
  check(violations.length === 0, 'Accessibility findings: ' + name);
  console.log('AXE', name, JSON.stringify(violations));
}
(async () => {
  await fs.mkdir(out, {recursive:true});
  await new Promise(resolve => server.listen(4173,'127.0.0.1',resolve));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport:{width:1440,height:1000}, reducedMotion:'reduce' });
  const pageErrors = [];
  page.on('pageerror',error=>pageErrors.push(String(error)));
  page.on('response',response=>{ if(response.url().startsWith(origin) && response.status() >= 400) report.failures.push('HTTP '+response.status()+' '+response.url()); });
  for (const route of routes) {
    await page.goto(origin+base+route,{waitUntil:'networkidle'});
    await loadImages(page);
    for (const width of [320,390,768,1024,1440]) {
      await page.setViewportSize({width,height:1000});
      const layout = await page.evaluate(() => ({ width:innerWidth, scrollWidth:document.documentElement.scrollWidth, h1:document.querySelectorAll('h1').length, header:document.querySelectorAll('.site-header').length, footer:document.querySelectorAll('.site-footer').length }));
      report.layouts.push({route:route||'home',...layout});
      check(layout.scrollWidth <= width + 1, 'Horizontal overflow: '+route+' at '+width);
      check(layout.h1===1 && layout.header===1 && layout.footer===1,'Duplicate/missing page structure: '+route);
    }
    await audit(page,(route||'home')+' light 1440');
    const name = route ? route.split('/')[1] : 'home';
    await page.screenshot({path:path.join(out,name+'-light-desktop.png'),fullPage:true});
    if(!route){await page.screenshot({path:path.join(out,'home-hero.png')});}
    const images = await page.evaluate(() => [...document.images].filter(i=>i.getClientRects().length>0 && i.getAttribute('src')).map(i=>({src:i.getAttribute('src'),ok:i.complete&&i.naturalWidth>0})));
    check(images.every(i=>i.ok),'Broken rendered image: '+route);
    await page.locator('[data-theme-toggle]').click();
    await audit(page,(route||'home')+' dark 1440');
    if(!route) await page.screenshot({path:path.join(out,'home-dark-desktop.png'),fullPage:true});
    await page.locator('[data-theme-toggle]').click();
    if(route===''||route==='proyectos/adren-ai/'){
      await page.setViewportSize({width:390,height:844});
      await page.screenshot({path:path.join(out,name+'-light-mobile.png'),fullPage:true});
      await audit(page,name+' light 390');
    }
  }

  // Explicit interaction checks, including keyboard and persistent appearance.
  await page.setViewportSize({width:390,height:844});
  await page.goto(origin+base,{waitUntil:'networkidle'});
  const menu = page.locator('#mobile-menu');
  await menu.locator('summary').click();
  check(await menu.evaluate(el=>el.open),'Mobile menu does not open');
  await page.keyboard.press('Escape');
  check(!(await menu.evaluate(el=>el.open)),'Escape does not close menu');
  await menu.locator('summary').click();
  await menu.locator('a[href="#current-chapter"]').click();
  check(!(await menu.evaluate(el=>el.open)),'Section selection does not close menu');
  await page.locator('[data-theme-toggle]').click();
  await page.reload({waitUntil:'networkidle'});
  check(await page.locator('html').getAttribute('data-theme')==='dark','Dark theme does not persist');
  await page.screenshot({path:path.join(out,'home-dark-mobile.png'),fullPage:true});
  await page.locator('[data-theme-toggle]').click();
  const certificate = page.locator('.credential .disclosure').first();
  await certificate.locator('summary').click();
  check(await certificate.evaluate(el=>el.open),'Certificate disclosure does not open');
  await loadImages(page);
  await audit(page,'home certificates expanded 390');
  await certificate.locator('summary').click();
  const history = page.locator('#journey details');
  await history.locator('summary').click();
  check(await history.evaluate(el=>el.open),'Earlier history does not expand');
  await history.locator('summary').click();
  const next = page.locator('[data-carousel-target][data-direction="next"]').first();
  if(await next.count()){
    const target=await next.getAttribute('data-carousel-target');
    await next.click();
    check(await page.locator('#'+target).evaluate(el=>el.scrollLeft)>0,'Media carousel does not advance');
  }
  await page.goto(origin+base+'proyectos/zalmar-travel/',{waitUntil:'networkidle'});
  const imageLink = page.locator('[data-lightbox]').first();
  await imageLink.click();
  check(await page.locator('#media-viewer').evaluate(el=>el.open),'Image dialog does not open');
  await audit(page,'image dialog 390');
  await page.keyboard.press('Escape');
  check(!(await page.locator('#media-viewer').evaluate(el=>el.open)),'Image dialog does not close');
  check(await imageLink.evaluate(el=>document.activeElement===el),'Image dialog does not restore focus');
  check(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)==='auto','Reduced motion is not respected');
  report.interactions.push('mobile menu and Escape','section navigation','persistent theme','certificate disclosure','earlier history','media carousel','image dialog and focus return','reduced motion');
  const plain = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const nojs = await plain.newPage();
  await nojs.goto(origin+base,{waitUntil:'networkidle'});
  check(await nojs.locator('h1').isVisible(),'Core content hidden without JavaScript');
  await nojs.locator('#mobile-menu summary').click();
  check(await nojs.locator('#mobile-menu').evaluate(el=>el.open),'Native menu unavailable without JavaScript');
  check(!(await nojs.locator('[data-theme-toggle]').isVisible()),'Inactive theme button visible without JavaScript');
  report.interactions.push('no-JavaScript content and menu');
  check(pageErrors.length===0,'Browser errors: '+pageErrors.join('; '));
  await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2));
  console.log('DESIGN_RESULT',JSON.stringify({layouts:report.layouts.length,audits:report.accessibility.length,interactions:report.interactions,failures:report.failures}));
  await browser.close();
  await new Promise(resolve=>server.close(resolve));
  if(report.failures.length) process.exitCode=1;
})().catch(async error => {
  report.failures.push(String(error));
  await fs.mkdir(out,{recursive:true});
  await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2));
  console.error(error);
  process.exit(1);
});
