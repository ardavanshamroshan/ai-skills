# `deslop`

Remove AI-generated code slop and clean up code style without changing behavior.

**Source:** [cursor/plugins](https://github.com/cursor/plugins) · explicit invoke

## Install this skill

```bash
npx skills add https://github.com/cursor/plugins --skill deslop -g -y
```

Invoke with `$deslop` or “remove AI slop”.

## What it does

Targets the tells of AI-written code: redundant comments, over-abstraction, filler names, ceremonial wrappers, noise that tooling already covers. Keeps behavior intact.

## When to reach for it

After a generative coding pass, before or after [code-review](/skills/code-review), when a hot path looks “AI-shaped”.

## Usage samples

> `$deslop` clean `src/features/billing` — remove redundant comments and over-abstraction; do not change behavior.

## Expected result

Leaner code, same tests green, fewer decorative layers.

## Related

- [unslop](/skills/unslop) (prose) · [workflows/review](/workflows/review)
