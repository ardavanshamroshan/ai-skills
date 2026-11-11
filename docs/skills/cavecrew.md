# `cavecrew`

Decision guide for delegating to caveman-style subagents. Tells the main thread WHEN to spawn `cavecrew-investigator` (locate code), `cavecrew-builder` (1-2 file edit), or `cavecrew-reviewer` (diff review) instead of doing the work inline or using vanilla `Explore`. Subagent output is caveman-compressed so the tool-result injected back into main context is ~60% smaller — main context lasts longer across long sessions. Trigger: "delegate to subagent", "use cavecrew", "spawn investigator/builder/reviewer", "save context", "compressed agent output".

## Type

Agent skill (`SKILL.md`)

## Install

```bash
# If published on skills.sh / GitHub:
npx skills add <owner/repo> -g -y -s cavecrew
```

Check [skills.sh](https://skills.sh/) or the skill’s upstream repo for the exact package.

## Usage

Ask the agent to use `cavecrew` explicitly, or use the skill’s documented trigger / `$` / `/` command.

## Locations on this machine

`agents`

## Status

Installed locally. Expand this page with project-specific samples as you use it.
