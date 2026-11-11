# `/grill-me`

A relentless interview to sharpen a plan or design.

**Type:** prompt-driven · writes nothing

## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=grill-me --skill=grilling
```

Then type `/grill-me` in your coding agent. Depends on [grilling](/skills/grilling).

## What it does

`grill-me` takes a **loose idea** and interviews you until you can commit to it. You do not need a worked-out plan to start — the session exists to produce one.

It asks in **rounds**. Each round is the whole **frontier**: every question whose prerequisites you have already settled. So it never asks something that depends on an answer it hasn't heard yet.

It is **stateless**. It writes no files and leaves no workspace behind. The only result is a clearer version of the idea, in your own head.

Under the hood it calls the shared [grilling](/skills/grilling) skill.

## When to reach for it

Invoke with `/grill-me`. The agent will not start it on its own.

| Situation | Use |
| --- | --- |
| Anything, anywhere — idea may not be code | **`/grill-me`** |
| Codebase to align against + keep glossary/ADRs | [`/grill-with-docs`](/skills/grill-with-docs) |
| Too big for one session | wayfinder (upstream set) |

Start it in a **fresh conversation**, not on top of a plan an agent already wrote.

## Usage samples

> `/grill-me` We want usage-based billing with annual commits and mid-cycle plan changes.

> `/grill-me` Should this service own idempotency keys, or should the gateway?

## Expected result

Numbered question rounds with recommended answers. You answer; frontier advances. Session ends when the frontier is empty and you confirm shared understanding. **No files written.**

## Prerequisites

None. No repo required. No CLI.

## It's working if

- Questions arrive in rounds with `➡️` recommended answers
- You are never asked something that depended on an unanswered prior question
- The chat ends with a plan you can actually commit to — without new markdown appearing in the workspace

## Where it fits

Non-code and early shaping. Sibling: [grill-with-docs](/skills/grill-with-docs). Engine: [grilling](/skills/grilling). After commitment, hand off with [handoff](/skills/handoff) or move into tickets via the engineering flow (after [setup](/skills/setup-matt-pocock-skills)).

## Related

- [grilling](/skills/grilling) · [grill-with-docs](/skills/grill-with-docs) · [handoff](/skills/handoff)
