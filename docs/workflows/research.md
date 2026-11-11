# Workflow: research & docs

## Steps

1. **Library / framework facts** — `$find-docs` or “use Context7” (rule auto-nudges).
2. **Resolve then query** — `ctx7 library` → pick ID → `ctx7 docs`.
3. **Codebase structure** — if `graphify-out/` exists, query Graphify before grepping everything.
4. **Discover more skills** — `$find-skills` / `npx skills find …`.

## Sample prompts

> `$find-docs` What is the current Next.js proxy / middleware guidance for this version?

```bash
npx ctx7@latest library "Next.js" "How to configure a proxy"
npx ctx7@latest docs /vercel/next.js "How to configure a proxy"
```

```bash
graphify query "where is billing calculated"
graphify path "OrderController" "InvoiceService"
```

## Expected results

- Answers tied to current docs IDs, not outdated training memory.
- Smaller, graph-scoped file reads when Graphify is present.

## Skills / rules used

[find-docs](/skills/find-docs) · [find-skills](/skills/find-skills) · [context7](/rules/context7) · [graphify](/rules/graphify)
