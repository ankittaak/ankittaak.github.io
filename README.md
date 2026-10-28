# Ankit Taak — Portfolio Website

A responsive, multi-section static portfolio website based on the supplied 7-page portfolio PDF and its navy / emerald / teal visual identity.

## Included
- `index.html` — complete page: home, about, services, client work, case studies, process, contact and footer
- `styles.css` — responsive design, card styling, theme and motion
- `script.js` — mobile navigation, section reveal, scroll progress, active nav and year
- `assets/` — extracted visual artwork from the portfolio PDF, cover art, and a portrait crop

## Run it
Open `index.html` in a browser, or use VS Code Live Server.

## Publish with GitHub Pages
1. Extract the ZIP.
2. Upload the **contents** of this folder into the root of your GitHub repository (not the enclosing ZIP).
3. Commit the changes.
4. Open **Settings → Pages** in the repository.
5. Select your deployment source/branch and root folder, then save.
6. Wait for GitHub Pages to publish.

## Before going live
- **Review the portrait asset:** `assets/ankit-portrait-from-portfolio.jpg` is cropped from the portrait image printed in page 2 of the PDF. It retains some scene/background. For the cleanest look, replace it with your original high-resolution portrait or a transparent-background portrait named the same.
- Confirm contact details and WhatsApp destination before publishing.
- The project card copy and profile metrics follow the supplied portfolio; update any figures or claims if your source data changes.
- Client project cards are portfolio summaries, not endorsements or independently verified outcomes.
- Replace any placeholder/anchor navigation behavior if you later split the site into separate pages.

## Source-aligned content
The site follows the provided PDF:
- Page 2: intro and headline profile figures (15+ businesses, 3+ years, 100+ projects)
- Page 3: five service areas and descriptions
- Page 4: six selected client accounts and delivered support
- Page 5: Universal Iron Store and Reliable Reprographics profile metrics and reported work
- Page 6: five-step working process and collaboration principles
- Page 7: contact channels and location

## Motion and accessibility
- Scroll reveal, floating decorative dashboard cards, responsive mobile menu, hover states, scroll progress.
- Honors `prefers-reduced-motion`.
- Uses semantic headings, labeled navigation, keyboard focus styling and descriptive image alternatives.
- Hero visual charts and numerical panels are decorative/illustrative; no fabricated live analytics are claimed.
