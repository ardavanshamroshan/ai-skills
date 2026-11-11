# `domain-modeling`

Build and sharpen a project's domain model — glossary and ADRs as terms and decisions crystallise.


## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=domain-modeling
```

Also pulled in by [grill-with-docs](/skills/grill-with-docs).

## What it does

Active discipline: challenge terms, invent edge-case scenarios, write glossary entries and ADRs the moment they crystallise. Merely *reading* `GLOSSARY.md` is not this skill — any skill can do that in one line.

Creates files lazily:

- First resolved term → create `GLOSSARY.md`
- First ADR-worthy decision → create `docs/adr/`

Glossary stays free of implementation detail. ADRs only when hard to reverse, surprising without context, and a real trade-off.

## When to reach for it

Discussing codebase terminology, editing glossary/ADRs, or when grill-with-docs needs the modeling half.

## Usage samples

> Sharpen Orders vs Shipments vs Fulfillments and update GLOSSARY.md.

> Your code cancels whole Orders but you said partial cancel is allowed — which is right?

## Expected result

Updated `GLOSSARY.md`; occasional ADRs; contradictions with code called out.

## Related

- [grill-with-docs](/skills/grill-with-docs) · [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills)
