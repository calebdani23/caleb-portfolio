# Caleb Portfolio — Agent Instructions

Single-page Astro 6 portfolio for Caleb Perez.

## Stack

- Astro 6, TypeScript (strict via `astro/tsconfigs/strict`), Tailwind CSS 4
- Tailwind: Vite plugin (`@tailwindcss/vite`), **not** PostCSS or `tailwind.config.js`. Config is done via CSS `@import "tailwindcss"` in `src/styles/global.css`.
- Node >=22.12.0 (`.nvmrc`: `22`)

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` — **only verification command** |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Raw Astro CLI |

## Architecture

- **Single page**: `src/pages/index.astro` — all content is in this file (hero + projects grid)
- **Layout**: `src/layouts/BaseLayout.astro` — HTML shell, dark theme, Spanish (`lang="es"`)
- **Styles**: `src/styles/global.css` — uses Tailwind v4's `@import "tailwindcss"`, dark color scheme forced
- **Components**: `src/components/` is empty — no extracted components yet
- **Content**: `src/content/projects/` exists but is empty (set up for Astro content collections but unused)
- **Public**: `favicon.ico` and `favicon.svg`
- **Design**: Dark background `#06141b`, text `#f8fafc`, accent `cyan-300`/`#06b6d4`, radial gradient highlights
- **No tests, no linter, no typecheck command** configured. `npm run build` is the sole correctness check.
- Runtime config: `opencode.json` manages all permissions. Launcher script at `scripts/opencode-portfolio`.
- For any local change that must sync to GitHub and GitHub Pages, consult `docs/LOCAL_GITHUB_SYNC_WORKFLOW.md` before modifying deploy-sensitive files or pushing.
