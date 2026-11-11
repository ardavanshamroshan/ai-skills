# Workflow: UI pipeline

End-to-end path from reference UI → implementation polish.

## Steps

1. **Extract** — `$skillui` on a reference URL or local app → `DESIGN.md` + tokens.
2. **Design / adapt** — `$ui-ux-pro-max` using those tokens; keep product behavior.
3. **Verify** — `playwright-cli` at desktop + mobile widths; console + screenshots.
4. **Copy** — `$unslop` on user-facing strings only.
5. **APIs** — `$find-docs` / Context7 when framework APIs matter.
6. **Optional security** — `$penetration-testing-with-strix` on a clean checkout you own.

## Sample prompts

> `$skillui` extract the design system from `https://example.com` into `./design-systems/example`. Summarize colors, type, spacing.

> `$ui-ux-pro-max` restyle this dashboard using `./design-systems/example/DESIGN.md`. Do not change business logic.

> Use `playwright-cli` to open the page, snapshot, and report console errors at 390px and 1280px widths.

> `$unslop` tighten the empty-state copy on the settings page. Keep product names exact.

## Expected results

| Step | Artifact |
| --- | --- |
| SkillUI | `DESIGN.md`, `tokens/*.json` |
| UI UX Pro Max | Updated UI / design notes |
| Playwright | Snapshots, screenshots, repro notes |
| Unslop | Cleaner copy |
| Context7 | Version-accurate API guidance |
| Strix | Findings under `strix_runs/` |

## Skills used

[skillui](/skills/skillui) · [ui-ux-pro-max](/skills/ui-ux-pro-max) · [playwright-cli](/skills/playwright-cli) · [unslop](/skills/unslop) · [find-docs](/skills/find-docs) · [penetration-testing-with-strix](/skills/penetration-testing-with-strix)
