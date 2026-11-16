# Mohan Rao Portfolio

## Preview and build

Run `npm run dev` or `node server.mjs`, then open http://localhost:5173. Refresh after editing a section to see the change.

Run `npm run build` or `node build.mjs` to regenerate the pages and `dist/` before sharing or publishing. No package installation is required. Do not edit generated `index.html` pages directly.

## Folder guide

- `sections/hero/`: homepage hero and navigation.
- `sections/selected-works/`: work section layout and project order.
- `sections/selected-works/manzilchaser/`: ManzilChaser card and full case study.
- `sections/selected-works/vasthra-shree/`: Vasthra Shree card.
- `sections/selected-works/academic-app/`: Academic App card.
- `sections/selected-works/parkease/`: ParkEase card.
- `sections/journey/`: experience timeline.
- `sections/life-beyond-screen/`: looping photo gallery.
- `sections/footer/`: contact footer.

Each project has `card.html`, `card.css`, and `assets/` for its homepage card. The ManzilChaser folder also has ten case-study section folders. Read its `EDITING.md` for the full editing workflow.

`page.html` defines the homepage shell. `styles/shared.css` contains shared homepage styles. `render-page.mjs` combines homepage fragments; `build.mjs` generates the static output.

The previous `/case-studies/manzilchaser/` URL redirects to the organized project page.

Fonts load from Fontshare and Google Fonts; Lenis loads from jsDelivr. Native scrolling remains available if Lenis cannot load. The photo loop pauses on hover or keyboard focus and respects reduced motion.

## Pending content

Email, resume, social URLs, and the three other project case studies still need your content. Their unconfigured actions display a pending-link message.

Read `HANDOFF.md` to continue in another chat or account.
