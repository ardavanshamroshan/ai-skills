# AI Skills

Bilingual English/Persian handbook for installed AI agent skills, Cursor rules, plugin skills, and reusable workflows. Published with VitePress on GitHub Pages — same visual language as [System Design](https://ardavanshamroshan.github.io/system-design/) and [Database Engineering](https://ardavanshamroshan.github.io/database-engineering-fundumentals/).

**Site:** [AI Skills](https://ardavanshamroshan.github.io/ai-skills/)

## What is inside

| Section | Contents |
| --- | --- |
| Getting started | Skill vs CLI vs rule; install model; quick matrix |
| Catalog | All skills discovered under `~/.agents/skills` and `~/.cursor/skills` |
| Featured skill pages | Install, samples, results, links |
| Workflows | UI pipeline, grilling/planning, review, research |
| Rules | context7, graphify, caveman, farsi-rtl |
| Plugins | Postman, MongoDB, Supabase |

## Local development

```bash
npm ci
npm run dev
npm run build
```

Regenerate the machine catalog JSON (after installing/removing skills):

```bash
npm run catalog
```

Then re-run the page generator from a prior session or edit featured pages under `docs/skills/`.

## Deploy

Push to `main` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages at `/ai-skills/`.

Enable **Settings → Pages → GitHub Actions** on the repository after the first push.

## Skill versus executable

A skill gives the agent instructions. A CLI executable does the work. Installing a skill does not necessarily install its CLI. See [Getting started](docs/getting-started.md).

## Legacy quick guide

The previous Codex-focused install notes for Playwright, Unslop, Strix, SkillUI, Context7, and UI UX Pro Max now live as first-class pages under `docs/skills/` and `docs/workflows/ui-pipeline.md`.
