# Rule: graphify

Treat `graphify-out/` as the primary map of a codebase before broad file scans.

## Commands

```bash
graphify query "<question>"
graphify path "<A>" "<B>"
graphify explain "<concept>"
graphify update .
```

## Workflow

1. Read `graphify-out/GRAPH_REPORT.md` and `graphify-out/graph.json` when present.
2. Traverse with Graphify.
3. Open only files tied to relevant nodes.
4. After code changes: `graphify update .`

Skip when `graphify-out/graph.json` does not exist.

## On this machine

CLI: `graphify` (available). Rule: `~/.cursor/rules/graphify.mdc`.
