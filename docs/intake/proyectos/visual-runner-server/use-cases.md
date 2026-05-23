# Visual Runner Server Use Cases

## Core use cases

- **Validate UI after code changes** — confirm that visible product changes still behave correctly in a real browser, not only in local mocks or static review.
- **Navigate real product flows** — exercise named flows across public, authenticated, stateful, and bounded pre-transaction surfaces where browser behavior matters.
- **Capture screenshots and supporting evidence for review** — provide visual and operational evidence for design review, QA review, or delivery sign-off when artifacts are available.
- **Check readiness before riskier transitions** — verify that critical states, selectors, and route conditions are satisfied before a team interprets a flow as safe or ready.
- **Distinguish execution from validation** — help operators and reviewers avoid false positives when a run completes technically but does not satisfy the repo proof contract.

## AI and developer workflow support

- **Assist AI-assisted development** — give agents and developers a structured way to validate browser-dependent work with scripts, contracts, and explicit proof rules.
- **Support debugging with normalized summaries** — make failures easier to reason about through consistent local summaries, logs, and outcome labels.
- **Provide repeatable flow contracts** — let the repo describe what a safe flow is, what evidence it expects, and where boundaries must stop.
- **Reduce manual QA guesswork** — turn browser validation into an evidence-driven workflow rather than an informal “it looked okay” check.

## Zalmar Travel and portfolio relevance

- **Support Zalmar Travel product validation** — help verify user journeys related to navigation, workspace continuity, booking preparation, and other browser-visible experiences documented in the repo.
- **Showcase an operations-aware validation layer** — demonstrate how product teams can combine repo-owned contracts, remote browser execution, and honest reporting.
- **Strengthen portfolio storytelling** — present a credible example of validation infrastructure built around real product behavior, safety boundaries, and review-ready evidence.

## Conservative interpretation note

These use cases are grounded in repo-local documentation, scripts, and flow contracts. Where an exact operational outcome depends on private runtime state or host access, the wording here remains intentionally conservative.
