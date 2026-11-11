# Rule: context7

Always-on Cursor rule that steers library/framework documentation questions to the **Context7** CLI instead of stale training data.

## Pairs with

- Skill: [find-docs](/skills/find-docs)
- CLI: `npx ctx7@latest`

## When it fires

API syntax, config, migrations, SDK usage, CLI tools, cloud services — even well-known ones (React, Next.js, Prisma, …).

## Not for

Pure refactors, non-API debugging, general programming concepts.

## Typical flow

```bash
npx ctx7@latest library "Next.js" "How to configure a proxy"
npx ctx7@latest docs /vercel/next.js "How to configure a proxy"
```

## Install

```bash
npx ctx7@latest setup --cli
```

Rule file lives under `~/.cursor/rules/context7.mdc` on this machine.

## Links

- [Context7 CLI](https://context7.com/docs/clients/cli)
- [upstash/context7](https://github.com/upstash/context7)
