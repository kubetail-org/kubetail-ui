# Kubetail-UI

React component library for the Kubetail project (React 19, TypeScript, Tailwind CSS v4, Base UI, Storybook).

## Commands

```sh
pnpm install            # Install dependencies
pnpm storybook          # Storybook dev server (localhost:6006)
pnpm build              # TypeScript check + Vite build
pnpm lint               # oxlint + oxfmt check (zero warnings policy)
pnpm format             # Format with oxfmt
pnpm test               # Vitest tests
```

After every set of changes to TypeScript files, run `pnpm format` and `pnpm lint`.

## Sandbox (sbx) Development

When running inside an `sbx` Linux sandbox with the repo mounted from a macOS host, `scripts/sandbox-dev-setup.sh` **must run before any install, build or test command**. The `SessionStart` hook in `.claude/settings.json` runs it; it is idempotent and no-ops outside the sandbox, so run it yourself if unsure, then `pnpm install`.

- It bind-mounts `node_modules` from the sandbox overlay (`/home/agent/kubetail-ui-build/worktrees/...`) and `dist` / `storybook-static` from `.sandbox-linux/` (gitignored), so Linux artifacts never overwrite the host's macOS ones.
- It sets `PNPM_CONFIG_STORE_DIR` and `PNPM_CONFIG_ENABLE_GLOBAL_VIRTUAL_STORE=true` in `/etc/sandbox-persistent.sh`: every worktree shares one pnpm store, and each `node_modules` holds only symlinks into it. **Never edit files under `node_modules`** — every worktree shares them. Keep these settings out of `pnpm-workspace.yaml` so the host and CI keep pnpm's default layout.
- If something fails only in the sandbox, `unset PNPM_CONFIG_ENABLE_GLOBAL_VIRTUAL_STORE`, empty `node_modules` and reinstall to rule out the layout.
- The overlay is capped at 20G; the script warns under 2G free.
- Storybook listens on `0.0.0.0:6006`; the user publishes it from the host with `sbx ports <sandbox-name> --publish 6006:6006`.

## Component Conventions

- Components live in `src/elements/` as `component-name.tsx` + `component-name.stories.tsx`
- Use `cva` for variant-based styling, `cn()` for conditional class merging
- Support polymorphic rendering via Base UI's `render` prop
- Include `data-slot` attributes for styling composition

## Import Order

`oxfmt` enforces this through `sortImports` in `.oxfmtrc.json`. Organize imports into three groups separated by blank lines, sorted alphabetically within each:

1. **Third-party** — `node_modules` packages (e.g. `react`, `@base-ui/react`)
2. **First-party** — `@kubetail/*`
3. **Local** — relative imports (`@/*`, `./*`)

Node built-ins (e.g. `path`) go in a group of their own before third-party imports.

## Dependencies

Avoid introducing new external dependencies unless it materially improves readability or performance. Consider bundle size impact. State the reason clearly if adding one.

## Commits

Use [conventional commit](https://www.conventionalcommits.org/) format: `<type>(<scope>): <description>`. Types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Description in imperative mood, lowercase, no period, under 72 chars. Add body only if the "why" isn't obvious; wrap at 72 chars. Always sign-off (`-s`). Only add "Co-authored-by" if a human was not in the loop or if the user requested it.

## Pull Requests

PR titles: capitalized, imperative mood, no conventional commit prefixes. Prefix with emoji: 🎣 Bug fix, 🐋 New feature, 📜 Documentation, ✨ General improvement. Use the repo's `.github/pull_request_template.md`. Reference related issues. Keep changes minimal and focused.