# find-docs (Context7)

Retrieves up-to-date documentation, API references, and code examples for any developer technology. Use this skill whenever the user asks about a specific library, framework, SDK, CLI tool, or cloud service — even for well-known ones like React, Next.js, Prisma, Express, Tailwind, Django, or Spring Boot. Your training data may not reflect recent API changes or version updates.

## Type

skill + rule

## When to use

Invoke with `$find-docs` or “use Context7”.

## Install

```bash
npx ctx7@latest setup --cli
# or skill only:
npx skills add upstash/context7 --skill find-docs -g -y
```

## Usage samples

> `$find-docs` check current Next.js docs for proxy configuration, then explain which API this project should use.

> Use Context7 to look up Prisma schema relations for nested writes.


## Expected result

Answer grounded in current library docs (not training-cutoff guesses).

## Separate CLI?

`npx ctx7@latest`

## Locations on this machine

`agents, cursor` → typically under `~/.agents/skills/find-docs` and/or `~/.cursor/skills/find-docs`.

## Links

- https://context7.com/docs/clients/cli
- https://github.com/upstash/context7
