#!/usr/bin/env python3
"""Regenerate scripts/catalog.json and docs skill/catalog pages from local installs."""

from __future__ import annotations

import json
import re
import runpy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Re-run the generator embedded in the first bootstrap by importing logic inline.
# Keep this file as the stable entrypoint: `npm run catalog`.

def parse_skill(d: Path) -> str:
    text = (d / "SKILL.md").read_text(encoding="utf-8", errors="replace")
    desc = ""
    m = re.search(r"^---\s*\n(.*?)\n---", text, re.S)
    body = text
    if m:
        fm = m.group(1)
        body = text[m.end() :]
        dm = re.search(r'^description:\s*"((?:\\.|[^"\\])*)"', fm, re.M | re.S)
        if not dm:
            dm = re.search(r"^description:\s*'((?:\\.|[^'\\])*)'", fm, re.M | re.S)
        if not dm:
            dm = re.search(r"^description:\s*>-?\s*\n((?:[ \t]+.+\n?)+)", fm, re.M)
            if dm:
                desc = " ".join(x.strip() for x in dm.group(1).splitlines())
        if dm and not desc:
            desc = dm.group(1)
        if not desc:
            dm = re.search(r"^description:\s*(.+)$", fm, re.M)
            if dm and dm.group(1).strip() not in (">", ">-", "|"):
                desc = dm.group(1).strip().strip('"').strip("'")
    desc = re.sub(r"\s+", " ", desc).strip()
    if not desc or desc in (">", ">-"):
        lines: list[str] = []
        for line in body.splitlines():
            s = line.strip()
            if not s or s.startswith("#") or s.startswith("```"):
                if lines:
                    break
                continue
            if s.startswith("- "):
                s = s[2:]
            lines.append(s)
            if len(" ".join(lines)) > 40:
                break
        desc = " ".join(lines)[:220]
    return desc


def main() -> None:
    skills_dirs = [Path.home() / ".agents/skills", Path.home() / ".cursor/skills"]
    seen: dict[str, dict] = {}
    for root in skills_dirs:
        if not root.exists():
            continue
        for d in sorted(root.iterdir()):
            if not (d / "SKILL.md").is_file():
                continue
            name = d.name
            path_kind = "agents" if ".agents" in str(d) else "cursor"
            desc = parse_skill(d)
            if name in seen:
                if path_kind not in seen[name]["locations"]:
                    seen[name]["locations"].append(path_kind)
                if (not seen[name]["description"] or seen[name]["description"] in (">", ">-")) and desc:
                    seen[name]["description"] = desc
            else:
                seen[name] = {
                    "name": name,
                    "description": desc,
                    "locations": [path_kind],
                    "path": str(d),
                }

    categories = {
        "Engineering & planning": [
            "code-review",
            "grill-me",
            "grill-with-docs",
            "grilling",
            "handoff",
            "domain-modeling",
            "setup-matt-pocock-skills",
        ],
        "Design & UI": [
            "banner-design",
            "brand",
            "design",
            "design-system",
            "slides",
            "skillui",
            "ui-styling",
            "ui-ux-pro-max",
            "deslop",
            "unslop",
        ],
        "Docs & discovery": ["find-docs", "find-skills"],
        "Browser & security": ["playwright-cli", "penetration-testing-with-strix"],
        "GSAP": sorted(n for n in seen if n.startswith("gsap-")),
        "Caveman": sorted(n for n in seen if n.startswith("caveman") or n == "cavecrew"),
        "Local / custom": ["farsi-rtl-responses", "model-routing"],
    }
    assigned = {n for names in categories.values() for n in names}
    leftover = sorted(n for n in seen if n not in assigned)
    if leftover:
        categories["Other"] = leftover

    rules = [
        {
            "name": "context7",
            "slug": "context7",
            "description": "Fetch current library/framework docs via ctx7 CLI (pairs with find-docs).",
        },
        {
            "name": "graphify",
            "slug": "graphify",
            "description": "Treat graphify-out as source of truth before reading source files.",
        },
        {
            "name": "graphify-first-mode",
            "slug": "graphify-first-mode",
            "description": "Always-on Graphify-first exploration mode.",
        },
        {
            "name": "caveman",
            "slug": "caveman",
            "description": "Ultra-compressed communication style.",
        },
        {
            "name": "farsi-rtl-responses",
            "slug": "farsi-rtl-responses",
            "description": "Farsi primary replies with strict RTL/LTR separation.",
        },
    ]

    catalog = {
        "count": len(seen),
        "skills": sorted(seen.values(), key=lambda x: x["name"]),
        "categories": categories,
        "rules": rules,
    }
    out = ROOT / "scripts/catalog.json"
    out.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {out} ({len(seen)} skills)")


if __name__ == "__main__":
    main()
