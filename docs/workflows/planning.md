# Workflow: planning & grilling

Use when an idea is fuzzy and you need commitment before coding.

## Pick a grilling skill

| Situation | Skill |
| --- | --- |
| Any idea, no repo files needed | [`/grill-me`](/skills/grill-me) |
| Align language with a codebase; keep glossary/ADRs | [`/grill-with-docs`](/skills/grill-with-docs) |
| Shared interview engine | [`grilling`](/skills/grilling) |
| Explicit domain language work | [`domain-modeling`](/skills/domain-modeling) |

## Steps

1. Open a **fresh** chat (don’t grill on top of an agent-written plan).
2. Run `/grill-me` or `/grill-with-docs` with the loose idea.
3. Answer in rounds; the skill asks the full frontier of ready questions.
4. With docs variant: review `GLOSSARY.md` / ADRs it proposes.
5. Optional: `/setup-matt-pocock-skills` once per repo before engineering flows.
6. When work must move to another agent/harness: `/handoff`.

## Sample prompts

> `/grill-me` We want usage-based billing with annual commits and mid-cycle plan changes.

> `/grill-with-docs` Capture the order lifecycle language already used in this repo and tighten it.

> `/handoff` Package this grilling outcome for a fresh implementer agent.

## Expected results

- Clearer decisions in your head (grill-me writes nothing).
- Glossary / ADR updates (grill-with-docs).
- A portable handoff markdown file when needed.

## Skills used

[grill-me](/skills/grill-me) · [grill-with-docs](/skills/grill-with-docs) · [grilling](/skills/grilling) · [domain-modeling](/skills/domain-modeling) · [handoff](/skills/handoff) · [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills)
