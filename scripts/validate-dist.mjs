import { access, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesIn(fullPath)));
    if (entry.isFile()) files.push(fullPath);
  }

  return files;
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function hasMeta(html, attribute, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`<meta[^>]+${attribute}=["']${escaped}["'][^>]*>`, 'i').test(html);
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

const files = await filesIn(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const broken = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(dist, file).replaceAll('\\', '/');
  const localized = relative.startsWith('es/') || relative.startsWith('en/');

  assert(!html.includes('http://localhost'), `Localhost URL leaked into ${relative}`);
  assert(
    !/(?:DNI|C[oó]digo(?: de admisi[oó]n)?|certificate number|admission code)[^<]{0,48}\d{6,}/i.test(
      html,
    ),
    `Possible private credential identifier leaked into ${relative}`,
  );
  if (relative !== 'index.html') {
    assert(/<title>[^<]+<\/title>/i.test(html), `Missing title in ${relative}`);
    assert(hasMeta(html, 'name', 'description'), `Missing description in ${relative}`);
  }

  if (localized) {
    assert(
      /<link[^>]+rel=["']canonical["'][^>]+href=/i.test(html),
      `Missing canonical in ${relative}`,
    );
    for (const locale of ['es', 'en', 'x-default']) {
      assert(
        new RegExp(`<link[^>]+hreflang=["']${locale}["']`, 'i').test(html),
        `Missing hreflang ${locale} in ${relative}`,
      );
    }
    for (const property of ['og:title', 'og:description', 'og:url', 'og:locale', 'og:image']) {
      assert(hasMeta(html, 'property', property), `Missing ${property} in ${relative}`);
    }
    for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      assert(hasMeta(html, 'name', name), `Missing ${name} in ${relative}`);
    }
    assert(html.includes('application/ld+json'), `Missing structured data in ${relative}`);
  }

  if (relative.includes('/404/') || relative === '404.html') {
    assert(
      /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html),
      `404 is indexable: ${relative}`,
    );
  }

  const references = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
    const clean = reference.split(/[?#]/)[0];
    if (!clean) continue;

    const target = clean.startsWith('/')
      ? path.join(dist, clean.slice(1))
      : path.resolve(path.dirname(file), clean);
    const candidates = clean.endsWith('/')
      ? [path.join(target, 'index.html')]
      : [target, path.join(target, 'index.html')];

    if (
      !(await Promise.any(
        candidates.map(async (candidate) =>
          (await exists(candidate)) ? candidate : Promise.reject(),
        ),
      ).catch(() => false))
    ) {
      broken.push(`${relative} -> ${reference}`);
    }
  }
}

assert(broken.length === 0, `Broken internal references:\n${broken.join('\n')}`);
assert(await exists(path.join(dist, 'robots.txt')), 'robots.txt was not generated');
assert(await exists(path.join(dist, 'sitemap-index.xml')), 'sitemap-index.xml was not generated');
assert(await exists(path.join(dist, 'og.png')), 'Social preview image was not generated');

for (const locale of ['es', 'en']) {
  const home = await readFile(path.join(dist, locale, 'index.html'), 'utf8');
  const catalog = await readFile(
    path.join(dist, locale, locale === 'es' ? 'proyectos' : 'projects', 'index.html'),
    'utf8',
  );
  const credentials = await readFile(
    path.join(dist, locale, locale === 'es' ? 'credenciales' : 'credentials', 'index.html'),
    'utf8',
  );

  assert(matches(home, /data-project-card/g) === 7, `Expected 7 featured cards on ${locale} home`);
  assert(
    matches(home, /project-card--emphasis/g) === 1,
    `Expected one emphasized card on ${locale} home`,
  );
  assert(
    matches(catalog, /<section[^>]+data-area-group/g) === 2,
    `Expected two academic career areas in ${locale} catalog`,
  );
  assert(
    matches(catalog, /<section[^>]+data-catalog-section/g) === 2,
    `Expected personal and academic sections in ${locale} catalog`,
  );
  assert(
    matches(catalog, /data-project-card[^>]+data-project-kind="personal"/g) === 7,
    `Expected 7 personal cards in ${locale} catalog`,
  );
  assert(
    matches(catalog, /data-project-card[^>]+data-project-kind="academic"/g) === 12,
    `Expected 12 academic cards in ${locale} catalog`,
  );
  assert(
    matches(catalog, /data-project-card[^>]+data-career-area="business"/g) === 2,
    `Expected 2 academic Business-area cards in ${locale} catalog`,
  );
  assert(
    matches(catalog, /data-project-card[^>]+data-career-area="systems"/g) === 10,
    `Expected 10 academic Systems-area cards in ${locale} catalog`,
  );
  assert(
    catalog.indexOf('data-project-type="personal"') <
      catalog.indexOf('data-project-type="academic"'),
    `Personal and academic sections are out of order in ${locale} catalog`,
  );
  assert(
    catalog.indexOf('data-career-area="business"') < catalog.indexOf('data-career-area="systems"'),
    `Academic career areas are out of order in ${locale} catalog`,
  );
  assert(
    matches(credentials, /data-credential-card/g) === 5,
    `Expected 5 credential cards in ${locale} credential archive`,
  );
  assert(
    matches(credentials, /data-credential-category/g) === 4,
    `Expected 4 categories in ${locale} credential archive`,
  );
}

const assets = await Promise.all(
  files.map(async (file) => ({ file, size: (await stat(file)).size })),
);
const javascript = assets.filter(({ file }) => file.endsWith('.js'));
const styles = assets.filter(({ file }) => file.endsWith('.css'));
const images = assets.filter(({ file }) => /\.(?:avif|png|jpe?g|webp)$/i.test(file));
const fonts = assets.filter(({ file }) => /\.(?:woff2?|ttf|otf)$/i.test(file));
const sum = (items) => items.reduce((total, item) => total + item.size, 0);

assert(
  javascript.every(({ size }) => size <= 25_000),
  'A JavaScript asset exceeds the 25 KB budget',
);
assert(sum(javascript) <= 100_000, 'Total JavaScript exceeds the 100 KB budget');
assert(
  styles.every(({ size }) => size <= 180_000),
  'A CSS asset exceeds the 180 KB budget',
);
assert(
  images.every(({ size }) => size <= 300_000),
  'An image exceeds the 300 KB budget',
);
assert(sum(fonts) <= 500_000, 'Total web fonts exceed the 500 KB budget');

console.log(
  `Distribution validated: ${htmlFiles.length} HTML files, 0 broken internal references.`,
);
console.log(`Budgets: JS ${sum(javascript)} B, CSS ${sum(styles)} B, fonts ${sum(fonts)} B.`);
