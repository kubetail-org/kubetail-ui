---
title: Generate Storybook docs with react-docgen
date: 2026-11-08
scope: build
status: Accepted
---

# Generate Storybook docs with react-docgen

## Context

Storybook's prop tables come from a docgen pass over each component at build time. `.storybook/main.ts` used `reactDocgen: 'react-docgen-typescript'`, which runs a TypeScript program through the JS compiler API (`ts.sys`, `createProgram`, …) via `@joshwooding/vite-plugin-react-docgen-typescript`.

TypeScript 7 is the native (Go) compiler, and its `typescript` package no longer ships that JS API. Upgrading to TS 7 (#157) made `pnpm build-storybook` fail with `Cannot read properties of undefined (reading 'fileExists')` inside the docgen plugin. That failure is why a `typescript: ^6.0.2` override sat in `pnpm-workspace.yaml` and kept the lockfile on TS 6 after `package.json` had asked for `^7.0.2`.

When we compared builds, the TS 6 setup was not giving us anything: the built Storybook had no `__docgenInfo` on any component, so the prop tables had nothing to show. We didn't look into why.

## Decision

`.storybook/main.ts` sets `typescript.reactDocgen: 'react-docgen'`. This is Storybook's Babel-based default and doesn't touch the TypeScript API. The `react-docgen-typescript` devDependency and the `typescript` override are removed, and the repo builds, lints, tests and runs Storybook on TS 7.

## Alternatives considered

**Keep the `typescript: ^6.0.2` override.** Rejected: it pins the whole repo to TS 6 just so Storybook can run a docgen pass that was producing nothing.

**Give only the docgen plugin a TS 6 copy** (scoped override `@joshwooding/vite-plugin-react-docgen-typescript>typescript`, or `packageExtensions` pointing at `npm:@typescript/typescript6`). Rejected: both packages take `typescript` as a peer dependency, and pnpm resolves peers from the root, so they still got TS 7. Forcing a separate copy would mean patching their manifests, which is fragile for a tool that was producing no output.

**Turn docgen off (`reactDocgen: false`).** Rejected: `react-docgen` produces prop metadata for most components, so turning it off loses information we now have.

## Consequences

- TS 7 works across the toolchain.
- `react-docgen` reads each component file on its own. It can't follow types from other packages' `.d.ts` files, so Base UI props and the allowed values of `cva` variants (`VariantProps<typeof …>`) don't appear in the tables. For `Button` it reports `variant` and `size` with their defaults but no types. Stories that need to show the allowed values should declare `argTypes` explicitly.
- The `shouldExtractLiteralValuesFromEnum` option is gone with `react-docgen-typescript`.

## Revisit when

`react-docgen-typescript` (or a successor) works with TypeScript 7's API and reads types across packages, or the incomplete prop tables become a real problem for consumers of the docs site.
