# Plugin skills

Cursor plugins ship their own `SKILL.md` trees under the plugin cache. They are **not** the same as user skills in `~/.agents/skills`, but the agent can still load them when the plugin is active.

## Groups seen on this machine

| Plugin family | Examples |
| --- | --- |
| Postman | `api-engineer`, `api-testing`, `api-mocking`, `flows`, `ci-integration`, … |
| MongoDB | schema design, query optimizer, Atlas Search, MCP setup, … |
| Supabase | `supabase`, `supabase-postgres-best-practices` |
| GSAP | core / react / scrolltrigger / … (also mirrored as user skills) |
| Figma | design-to-code, Code Connect, FigJam, … |
| Docker | sandboxes lifecycle |

Path pattern:

```text
~/.cursor/plugins/cache/cursor-public/<plugin>/<hash>/skills/...
```

## Docs in this site

- [Postman](/plugins/postman)
- [MongoDB](/plugins/mongodb)
- [Supabase](/plugins/supabase)
