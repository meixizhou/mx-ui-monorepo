# mx-ui-monorepo

This repository provides a Turborepo-based UI monorepo that showcases a React 18 + TypeScript component library built with Tailwind CSS 3.4 and Radix UI Themes. The workspace is powered by pnpm workspaces, Rollup + PostCSS builds, Storybook 8 documentation, Changesets-based versioning, and Verdaccio/Lerna publishing helpers.

## Contents

- `packages/ui` – Shared UI component library.
- `apps/storybook` – Storybook documentation workspace that consumes the UI library.
- `verdaccio/` – Example configuration for running a private Verdaccio registry.

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run Storybook**

   ```bash
   pnpm --filter storybook dev
   ```

3. **Build the component library**

   ```bash
   pnpm --filter @mx/ui build
   ```

## Release Management

- Use `pnpm changeset` to create release plans.
- Publish to Verdaccio via Lerna: `pnpm release` (configured to target `http://localhost:4873`).

