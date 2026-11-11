# Getting started

Handbook for **AI agent skills** on this machine — install, when to reach for each one, expected results, and workflows. Skill pages cover what it does, when to reach for it, prerequisites, samples, and “it’s working if”.

## Skill vs executable vs rule

| Kind | What it is | Example |
| --- | --- | --- |
| **Skill** | Markdown instructions the agent loads (`SKILL.md`) | `grill-me`, `deslop` |
| **CLI / executable** | Binary or `npx` tool that does the work | `playwright-cli`, `ctx7`, `strix` |
| **Rule** | Always-on guidance (Cursor rules / AGENTS hooks) | `context7.mdc`, `graphify.mdc` |
| **Plugin skill** | Shipped inside a Cursor plugin cache | Postman `api-engineer` |

Installing a skill does **not** always install its CLI. Check each page’s “Separate CLI?” section.

## Install model

Preferred package manager for portable skills:

```bash
npx skills@latest add <owner/repo> -g -y -s <skill-name> -a cursor
```

Useful flags:

- `-g` — user-level (global)
- `-y` — non-interactive
- `-s` — specific skill(s)
- `-a cursor` — link for Cursor
- `-l` — list skills in a repo without installing

Discover skills: [skills.sh](https://skills.sh/) or `npx skills find <query>`.

## After install

1. Start a **new agent chat** so the harness rediscovers skills.
2. Invoke explicitly (`$name`, `/name`, or “use X”).
3. For engineering skills in this set, run `/setup-matt-pocock-skills` once per repo.

## Quick matrix

| Tool | Use for | Invoke | Separate CLI? |
| --- | --- | --- | --- |
| Context7 / find-docs | Current library docs | `$find-docs` | `npx ctx7` |
| deslop | Clean AI code slop | `$deslop` | no |
| unslop | Clean AI prose | `$unslop` | no |
| grill-me | Stress-test a plan | `/grill-me` | no |
| grill-with-docs | Grill + glossary/ADRs | `/grill-with-docs` | no |
| handoff | Portable session brief | `/handoff` | no |
| code-review | Standards + Spec review | `/code-review against main` | no |
| Playwright CLI | Browser checks | “use playwright-cli” | yes |
| Strix | Authorized pentest | `$penetration-testing-with-strix` | yes |
| SkillUI | Extract design system | `$skillui` | `npx skillui` |
| UI UX Pro Max | UI design intelligence | `$ui-ux-pro-max` | Python search script |

## Related sites

- [System Design](https://ardavanshamroshan.github.io/system-design/)
- [Database Engineering](https://ardavanshamroshan.github.io/database-engineering-fundumentals/)
