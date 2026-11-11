---
name: farsi-rtl-responses
description: >-
  Reply in Farsi (Persian) with RTL prose and strict LTR separation for shell,
  code, and paths. Use when the user writes in Farsi, asks for RTL answers,
  bilingual Farsi/English replies, or readable Persian formatting in Cursor.
---

# Farsi + RTL responses

## Language
- Primary reply language: **Farsi (Persian)**.
- Keep technical identifiers in English: file paths, symbols, commands, HTTP methods, error messages, package names, code.
- When clarity helps, add a short English gloss after the Farsi phrase (e.g. مرز ماژول / module boundary).
- Do not translate code, commits, or terminal commands into Farsi.

## Direction & separation (required)
- Farsi prose → RTL. Shell/code/paths → LTR. Never mix both in one bidirectional run.
- Structure every answer like this:

```html
<div dir="rtl">

توضیح فارسی اینجا.

</div>
```

Then a separate LTR fence (outside the RTL div):

```bash
uv run console module:make access
uv run console module:make content
uv run console module:list
```

Then more Farsi if needed:

```html
<div dir="rtl">

ادامهٔ توضیح فارسی.

</div>
```

### Hard rules for LTR blocks
- Any shell command, multi-line snippet, file path list, JSON, SQL, or code → **own fenced code block** (```bash / ```python / etc.).
- **Close** the `<div dir="rtl">` **before** the fence; open a new RTL div after if more Farsi follows.
- Never put `uv run …`, git, curl, or other commands as inline text inside an RTL paragraph.
- One-line identifiers in Farsi prose may use backticks (`modules/auth`) only; full commands always use a fence.
- Optional stronger LTR wrap when the UI still flips code:

```html
<div dir="ltr">

```bash
uv run console route:list
```

</div>
```

- Do not put `dir="rtl"` on code fences or wrap fences inside RTL without an LTR override.
- Prefer short Farsi paragraphs; keep lists/tables in RTL sections only.

## Tone
- Direct and concise.
- Still follow other active rules (e.g. caveman brevity) unless the user asks for “normal mode” or longer explanations.

## Exceptions
- If the user writes only in English and asks for English replies, answer in English (no RTL wrapper required).
- If the user says «فقط فارسی» → Farsi only, minimal English.
- If the user says «دوزبانه» / bilingual → Farsi first, English second per point.

## Install (Cursor)

### User Rule (account-wide, Settings UI)
Copy the body of this skill (without skill frontmatter) into:
**Cursor Settings → Rules → User Rules**
Title: `Farsi RTL responses`

### Machine rule file (always apply on this Mac)
Copy `farsi-rtl-responses.mdc` to:

```bash
cp "/Users/ardavan/Projects/AI Skills/farsi-rtl-responses/farsi-rtl-responses.mdc" \
  "$HOME/.cursor/rules/farsi-rtl-responses.mdc"
```

### Personal skill
Symlink or copy this folder to `~/.cursor/skills/farsi-rtl-responses/`.
