# Caleb Portfolio — Agent Instructions

Static Astro portfolio for Caleb Perez, with a homepage and individual project case studies. The public site is in English.

## Stack
- Astro 6, TypeScript with astro/tsconfigs/strict, Tailwind CSS 4 through @tailwindcss/vite.
- Node >=22.12.0; .nvmrc selects Node 22.
- Keep dependencies project-local. The redesign adds no application dependencies.

## Design system
Read docs/DESIGN_SYSTEM.md before visual changes.
- Adren Labs-inspired warm paper, graphite, editorial serif emphasis and restrained clay accents.
- Adren.ai-inspired slate venture panel with discreet sage details.
- Light is the default. An explicit dark preference is stored under cp-theme.
- Do not restore the former cyan/glow aesthetic or force a dark-only theme.
- Keep Caleb's personal identity distinct from corporate branding. Do not fabricate corporate logos or replace his portrait without authorization.
- Global tokens, typography and navigation: src/styles/global.css.
- Product, evidence and reading layouts: src/styles/portfolio.css.
- Preserve contrast, visible keyboard focus, reduced-motion behavior, native disclosure controls and responsive layouts.

## Architecture
- src/pages/index.astro composes the homepage from components.
- BaseLayout.astro owns the shared Navigation, Footer and MediaViewer, outside the main content. Do not add duplicate headers or footers in pages.
- CaseStudyLayout.astro renders existing case-study data for src/pages/proyectos/[slug].astro.
- src/pages/proyectos/adren-ai.astro is a separate static route.
- src/data/profile.ts and currentChapter.ts hold current public personal facts.
- Existing project, certificate, sports, timeline and stack datasets remain in src/data/.
- Public evidence is in public/. Keep existing evidence links and case-study routes functional.
- AdrenLabs is the venture and Adren.ai is the product. Do not substitute Adrenaline or invent completed milestones, titles or traction.

## Commands and validation
- npm run dev: development server.
- npm run build: static production build to dist/.
- node scripts/check-portfolio.mjs: validate current content, local links, assets and anchors after building.
- npm run preview: local production preview.
- The Design review workflow runs Chromium layout, theme, interaction and automated accessibility checks, with screenshot artifacts. Browser tools are installed only in the temporary CI environment.
- Build success alone is not a typecheck, security audit or full accessibility certification. Inspect screenshots for visual changes.

## GitHub Pages
Read docs/LOCAL_GITHUB_SYNC_WORKFLOW.md before deployment-sensitive changes.
- Preserve astro.config.mjs site/base and src/utils/paths.ts.
- Public base path is /caleb-portfolio/; use withBase for local URLs.
- Existing deploy-pages.yml publishes main. Validate before merging or pushing.
- Changes made in GitHub must be pulled into the Ubuntu working copy when it is clean; do not discard uncommitted work.

## Runtime and private data
This design update does not change opencode.json or the local OpenCode/Gentle-AI wrappers. Do not publish local runtime files, credentials, private logs or review artifacts under public/. design-review/ is ignored by Git.
