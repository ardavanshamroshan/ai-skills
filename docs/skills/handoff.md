# handoff

Compact the current conversation into a handoff document for another agent to pick up.

## Type

skill

## When to use

Invoke with `/handoff`.

## Install

```bash
npx skills add mattpocock/skills -g -y -s handoff
```

## Usage samples

> /handoff Compact this session so another agent can continue the payment refactor.


## Expected result

Portable markdown handoff document (typically in OS temp dir).

## Separate CLI?

none

## Locations on this machine

`agents` → typically under `~/.agents/skills/handoff` and/or `~/.cursor/skills/handoff`.

## Links

- https://github.com/mattpocock/skills
