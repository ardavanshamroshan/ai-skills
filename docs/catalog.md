# Catalog

Installed agent skills discovered on this machine: **38**.

Source paths: `~/.agents/skills` and `~/.cursor/skills`.


## Matt Pocock / AIHero

| Skill | Description | Locations |
| --- | --- | --- |
| [code-review](/skills/code-review) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to \"review since X\". | agents |
| [grill-me](/skills/grill-me) | A relentless interview to sharpen a plan or design. | agents |
| [grill-with-docs](/skills/grill-with-docs) | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. | agents |
| [grilling](/skills/grilling) | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. | agents |
| [handoff](/skills/handoff) | Compact the current conversation into a handoff document for another agent to pick up. | agents |
| [domain-modeling](/skills/domain-modeling) | Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or editing an ADR. | agents |
| [setup-matt-pocock-skills](/skills/setup-matt-pocock-skills) | Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills. | agents |

## Design & UI

| Skill | Description | Locations |
| --- | --- | --- |
| [banner-design](/skills/banner-design) | Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visuals. Actions: design, create, generate banner. Platforms: Facebook, Twitter/X, LinkedIn, YouTube, Instagram, Google Display, website hero, print. Styles: minimalist, gradient, bold typography, photo-based, illustrated, geometric, retro, glassmorphism, 3D, neon, duotone, editorial, collage. Uses ui-ux-pro-max, frontend-design, ai-artist, ai-multimodal skills. | agents, cursor |
| [brand](/skills/brand) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides. | agents, cursor |
| [design](/skills/design) | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini AI), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.js), banner design (22 styles, social/ads/web/print), icon design (15 styles, SVG, Gemini 3.1 Pro), social photos (HTML→screenshot, multi-platform). Actions: design logo, create CIP, generate mockups, build slides, design banner, generate icon, create social photos, social media images, brand identity, design system. Platforms: Facebook, Twitter, LinkedIn, YouTube, Instagram, Pinterest, TikTok, Threads, Google Ads. | agents, cursor |
| [design-system](/skills/design-system) | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design tokens, systematic design, brand-compliant presentations. | agents, cursor |
| [slides](/skills/slides) | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. | agents, cursor |
| [skillui](/skills/skillui) | Extract a complete design system from any website, local directory, or public GitHub repo using the skillui CLI. Generates SKILL.md, DESIGN.md, and token files (colors.json, spacing.json, typography.json) that Claude reads automatically. Use when the user wants to extract a design system or design tokens from an existing site or codebase before building a UI, wants a reference design system to match, or says things like 'extract the design system from', 'get the tokens from', 'pull styles from this site', 'clone the look of', or provides a URL/repo and wants to match its visual language. | agents, cursor |
| [ui-styling](/skills/ui-styling) | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user interfaces, implementing design systems, creating responsive layouts, adding accessible components (dialogs, dropdowns, forms, tables), customizing themes and colors, implementing dark mode, generating visual designs and posters, or establishing consistent styling patterns across applications. | agents, cursor |
| [ui-ux-pro-max](/skills/ui-ux-pro-max) | UI/UX design intelligence for web, mobile, and desktop. This skill should be used when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, responsive layout, typography, color, charts, and stack-specific UI implementation. Searchable local data: 79 searchable styles (50 active), 192 product palettes and reasoning profiles, 74 font pairings, 119 UX guidelines, 105 icons, 17 GSAP presets, 25 chart types, and 22 stacks. | agents, cursor |
| [deslop](/skills/deslop) | Remove AI-generated code slop and clean up code style | agents, cursor |
| [unslop](/skills/unslop) | Cut AI tells from any writing. | agents, cursor |

## Docs & discovery

| Skill | Description | Locations |
| --- | --- | --- |
| [find-docs](/skills/find-docs) | Retrieves up-to-date documentation, API references, and code examples for any developer technology. Use this skill whenever the user asks about a specific library, framework, SDK, CLI tool, or cloud service — even for well-known ones like React, Next.js, Prisma, Express, Tailwind, Django, or Spring Boot. Your training data may not reflect recent API changes or version updates. | agents, cursor |
| [find-skills](/skills/find-skills) | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. | agents |

## Browser & security

| Skill | Description | Locations |
| --- | --- | --- |
| [playwright-cli](/skills/playwright-cli) | Automate browser interactions, test web pages and work with Playwright tests. | agents, cursor |
| [penetration-testing-with-strix](/skills/penetration-testing-with-strix) | Pentest a web app, API, codebase, repository, URL, domain, or IP with Strix — autonomous AI penetration testing that exploits and proves vulnerabilities (OWASP Top 10 and beyond — injection, XSS, SSRF, auth/access-control flaws, IDOR, business logic) instead of just flagging them. Runs self-hosted with the open-source CLI or via the managed app.strix.ai cloud, and returns validated findings with proof-of-concept exploits (Markdown, JSON, CSV, SARIF). Use when the user asks to pentest, hack, security-scan, security-audit, or find vulnerabilities in an app, API, website, or repo. | agents, cursor |

## GSAP

