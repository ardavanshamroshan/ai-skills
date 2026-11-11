# `playwright-cli`

Automate browser interactions and UI checks from the agent or a terminal.

**Source:** [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) · skill + CLI

## Install this skill

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills=agents --global
playwright-cli --version
```

The second command installs the agent skill. The CLI works without the skill; the skill teaches the agent the command surface.

## What it does

Drives a real browser: open, goto, snapshot (element refs), click/fill, console, screenshots, network. Prefer **snapshot + refs** over brittle CSS selectors in agent flows.

## When to reach for it

Login flows, responsive checks, console-error hunts, visual confirmation after UI changes. Part of the [UI pipeline](/workflows/ui-pipeline).

## Usage samples

> Use `playwright-cli` to test the login flow at `http://localhost:3000`. Capture console errors and a failure screenshot.

```bash
playwright-cli open http://localhost:3000 --headed
playwright-cli snapshot
playwright-cli fill e5 "user@example.com"
playwright-cli click e8
playwright-cli console
playwright-cli screenshot --filename=login.png
playwright-cli close
```

## Expected result

Snapshots, screenshots, console/network notes, reproducible steps.

## Prerequisites

Node + Playwright browsers (`playwright-cli` install path). Headed mode optional.

## It's working if

- `playwright-cli --version` works
- Snapshot refs drive click/fill successfully
- Agent does not invent selectors when refs are available

## Related

- [skillui](/skills/skillui) · [ui-ux-pro-max](/skills/ui-ux-pro-max) · [workflows/ui-pipeline](/workflows/ui-pipeline)
