# Portfolio refresh — November 2026

## Public profile
- TETR College of Business: Bachelor of Science in Artificial Intelligence, 2026–Present, Class of 2030; first semester in Gurugram / New Delhi, India.
- AdrenLabs: founding team, product and AI development. Adren.ai is the product being developed with a three-person team.
- Describe product definition, agent workflows, technical prototyping and research as contributions. Do not invent a CEO/CTO appointment, funding, customers, revenue or completed deployments.
- Adren.ai and Adrenaline must not be used interchangeably.
- Retain Zalmar Travel and the existing technical projects, certification evidence and sports materials.

## Content maintenance
`src/data/currentChapter.ts` holds the current education and venture copy. `src/data/profile.ts` holds public contact/location details. Update dates when the underlying facts change, not on every build.

The Adren.ai page is a static route at `/proyectos/adren-ai/`. It is separate from the existing dynamic case-study routes. All local URLs use `withBase` for GitHub Pages.

## Validation and deployment
Run `npm ci`, `npm run build`, then `node scripts/check-portfolio.mjs`. The additional PR workflow runs these checks before merging. The existing `deploy-pages.yml` continues to deploy `main`; its permissions, base path and workflow are unchanged.

After this GitHub-side update, synchronize the server working copy using `git status` and, when clean, `git pull --ff-only origin main`. Do not overwrite uncommitted server changes.
