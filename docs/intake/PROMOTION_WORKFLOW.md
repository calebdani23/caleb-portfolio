# Promotion workflow

Use this path for all assets that move from non-deployed intake to the deployed site:

```text
source asset in docs/intake/
→ review status
→ optimize/sanitize
→ copy to public/
→ reference from src/data/* or Astro
→ record in MANIFEST.md
```

## 1. Source asset

Place the original in the most specific intake folder. Keep program/project context close to the file with a README or template entry.

## 2. Review status

Assign a status from [`REVIEW_STATUS.md`](./REVIEW_STATUS.md). New files start as `needs-review` unless they are obviously internal-only.

## 3. Optimize and sanitize

- Images: resize/compress, remove unnecessary metadata, keep readable quality.
- PDFs: use public-safe filenames and verify no private pages are included.
- Videos: compress for web, create poster images, avoid exposing private context.
- SVGs: ensure they contain no hidden private text or external references.

## 4. Promote to `public/`

Use destination folders consistently:

- `public/images/profile/` for profile imagery.
- `public/images/projects/<project>/` for project screenshots.
- `public/images/certificates/` for certificate preview images.
- `public/docs/certificados/<program>/` for certificate PDFs.
- `public/docs/<project>/` for public project documents.
- `public/media/futbol/` for optimized sports clips and posters.

## 5. Use in site

Reference only the public path, for example `/images/projects/zalmar-travel/01-public-inicio.png`. Do not reference `docs/intake/` from app code.

## 6. Record the promotion

Add a row to [`MANIFEST.md`](./MANIFEST.md) with source, public destination, status and notes.
