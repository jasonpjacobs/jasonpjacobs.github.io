# Open questions: portfolio-site

When a question is answered, record the answer in `requirements.md` or `decisions/`, then
move it to *Resolved* with a pointer.

## Open

- **Q-002 Site generator or plain HTML?** Plain HTML plus the libraries' built bundles, or a
  generator (Astro, Eleventy, Jekyll via GitHub Pages)? The demos are TypeScript libraries, so
  a JS build step may exist anyway.
- **Q-003 How do bundles reach the page?** C-5 says an agent or higher-level tool writes them.
  Committed to this repo by hand or by an agent at first, built by a Plexic target later? Pinned
  to library versions?
- **Q-004 How do library builds reach the page?** Vendored copies, npm packages, or each
  repo's own GitHub Pages output linked or embedded?
- **Q-005 Writing style and tone.** Technical and terse for engineers, or a story for a wider
  audience? First person?
- **Q-006 Audience.** Is the guess in the vision right? Who matters most: hiring managers,
  EDA peers, potential contributors?
- **Q-007 Recordings.** Are screen recordings (VS Code cross-probing, agents at work) wanted
  beside live demos? Same as vscode-extension Q-017.
- **Q-008 One page or several?** A single scrolling page, or a landing page plus a page per
  tool?
- **Q-009 Other content.** Anything beyond the tools: about me, Siva and earlier work, a
  write-up of the sabbatical itself?
- **Q-011 Folder name.** The repo will be `jasonpjacobs.github.io`, so this folder and its
  `PROJECTS.md` row should be renamed to match. Asked the hub; deferred, I'll rename it later.
- **Q-012 Features page: screenshots or live demos?** The draft uses screenshots (R-004). Live,
  read-only Opticular pages from static exports are possible now (decision 0001); which demo
  goes live first? P-11's Bode plot is the obvious candidate.
- **Q-013 Link from the home page?** The draft is reachable only at `/features/` and carries
  `noindex`. Link it from `index.html`, and drop `noindex`, when it's ready.
- **Q-014 Which demos, in what order?** The draft has P-11, P-12, P-7 and P-10. Candidates left
  out: P-9 (an agent driving the tools from their manifests), P-5 (the build-graph mock-up),
  P-6 (the DDR PHY schematic browser), the X-series VS Code cross-probing.
- **Q-015 Show the failing builds?** The figures are the default (passing) builds. A failing
  P-11 (5 pF) or P-12 (hot MSB cell) figure would show the go/no-go better, but needs those
  prototypes rebuilt with a variant, which is the prototypes session's call.

## Resolved

- **Q-001 Which site?** The user site, `jasonpjacobs.github.io`. See R-001.
- **Q-010 First version.** A placeholder page: my name, one line, a SerDes block diagram and
  an eye diagram. See R-002.
