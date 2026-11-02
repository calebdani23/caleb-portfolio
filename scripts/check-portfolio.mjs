import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';

const root = resolve('dist');
const base = '/caleb-portfolio/';
const origin = 'https://calebdani23.github.io';
const pages = ['index.html', 'proyectos/adren-ai/index.html'];
const cache = new Map();
async function htmlAt(file) {
  if (!cache.has(file)) cache.set(file, await readFile(file, 'utf8'));
  return cache.get(file);
}
async function targetFor(pathname) {
  assert.ok(pathname.startsWith(base), `Internal link missing base: ${pathname}`);
  const relative = decodeURIComponent(pathname.slice(base.length));
  const path = resolve(root, relative);
  assert.ok(path === root || path.startsWith(root + '/'), `Path outside dist: ${pathname}`);
  let info;
  try { info = await stat(path); } catch { throw new Error(`Missing built target: ${pathname}`); }
  return info.isDirectory() ? join(path, 'index.html') : path;
}
let checked = 0;
for (const page of pages) {
  const file = join(root, page);
  const html = await htmlAt(file);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page}: expected one h1`);
  assert.match(html, /<html[^>]+lang="en"/, `${page}: missing language`);
  assert.ok(html.includes('TETR') && html.includes('AdrenLabs') && html.includes('Adren.ai'), `${page}: missing current profile`);
  assert.ok(html.includes('https://adrenlabs.ai/') && html.includes('https://adren.ai/'), `${page}: missing venture URLs`);
  assert.ok(!html.includes('Seeking higher challenge'), `${page}: stale timeline`);
  const pageUrl = origin + base + (page === 'index.html' ? '' : dirname(page) + '/');
  for (const match of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const value = match[2].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|tel:|data:|blob:)/i.test(value)) continue;
    const url = new URL(value, pageUrl);
    const target = await targetFor(url.pathname);
    await stat(target);
    if (match[1] === 'href' && url.hash && target.endsWith('.html')) {
      const content = await htmlAt(target);
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(content.includes(`id="${id}"`), `Missing anchor ${value} in ${page}`);
    }
    checked++;
  }
}
const home = await htmlAt(join(root, 'index.html'));
for (const text of ['Class of 2030', 'Bachelor of Science in Artificial Intelligence', '2026–Present', 'Zalmar Travel', 'AI Codebase Explainer', 'Visual Runner Server']) {
  assert.ok(home.includes(text), `Home missing ${text}`);
}
console.log(`Portfolio checks passed: ${pages.length} pages, ${checked} local links/assets and anchors; current profile and existing projects preserved.`);
