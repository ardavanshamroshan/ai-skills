# `/code-review`

Review the changes since a fixed point along two axes: **Standards** and **Spec**.

**Source:** [mattpocock/skills](https://github.com/mattpocock/skills) · parallel sub-agents · does not merge the two verdicts

## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=code-review
```

Then type `/code-review against main` (or another fixed point).

## What it does

Reviews the diff between `HEAD` and a fixed point you supply — commit, branch, tag, or merge-base — on two separate axes:

| Axis | Question |
| --- | --- |
| **Standards** | Does the code follow this repo's documented conventions? |
| **Spec** | Does it implement what the originating issue or spec asked for? |

Each axis runs as its own **parallel sub-agent** with a fresh context. Findings are reported **side by side**. They are never merged or re-ranked — a change can pass one axis and fail the other; blending would let one mask the other.

Standards always include a Fowler smell baseline, overridden by repo docs when they exist. Spec looks for issue refs in commits, a path you pass, or files under `docs/` / `specs/` / `.scratch/`.

## When to reach for it

Type `/code-review`, or ask to review a branch, PR, WIP, or "since X". The agent may also reach for it when closing an implement flow.

Run [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills) first so the tracker doc is available for issue lookups.

## Usage samples

> `/code-review against main`

> `/code-review against origin/main` Spec is `docs/specs/billing.md`.

> Review changes since `abc1234` for standards and spec fit.

## Expected result

- Confirmation of fixed point + non-empty three-dot diff
- Two reports: Standards and Spec
- Smell findings labelled as heuristics, not hard violations (unless your standards say otherwise)

## Prerequisites

| Need | Notes |
| --- | --- |
| Git history | Fixed point must `git rev-parse` |
| Non-empty diff | Empty diff fails before sub-agents |
| Tracker setup | Recommended for Spec axis issue fetch |
| Standards files | `CODING_STANDARDS.md` / `CONTRIBUTING.md` preferred when present |

## It's working if

- You see **two** clearly separated finding sets
- Spec does not silently fold into "code quality"
- Bad refs / empty diffs fail early
- Repo standards override the smell baseline where they conflict

## Where it fits

End of implement / before commit or PR. Pair with [deslop](/skills/deslop) for mechanical cleanup and [unslop](/skills/unslop) for PR prose.

## Related

- [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills) · [deslop](/skills/deslop) · [workflows/review](/workflows/review)
