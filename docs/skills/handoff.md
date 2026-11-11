# `/handoff`

Compact the current conversation into a handoff document for another agent to pick up.

**Type:** prompt-driven · writes to OS temp

## Install this skill

```bash
npx skills@latest add mattpocock/skills --skill=handoff
```

Then type `/handoff` (optionally with what the next session should focus on).

## What it does

`handoff` turns the conversation into a **portable markdown file** so a fresh agent (or harness, directory, colleague, side task) can continue.

What it gives you is **portability**, not compression. You need a file only when the work has to *travel*. If nothing is travelling, stay in session, use `/clear`, a subagent, or `/compact` instead.

The document lands in the OS temp directory (`$TMPDIR` / `/tmp` / `%TEMP%`) — **not** the workspace. It includes a "suggested skills" section for the next agent. It references existing artifacts by path/URL instead of duplicating them. Secrets and PII are redacted.

## When to reach for it

Invoke with `/handoff`. Not auto-started.

Reach for it when:

- Switching harness (Cursor → Codex, etc.)
- Forking a side task to another agent
- Handing work to a colleague's agent session
- You passed an argument describing the next session's focus

## Usage samples

> `/handoff` Continue the payment refactor; next agent should start with code-review against main.

> `/handoff` Package this grilling outcome for an implementer who has never seen the chat.

## Expected result

One markdown handoff file in temp. Workspace unchanged. Suggested skills listed for the next agent.

## Prerequisites

None beyond the skill itself. No issue tracker required.

## It's working if

- A handoff `.md` exists under the temp directory
- Specs/ADRs/issues are linked, not pasted wholesale
- No API keys or passwords appear in the file
- A cold agent can resume without rereading the whole chat

## Where it fits

End of a shaping or investigation phase. Often after [grill-me](/skills/grill-me) / [grill-with-docs](/skills/grill-with-docs), before implementation or [code-review](/skills/code-review).

## Related

- [grill-me](/skills/grill-me) · [code-review](/skills/code-review)
