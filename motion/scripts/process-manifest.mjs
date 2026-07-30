// Scans public/process for image frames and writes src/process/manifest.json.
// Frames play in filename order, so prefix them wf-01, wf-02, ... hi-01, etc.
// Runs automatically before `npm run studio` and the process render scripts.
import {readdirSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const framesDir = join(root, 'public', 'process');
const outFile = join(root, 'src', 'process', 'manifest.json');

const files = readdirSync(framesDir)
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'en', {numeric: true}));

// Stage kinds: wf = wireframe, ui = final screen, el = pulled element
const KIND_LABELS = {wf: 'Wireframe', ui: 'Design', el: 'Detail'};

const frames = files.map((file) => {
  const stem = file.replace(/\.[^.]+$/, '');
  // Leading number sets play order only. Optional digits after the kind keep
  // the board's own number: "01-wf04-swap-flow" -> tag "WF-04", label "Swap Flow";
  // "06-ui-insights-dark" -> tag "UI-06".
  const m = stem.match(/^(\d+)-([a-z]+?)(\d*)-(.*)$/i);
  const tag = m ? `${m[2].toUpperCase()}-${(m[3] || m[1]).padStart(2, '0')}` : stem.toUpperCase();
  const kind = m ? (KIND_LABELS[m[2].toLowerCase()] ?? m[2].toUpperCase()) : '';
  const label = (m ? m[4] : stem)
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {src: `process/${file}`, tag, kind, label};
});

mkdirSync(dirname(outFile), {recursive: true});
writeFileSync(outFile, JSON.stringify({frames}, null, 2) + '\n');
console.log(`process manifest: ${frames.length} frame(s)`);
for (const f of frames) console.log(`  ${f.tag} — ${f.label}`);
