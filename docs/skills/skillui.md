# skillui

Extract a complete design system from any website, local directory, or public GitHub repo using the skillui CLI. Generates SKILL.md, DESIGN.md, and token files (colors.json, spacing.json, typography.json) that Claude reads automatically. Use when the user wants to extract a design system or design tokens from an existing site or codebase before building a UI, wants a reference design system to match, or says things like 'extract the design system from', 'get the tokens from', 'pull styles from this site', 'clone the look of', or provides a URL/repo and wants to match its visual language.

## Type

skill + CLI

## When to use

Invoke with `$skillui`.

## Install

```bash
npx skills add https://github.com/Roentek/Claude_Code_Boilerplate_Framework --skill skillui -g -y
```

## Usage samples

> `$skillui` extract the design system from `https://example.com` into `./design-systems/example`.


## Expected result

`DESIGN.md` + token JSON files for colors/typography/spacing.

## Separate CLI?

`npx skillui`

## Locations on this machine

`agents, cursor` → typically under `~/.agents/skills/skillui` and/or `~/.cursor/skills/skillui`.

## Links

- _(upstream SKILL.md)_
