# Ankit Taak — Animated Portfolio Hero

A responsive, vanilla HTML/CSS/JS portfolio landing page with a dark navy and cyan/purple visual identity, animated service icons, glass-style analytics cards, pointer parallax, a responsive mobile menu, reduced-motion support, and a simple contact CTA.

## Files
- `index.html` — page markup and SEO metadata
- `styles.css` — responsive styling and motion effects
- `script.js` — mobile navigation, cursor glow, analytics-card parallax, and scroll reveals
- `assets/hero-reference.png` — supplied reference banner (kept in the package for visual reference)

## Preview locally
Open `index.html` in a browser. For a local development server, run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Upload to GitHub Pages
1. Extract the ZIP and upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the root of your website repository.
2. Keep the paths exactly as shown so the stylesheet, script, and reference asset load correctly.
3. In GitHub, open **Settings → Pages**, select the deployment source/branch for your site, and save if Pages is not already enabled.

## Important portrait note
The supplied image is a complete banner reference rather than a cutout portrait, so the hero currently uses a stylized CSS portrait silhouette to preserve the visual composition. For a more accurate likeness, place a transparent cutout of your actual profile photo in `assets/` and replace the `.profile-silhouette` markup with an `<img>` using `object-fit: contain; object-position: bottom center;`.

## Contact details
The contact button currently uses `mailto:ankittaak139@gmail.com`, based on the portfolio contact detail provided in this conversation. Update it in `index.html` if needed.
