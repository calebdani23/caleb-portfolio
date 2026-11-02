# Caleb Perez — Quiet Editorial

## Design intent
A personal portfolio in the visual family of Adren Labs and Adren.ai, not an official corporate website. Preserve confirmed personal contributions, original evidence, all project routes and the GitHub Pages base path.

## Reference audit — 2 November 2026
The public reference sites were rendered in Chromium on the GitHub Actions runner in Design review run 41422481197. The review collected computed styles and screenshots.

Adren Labs uses warm paper #f5f3ee, ink #141413, muted #5f5d57, soft paper #ebe7de and rules #d9d5cc. Its Inter body and Fraunces editorial headings provide the primary direction. Adren.ai adds slate #232a2f, cool paper and sage #dce2a6, with restrained capsule controls.

This implementation uses system sans-serif and system serif fonts instead of copying proprietary brand fonts. The existing portrait is displayed in monochrome through CSS. The cp. monogram is Caleb's own, not an invented corporate logo.

Apple-inspired principles are hierarchy, consistency, legibility, adaptable layouts, familiar controls and progressive disclosure. This is not an Apple-endorsed interface. References: https://developer.apple.com/design/human-interface-guidelines/design-principles and https://developer.apple.com/design/human-interface-guidelines/layout

## Implementation
- Tokens, typography, navigation and global behavior: src/styles/global.css.
- Work, evidence and reading layouts: src/styles/portfolio.css.
- Default light theme, with an explicit dark preference saved locally under cp-theme.
- Paper and graphite dominate. Clay is a restrained emphasis; sage appears inside the Adren slate feature.
- No cyan gradients, glowing controls, fabricated metrics or simulated product screenshots.
- One shared header, footer and image dialog; one h1 per page.
- Native details for optional history/certificate content and mobile navigation; these work without JavaScript.
- Modal image view supports Escape, a visible close control and focus restoration. Direct image links remain usable without JavaScript.
- Media has no autoplay, videos preload none, and motion respects prefers-reduced-motion.

## Content and maintenance
Current facts remain in currentChapter.ts and profile.ts. Project, certification, sports, timeline and stack datasets are retained. Do not substitute Adrenaline for Adren.ai or attribute company-wide results to Caleb without confirmation.

Run npm run build, node scripts/check-portfolio.mjs, and Design review before publishing. Browser tooling is installed only in the temporary CI environment; application dependencies and lockfile are not changed by this redesign.
