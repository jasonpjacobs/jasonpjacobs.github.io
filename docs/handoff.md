# Handoff: portfolio-site

## Morning: start here

The features page's first draft (R-004). Nothing is committed or pushed; the live site is
unchanged.

```bash
open features/index.html
```

What to judge:

- **Framing.** It opens with the thesis (humans as flight directors), then the flow diagram and
  the tools by brand name, then one section per demo: P-11 (OTA), P-12 (DAC, ngspice against
  Altus), P-7 (Altus DPLL), P-10 (statistical eye). Is that the story and the order?
- **Wording.** Every number comes from the prototypes' READMEs. Check the tool one-liners and
  the callouts ("Only what changed reruns", "Nothing ships without a go").
- **Figures.** Screenshots of the prototypes' own pages (light theme, 2× resolution), plus
  Glyphica's OTA and DAC SVGs. Click any screenshot to open it full size.
- **Dark mode and phone width.** Both checked headlessly: no broken images, no horizontal page
  scroll at 375 px (the flow diagram scrolls inside its card).

To regenerate the figures, serve the four prototype pages (`npm start` in each of
`prototypes/p7-dpll-lock`, `p10-serdes-eye`, `p11-ota-verdict`, `p12-dac-verdict`), then:

```bash
node tools/capture-figures.mjs
```

## Guesses to review

- **Location `features/index.html`**, served at `/features/` once pushed. Not linked from the
  home page, and marked `noindex` (Q-013). Both are one-line changes.
- **Screenshots, not live demos** (Q-012). Easiest to undo; live Opticular pages can replace
  them one at a time.
- **The demos chosen** (Q-014): P-11, P-12, P-7, P-10. Left out: P-9 (agent flow), P-5 (a
  scripted build-graph mock-up), P-6 (DDR PHY schematic browser). Plexic and Lexiconium have no
  figure of their own; Plexic appears in the flow diagram and the P-11 callouts.
- **Passing builds only** (Q-015). The failing variants are described in tables, not shown.
  Rebuilding them is the prototypes session's call, so I didn't.
- **Copied figures go stale.** The PNGs and Glyphica SVGs are copies taken on the night they
  were captured. The P-12 page gained a "Schematics" section while I worked; the capture only
  takes its verdict and INL/DNL panels.
- **The screenshots keep the viewer's toolbar text** (pan, svg, key hints). It reads as a real
  tool; crop it if it looks noisy.
- **GoatCounter is on the page**, as on the home page (R-003).
- **`tools/capture-figures.mjs`** borrows Playwright from `waveform-viewer/node_modules` by
  path, so it adds no dependency here. It's served publicly once pushed (harmless).
- **"Five-transistor OTA with its bias mirror"** describes M1 to M6 in Glyphica's fixture.

## Proposed commits

Static files, no tests. Check each by opening the page.

1. **Note how decision statuses work** — `docs/decisions/README.md` (an earlier uncommitted
   edit, already reviewed and held).
2. **Add a draft features page** — `features/index.html`, `features/img/` (8 PNGs, 2 SVGs).
3. **Add the figure-capture script** — `tools/capture-figures.mjs`.
4. **Record the features page in the docs** — `docs/requirements.md` (R-004),
   `docs/open-questions.md` (Q-012 to Q-015; Q-003 now says Plexic), `docs/handoff.md`.

Push only when the draft should go live (it would appear at `/features/`, unlinked).
