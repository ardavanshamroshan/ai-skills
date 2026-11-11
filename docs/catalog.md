# Catalog

Installed agent skills on this machine: **38**.

Paths: `~/.agents/skills`, `~/.cursor/skills`.

## Engineering & planning

| Skill | Description | Where |
| --- | --- | --- |
| [`code-review`](/skills/code-review) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two… | `agents` |
| [`grill-me`](/skills/grill-me) | A relentless interview to sharpen a plan or design. | `agents` |
| [`grill-with-docs`](/skills/grill-with-docs) | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and… | `agents` |
| [`grilling`](/skills/grilling) | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to… | `agents` |
| [`handoff`](/skills/handoff) | Compact the current conversation into a handoff document for another agent to pick up. | `agents` |
| [`domain-modeling`](/skills/domain-modeling) | Build and sharpen a project's domain model. Use when discussing codebase terminology,… | `agents` |
| [`setup-matt-pocock-skills`](/skills/setup-matt-pocock-skills) | Configure this repo for the engineering skills: set up its issue tracker, triage label… | `agents` |

## Design & UI

| Skill | Description | Where |
| --- | --- | --- |
| [`banner-design`](/skills/banner-design) | Design banners for social media, ads, website heroes, creative assets, and print.… | `agents, cursor` |
| [`brand`](/skills/brand) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency.… | `agents, cursor` |
| [`design`](/skills/design) | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation… | `agents, cursor` |
| [`design-system`](/skills/design-system) | Token architecture, component specifications, and slide generation. Three-layer tokens… | `agents, cursor` |
| [`slides`](/skills/slides) | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts,… | `agents, cursor` |
| [`skillui`](/skills/skillui) | Extract a complete design system from any website, local directory, or public GitHub… | `agents, cursor` |
| [`ui-styling`](/skills/ui-styling) | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix… | `agents, cursor` |
| [`ui-ux-pro-max`](/skills/ui-ux-pro-max) | UI/UX design intelligence for web, mobile, and desktop. This skill should be used when… | `agents, cursor` |
| [`deslop`](/skills/deslop) | Remove AI-generated code slop and clean up code style | `agents, cursor` |
| [`unslop`](/skills/unslop) | Cut AI tells from any writing. | `agents, cursor` |

## Docs & discovery

| Skill | Description | Where |
| --- | --- | --- |
| [`find-docs`](/skills/find-docs) | Retrieves up-to-date documentation, API references, and code examples for any developer… | `agents, cursor` |
| [`find-skills`](/skills/find-skills) | Helps users discover and install agent skills when they ask questions like "how do I do… | `agents` |

## Browser & security

| Skill | Description | Where |
| --- | --- | --- |
| [`playwright-cli`](/skills/playwright-cli) | Automate browser interactions, test web pages and work with Playwright tests. | `agents, cursor` |
| [`penetration-testing-with-strix`](/skills/penetration-testing-with-strix) | Pentest a web app, API, codebase, repository, URL, domain, or IP with Strix — autonomous… | `agents, cursor` |

## GSAP

| Skill | Description | Where |
| --- | --- | --- |
| [`gsap-core`](/skills/gsap-core) | Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration,… | `agents` |
| [`gsap-frameworks`](/skills/gsap-frameworks) | Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping… | `agents` |
| [`gsap-performance`](/skills/gsap-performance) | Official GSAP skill for performance — prefer transforms, avoid layout thrashing,… | `agents` |
| [`gsap-plugins`](/skills/gsap-plugins) | Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother,… | `agents` |
| [`gsap-react`](/skills/gsap-react) | Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when… | `agents` |
| [`gsap-scrolltrigger`](/skills/gsap-scrolltrigger) | Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub,… | `agents` |
| [`gsap-timeline`](/skills/gsap-timeline) | Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting,… | `agents` |
| [`gsap-utils`](/skills/gsap-utils) | Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random,… | `agents` |

## Caveman

| Skill | Description | Where |
| --- | --- | --- |
| [`cavecrew`](/skills/cavecrew) | Decision guide for delegating to caveman-style subagents. Tells the main thread WHEN to… | `agents` |
| [`caveman`](/skills/caveman) | Ultra-compressed communication mode. Cuts token usage ~75% by speaking like caveman… | `agents` |
| [`caveman-commit`](/skills/caveman-commit) | Ultra-compressed commit message generator. Cuts noise from commit messages while… | `agents` |
| [`caveman-compress`](/skills/caveman-compress) | Compress natural language memory files (CLAUDE.md, todos, preferences) into caveman… | `agents` |
| [`caveman-help`](/skills/caveman-help) | Quick-reference card for all caveman modes, skills, and commands. One-shot display, not… | `agents` |
| [`caveman-review`](/skills/caveman-review) | Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the… | `agents` |
| [`caveman-stats`](/skills/caveman-stats) | Show real token usage and estimated savings for the current session. Reads directly from… | `agents` |

## Local / custom

| Skill | Description | Where |
| --- | --- | --- |
| [`farsi-rtl-responses`](/skills/farsi-rtl-responses) | Reply in Farsi (Persian) with RTL prose and strict LTR separation for shell, code, and… | `cursor` |
| [`model-routing`](/skills/model-routing) | Apply token-conscious GPT Codex model and reasoning selection. Use when the user invokes… | `cursor` |

## Rules (not skills)

| Rule | Description |
| --- | --- |
| [`context7`](/rules/context7) | Fetch current library/framework docs via ctx7 CLI (pairs with find-docs). |
| [`graphify`](/rules/graphify) | Treat graphify-out as source of truth before reading source files. |
| [`graphify-first-mode`](/rules/graphify-first-mode) | Always-on Graphify-first exploration mode. |
| [`caveman`](/rules/caveman) | Ultra-compressed communication style. |
| [`farsi-rtl-responses`](/rules/farsi-rtl-responses) | Farsi primary replies with strict RTL/LTR separation. |

## Plugin skills

Also available via Cursor plugins: Postman, MongoDB, Supabase, Figma, Docker, GSAP. See [Plugins](/plugins/).
