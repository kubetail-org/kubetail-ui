# Kubetail-UI

React component library for the Kubetail project (React 19, TypeScript, Tailwind CSS v4, Radix UI, Storybook).

## Commands

```sh
pnpm install            # Install dependencies
pnpm storybook          # Storybook dev server (localhost:6006)
pnpm build              # TypeScript check + Vite build
pnpm lint               # ESLint (zero warnings policy)
pnpm test               # Vitest tests
```

After every set of changes to TypeScript files, run `pnpm lint --fix`.

## Component Conventions

- Components live in `src/elements/` as `component-name.tsx` + `component-name.stories.tsx`
- Use `cva` for variant-based styling, `cn()` for conditional class merging
- Support `asChild` pattern via Radix UI Slot
- Include `data-slot` attributes for styling composition

## Import Order

Organize imports into three groups separated by blank lines, sorted alphabetically within each:

1. **Third-party** — `node_modules` packages (e.g. `react`, `@radix-ui/*`)
2. **First-party** — `@kubetail/*`
3. **Local** — relative imports (`@/*`, `./*`)

## Dependencies

Avoid introducing new external dependencies unless it materially improves readability or performance. Consider bundle size impact. State the reason clearly if adding one.

## Commits

Use [conventional commit](https://www.conventionalcommits.org/) format: `<type>(<scope>): <description>`. Types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Description in imperative mood, lowercase, no period, under 72 chars. Add body only if the "why" isn't obvious; wrap at 72 chars. Always sign-off (`-s`). Only add "Co-authored-by" if a human was not in the loop or if the user requested it.

## Pull Requests

PR titles: capitalized, imperative mood, no conventional commit prefixes. Prefix with emoji: 🎣 Bug fix, 🐋 New feature, 📜 Documentation, ✨ General improvement. Use the repo's `.github/pull_request_template.md`. Reference related issues. Keep changes minimal and focused.