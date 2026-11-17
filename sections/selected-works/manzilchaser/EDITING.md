# Editing ManzilChaser

## Homepage card

Edit `card.html` for the card text and destination link. Edit `card.css` for its appearance. Card images are in `assets/` and use paths relative to the portfolio homepage.

## Case-study sections

Open the section you want to change:

1. `sections/01-hero/`
2. `sections/02-the-beginning/`
3. `sections/03-the-problem/`
4. `sections/04-discovery/`
5. `sections/05-the-focus/`
6. `sections/06-the-parents-perspective/`
7. `sections/07-the-product-decision/`
8. `sections/08-design-evolution/`
9. `sections/09-the-outcome/`
10. `sections/10-reflection/`

Each folder contains `index.html` for text and structure, `styles.css` for appearance, `assets/` for images, and a README with its Figma reference. Section image paths are relative to the assembled case-study page. Keep the existing path format when replacing an image.

The Design Evolution folder also has `exploration.html` and `exploration.css` for the miniature screen designs.

## Shared files

- `page.html`: page shell, font links and stylesheet order.
- `sections.json`: chapter order and original Figma dimensions.
- `styles.css`: shared case-study typography and grid.
- `responsive.css`: shared mobile adjustments, loaded last.
- `render.mjs`: assembles the section fragments.
- `script.js`: responsive scale handling.
- `index.html`: generated page; edit section files instead.

## View your edits

From the portfolio root, run `npm run dev` or `node server.mjs`. Open http://localhost:5173/sections/selected-works/manzilchaser/ and refresh after editing.

When ready, run `npm run build` or `node build.mjs`. It regenerates the page and static `dist/` output. This does not push changes to GitHub.

The logo, headline and thank-you artwork preserve custom Figma lettering. Replace their exported images in the relevant section's assets folder if that lettering changes.

## Tablet and mobile layouts
Responsive source frames: tablet `242:7707` (768px) and mobile `242:8981` (360px).
- Edit `responsive.css` for tablet/mobile presentation and the menu layout.
- Edit `responsiveFrames` in `script.js` for measured chapter positions and hero sizing.
- All text and images remain in their existing numbered section folders.
- Below 600px the header uses an accessible menu button; 600–1024px uses tablet navigation.
- The tablet webpage ends after Reflection, omitting the empty orange tail in the Figma frame.
- Changes in this update are local; push only when requested.
