# Portfolio content intake

This folder is the private/staging intake area for source material before anything is approved for the public website. Files in `docs/intake/` are repository references only; unlike `public/`, this folder is not automatically deployed as site content.

Only reviewed, approved and optimized assets should later be copied into `public/` and referenced from `src/data/*`.

## Folder map

```text
docs/intake/
├── certificados/                         # Certificate source PDFs and verification notes
├── profile/                              # Portraits, bios and profile image candidates
├── proyectos/
│   ├── zalmar-travel/
│   │   ├── pitch-deck/                   # Public-ready deck candidates only after review
│   │   └── screenshots/                  # Product screenshots and export candidates
│   ├── ai-booking-orchestrator/          # Architecture notes, diagrams, API flow references
│   ├── ai-agent-observability-dashboard/ # Dashboard screenshots, diagrams, public links if approved
│   ├── ai-codebase-explainer/            # Screenshots, repo links, explainability examples
│   ├── visual-runner-server/             # Homelab/server diagrams, safe screenshots
│   ├── family-home-server-private-cloud/ # Private cloud diagrams; no sensitive network details
│   └── travel-booking-ux-system/         # UX screenshots, mockups and design references
├── reconocimientos/                      # Awards, event confirmations and recognition proof
├── futbol/                               # Sports clips/source media before optimization
├── shared/                               # Reusable brand assets, palettes, icons and diagrams
└── whoiam/                               # About-me notes, narrative drafts and reference copy
```

## Preferred formats

- Screenshots/mockups: `.png` or high-quality `.jpg`; prefer 1600px+ width when possible.
- Logos/icons: `.svg` preferred; `.png` with transparent background accepted.
- Documents: `.pdf` for public-ready certificates/decks; `.md` for internal notes or summaries.
- Videos: source `.mp4` or `.mov` here; optimized public versions should be compressed before copying to `public/media/`.
- Diagrams: `.svg`, `.png`, `.pdf` or `.md` explaining the architecture.

## Naming rules

Use lowercase, descriptive, hyphen-separated names with project and purpose:

```text
zalmar-travel-pitch-deck-public-v1.pdf
zalmar-travel-booking-plan-screenshot-2026-05.png
ai-observability-dashboard-run-detail-v1.png
family-home-server-network-diagram-internal-2026-05.md
fifa-2026-volunteer-confirmation-needs-review.pdf
```

Avoid spaces, accents and vague names such as `final.pdf`, `image1.png` or `new version.png`.

## Review status labels

Add one of these labels to filenames or a small `README.md` note inside the folder:

- `public-ready`: approved for publishing after optimization/copying into `public/`.
- `internal-reference-only`: useful for the agent/human review but must not be published.
- `needs-review`: unclear status; do not copy into `public/` yet.

## Safety rules

- Do not publish IDs, addresses, financial-aid documents, private travel documents, private network IPs, API keys, credentials or family-private files.
- A pitch deck should only be linked if a real public-ready PDF exists in `public/docs/`. Otherwise the UI must say “Pitch deck available on request.”
- Recognition proof for FIFA 2026, SuperCupNI, Atlante or other programs should stay text-only until a public-ready asset is approved.
- For home server / private cloud material, prefer abstract architecture diagrams over screenshots exposing private paths, device names or network details.

## Promotion workflow

1. Place raw/source material in the correct `docs/intake/` folder.
2. Mark its status as `public-ready`, `internal-reference-only` or `needs-review`.
3. Optimize approved public assets for size and accessibility.
4. Copy only approved assets into `public/images`, `public/docs` or `public/media`.
5. Reference the public copy from `src/data/*` or Astro components.
