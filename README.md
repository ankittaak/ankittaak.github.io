# Ankit Taak Portfolio Hero

A small, GitHub-ready hero-section starter built around the supplied hero artwork.

## Files
- `index.html` — section markup, SEO/accessibility text, CTA links
- `styles.css` — responsive presentation and reduced-motion handling
- `script.js` — simple anchor-link helper
- `assets/portfolio-hero.jpg` — optimized version of your provided image

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Upload to GitHub
1. Create/open your website repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder together.
3. Keep the relative folder path `assets/portfolio-hero.jpg`.
4. If using GitHub Pages, enable it in **Settings → Pages** and select your deployment branch/folder.

## Important design note
This starter uses your supplied hero screenshot as one responsive image so the appearance stays close to the reference. Text, navigation, analytics panels, and decorative graphics that are part of the artwork are rasterized—not separate editable HTML components. The headline and navigation labels are also included as screen-reader/search text. For a fully editable and animation-rich implementation, rebuild those elements as HTML/CSS and use a separate portrait/transparent cutout plus the original logo.

## Connect the section
The two CTA targets are `#projects` and `#contact`. Replace the placeholder target IDs at the bottom of `index.html` with the IDs of your actual sections, or update the CTA hrefs to your routes.

## Accessibility and performance
- Hero image has descriptive alt text and explicit dimensions.
- Main heading and supporting copy are present as semantic text.
- Mobile actions are rendered as normal links.
- Respects `prefers-reduced-motion`.
- Hero image is preloaded for quicker rendering.
