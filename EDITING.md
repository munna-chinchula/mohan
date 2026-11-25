# Editing the portfolio

Run `npm run dev` and open http://localhost:5173. Run `npm run build` before publishing. The generated `index.html` files are build outputs; edit the sources below.

## Hero

- `sections/hero/index.html`: shared heading, role, description, buttons, and video.
- `sections/hero/styles.css`: common hero layout.
- `sections/hero/laptop/styles.css`: laptop styling.
- `sections/hero/tablet/styles.css`: tablet styling.
- `sections/hero/mobile/styles.css`: mobile styling.
- `sections/hero/assets/botanical-vortex.mp4`: the exact Figma video.
- `sections/hero/navigation.html` and `navigation.js`: navigation content and mobile menu.
- `styles/navigation.css`: shared navbar styling across the homepage and case study.

## Selected Works

Shared layout and section heading:

- `sections/selected-works/laptop/index.html` and `layout.css`
- `sections/selected-works/tablet/index.html` and `layout.css`
- `sections/selected-works/mobile/index.html` and `layout.css`

Each of `manzilchaser`, `vasthra-shree`, `academic-app`, and `parkease` has:

- `laptop/card.html` and `card.css`
- `tablet/card.html` and `card.css`
- `mobile/card.html` and `card.css`
- `assets/` for that project's shared artwork.

Open the project, choose the device folder, and edit the text in `card.html` or appearance in `card.css`. Mobile is used through 600px, tablet through 1100px, and laptop above 1100px.

## ManzilChaser case study

`sections/selected-works/manzilchaser/sections/` keeps the ten numbered chapters separately: Hero, The Beginning, The Problem, Discovery, The Focus, The Parent's Perspective, The Product Decision, Design Evolution, The Outcome, and Reflection. Each chapter has its own HTML, CSS, assets, and editing notes.

## Other home sections

`sections/journey/`, `sections/life-beyond-screen/`, and `sections/footer/` remain separate.

Temporary videos, animation experiments, local tool environments, and QA screenshots are excluded from the website commit. The current hero uses the Figma MP4, not the older experimental canvas animation.

## Journey, Life Beyond the Screen, and Footer

Each section has shared `index.html`, `styles.css`, and `assets/`. Responsive overrides live in clearly named `laptop/styles.css`, `tablet/styles.css`, and `mobile/styles.css` folders. The photo strip keeps its seamless scrolling behavior and pauses on hover or focus. Footer destinations remain pending until real profile links are supplied.
