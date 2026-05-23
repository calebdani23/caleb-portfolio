# Visual Runner Server Overview

## What it is

The Visual Runner Server is a private browser-execution service used by the repository to validate real product behavior through scripted browser flows. Based on verified repo-local documentation and contracts, the workspace side of the repo defines named flows, launches them through `scripts/visual-runner/*`, and consumes normalized evidence such as job status, logs, and local summaries.

## Why it was built

It was built to give the team a safer and more reliable way to validate user-visible product changes with real navigation evidence instead of relying only on static inspection, unit tests, or assumptions. Repo documentation consistently positions it as the recommended path when work affects UI, navigation, booking, checkout, workspace, or other browser-dependent experiences.

## What problem it solves

The system addresses a common delivery gap: code can look correct in review and still fail in real flows. The Visual Runner helps close that gap by combining:

- repo-owned flow contracts;
- real browser execution;
- normalized evidence capture;
- explicit proof rules that distinguish technical execution from actual validation.

That last point matters. Repo evidence shows a run can finish technically while still failing the proof contract if required route, selector, or step evidence is missing. In other words, it is designed to reduce false confidence, not just automate clicks.

## How it helps validate real products

From verified repo-local evidence, the Visual Runner supports a workflow where the repository:

1. defines safe or bounded named flows in the manifest and related docs;
2. checks readiness before launch;
3. executes real browser flows remotely;
4. captures logs and optional artifacts such as screenshots, console output, network traces, and normalized summaries when available;
5. evaluates the result against repo proof rules before calling a flow validated.

This helps teams validate real product surfaces more honestly, especially when the change touches navigation continuity, protected flows, stateful transitions, or pre-transaction boundaries.

## Evidence posture

- **Verified from repo-local evidence:** the repo owns named-flow contracts, preflight/validation scripts, normalized evidence summaries, and explicit rules for safe boundaries and proof.
- **Conservative inference:** the private runner acts as a dedicated remote Playwright-style execution service behind a repo-owned orchestration layer.
- **Manual-only / human confirmation required:** host-level inventory, service manager details, or any infrastructure claims that would require direct privileged access.

## Lessons learned

- A healthy runner service is **not** the same as a validated product flow.
- Technical success and proof success must be reported separately.
- Optional artifacts support analysis, but they are not automatically required proof.
- Readiness checks and boundary rules are part of the product-validation model, not just operations hygiene.
- When repo-local evidence already explains the result, host inspection should remain a manual escalation path rather than the default workflow.

## Notes for portfolio use

This overview intentionally avoids private infrastructure details, secrets, internal host paths, and unverified host-level assertions. It focuses on the architecture and validation model that can be supported by sanitized repository evidence.
