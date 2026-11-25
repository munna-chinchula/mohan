# Selected Works design references

Figma file: https://www.figma.com/design/vtnP2DSJErJvJdFccjn23h/Munna-portfolio

| Layout | Figma node | Design width | Section files |
| --- | --- | --- | --- |
| Laptop | 213:8027 | 1440px | laptop/index.html and layout.css |
| Tablet | 294:14805 | 1024px | tablet/index.html and layout.css |
| Mobile | 294:15435 | 390px | mobile/index.html and layout.css |

Each project folder has laptop, tablet, and mobile directories containing card.html and card.css. Artwork is shared in that project's assets directory. Text, tab labels, and actions remain editable HTML. Screen mockups retain the layers supplied by Figma.

Use projects.json for project order. Preserve the matching card placeholders in each layout. Shared breakpoint selection is in styles.css; responsive.js scales the selected design width to the available width.

After edits, run `node build.mjs` and `node scripts/check-site.mjs`. Review all four cards at 1440px, 1024px, and 390px. Check labels, image crops, text wrapping, button placement, and page overflow. The Academic App tab is `_ACADEMIC APP_` on every layout.

Source files are authoritative. Root index.html and the ManzilChaser index.html are generated build outputs. Dist, QA screenshots, and design download tooling are excluded from Git.
