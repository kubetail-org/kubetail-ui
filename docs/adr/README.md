# Architecture Decision Records

An ADR records **why** a design is the way it is: the forces involved, the alternatives we rejected and what the decision costs us. [`CLAUDE.md`](../../CLAUDE.md) records **what is true now**: conventions, commands and traps. Keeping the two separate keeps `CLAUDE.md` short enough to read in full on every task, while the reasoning still has a durable place to live.

Rule of thumb: if a paragraph in `CLAUDE.md` explains _why_ rather than _what_, or lists an option we didn't take, it belongs here.

## Filenames

```
docs/adr/YYYY-MM-DD-short-slug.md
```

The date is the day the ADR was **written**. For a decision made earlier, that is the day it was written down; note the approximate original date in the body. Dates instead of sequential numbers avoid collisions between branches and show how old the reasoning is. Several ADRs can share a date.

There is one flat sequence for the whole repo, with no subdirectories. Scope goes in frontmatter instead, so the index below can still be filtered by area:

- `elements`: components in `src/elements/`
- `styling`: Tailwind, theming, `cva` / `cn()`
- `build`: bundling, tooling, lint/format, packaging
- `repo`: process, docs, contribution workflow
- `cross-cutting`: anything spanning several of the above

## Frontmatter

```yaml
---
title: <Imperative phrase>
date: YYYY-MM-DD
scope: elements | styling | build | repo | cross-cutting
status: Accepted
amended_by: <path> # optional, see "Partial replacement" below
---
```

## Status

- **`Accepted`**: in force. This is the only status `CLAUDE.md` may link to.
- **`Superseded by [<slug>](<path>)`**: kept for the record. Nothing outside `docs/adr/` links here.

Superseding is a normal change, not a failure. Write a new ADR, flip the old one's status and **update every `CLAUDE.md` link in the same commit**. A live doc pointing at a superseded ADR is how this system rots.

**Partial replacement.** A later ADR may replace part of an accepted one. The newer ADR names what it replaces. The older one keeps its status, since the rest of it is still in force, and gains an `amended_by` frontmatter pointer so its readers aren't left believing a paragraph that has been answered.

## Append-only

ADRs are a historical log: recording what we rejected, what we replaced and what we believed at the time is their job. Edit an accepted ADR only to fix errors, flip its status, add an `amended_by` pointer or update a path that has moved. Never rewrite the decision to match later reality; write a new ADR instead.

## Referencing an ADR

Link by path and name it by slug:

```markdown
→ [ADR: record-architecture-decisions](docs/adr/2026-11-08-record-architecture-decisions.md)
```

## Writing one

Copy [`TEMPLATE.md`](TEMPLATE.md) and keep it to about a page. Prefer prose over bullets where the reasoning is a chain. **Alternatives considered is required**: an ADR with no rejected option is usually just documentation in the wrong place. Retroactive ADRs reconstruct decisions that were already made; where the original reasoning can't be recovered, say so rather than invent it.

Add a row to the index below in the same commit.

## Index

| Date       | ADR                                                                                                  | Scope | Status   |
| ---------- | ---------------------------------------------------------------------------------------------------- | ----- | -------- |
| 2026-11-08 | [Record architecture decisions](2026-11-08-record-architecture-decisions.md)                         | repo  | Accepted |
| 2026-11-08 | [Generate Storybook docs with react-docgen](2026-11-08-generate-storybook-docs-with-react-docgen.md) | build | Accepted |
| 2026-11-08 | [Wait a week before installing a release](2026-11-08-wait-a-week-before-installing-a-release.md)     | repo  | Accepted |
