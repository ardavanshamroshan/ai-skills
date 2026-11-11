# `/setup-matt-pocock-skills`

Set up one repo so the other skills know how it works.

**Source:** [mattpocock/skills](https://github.com/mattpocock/skills) · prompt-driven · run once per repo

## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=setup-matt-pocock-skills
```

Then type `/setup-matt-pocock-skills` in your coding agent.

## What it does

`setup-matt-pocock-skills` answers three questions about one repo: where issues live, what the triage labels are called, and where the domain docs sit. It records the answers as markdown files under `docs/agents/`.

Those files are the only thing that varies between repos. The skills themselves are identical everywhere. They read `docs/agents/issue-tracker.md` at run time and do what it says. That is why the set is not tied to GitHub, and why you never edit a skill file to point it at another tracker.

It is a prompt-driven skill, not a deterministic script. It reads your git remote, `CLAUDE.md` and `GLOSSARY.md`, proposes what it found, and waits for you to confirm before it writes anything.

## When to reach for it

You invoke this by typing `/setup-matt-pocock-skills`; the agent won't reach for it on its own. Its metadata marks it non-invokable on purpose, so no other skill can fire it for you.

Reach for it once per repo, before the first use of any other engineering skill. If triage, to-spec, to-tickets or wayfinder start guessing where your issues go, or apply labels your tracker doesn't have, this repo has not been set up yet. You can run it halfway through a project — it reads what is already there, so no earlier work is lost.

## Prerequisites

It writes into the repo you run it in:

| It writes | Where |
| --- | --- |
| `issue-tracker.md` | `docs/agents/` |
| `domain.md` | `docs/agents/` |
| `triage-labels.md` | `docs/agents/`, only when the triage skill is installed |
| An `## Agent skills` block | whichever of `CLAUDE.md` or `AGENTS.md` already exists |

You commit all of it as markdown. There is no user-level or global mode. The config lives in the repo, so every repo gets its own copy.

## The three decisions

It starts each section with the recommended answer, and skips any question its exploration already answered. Most runs need only two confirmations.

| Decision | What it proposes | When it asks |
| --- | --- | --- |
| Issue tracker | the one matching your git remote | always — the one real choice |
| Triage labels | keep the five canonical names (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) | only if triage is installed |
| Domain docs | single-context: one `GLOSSARY.md` plus `docs/adr/` at the root | only if it spots monorepo signals |

### Tracker options

| Option | Where issues live | Needs |
| --- | --- | --- |
| GitHub | the repo's GitHub Issues | the `gh` CLI |
| GitLab | the repo's GitLab Issues | the `glab` CLI |
| Local markdown | files under `.scratch/<feature>/` | nothing, not even a remote |
| Other | wherever you say | one paragraph describing the workflow |

The first three ship as templates. Local markdown is a full option, not a fallback. **"Other"** is how Jira, Linear, Azure DevOps and similar tools work: you describe the workflow; the skill records prose in `docs/agents/issue-tracker.md`; downstream skills follow that prose.

## Common questions

**Do I have to use GitHub?**  
No. GitHub, GitLab, local markdown, and "other" all work. Setup chooses the tracker, not the skill.

**Do I need to re-run it after updating the skills?**  
Re-run to switch trackers, start over, or when a downstream skill diverges from what `docs/agents/` describes. Seed templates change between versions.

**It wrote to `CLAUDE.md`, but I'm on Codex / Cursor.**  
Known gap. Selection rule: edit `CLAUDE.md` if it exists, else `AGENTS.md`. Workarounds: move the block to `AGENTS.md`, or make `CLAUDE.md` a one-line pointer.

**It didn't create my triage labels.**  
It doesn't. `triage-labels.md` is a mapping of roles → strings. It does not run `gh label create`. Create labels by hand on a fresh GitHub repo before triage/wayfinder.

**Can I configure grilling cadence or tone here?**  
No. Tracker, labels, doc layout only. Preferences belong in `CLAUDE.md` / `AGENTS.md` as plain instructions.

**Can I keep config in `~/.claude` instead of every repo?**  
Not today. Every repo carries its own `docs/agents/`.

## It's working if

- `docs/agents/issue-tracker.md` and `docs/agents/domain.md` exist (plus `triage-labels.md` if triage is installed)
- An `## Agent skills` section appears in the instruction file your harness reads
- The proposed tracker matches your remote; label strings match labels that exist
- Afterwards, `/to-tickets` publishes without asking where issues live
- Nothing in the skill files themselves changed — if setup edited a `SKILL.md`, something went wrong

## Where it fits

Run-once setup for the engineering flow. Neighbours that read its output: triage, to-spec, to-tickets, wayfinder, domain-modeling. For which skill next: ask-matt.

## Related

- [grill-me](/skills/grill-me) · [grill-with-docs](/skills/grill-with-docs) · [code-review](/skills/code-review) · [domain-modeling](/skills/domain-modeling)
- Upstream: [mattpocock/skills](https://github.com/mattpocock/skills) · [AIHero skills](https://www.aihero.dev/skills)
