# `unslop`

Cut AI tells from any writing — docs, UI copy, PR descriptions — while keeping facts.

**Source:** [cursor/plugins](https://github.com/cursor/plugins) · explicit invoke

## Install this skill

```bash
npx skills add https://github.com/cursor/plugins --skill unslop -g -y
```

Invoke with `$unslop`.

## What it does

Rewrites prose to remove AI cadence and filler. Does **not** verify facts. You must keep commands, links, versions, and claims intact in the prompt when they matter.

## When to reach for it

README polish, release notes, empty states, PR bodies — after content exists, before publish.

## Usage samples

> `$unslop` rewrite the introduction of `README.md`. Keep every command, link, version number, and factual claim intact.

> `$unslop` tighten the previous answer without removing technical details.

## Expected result

Shorter, plainer prose. Review for dropped facts.

## Related

- [deslop](/skills/deslop) · [workflows/ui-pipeline](/workflows/ui-pipeline)
