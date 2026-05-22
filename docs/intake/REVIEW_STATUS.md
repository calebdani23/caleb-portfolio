# Review status guide

Every asset should have one clear status in a local README, manifest, checklist or filename.

## Status labels

- `needs-review` — default for new uploads. Do not copy to `public/` yet.
- `internal-reference-only` — useful for writing or design decisions, but not safe/approved to publish.
- `public-ready` — approved for publication after optimization and final size/accessibility checks.
- `promoted` — optimized public copy already exists in `public/` and is tracked in `MANIFEST.md`.
- `retired-source` — source removed or no longer kept in repo, usually after safe public derivatives were generated.

## Minimum review questions

- Does it expose private information, addresses, IDs, credentials, internal system details or family-private data?
- Is Caleb allowed to publish it?
- Does it strengthen a portfolio story or case study?
- Does the public copy need compression, cropping, metadata removal, alt text or a safer filename?

If any answer is unclear, keep the asset as `needs-review` or `internal-reference-only`.