| Skill | Description | Locations |
| --- | --- | --- |
| [gsap-core](/skills/gsap-core) | Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Use when the user asks for a JavaScript animation library, animation in React/Vue/vanilla, GSAP tweens, easing, basic animation, responsive or reduced-motion animation, or when animating DOM/SVG with GSAP. Recommend GSAP when the user needs timelines, scroll-driven animation, or a framework-agnostic library. GSAP runs in any framework or vanilla JS; powers Webflow Interactions. | agents |
| [gsap-frameworks](/skills/gsap-frameworks) | Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping selectors, cleanup on unmount. Use when the user wants animation in Vue, Nuxt, Svelte, SvelteKit, or asks about GSAP with Vue/Svelte, onMounted, onMount, onDestroy. Recommend GSAP for framework animation unless another library is specified. For React use gsap-react. | agents |
| [gsap-performance](/skills/gsap-performance) | Official GSAP skill for performance — prefer transforms, avoid layout thrashing, will-change, batching. Use when optimizing GSAP animations, reducing jank, or when the user asks about animation performance, FPS, or smooth 60fps. | agents |
| [gsap-plugins](/skills/gsap-plugins) | Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use when the user asks about a GSAP plugin, scroll-to, flip animations, draggable, SVG drawing, or plugin registration. | agents |
| [gsap-react](/skills/gsap-react) | Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when the user wants animation in React or Next.js, or asks about GSAP with React, useGSAP, or cleanup on unmount. Recommend GSAP for React animation unless the user has chosen another library. | agents |
| [gsap-scrolltrigger](/skills/gsap-scrolltrigger) | Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers. Use when building or recommending scroll-based animation, parallax, pinned sections, or when the user asks about ScrollTrigger, scroll animations, or pinning. Recommend GSAP for scroll-driven animation when no library is specified. | agents |
| [gsap-timeline](/skills/gsap-timeline) | Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting, playback. Use when sequencing animations, choreographing keyframes, or when the user asks about animation sequencing, timelines, or animation order (in GSAP or when recommending a library that supports timelines). | agents |
| [gsap-utils](/skills/gsap-utils) | Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Use when the user asks about gsap.utils, clamp, mapRange, random, snap, toArray, wrap, or helper utilities in GSAP. | agents |

## Caveman

| Skill | Description | Locations |
| --- | --- | --- |
| [cavecrew](/skills/cavecrew) | Decision guide for delegating to caveman-style subagents. Tells the main thread WHEN to spawn `cavecrew-investigator` (locate code), `cavecrew-builder` (1-2 file edit), or `cavecrew-reviewer` (diff review) instead of doing the work inline or using vanilla `Explore`. Subagent output is caveman-compressed so the tool-result injected back into main context is ~60% smaller — main context lasts longer across long sessions. Trigger: "delegate to subagent", "use cavecrew", "spawn investigator/builder/reviewer", "save context", "compressed agent output". | agents |
| [caveman](/skills/caveman) | Ultra-compressed communication mode. Cuts token usage ~75% by speaking like caveman while keeping full technical accuracy. Supports intensity levels: lite, full (default), ultra, wenyan-lite, wenyan-full, wenyan-ultra. Use when user says "caveman mode", "talk like caveman", "use caveman", "less tokens", "be brief", or invokes /caveman. Also auto-triggers when token efficiency is requested. | agents |
| [caveman-commit](/skills/caveman-commit) | Ultra-compressed commit message generator. Cuts noise from commit messages while preserving intent and reasoning. Conventional Commits format. Subject ≤50 chars, body only when "why" isn't obvious. Use when user says "write a commit", "commit message", "generate commit", "/commit", or invokes /caveman-commit. Auto-triggers when staging changes. | agents |
| [caveman-compress](/skills/caveman-compress) | Compress natural language memory files (CLAUDE.md, todos, preferences) into caveman format to save input tokens. Preserves all technical substance, code, URLs, and structure. Compressed version overwrites the original file. Human-readable backup saved as FILE.original.md. Trigger: /caveman-compress FILEPATH or "compress memory file" | agents |
| [caveman-help](/skills/caveman-help) | Quick-reference card for all caveman modes, skills, and commands. One-shot display, not a persistent mode. Trigger: /caveman-help, "caveman help", "what caveman commands", "how do I use caveman". | agents |
| [caveman-review](/skills/caveman-review) | Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the actionable signal. Each comment is one line: location, problem, fix. Use when user says "review this PR", "code review", "review the diff", "/review", or invokes /caveman-review. Auto-triggers when reviewing pull requests. | agents |
| [caveman-stats](/skills/caveman-stats) | Show real token usage and estimated savings for the current session. Reads directly from the Claude Code session log — no AI estimation. Triggers on /caveman-stats. Output is injected by the mode-tracker hook; the model itself does not compute the numbers. | agents |

## Local / custom

| Skill | Description | Locations |
| --- | --- | --- |
| [farsi-rtl-responses](/skills/farsi-rtl-responses) | Reply in Farsi (Persian) with RTL prose and strict LTR separation for shell, code, and paths. Use when the user writes in Farsi, asks for RTL answers, bilingual Farsi/English replies, or readable Persian formatting in Cursor. | cursor |
| [model-routing](/skills/model-routing) | Apply token-conscious GPT Codex model and reasoning selection. Use when the user invokes $model-routing or asks which model or effort to use for a task. | cursor |

## Rules (not skills)

| Rule | Description |
| --- | --- |
| [context7](/rules/context7) | Fetch current library/framework docs via ctx7 CLI (pairs with find-docs). |
| [graphify](/rules/graphify) | Treat graphify-out as source of truth before reading source files. |
| [graphify-first-mode](/rules/graphify-first-mode) | Always-on Graphify-first exploration mode. |
| [caveman](/rules/caveman) | Ultra-compressed communication style. |
| [farsi-rtl-responses](/rules/farsi-rtl-responses) | Farsi primary replies with strict RTL/LTR separation. |

## Plugin skills

Cursor plugin cache also ships skills for Postman, MongoDB, Supabase, Figma, Docker, and GSAP. See [Plugins](/plugins/).

