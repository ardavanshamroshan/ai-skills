# `skillui`

Extract a complete design system from a website, local app, or public GitHub repo.

**Source:** skillui CLI · generates `DESIGN.md` + tokens

## Install this skill

```bash
npx skills add https://github.com/Roentek/Claude_Code_Boilerplate_Framework --skill skillui -g -y
```

CLI usually via `npx skillui` (global install optional).

## What it does

Captures colors, typography, spacing, and related tokens into `DESIGN.md` and JSON token files so another skill or human can reuse the system.

## When to reach for it

Starting from a reference brand or existing product UI before restyling. First step of the [UI pipeline](/workflows/ui-pipeline).

## Usage samples

> `$skillui` extract the design system from `https://example.com` into `./design-systems/example`. Summarize colors, type, spacing.

```bash
npx skillui --url https://example.com --out ./design-systems/example
npx skillui --dir ./my-app --name "My App"
```

Deeper capture: `--mode ultra --screens 10` (needs Playwright).

## Expected result

`DESIGN.md` + `tokens/*.json`. Ask the agent to **read** those files before applying styles.

## Related

- [ui-ux-pro-max](/skills/ui-ux-pro-max) · [playwright-cli](/skills/playwright-cli)
