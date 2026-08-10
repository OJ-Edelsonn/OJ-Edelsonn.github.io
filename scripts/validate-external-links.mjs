import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesIn(fullPath)));
    if (entry.isFile() && /\.(?:astro|md|mdx|ts)$/.test(entry.name)) files.push(fullPath);
  }

  return files;
}

const sourceFiles = await filesIn(path.join(process.cwd(), 'src'));
const urls = new Set();

for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/https:\/\/[^\s'"<>\])]+/g)) urls.add(match[0]);
}

const ignoredHosts = new Set(['schema.org', 'oj-edelsonn.github.io']);
const validatedUrls = [...urls].filter((url) => !ignoredHosts.has(new URL(url).hostname));
const failures = [];
for (const url of validatedUrls.sort()) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Edelson-Portfolio-Link-Validator/1.0' },
    });
    if (response.status === 405) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'Edelson-Portfolio-Link-Validator/1.0' },
      });
    }

    const restricted = [401, 403, 429, 999].includes(response.status);
    const reachable =
      restricted ||
      (response.status >= 200 && response.status < 500 && ![404, 410].includes(response.status));
    const state = restricted ? 'restricted' : reachable ? 'reachable' : 'failed';
    console.log(`${response.status}\t${state}\t${url}`);
    if (!reachable) failures.push(`${response.status} ${url}`);
  } catch (error) {
    failures.push(`${error.name}: ${url}`);
    console.log(`ERROR\tfailed\t${url}`);
  } finally {
    clearTimeout(timeout);
  }
}

if (failures.length > 0) throw new Error(`External link failures:\n${failures.join('\n')}`);
console.log(`External links validated: ${validatedUrls.length}.`);
