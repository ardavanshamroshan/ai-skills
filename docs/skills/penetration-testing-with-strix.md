# `penetration-testing-with-strix`

Authorized autonomous pentest that exploits and proves vulnerabilities with Strix.

**Source:** [usestrix/strix](https://github.com/usestrix/strix) · skill + CLI · **only systems you own or may test**

## Install this skill

```bash
npx skills add usestrix/strix --skill penetration-testing-with-strix -g -y
pipx install strix-agent
# or: curl -sSL https://strix.ai/install | bash
```

Configure provider env vars in the shell — never paste keys into prompts or commits:

```bash
export STRIX_LLM="<provider/model>"
export LLM_API_KEY="<your-provider-key>"
```

## What it does

Runs Strix against a target (repo, URL, API) to find and **validate** issues with reproduction evidence. Results under `strix_runs/`. Local targets are mounted writable — use a clean checkout.

## When to reach for it

Authorized security assessment of staging or a disposable clone. Not for random third-party sites.

## Usage samples

> `$penetration-testing-with-strix` quick scan of this local project with a $10 max budget. Report validated findings only. Do not edit code.

```bash
strix -n -t ./ --scan-mode quick --max-budget 10
```

## Expected result

Validated findings with repro evidence. Budget respected. No silent code edits when you forbade them.

## Prerequisites

Docker (typical), LLM provider key, authorization to test the target.

## Related

- [workflows/ui-pipeline](/workflows/ui-pipeline) (optional last step) · [Strix docs](https://github.com/usestrix/strix)
