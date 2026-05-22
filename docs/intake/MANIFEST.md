# Intake manifest

This manifest tracks known intake assets and public promotions on a conservative basis. It is not a full inventory of `docs/intake/` unless a future pass explicitly keeps it that way; record only files that exist or promotions already visible in `public/`/`src/data`.

## Known promoted assets

| Status | Source / intake context | Public destination | Site usage / notes |
|---|---|---|---|
| promoted | `docs/intake/profile/profile-picture.svg` | `public/images/profile/caleb-profile.svg` | Referenced by `src/data/profile.ts` as Caleb's profile image. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/01-public-inicio.png` | `public/images/projects/zalmar-travel/01-public-inicio.png` | Used by Zalmar Travel project/case-study imagery. Original package label was `Zalmar_Travel_Paquete_Designer_PDF_y_Branding_v1.1`. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/10-auth-booking-plan-final.png` | `public/images/projects/zalmar-travel/10-auth-booking-plan-final.png` | Used as Zalmar featured/case-study image. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/03-visual-web-reference/11-auth-panel-reservas-final.png` | `public/images/projects/zalmar-travel/11-auth-panel-reservas-final.png` | Used in Zalmar case-study gallery. |
| promoted | `docs/intake/proyectos/zalmar-travel/zalmar-travel-paquete-designer-pdf-y-branding-v1.1/01-documentos-pdf/01-documento-maestro-funcional-frontend-zalmar-travel-v1.1.pdf` | `public/docs/zalmar-travel/documento-maestro-funcional-frontend-v1.1.pdf` | Public Zalmar functional document linked from case study. Original filename used underscores/capitalization. |
| promoted | `docs/intake/certificados/programa-oracle-alura/programa-oracle-alura-caleb-perez.pdf` | `public/docs/certificados/oracle-alura/programa-oracle-alura-caleb-perez.pdf` | Certificate PDF referenced in `src/data/certifications.ts`. Original folder label had typo: `Programa Orcale + Alura`. |
| promoted | `docs/intake/certificados/programa-google-it-support/google-it-support-professional-certificate-caleb.pdf` | `public/docs/certificados/google-it-support/google-it-support-professional-certificate-caleb.pdf` | Certificate PDF referenced in `src/data/certifications.ts`. Original filename: `Google IT Support Professional Certificate - Caleb.pdf`. |
| promoted | `docs/intake/futbol/` source media context | `public/media/futbol/*-optimized.mp4` and `*-poster.jpg` | Source videos were removed from repo after optimized public clips/posters were created. See `futbol/README.md`. |

## Needs future review

- Certificate source PDFs under `certificados/` should stay as source material unless the corresponding public PDF is intentionally linked.
- Recognition folders currently contain placeholders only; keep them text-only until proof assets are approved.
- Project source packages under `proyectos/zalmar-travel/` may include internal design references, booking orchestration notes and UX source material; promote only selected public-safe outputs.
- `AI Booking Orchestrator` and `Travel Booking UX System` are retired as standalone portfolio/intake projects. Do not add active folders for them; consolidate useful future references under `proyectos/zalmar-travel/`.
