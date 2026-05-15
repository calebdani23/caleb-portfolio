# AGENTS.md — caleb-portfolio

## Stack

- **Astro v6** (ESM, `"type": "module"`) with `astro/tsconfigs/strict`
- **Tailwind CSS v4** — no `tailwind.config.*` file. Configured via `@import "tailwindcss"` in `src/styles/global.css` + `@tailwindcss/vite` plugin in `astro.config.mjs`.
- **Node >= 22.12.0** (`.nvmrc`: `22`)

## Commands

| Purpose | Command |
|---|---|
| Dev server | `npm run dev` → http://localhost:4321 |
| Build | `npm run build` → `dist/` |
| Preview | `npm run preview` |

No tests, lint, typecheck, or format scripts exist. No CI.

## Project structure

- `src/pages/` — routes (`index.astro` is the only page; `/proyectos/` is an empty placeholder)
- `src/layouts/BaseLayout.astro` — wraps pages, sets `<html lang="es">`, imports global CSS
- `src/styles/global.css` — Tailwind import + dark-theme defaults (`#06141b` bg)
- `src/content/projects/` — **empty**; Astro content collection dir but no `config.ts` and no entries yet
- `src/components/` — empty

## Conventions

- **Spanish** throughout (site lang, copy, route `/proyectos`)
- **Dark theme only** — `color-scheme: dark` in CSS, no light mode
- Tailwind v4 utility classes only; no custom `@apply` or design tokens in config (use CSS variables or inline Tw classes)
