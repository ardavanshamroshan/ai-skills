# `ui-ux-pro-max`

UI/UX design intelligence for web, mobile, and desktop — hierarchy, spacing, contrast, systems.

**Source:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## Install this skill

```bash
npx ui-ux-pro-max-cli init --ai universal --global
# or:
uipro init --ai universal --global
```

Bundled search script needs Python 3.

## What it does

Searches design knowledge (UX, typography, color, …) and applies coherent recommendations to interfaces you are building or reviewing. Pairs well with tokens from [skillui](/skills/skillui).

## When to reach for it

New landing pages, dashboard hierarchy fixes, mobile layout, design-system application after extraction.

## Usage samples

> `$ui-ux-pro-max` improve this dashboard’s hierarchy, spacing, contrast, and mobile layout. Keep behavior.

> `$ui-ux-pro-max` design a landing page for a finance app — propose color/type/spacing first, then implement.

```bash
python3 ~/.agents/skills/ui-ux-pro-max/scripts/search.py \
  "internal analytics dashboard" --design-system -p "Ops Console"
```

## Expected result

Coherent visual direction and concrete UI changes. Verify with [playwright-cli](/skills/playwright-cli).

## Related

- [skillui](/skills/skillui) · [unslop](/skills/unslop) · [workflows/ui-pipeline](/workflows/ui-pipeline)
