import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const [path, destination] of [
  ['resources/starting-plan/index.html', /https:\/\/rampupmcat\.com\/get\?src=/],
  ['resources/build-guide/index.html', /https:\/\/mrtapioca\.me\/get\?src=/],
]) {
  const html = fs.readFileSync(`${root}/${path}`, 'utf8');
  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /<main/);
  assert.match(html, destination);
  assert.doesNotMatch(html, /target="_blank"/);
}

console.log('RampUp resource pages passed');
