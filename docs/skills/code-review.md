# code-review

Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to \"review since X\".

## Type

skill

## When to use

Invoke with `/code-review against main`.

## Install

```bash
npx skills add mattpocock/skills -g -y -s code-review
```

## Usage samples

> /code-review against main

> Review changes since origin/main for standards and spec fit.


## Expected result

Two parallel axes: Standards vs Spec — reported side by side.

## Separate CLI?

none

## Locations on this machine

`agents` → typically under `~/.agents/skills/code-review` and/or `~/.cursor/skills/code-review`.

## Links

- https://github.com/mattpocock/skills
