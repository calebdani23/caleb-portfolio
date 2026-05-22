# Intake naming guide

Use these rules for new uploads and for any planned source-asset cleanup pass. Current intake source paths should be lowercase, hyphen-separated and typo-free; preserve messy original labels in README/manifest notes when provenance matters.

## New file names

Prefer lowercase, descriptive, hyphen-separated names:

```text
<area>-<subject>-<asset-type>-<status-or-version>.<ext>
```

Examples:

```text
zalmar-travel-booking-plan-screenshot-public-ready-v1.png
google-it-support-certificate-source-2026-05.pdf
quintana-roo-goal-clip-source-needs-review.mp4
profile-portrait-source-public-ready.svg
```

## Avoid

- Spaces, accents and ambiguous names in new files.
- `final`, `final-final`, `image1`, `new-version` without context.
- Reintroducing legacy source names with spaces, accents, underscores, plus signs or typos after the normalization pass.

## Folder naming

- Keep current Spanish top-level folders: `certificados/`, `proyectos/`, `reconocimientos/`, `futbol/`, `nueva-zelanda/`, `universidad/`.
- For new folders, use lowercase kebab-case unless matching an already established source/program name.
- If an existing source label has a typo, fix the path and document the original label locally instead of preserving the typo in the filesystem.
