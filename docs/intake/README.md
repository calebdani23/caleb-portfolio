# Portfolio content intake

`docs/intake/` is the non-deployed review/staging area for portfolio source material. It can contain raw PDFs, screenshots, notes, drafts and source media, but it is not necessarily confidential if the repository is public. Only reviewed and optimized copies should be promoted into `public/` and then referenced from `src/data/*` or Astro files.

Use this README as the entry point, then use the root docs below for repeatable work:

- [`NAMING.md`](./NAMING.md) — naming rules for new uploads and normalized intake source paths.
- [`REVIEW_STATUS.md`](./REVIEW_STATUS.md) — status labels and publishability decisions.
- [`PROMOTION_WORKFLOW.md`](./PROMOTION_WORKFLOW.md) — source asset → review → optimization → `public/` → site usage.
- [`MANIFEST.md`](./MANIFEST.md) — conservative tracking notes for known promotions; not a full inventory unless explicitly maintained as one.
- [`templates/`](./templates/) — reusable intake entries, project notes, certificate entries and checklists.

## Current folder map

This tree reflects the current folder names. Spanish top-level names are intentionally kept for now; do not rename them during normal intake work. Older source/provenance names with spaces, capitalization or typos are preserved in local notes/manifests instead of folder paths.

```text
docs/intake/
├── certificados/                         # Certificate source PDFs grouped by program
│   ├── programa-google-it-support/        # Original source label: "Programa Google IT Support"
│   └── programa-oracle-alura/             # Original source label had typo: "Programa Orcale + Alura"
├── futbol/                               # Sports source-media notes; optimized clips live in public/media/futbol/
├── nueva-zelanda/                        # New Zealand travel/life material for future narrative use
├── profile/                              # Portrait/profile source image candidates
├── proyectos/                            # Project-specific source assets and notes
│   ├── ai-agent-observability-dashboard/
│   ├── ai-booking-orchestrator/
│   ├── ai-codebase-explainer/
│   ├── family-home-server-private-cloud/
│   ├── travel-booking-ux-system/
│   ├── visual-runner-server/
│   └── zalmar-travel/
├── reconocimientos/                      # Awards, programs, volunteer/event recognition proof
│   ├── atlante/
│   ├── fifa-2026-volunteer/
│   ├── new-zealand-road-trip/
│   └── supercupni/
├── shared/                               # Reusable intake material shared across sections
├── templates/                            # Reusable documentation templates
├── universidad/                          # University/education source material for future use
├── whoiam/                               # About-me notes and narrative drafts
├── MANIFEST.md
├── NAMING.md
├── PORTFOLIO_CONTENT_TEMPLATE.md
├── PROMOTION_WORKFLOW.md
└── REVIEW_STATUS.md
```

## Quick workflow

1. Put the original/source asset in the most specific `docs/intake/` folder.
2. Add or update a local README/manifest entry with status from [`REVIEW_STATUS.md`](./REVIEW_STATUS.md).
3. Review safety, privacy, ownership and portfolio relevance.
4. Optimize only approved public assets.
5. Copy the optimized version into the right `public/` folder.
6. Reference the public copy from `src/data/*` or an Astro component.
7. Record the promotion in [`MANIFEST.md`](./MANIFEST.md).

## When adding a new asset

- Place it in the most specific intake folder; create a short local README note if context is missing.
- Give it a default status of `needs-review` unless it is clearly `internal-reference-only`.
- Check privacy, ownership, portfolio relevance and metadata before any promotion.
- Promote only optimized, public-safe copies into `public/`; never reference `docs/intake/` from app code.
- Update [`MANIFEST.md`](./MANIFEST.md) only when tracking a known promotion or intentionally maintaining an inventory.

## Preferred formats

- Screenshots/mockups: `.png` or high-quality `.jpg`; prefer 1600px+ width when possible.
- Logos/icons: `.svg` preferred; `.png` with transparent background accepted.
- Documents: `.pdf` for public-ready certificates/decks; `.md` for internal notes or summaries.
- Videos: source `.mp4` or `.mov` here; compressed public copies belong in `public/media/`.
- Diagrams: `.svg`, `.png`, `.pdf` or `.md` explaining the architecture.

## Safety rules

- Never publish IDs, addresses, private travel documents, financial documents, private network/IP details, API keys, credentials or family-private files.
- A pitch deck should only be linked if a real public-ready PDF exists in `public/docs/`. Otherwise the UI should say “Pitch deck available on request.”
- Recognition proof for FIFA 2026, SuperCupNI, Atlante or similar programs should stay text-only until a public-ready asset is approved.
- For home server/private cloud material, prefer abstract architecture diagrams over screenshots exposing private paths, device names or network details.
