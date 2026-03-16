#!/usr/bin/env node
/**
 * Post-build script: prefix all root-relative URLs with a base path.
 * Usage: node scripts/rebase-urls.mjs /tho-website
 * Only needed for GitHub Pages (project pages live under /repo-name/).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = process.argv[2];
if (!base) {
  console.log('No base path provided, skipping URL rebase.');
  process.exit(0);
}

const distDir = join(process.cwd(), 'dist');

async function getHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.html'))
    .map((e) => join(e.parentPath || e.path, e.name));
}

// Also handle CSS files for url() references
async function getCssFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.css'))
    .map((e) => join(e.parentPath || e.path, e.name));
}

const htmlFiles = await getHtmlFiles(distDir);
const cssFiles = await getCssFiles(distDir);

let htmlCount = 0;
for (const file of htmlFiles) {
  let content = await readFile(file, 'utf-8');
  const original = content;

  // Rewrite href="/..." and src="/..." (but not href="//..." or src="//..." for protocol-relative)
  // Also skip mailto:, tel:, https://, http://
  content = content.replace(/(href|src|srcset|action)="\/(?!\/)/g, `$1="${base}/`);

  // Fix doubled slashes from base + /path
  const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  content = content.replace(new RegExp(`${escaped}//`, 'g'), `${base}/`);

  if (content !== original) {
    await writeFile(file, content);
    htmlCount++;
  }
}

let cssCount = 0;
for (const file of cssFiles) {
  let content = await readFile(file, 'utf-8');
  const original = content;
  content = content.replace(/url\(\/(?!\/)/g, `url(${base}/`);
  if (content !== original) {
    await writeFile(file, content);
    cssCount++;
  }
}

console.log(`Rebased ${htmlCount} HTML and ${cssCount} CSS files with base: ${base}`);
