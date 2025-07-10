# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kubetail-UI is a React component library for the Kubetail project. It's built with:
- React 19 + TypeScript
- Tailwind CSS v4 with custom design tokens
- Radix UI primitives for component foundations
- Storybook for component development and documentation
- Vite for building and bundling
- Vitest for testing

## Development Commands

- `pnpm install` - Install dependencies
- `pnpm storybook` - Start Storybook dev server (http://localhost:6006)
- `pnpm dev` - Start Vite dev server
- `pnpm build` - Build the library (runs TypeScript check + Vite build)
- `pnpm lint` - Run ESLint with zero warnings policy
- `pnpm test` - Run Vitest tests
- `pnpm build-storybook` - Build Storybook for production

## Architecture

### Component Structure
- Components are located in `src/elements/` directory
- Each component follows the pattern: `component-name.tsx` and `component-name.stories.tsx`
- Components use class-variance-authority (cva) for variant-based styling
- All components support the `asChild` pattern via Radix UI Slot for composition

### Styling System
- Uses Tailwind CSS v4 with custom design tokens (bg-primary, text-on-color, etc.)
- Components use the `cn()` utility from `src/lib/utils.ts` for conditional class merging
- CSS variables are used for theme tokens following the pattern `--color-*`

### Build System
- Library builds to multiple formats (ES modules and CommonJS)
- Preserves directory structure in output with `preserveModules: true`
- Generates TypeScript declarations with unplugin-dts
- CSS is extracted and minification is disabled for better debugging

### Package Exports
The library provides multiple export paths:
- Main entry: `@kubetail/ui`
- Elements: `@kubetail/ui/elements`
- Individual components: `@kubetail/ui/elements/ComponentName`

## Development Notes

- Use `@` alias for imports from `src/` directory
- All peer dependencies (React, ReactDOM, TailwindCSS) should not be bundled
- Components should include `data-slot` attributes for styling composition
- Focus management and accessibility are handled through Radix UI primitives