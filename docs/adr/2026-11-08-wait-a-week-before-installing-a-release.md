---
title: Wait a week before installing a release
date: 2026-11-08
scope: repo
status: Accepted
---

# Wait a week before installing a release

## Context

Two settings delay new releases. Dependabot's `cooldown.default-days` in `.github/dependabot.yml` decides how old a release must be before Dependabot proposes it. pnpm's `minimumReleaseAge` in `pnpm-workspace.yaml` decides how old it must be before pnpm installs it, and every frozen install checks the lockfile against it.

#139 (October 2026) set `minimumReleaseAge` to a day, because a week lagged every fresh release, while Dependabot already waited 7 days. When the two disagree, they work against each other. `pnpm update` locks versions 1–6 days old, then the next Dependabot PR resolves below them and rolls them back. #134 downgraded Storybook from 10.6.4 to 10.6.3 and Vite from 8.3.5 to 8.3.4 this way. zizmor's `dependabot-cooldown` audit, which runs in CI's `YAML · Lint` job, recommends at least 7 days. kstack, the other Kubetail repo, already waits a week in both places.

## Decision

Both settings are 7 days: `minimumReleaseAge: 10080` (minutes) and `cooldown.default-days: 7` for the `github-actions` and `npm` ecosystems. `.github/ci-config/zizmor.yml` has no `dependabot-cooldown` override, so zizmor's own 7-day default holds the floor. A comment next to each setting names the other.

Security fixes don't wait. Dependabot security updates skip the cooldown, and a fix younger than a week goes in `minimumReleaseAgeExclude` as an exact version (`pnpm audit --fix` adds these).

## Alternatives considered

**A day in both places** (#140 as first written). Rejected: a day gives the registry and the community little time to catch and pull a compromised release, which is the attack these settings exist to stop. It also needed a zizmor override that kstack doesn't need.

**Different values in each place.** Rejected: a longer Dependabot cooldown causes the rollbacks above, and a longer pnpm age makes Dependabot PRs fail their frozen install.

## Consequences

- A compromised release has a week to be noticed and unpublished before it can reach this repo or its CI.
- New releases reach the repo a week late, even when we want one sooner. Upgrading on purpose means waiting, or adding an exact version to `minimumReleaseAgeExclude` with a reason.
- A manual `pnpm update` can't lock anything Dependabot would roll back.
- Changing one setting without the other brings the rollbacks back. The comments next to each setting are the only guard.

## Revisit when

A week's lag blocks a release we need often enough that the exclude list keeps growing, or zizmor's recommended minimum changes.
