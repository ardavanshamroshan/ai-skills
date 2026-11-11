# Workflow: review & cleanup

## Steps

1. **Diff review** — `/code-review against main` (or another fixed point).
2. **Read both axes** — Standards (repo conventions) and Spec (issue/spec fit) stay separate.
3. **Code cleanup** — `$deslop` on hotspots with AI fluff or over-abstraction.
4. **Prose cleanup** — `$unslop` on README / PR / UI copy.
5. **Optional tone** — caveman review style for ultra-short findings.

## Sample prompts

> `/code-review against main`

> `$deslop` remove AI slop from `src/features/billing` without changing behavior.

> `$unslop` tighten the PR description. Keep every ticket ID and command.

## Expected results

- Side-by-side Standards vs Spec findings.
- Leaner code and copy.
- No silent merges of the two review axes.

## Skills used

[code-review](/skills/code-review) · [deslop](/skills/deslop) · [unslop](/skills/unslop) · [caveman](/rules/caveman)
