# Mohan Rao Portfolio

## Run locally

Run `npm run dev` (or `node server.mjs`), then open http://localhost:5173. Refresh after editing a section to see changes.

## Where to edit

| Section | Folder |
| --- | --- |
| Hero and navigation | `sections/hero/` |
| Selected works | `sections/selected-works/` |
| Journey | `sections/journey/` |
| Life Beyond the Screen | `sections/life-beyond-screen/` |
| Footer | `sections/footer/` |

Each folder contains `index.html`, `styles.css`, and `assets/`. The life section also has `script.js` for the continuous photo animation. Its animation speed is in its stylesheet. Hero navigation is in `sections/hero/navigation.html`.

`page.html` defines section order and page metadata. `styles/shared.css` contains shared typography and layout foundations. Root `script.js` handles navigation, smooth scrolling and pending link messages.

The ManzilChaser case study lives in `case-studies/manzilchaser/`. Its `page.html` contains the editable narrative and its own README explains the exploration artwork and images. Run the build after editing it.

## Build and publish

Run `npm run build` (or `node build.mjs`). This combines the sections into the root `index.html` and creates a static copy in `dist/`. Edit the section files, then build before committing. The generated root page can also be served directly by GitHub Pages; all asset URLs are relative.

No package installation is required. Node.js is required for the preview and build commands. Fonts load from Fontshare and Google Fonts; Lenis loads from jsDelivr. Native scrolling remains available if Lenis cannot load. The photo loop pauses on hover or keyboard focus and respects reduced motion.

## Pending links

Email, resume, LinkedIn, Medium, Instagram and case-study destinations still need your URLs. Their buttons currently display a pending-link message.
