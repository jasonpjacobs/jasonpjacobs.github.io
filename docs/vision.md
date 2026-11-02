# Vision: portfolio-site

> Status: **first draft**, written from the hub and sibling docs before any interview.
> Items marked _to confirm_ are inferred, not agreed. Open items are in
> [open-questions.md](open-questions.md).

## Concept

A page on my GitHub user site, `jasonpjacobs.github.io` (R-001), that shows off the sabbatical tools with **live, read-only demos**
that run in the visitor's browser. No install, no server.

It is **one host among several** for the editor and viewer, beside the VS Code extension and a
plain browser tab ([hub decision 0003](../../decisions/0003-enclosing-application-is-a-vscode-extension.md)).
Viewing works from a static bundle
([decision 0001](../../decisions/0001-graphical-editor-runtime-stack.md)), so a static site
can host the real libraries, not screenshots.

## Audience

_To confirm:_

- **Primary:** IC design and DV engineers, and the people who hire or work with them. They
  should see a working tool within seconds.
- **Secondary:** open-source and EDA-tooling developers who might use or contribute to a repo.
- **Agents' users:** people curious how agents fit into an IC flow.
- _Not the audience:_ readers who want full docs or tutorials. Each tool's repo owns those.

## What the page shows

One section per demo. Each demo is a small thing a visitor can click, with a sentence or two
on what it shows and a link to the repo. Candidates, as each project's prototypes land:

| Demo | From | Kind |
|---|---|---|
| A schematic drawn from a text file, with domain coloring | graphical-editor | live |
| Eye, histogram and source waveform sharing one cursor | waveform-viewer (P-4 to P-6) | live |
| A classic wave window, a state-valued trace | waveform-viewer (P-11, P-12) | live |
| Hover a net in the schematic, see its waveform | graphical-editor + waveform-viewer | live |
| Analyzer output (eye histogram, transistor modes) shown in the viewer | analyzers | live |
| Cross-probing inside VS Code | vscode-extension | recording, _to confirm_ |
| A Slick build graph, a system model's results | composable-execution-flow, system-level-simulation | static, _to confirm_ |

Live demos are read-only. Editing, building and simulating stay in the other hosts.

## How it grows

**One small demo at a time.** When a project's prototype demos one feature, that demo can be
added to the page as one small change. The page starts as a plain placeholder (R-002)
and is never a big launch.

## Where demo data comes from

Demos read **static bundles**. Per contract
[waveform-embedding C-5](../../contracts/waveform-embedding.md), bundles are written by an
agent or a higher-level tool, not by data-store or the viewer. This project consumes bundles;
how they are produced and kept current is open (Q-003).

## What success looks like

_To confirm:_

- A visitor opens the page and interacts with a real waveform or schematic in under ten
  seconds, on a laptop, with no install.
- Every sabbatical tool that reaches a demo has a section linking to its repo.
- Adding a demo is a small, routine change.

## Non-goals

- Not documentation for the tools; each repo has its own.
- No server, accounts or uploads. A visitor can't load their own data (_to confirm_).
- Not a blog, at least at first (_to confirm_).

## Relationship to other projects

- **Depends on:** graphical-editor and waveform-viewer (the live demos), and whichever tool
  writes the bundles.
- **Shows:** every project, through demos or recordings.
- **Peer host:** vscode-extension. Both embed the same plain web libraries.
