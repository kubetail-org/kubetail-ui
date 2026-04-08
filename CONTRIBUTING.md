# Contributing to Kubetail-UI

Thank you for your interest in contributing to Kubetail-UI! This is the React component library for the [Kubetail](https://github.com/kubetail-org/kubetail) project, built with React 19, TypeScript, Tailwind CSS v4, and Radix UI primitives. We'd love your help.

This document will guide you through the contribution process.

## Table of Contents

- [Where to Find Code](#where-to-find-code)
- [How to Run Tests and Other Checks](#how-to-run-tests-and-other-checks)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Branch Naming Guidelines](#branch-naming-guidelines)
- [Editor Configuration](#editor-configuration)
- [Automation](#bots-and-automation)
- [AI Policy](#ai-policy)
- [Community](#community)

## Where to Find Code

### Project Structure

- **`/src/elements`** - UI components (e.g., Button, Dialog, Select, Tabs)
- **`/src/lib`** - Shared utilities (e.g., `cn()` class merge helper)
- **`/src`** - Library entry points and global styles

### Component Pattern

Each component follows a consistent pattern:

| File                         | Purpose                  |
|------------------------------|--------------------------|
| `component-name.tsx`         | Component implementation |
| `component-name.stories.tsx` | Storybook stories        |
| `component-name.test.tsx`    | Unit tests               |

## How to Run Tests and Other Checks

Make sure your changes pass all tests and checks before submitting a pull request.

```bash
# Install dependencies
pnpm install

# Run linter (zero warnings policy)
pnpm lint

# Run tests
pnpm test

# Build check (TypeScript + Vite)
pnpm build

# Start Storybook dev server (for visual testing)
pnpm storybook
```

## Commit Guidelines

Keep commits minimal and focused. Multiple commits in a PR are fine if they represent logical, well-separated steps that make the change easier to review.

### Format


We follow the [Conventional Commits](https://www.conventionalcommits.org) format:

```
<type>[optional scope]: commit title goes here (all lowercase)

[optional body]

Signed-off-by: Your Name <you@example.com>
```

**Types:**

- `build` - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `chore` - Routine maintenance or housekeeping changes (e.g., updating configs, dependencies, or scripts)
- `ci` - Changes to our CI configuration files and scripts
- `docs` - Documentation only changes
- `feat` - A new feature
- `fix` - A bug fix
- `perf` - A code change that improves performance
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `revert` - Changes that restore old code or behavior
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test` - Adding missing tests or correcting existing tests

## Pull Request Guidelines

### Before Submitting

1. **Check for duplicates**: Review existing [issues](https://github.com/kubetail-org/kubetail-ui/issues) and [pull requests](https://github.com/kubetail-org/kubetail-ui/pulls)
2. **Run tests**: Execute all relevant tests for your changes and ensure they pass
3. **Format code**: Run the linter and fix any issues
4. **Clean commits**: Ensure each commit is minimal, focused, and follows our [commit format](https://www.conventionalcommits.org)

### PR Title Format

Add an emoji to indicate the PR type:

- 🎣 Bug fix
- 🐋 New feature
- 📜 Documentation
- ✨ General improvement

### PR Description

Your PR should include:

- Link to related issue: `Fixes #123`
- **Summary**: Explain the goal of your PR
- **Key Changes**: List the specific key changes made

### PR Checklist

- [ ] Add the correct emoji to the PR title
- [ ] Related issue linked above, if any
- [ ] Commit messages use [conventional commit](https://www.conventionalcommits.org) format
- [ ] Changes are minimal and focused

## Branch Naming Guidelines

Use descriptive branch names. As a suggestion, you can use this pattern:

```
<type>/<short-description>
```

## Editor Configuration

### AI-Assisted Editors

For AI-assisted editors like Claude Code, Codex, Cursor or GitHub Copilot, refer to the [`CLAUDE.md`](./CLAUDE.md) file for guidance on working with this codebase.

### Visual Studio Code

Recommended extensions:
- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`
- **Tailwind CSS IntelliSense**: `bradlc.vscode-tailwindcss`

## Bots and Automation

### GitHub Actions

Our CI/CD pipeline automatically runs on every pull request:

- **Lint**: ESLint with zero warnings policy
- **Test**: Vitest unit tests
- **Build**: TypeScript check + Vite build

You can see the status of these checks in your PR. If any checks fail, review the logs and fix the issues before requesting a review.

### CLA Assistant

If this is your first contribution, our [CLA (Contributor License Agreement)](https://cla-assistant.io/) assistant will prompt you to sign the CLA when you create your pull request. This is a one-time requirement.

## AI Policy

As a contributor you're encouraged to use AI tools in your workflow just as you would use classic tools such as search engines, language servers, linters, debuggers, documentation, or books. These tools are an invaluable resource and can help you write better code and explore ideas more efficiently.

That said, AI tools are different than classic tools because they can blur the line between helping you to do the work and doing the work for you. And when that line becomes blurry, it can limit opportunities to build the deep understanding that comes from writing and reasoning through code yourself.

As an open source project, Kubetail is not only commited to building the most user-friendly logging platform for Kubernetes but also to helping our contributors grow as engineers. We invest a lot of time and effort into code quality, thoughtful reviews, and well-defined engineering specs. We do so happily because we enjoy it but also because it's our responsibility to the community.

In return, we ask that contributions be authored by you. While AI tools can support your workflow, submitted code should reflect your own understanding and intent. To keep our focus on meaningful collaboration within the community, we do not accept contributions generated by bots or submissions authored primarily by llms.

## Community

We'd love to hear from you! Here's how to connect with the Kubetail community.

### Communication Channels

- **[Discord](https://discord.gg/CmsmWAVkvX)**: Join for real-time discussions, questions, and community chat
- **[Slack](https://kubernetes.slack.com/archives/C08SHG1GR37)**: Connect with us on the Kubernetes workspace

### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/kubetail-org/.github/blob/main/CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

---

Thanks for contributing to Kubetail! 🐋
