// Captures the features page's figures from the prototypes' demo pages.
//
// Each prototype page must be served first (`npm start` in its folder):
//   P-7 on 8747, P-10 on 8750, P-11 on 8751, P-12 on 8752.
// Uses the Playwright install in waveform-viewer, so nothing is installed here.
//
//   node tools/capture-figures.mjs
//
// Writes PNGs to features/img/ and copies Glyphica's rendered SVGs beside them.

import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const hub = join(here, '..', '..');
const out = join(here, '..', 'features', 'img');
const { chromium } = await import(join(hub, 'waveform-viewer/node_modules/playwright/index.mjs'));

// [port, [[file, selector, index, hover?], ...]]. Hover is a fraction of the element's box, so
// an eye's occupancy slices are filled in.
const jobs = [
  [8751, [['p11-verdict', 'section#verdict', 0], ['p11-bode', 'section.wv-plot', 0]]],
  [8752, [['p12-verdict', 'section#verdict', 0], ['p12-inl-dnl', 'section.wv-plot', 0]]],
  [8747, [['p7-dpll-lock', 'section.wv-plot', 0]]],
  [8750, [
    ['p10-nrz-stat', 'section.wv-gridplot', 0, [0.40, 0.30]],
    ['p10-pam4-stat', 'section.wv-gridplot', 5, [0.40, 0.30]],
    ['p10-nrz-time', 'section.wv-gridplot', 10],
  ]],
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
});
for (const [port, shots] of jobs) {
  const page = await context.newPage();
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  for (const [name, selector, index, hover] of shots) {
    const element = page.locator(selector).nth(index);
    await element.scrollIntoViewIfNeeded();
    if (hover) {
      const box = await element.boundingBox();
      await page.mouse.move(box.x + box.width * hover[0], box.y + box.height * hover[1]);
      await page.waitForTimeout(600);
    }
    await element.screenshot({ path: join(out, `${name}.png`) });
    console.log(`${name}.png`);
  }
  await page.close();
}
await browser.close();

for (const [source, target] of [['ota.svg', 'glyphica-ota.svg'], ['dac6.svg', 'glyphica-dac6.svg']]) {
  copyFileSync(join(hub, 'graphical-editor', 'out', source), join(out, target));
  console.log(target);
}
