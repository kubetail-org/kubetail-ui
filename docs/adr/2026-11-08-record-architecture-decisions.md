---
title: Record architecture decisions
date: 2026-11-08
scope: repo
status: Accepted
---

# Record architecture decisions

## Context

`CLAUDE.md` is read in full at the start of every task, by people and by coding agents, so it has to stay short and describe only what is true now: conventions, commands and traps. The reasoning behind those conventions had nowhere else to go. It either piled up in `CLAUDE.md` (the Sandbox section already explains a fair amount of _why_) or was left in PR descriptions, where nobody finds it when a decision comes up for review. Without the reasoning, a later contributor can't tell a deliberate trade-off from an accident, and either preserves something that no longer matters or undoes something that still does.

## Decision

We record architecture decisions as ADRs in `docs/adr/`, modelled on [kstackhq/kstack's `docs/adr/`](https://github.com/kstackhq/kstack/tree/main/docs/adr):

- `docs/adr/README.md` holds the conventions and an index of every ADR.
- `docs/adr/TEMPLATE.md` is copied to write a new one. Its sections are Context, Decision, Alternatives considered (required), Consequences and an optional Revisit when.
- Files are named `YYYY-MM-DD-short-slug.md`, dated by the day they were written, in one flat directory. Scope (`elements | styling | build | repo | cross-cutting`) and status live in frontmatter.
- ADRs are append-only. A changed decision gets a new ADR that supersedes or amends the old one.
- `CLAUDE.md` links only to `Accepted` ADRs, and says when to write an ADR instead of editing `CLAUDE.md`.
- `pnpm lint` / `pnpm format` cover `docs/**/*.md`, so the index table and frontmatter stay consistently formatted.

## Alternatives considered

**Keep the rationale inline in `CLAUDE.md`.** Rejected: it is the file read on every task, so every paragraph of history costs attention on work it has nothing to do with. Rationale also tends to go stale silently when it sits next to the current rules, because it gets edited to match them and loses the record of what was actually weighed.

**Sequential numbering (`0001-…`, `0002-…`).** Rejected: two branches written in parallel both claim the next number and one has to be renumbered at merge, breaking any links already made to it. A number also says nothing about how old the reasoning is, which is the first thing a reader wants to know when judging whether it still holds.

**Per-area directories (`docs/adr/elements/`, `docs/adr/build/`, …).** Rejected: many decisions span areas (for example, Base UI plus `cva` is both `elements` and `styling`) and would have no natural home, and moving an ADR when its scope is reconsidered breaks inbound links. A `scope` frontmatter field and a column in the index give the same filtering without either problem.

## Consequences

- Reasoning gets a durable place, and `CLAUDE.md` can shrink back to current state. Retroactive ADRs for existing decisions (oxlint/oxfmt, the `sbx` setup, Base UI with `cva` / `cn()`, optional peer dependencies) are follow-up work.
- Writing an ADR is extra work on top of the change itself. The required Alternatives section is the main guard against ADRs that merely restate documentation.
- Invariants that are easy to break without noticing: the index must gain a row with each new ADR, and superseding an ADR must update every `CLAUDE.md` link to it in the same commit. Neither is checked automatically.

## Revisit when

The index grows large enough that a single flat table is hard to scan, or ADRs routinely go unread and unwritten.
