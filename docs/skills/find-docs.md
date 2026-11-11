# `find-docs` (Context7)

Fetch **current** library and framework documentation instead of guessing from training cutoff.

**Source:** [upstash/context7](https://github.com/upstash/context7) · skill + always-on [rule](/rules/context7) · CLI: `ctx7`

## Install this skill

```bash
npx ctx7@latest setup --cli
# or skill package:
npx skills add upstash/context7 --skill find-docs -g -y
```

Invoke with `$find-docs` or write “use Context7”. The Cursor rule nudges the agent automatically for library/API questions.

## What it does

Resolves a library name to a Context7 ID (`/org/project`), then queries that ID for the topic you care about. Answers should cite current docs snippets, not remembered APIs.

Typical CLI flow:

```bash
npx ctx7@latest library "Next.js" "How to configure a proxy"
npx ctx7@latest docs /vercel/next.js "How to configure a proxy"
```

Use the ID returned by `library`; do not assume a sample ID is always best.

## When to reach for it

API syntax, config, migrations, SDK usage, CLI tools, cloud services — even famous ones (React, Next.js, Prisma, Tailwind, …).

**Not for:** pure refactors, non-API debugging, general CS concepts with no library surface.

## Usage samples

> `$find-docs` check current Next.js docs for proxy configuration, then explain which API this project should use.

> Use Context7 for Prisma nested writes with the schema in this repo.

## Expected result

Version-accurate guidance with library IDs and doc-backed snippets. Prefer this over web search for library docs when Context7 is available.

## Prerequisites

| Need | Notes |
| --- | --- |
| Node.js | 22.13+ recommended for CLI |
| Network | Context7 API |
| Auth | `ctx7 setup` / API key for higher limits |

## It's working if

- Agent runs `library` then `docs` (or equivalent) before answering
- Answer names a real `/org/project` ID
- Quota errors surface instead of silent fallback to training memory

## Where it fits

Any implementation that depends on framework APIs. See [workflows/research](/workflows/research).

## Related

- [Rule: context7](/rules/context7) · [Context7 CLI docs](https://context7.com/docs/clients/cli)
