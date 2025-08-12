# Base MiniKit Docs Revamp — Tasks

## Phase 1 (Foundations)

- [x] Restructure IA to 5 pillars in `docs/docs.json`
- [x] Quality Bar checklist (`docs/base-app/quality/checklist.mdx`)
- [x] Design & UX principles (`docs/base-app/design/principles.mdx`)
- [x] Performance budgets (`docs/base-app/performance/budgets.mdx`)
- [x] Asset specifications (`docs/base-app/performance/asset-specifications.mdx`)
- [x] Language & Tone guidelines (`docs/base-app/guides/language-tone.mdx`)
- [x] Authentication (guest-first) (`docs/base-app/guides/authentication.mdx`)
- [x] Manifest documentation update (unified byte caps) (`docs/base-app/miniapps/manifest.mdx`)

## Phase 2 (Patterns and Tooling)

- [x] UI Patterns page (`docs/base-app/design/ui-patterns.mdx`)
- [x] Error Handling + Taxonomy (`docs/base-app/guides/error-handling.mdx`)
- [~] Figma UI Kit page stub (`docs/base-app/design/figma-ui-kit.mdx`) — needs link + assets
- [x] CLI: mini-kit (lint-copy, validate-assets, doctor) (`tools/minikit-cli/`)
- [x] Doctor command MVP
- [x] Copy linter MVP (with suggestions, code-fence ignore)
- [x] Enhance lint-copy: path allowlist to reduce false positives
- [x] CI: GitHub Action to run `mini-kit` on PRs (scoped to docs)
- [~] Update `create-base-mini-app` CLI with auth scaffolding and asset optimization — MVP scaffolder to add

## Phase 3 (Templates and Growth)

- [x] Growth: Event schema (`docs/base-app/growth/event-schema.mdx`)
- [x] Growth: Analytics integration (`docs/base-app/growth/analytics-integration.mdx`)
- [x] Distribution & categories (`docs/base-app/growth/distribution-categories.mdx`)
- [ ] Templates & starters (code repos) — docs page exists (`docs/base-app/guides/templates-starters.mdx`)
  - [x] Scaffolds added under `starters/` (browse-first, action-gated, game-loop)
  - [ ] Promote to separate repos and link from docs
- [ ] Example projects (3 polished references) — TODO

## Phase 4 (Review & Enforcement)

- [x] Submission workflow (`docs/base-app/quality/submission-workflow.mdx`)
- [x] Validation guide with CI example (`docs/base-app/quality/validation.mdx`)
- [ ] Quality Lead role + office hours — TODO
- [~] Validation pipeline (CI in this repo using `mini-kit`) — doctor in PRs; add Lighthouse mobile harness next
- [ ] Getting Featured metrics monitoring — TODO

## Next suggested steps

- [x] Create manifest docs page and add to nav
- [x] Add linter path allowlist to skip guidance/example pages in copy lint
- [x] Add GitHub Action running `mini-kit doctor` (scoped) on PRs
- [x] Add GitHub Issue template: "MiniApp Featuring Request"
- [ ] Link real Figma UI Kit URL and assets

## Reconciled original items

- [x] Update manifest docs with unified asset specs and byte caps
- [x] Create UI Patterns page with copy‑paste components and examples
- [x] Write Error Taxonomy & Reliability guide
- [~] Design and publish Figma Base Mini‑kit UI library (docs stub exists)
- [~] Update `create-base-mini-app` CLI with auth scaffolding and asset optimization (add MVP)
- [x] Create `mini-kit doctor` CLI command for validation and quality checks
- [x] Build copy linter tool to scan for banned terms and jargon
- [ ] Create three official starter templates (browse‑first, action‑gated, game‑loop)
- [ ] Build three polished reference apps with end‑to‑end walkthroughs
- [x] Write Growth & Analytics pillar (event schema and integrations)
- [x] Update Distribution & Categories with examples and tag guidance
- [x] Create Getting Featured submission workflow + GitHub issue template
- [ ] Establish Mini‑app Quality Lead role and office hours schedule
- [~] Set up automated validation pipeline for submissions and featuring (PR doctor done; add Lighthouse)
