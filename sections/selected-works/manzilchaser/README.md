# ManzilChaser case study

The page is split into ten editable sections matching the supplied cropped Figma frames.

| Folder | Figma node | Desktop frame |
| --- | --- | --- |
| sections/01-hero | 213:5452 | 1440 × 900 |
| sections/02-the-beginning | 233:9509 | 1440 × 900 |
| sections/03-the-problem | 233:10753 | 1440 × 900 |
| sections/04-discovery | 233:11985 | 1440 × 1260 |
| sections/05-the-focus | 233:13217 | 1440 × 900 |
| sections/06-the-parents-perspective | 233:14449 | 1440 × 900 |
| sections/07-the-product-decision | 233:15681 | 1440 × 1800 |
| sections/08-design-evolution | 233:16913 | 1440 × 2180 |
| sections/09-the-outcome | 233:18145 | 1440 × 900 |
| sections/10-reflection | 233:19377 | 1440 × 724 |

## Edit a section

Each section contains index.html, styles.css, assets/ and editing notes. Its image references start with sections/<folder>/ because the build combines the fragments into the case-study page.

The evolution section also contains exploration.html and exploration.css for its seven miniature website designs. The hero preserves the logo and custom headline lettering as exported Figma artwork.

page.html controls the page shell and stylesheet order. sections.json controls section order and records Figma IDs. styles.css contains shared typography and grid foundations. render.mjs combines these files for the local server and build.

Run npm run dev (or node server.mjs) from the portfolio root. Refresh after editing; section changes are read directly by the local server. Run npm run build (or node build.mjs) to regenerate index.html and dist/ before publication. Do not edit the generated case-study index.html.

Desktop sections retain the proportions and cropping of the Figma frames. On mobile, they flow vertically so the narrative stays readable.

responsive.css loads last and contains shared mobile adjustments, so later section styles cannot override mobile widths. Keep section-specific visual edits in each section folder.

The current work is local. Push only when the user asks. HANDOFF.md in the portfolio root records the continuation context.
