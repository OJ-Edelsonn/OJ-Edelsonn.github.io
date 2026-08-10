import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(fullPath)));
    if (entry.isFile() && /\.mdx?$/.test(entry.name)) files.push(fullPath);
  }

  return files;
}

function parseFrontmatter(source, file) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`Missing frontmatter: ${file}`);
  return match[1];
}

function field(frontmatter, name, file) {
  const match = frontmatter.match(
    new RegExp(`^${name}:\\s*(?:"([^"]*)"|'([^']*)'|(.+?))\\s*$`, 'm'),
  );
  const value = match?.[1] ?? match?.[2] ?? match?.[3];
  if (!value) throw new Error(`Missing ${name}: ${file}`);
  return value.trim();
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function entriesFor(relativeDirectory) {
  const directory = path.join(projectRoot, relativeDirectory);
  const files = await markdownFiles(directory);
  return Promise.all(
    files.map(async (file) => {
      const source = await readFile(file, 'utf8');
      const frontmatter = parseFrontmatter(source, file);
      return { file, source, frontmatter };
    }),
  );
}

const projects = await entriesFor('src/content/projects');
const projectPairs = new Map();
const projectPairAreas = new Map();
const projectSlugs = new Set();
const featuredByLocale = { es: 0, en: 0 };
const personalByLocale = { es: 0, en: 0 };
const academicAreasByLocale = {
  es: { business: 0, systems: 0 },
  en: { business: 0, systems: 0 },
};

for (const entry of projects) {
  const locale = field(entry.frontmatter, 'locale', entry.file);
  const translationKey = field(entry.frontmatter, 'translationKey', entry.file);
  const slug = field(entry.frontmatter, 'slug', entry.file);
  const draft = field(entry.frontmatter, 'draft', entry.file);
  const featured = field(entry.frontmatter, 'featured', entry.file);
  const projectType = field(entry.frontmatter, 'projectType', entry.file);
  const careerArea = field(entry.frontmatter, 'careerArea', entry.file);
  const directoryLocale = path.basename(path.dirname(entry.file));

  assert(locale === 'es' || locale === 'en', `Unsupported locale in ${entry.file}`);
  assert(locale === directoryLocale, `Locale/directory mismatch in ${entry.file}`);
  assert(draft === 'false', `Published project marked as draft in ${entry.file}`);
  assert(
    careerArea === 'business' || careerArea === 'systems',
    `Unsupported career area in ${entry.file}`,
  );
  assert(!projectSlugs.has(`${locale}:${slug}`), `Duplicate project slug ${locale}:${slug}`);
  projectSlugs.add(`${locale}:${slug}`);

  if (projectType === 'personal') personalByLocale[locale] += 1;
  if (featured === 'true') {
    assert(projectType === 'personal', `Featured academic project in ${entry.file}`);
    featuredByLocale[locale] += 1;
  }
  if (projectType === 'academic') academicAreasByLocale[locale][careerArea] += 1;
  const locales = projectPairs.get(translationKey) ?? new Set();
  locales.add(locale);
  projectPairs.set(translationKey, locales);
  const areas = projectPairAreas.get(translationKey) ?? new Set();
  areas.add(careerArea);
  projectPairAreas.set(translationKey, areas);
}

for (const [translationKey, locales] of projectPairs) {
  assert(
    locales.has('es') && locales.has('en'),
    `Incomplete project translation pair: ${translationKey}`,
  );
  assert(
    projectPairAreas.get(translationKey)?.size === 1,
    `Career area mismatch in translation pair: ${translationKey}`,
  );
}

assert(projectPairs.size === 19, `Expected 19 unique projects, found ${projectPairs.size}`);
assert(featuredByLocale.es === 7, `Expected 7 featured ES projects, found ${featuredByLocale.es}`);
assert(featuredByLocale.en === 7, `Expected 7 featured EN projects, found ${featuredByLocale.en}`);
assert(personalByLocale.es === 7, `Expected 7 personal ES projects, found ${personalByLocale.es}`);
assert(personalByLocale.en === 7, `Expected 7 personal EN projects, found ${personalByLocale.en}`);
assert(
  academicAreasByLocale.es.business === 2 && academicAreasByLocale.en.business === 2,
  'Expected 2 academic projects per locale in the Business area',
);
assert(
  academicAreasByLocale.es.systems === 10 && academicAreasByLocale.en.systems === 10,
  'Expected 10 academic projects per locale in the Systems area',
);
const inkaChipsEntries = projects.filter(
  (entry) => field(entry.frontmatter, 'translationKey', entry.file) === 'inka-chips-architecture',
);
assert(inkaChipsEntries.length === 2, 'Inka Chips translation pair is incomplete');
assert(
  inkaChipsEntries.every((entry) =>
    /Inka Chips/i.test(field(entry.frontmatter, 'title', entry.file)),
  ),
  'The architecture case title is not identified as Inka Chips',
);

const posts = await entriesFor('src/content/posts');
const postPairs = new Map();

for (const entry of posts) {
  const locale = field(entry.frontmatter, 'locale', entry.file);
  const translationKey = field(entry.frontmatter, 'translationKey', entry.file);
  const draft = field(entry.frontmatter, 'draft', entry.file);
  const directoryLocale = path.basename(path.dirname(entry.file));

  assert(locale === directoryLocale, `Post locale/directory mismatch in ${entry.file}`);
  assert(draft === 'true', `Unapproved post is not a draft in ${entry.file}`);
  const locales = postPairs.get(translationKey) ?? new Set();
  locales.add(locale);
  postPairs.set(translationKey, locales);
}

for (const [translationKey, locales] of postPairs) {
  assert(
    locales.has('es') && locales.has('en'),
    `Incomplete post translation pair: ${translationKey}`,
  );
}

assert(postPairs.size === 3, `Expected 3 editorial draft pairs, found ${postPairs.size}`);

console.log(
  `Content validated: ${projectPairs.size} project pairs, ${postPairs.size} draft post pairs.`,
);
