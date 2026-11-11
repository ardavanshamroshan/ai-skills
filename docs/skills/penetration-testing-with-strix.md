# penetration-testing-with-strix

Pentest a web app, API, codebase, repository, URL, domain, or IP with Strix — autonomous AI penetration testing that exploits and proves vulnerabilities (OWASP Top 10 and beyond — injection, XSS, SSRF, auth/access-control flaws, IDOR, business logic) instead of just flagging them. Runs self-hosted with the open-source CLI or via the managed app.strix.ai cloud, and returns validated findings with proof-of-concept exploits (Markdown, JSON, CSV, SARIF). Use when the user asks to pentest, hack, security-scan, security-audit, or find vulnerabilities in an app, API, website, or repo.

## Type

skill + CLI

## When to use

Invoke with `$penetration-testing-with-strix`.

## Install

```bash
npx skills add usestrix/strix --skill penetration-testing-with-strix -g -y
pipx install strix-agent
```

## Usage samples

> `$penetration-testing-with-strix` quick scan of this local project with a $10 max budget. Report validated findings only.


## Expected result

Validated findings under `strix_runs/` — only scan systems you own/authorize.

## Separate CLI?

`strix`

## Locations on this machine

`agents, cursor` → typically under `~/.agents/skills/penetration-testing-with-strix` and/or `~/.cursor/skills/penetration-testing-with-strix`.

## Links

- https://github.com/usestrix/strix
