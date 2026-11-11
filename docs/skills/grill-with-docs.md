# `/grill-with-docs`

Same relentless interview as `/grill-me`, but it also builds your project's domain model as you go.

**Type:** prompt-driven · writes glossary/ADRs

## Install this skill

```bash
npx skills@latest add mattpocock/skills \
  --skill=grill-with-docs --skill=grilling --skill=domain-modeling
```

Then type `/grill-with-docs`. Depends on [grilling](/skills/grilling) and [domain-modeling](/skills/domain-modeling).

## What it does

It runs the grilling interview **and** keeps terminology sharp against the codebase: updates `GLOSSARY.md` and offers ADRs when a decision is hard to reverse, surprising without context, and the result of a real trade-off.

Use it when the subject is a **codebase you need to align against**, not a free-floating idea.

## When to reach for it

| Situation | Skill |
| --- | --- |
| Idea with no repo files needed | [`/grill-me`](/skills/grill-me) |
| Align language with code; keep docs | **`/grill-with-docs`** |

Invoke explicitly. Prefer a fresh chat. Run [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills) first if domain layout is not configured yet.

## Usage samples

> `/grill-with-docs` Align our order lifecycle language with this repo and capture ADRs for the write model.

> `/grill-with-docs` We keep saying "account" — Customer vs User vs Workspace. Grill and write the glossary.

## Expected result

- Interview rounds (same frontier model as grilling)
- Inline updates to `GLOSSARY.md` as terms resolve
- Occasional ADRs under `docs/adr/` (or the layout recorded in `docs/agents/domain.md`)

## Prerequisites

| Need | Notes |
| --- | --- |
| A git repo | Skill reads code + existing glossary |
| Optional setup | `/setup-matt-pocock-skills` for domain doc layout |
| Skills installed | `grilling`, `domain-modeling` |

## It's working if

- Fuzzy terms get challenged against existing `GLOSSARY.md`
- Resolved terms appear in the glossary during the session, not in a batch at the end
- ADRs appear only for hard/surprising/trade-off decisions
- Code contradictions surface when your words disagree with the implementation

## Where it fits

Stateful sibling of grill-me. Feeds domain-modeling. Downstream engineering skills assume the glossary/ADR layout setup recorded.

## Related

- [grill-me](/skills/grill-me) · [grilling](/skills/grilling) · [domain-modeling](/skills/domain-modeling) · [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills)
