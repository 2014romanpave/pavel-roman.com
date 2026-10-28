// Builds static HTML for /ua/ /ru/ /pl/ /en/ (+ / fallback), sitemap.xml and robots.txt
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssr = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const { render, DICT, LANGS, HTML_LANG, SITE_URL, CONTACTS } = ssr;
const tpl = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const OG_LOCALE = { ua: 'uk_UA', ru: 'ru_RU', pl: 'pl_PL', en: 'en_US' };

function head(lang) {
  const t = DICT[lang];
  const url = `${SITE_URL}/${lang}/`;
  const alts = LANGS.map((l) => `<link rel="alternate" hreflang="${HTML_LANG[l]}" href="${SITE_URL}/${l}/" />`).join('\n    ');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pavel Roman — Web & Brand Design',
    url,
    image: `${SITE_URL}/og-image.jpg`,
    email: CONTACTS.email,
    telephone: CONTACTS.phone.replace(/\s/g, ''),
    areaServed: 'PL',
    address: { '@type': 'PostalAddress', addressLocality: 'Poznań', addressCountry: 'PL' },
    founder: { '@type': 'Person', name: 'Roman Pavel', jobTitle: 'Web & Brand Designer' },
    sameAs: [CONTACTS.behance, CONTACTS.telegram],
    knowsLanguage: ['uk', 'ru'],
    makesOffer: t.packs.map((p) => ({ '@type': 'Offer', name: p.name, priceSpecification: { '@type': 'PriceSpecification', minPrice: Number(p.price.replace(/\D/g, '')), priceCurrency: 'PLN' } })),
  };
  return `<title>${esc(t.metaTitle)}</title>
    <meta name="description" content="${esc(t.metaDesc)}" />
    <link rel="canonical" href="${url}" />
    ${alts}
    <link rel="alternate" hreflang="x-default" href="${SITE_URL}/ua/" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(t.metaTitle)}" />
    <meta property="og:description" content="${esc(t.metaDesc)}" />
    <meta property="og:image" content="${SITE_URL}/og-image.jpg" />
    <meta property="og:locale" content="${OG_LOCALE[lang]}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

function page(lang) {
  return tpl
    .replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[lang]}">`)
    .replace(/<title>.*?<\/title>/, '')
    .replace('<!--head-->', head(lang))
    .replace('<div id="root"><!--app--></div>', `<div id="root" data-ssr="1">${render(lang)}</div>`);
}

for (const l of LANGS) {
  fs.mkdirSync(path.join(dist, l), { recursive: true });
  fs.writeFileSync(path.join(dist, l, 'index.html'), page(l));
}
fs.writeFileSync(path.join(dist, 'index.html'), page('ua'));

const today = new Date().toISOString().slice(0, 10);
const urls = LANGS.map((l) => `  <url><loc>${SITE_URL}/${l}/</loc><lastmod>${today}</lastmod>${LANGS.map((a) => `<xhtml:link rel="alternate" hreflang="${HTML_LANG[a]}" href="${SITE_URL}/${a}/"/>`).join('')}</url>`).join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered:', LANGS.join(', '));
