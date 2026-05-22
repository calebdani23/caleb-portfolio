# Intake manifest

This manifest tracks known intake assets and public promotions on a conservative basis. It is not a full inventory of `docs/intake/` unless a future pass explicitly keeps it that way; record only files that exist or promotions already visible in `public/`/`src/data`.

## Known promoted assets

| Status | Source / intake context | Public destination | Site usage / notes |
|---|---|---|---|
| promoted | `docs/intake/profile/profile-picture.svg` | `public/images/profile/caleb-profile.svg` | Referenced by `src/data/profile.ts` as Caleb's profile image. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/01-public-inicio.png` | `public/images/projects/zalmar-travel/01-public-inicio.png` | Used by Zalmar Travel project/case-study imagery. Original package label was `Zalmar_Travel_Paquete_Designer_PDF_y_Branding_v1.1`. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/08-auth-viaje-comparar-final.png` | `public/images/projects/zalmar-travel/08-auth-viaje-comparar-final.png` | Public-safe Zalmar MVP visual reference; currently available in public assets but not highlighted in the case-study gallery. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/10-auth-booking-plan-final.png` | `public/images/projects/zalmar-travel/10-auth-booking-plan-final.png` | Used as Zalmar featured/case-study image. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/11-auth-panel-reservas-final.png` | `public/images/projects/zalmar-travel/11-auth-panel-reservas-final.png` | Used in Zalmar case-study gallery. |
| promoted | `docs/intake/proyectos/zalmar-travel/branding/ZALMAR fuerte logo actual.svg` | `public/images/projects/zalmar-travel/zalmar-logo-fuerte.svg` | Used tastefully as Zalmar brand mark in the featured project card and case-study header. |
| promoted | `docs/intake/proyectos/zalmar-travel/branding/ZALMAR claro logo actual.svg` | `public/images/projects/zalmar-travel/zalmar-logo-claro.svg` | Public-safe SVG logo candidate promoted for future Zalmar UI use; not currently rendered. |
| promoted | `docs/intake/certificados/programa-oracle-alura/programa-oracle-alura-caleb-perez.pdf` | `public/docs/certificados/oracle-alura/programa-oracle-alura-caleb-perez.pdf` | Certificate PDF referenced in `src/data/certifications.ts`. Original folder label had typo: `Programa Orcale + Alura`. |
| promoted | `docs/intake/certificados/programa-google-it-support/google-it-support-professional-certificate-caleb.pdf` | `public/docs/certificados/google-it-support/google-it-support-professional-certificate-caleb.pdf` | Certificate PDF referenced in `src/data/certifications.ts`. Original filename: `Google IT Support Professional Certificate - Caleb.pdf`. |
| promoted | `docs/intake/futbol/` source media context | `public/media/futbol/*-optimized.mp4` and `*-poster.jpg` | Source videos were removed from repo after optimized public clips/posters were created. See `futbol/README.md`. |

## Known internal-only references

| Status | Source / intake context | Public destination | Site usage / notes |
|---|---|---|---|
| internal-reference-only | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/01-documentos-pdf/01-documento-maestro-funcional-frontend-zalmar-travel-v1.1.pdf` | none | Functional master PDF for internal analysis only; do not attach or publicly link from the portfolio. |

## Known intake additions

| Status | Source / intake context | Public destination | Site usage / notes |
|---|---|---|---|
| intake-review | `docs/intake/proyectos/zalmar-travel/branding/zalmar-logo-claro-actual.png` | none | Branding asset normalized from `ZALMAR claro logo actual.png`; review before any public promotion. |
| intake-review | `docs/intake/proyectos/zalmar-travel/branding/zalmar-logo-fuerte-actual.png` | none | Branding asset normalized from `ZALMAR fuerte logo actual.png`; review before any public promotion. |
| intake-review | `docs/intake/proyectos/zalmar-travel/pitch-deck/caleb-perez-zalmar-travel-pitch-deck.pdf` | none | Pitch deck normalized from `Caleb_Perez_Zalmar_Travel_Pitch_Deck.pdf`; internal presentation/reference for now. |

## Needs future review

- Certificate source PDFs under `certificados/` should stay as source material unless the corresponding public PDF is intentionally linked.
- Recognition folders currently contain placeholders only; keep them text-only until proof assets are approved.
- Project source packages under `proyectos/zalmar-travel/` may include internal design references, booking orchestration notes and UX source material; promote only selected public-safe outputs.
- Zalmar Travel screenshots document a Spanish-language MVP; this is an intentional agile/product-development choice because Spanish is Caleb's primary working language.
- `AI Booking Orchestrator` and `Travel Booking UX System` are retired as standalone portfolio/intake projects. Do not add active folders for them; consolidate useful future references under `proyectos/zalmar-travel/`.
