# `grilling`

Shared interview engine behind `/grill-me` and `/grill-with-docs`.

**Type:** dependency skill

## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=grilling
```

Usually installed automatically with grill-me / grill-with-docs. Prefer invoking those wrappers unless you want the raw engine.

## What it does

Maps a plan as a **design tree**. Works in **rounds**. The **frontier** is every decision whose prerequisites are settled. Each round asks the whole frontier: numbered questions with a recommended answer. Wait for answers before the next round.

Facts are the agent's job (sub-agents may look them up). Decisions stay with you.

Session ends when the frontier is empty and you confirm shared understanding. Do not implement until then.

## When to reach for it

Trigger phrases like “grill me”, or when a wrapper skill calls it. Prefer `/grill-me` / `/grill-with-docs` for the documented entry points.

## Expected result

Structured Q rounds. Clearer decisions. No files from grilling itself (docs writes come from domain-modeling via grill-with-docs).

## Related

- [grill-me](/skills/grill-me) · [grill-with-docs](/skills/grill-with-docs)
