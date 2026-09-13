import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

/**
 * Genera sitemap.xml e robots.txt leggendo le pagine appena prerenderizzate.
 *
 * Scritta a mano, una sitemap su trenta URL in due lingue diverge dal sito
 * alla prima pagina aggiunta. Qui la fonte è la cartella di build: se una
 * pagina non è stata generata non finisce in sitemap, e se ne nasce una nuova
 * ci finisce da sola. Canonical e hreflang si rileggono dall'HTML, così sono
 * sempre gli stessi che vede il crawler — e anche il dominio dichiarato in
 * robots.txt viene da lì, invece che da una terza copia scritta a mano.
 */
const ROOT = new URL('..', import.meta.url).pathname;
const BROWSER_DIR = join(ROOT, 'dist', 'sidero-cantina', 'browser');

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name === 'index.html') yield path;
  }
}

const attribute = (html, pattern) => html.match(pattern)?.[1];

const pages = [];

for await (const file of htmlFiles(BROWSER_DIR)) {
  const html = await readFile(file, 'utf8');
  const canonical = attribute(html, /<link rel="canonical" href="([^"]+)"/);

  // La root serve solo a reindirizzare: non è una pagina da indicizzare.
  if (!canonical) continue;

  const alternates = [...html.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(
    ([, hreflang, href]) => ({ hreflang, href }),
  );

  pages.push({ canonical, alternates, file: relative(BROWSER_DIR, file) });
}

pages.sort((a, b) => a.canonical.localeCompare(b.canonical));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.canonical}</loc>
${page.alternates
  .map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`,
  )
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(join(BROWSER_DIR, 'sitemap.xml'), xml, 'utf8');

const origin = new URL(pages[0].canonical).origin;
await writeFile(
  join(BROWSER_DIR, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  'utf8',
);

console.log(`sitemap.xml — ${pages.length} URL · robots.txt — ${origin}`);
