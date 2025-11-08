# Mavlo Experience Platform

High-fidelity prototype of the Mavlo operational intelligence workspace built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** primitives. The implementation mirrors the provided PDF screens with reusable design tokens, responsive layouts, and accessible states for loading, empty, and error scenarios.

## Getting started

> The project lives entirely inside the `src/` directory to align with the requested app router structure.

1. Install dependencies (npm and pnpm are both supported):

   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build and lint commands:

   ```bash
   npm run build      # Production build
   npm run lint       # ESLint via eslint.config.mjs
   npm run typecheck  # Strict TypeScript validation
   ```

## Route map

| Route | Screen | Highlights |
|-------|--------|------------|
| `/` | Operational overview | Metric grid, revenue velocity area chart, pipeline board, highlights, and activity feed. |
| `/clients` | Client experience | Segment cards, touchpoint table, upcoming engagement cards, shared activity timeline. |
| `/projects` | Delivery control tower | Delivery table with progress bars, leadership backlog, and workflow guardrail summaries. |
| `/analytics` | Intelligence hub | Tabs for revenue forecast, efficiency radar, and milestone tracker. |
| `/reports` | Reports & briefing center | Catalog of report cards with scheduling actions. |
| `/settings` | Workspace settings | Branding controls plus automation toggle panels. |
| `/support` | Help center | Contact form and guide library blocks. |

Global app states live under `src/app/`:

- `loading.tsx` – branded skeleton state while routes stream in.
- `error.tsx` – client-recoverable error surface with retry.
- `not-found.tsx` – guidance back to the overview when a route is missing.

## Design tokens & theming

The design system is driven by CSS variables defined in `src/app/globals.css` and extended in `tailwind.config.ts`:

- Semantic colors (`--background`, `--primary`, `--accent`, `--success`, etc.) power Tailwind classes through the `extend.colors` map.
- Global typography uses Inter (`--font-inter`) for UI copy and Sora (`--font-sora`) for display headings via Next Fonts.
- Radii (`--radius`), custom shadows (`soft`, `floating`), and animation keyframes (`accordion-up/down`) unify feedback across components.
- The app supports light/dark modes by toggling the `.dark` token set with `next-themes` via `ThemeProvider` and the floating `ThemeToggle` component.

## Component system

Reusable UI primitives live in `src/components/ui/` and follow the shadcn/ui patterns (buttons, cards, tabs, dropdowns, selects, tooltips, progress bars, avatars, etc.). Layout and navigation elements are centralized in `src/components/layout/`, while higher-order dashboard widgets live in feature folders:

- `src/components/dashboard/` – metric grid, client spotlight, highlights, activity timeline, pipeline board.
- `src/components/projects/` – delivery table with progress, leadership backlog tiles.
- `src/components/analytics/` – area and radar charts (Recharts) plus milestone list.
- `src/components/clients/` – segment summary cards and touchpoint table.

Charts rely on `recharts`, and drag-and-drop ready primitives from `@dnd-kit/*` are pre-installed for future enhancements.

## Mock data

All screen data is mocked and colocated in `src/mocks/`:

- `dashboard.ts` – summary metrics, pipeline stages, spotlight clients, and highlights.
- `clients.ts` – segment health, touchpoints, and activity feed entries.
- `projects.ts` – delivery table rows and leadership backlog cards.
- `analytics.ts` – revenue and efficiency series plus strategic milestones.

Feature components import from these modules so the UI renders without external services while keeping the data contract explicit.

## Accessibility & responsiveness

- Interactive components include `aria` labels, keyboard-focus styles, and semantic HTML (lists, tables, buttons).
- Navigation adapts between the persistent desktop sidebar/topbar and a condensed mobile nav with quick toggles.
- Cards and grids use responsive Tailwind utilities to collapse gracefully from multi-column layouts to single-column stacks.
- Buttons, forms, and toasts share consistent rounded-pill affordances for parity with the design file.

## Project structure

```
src/
  app/                # Next.js app router entrypoints, layouts, states
  components/         # Layout, UI primitives, and feature compositions
  lib/                # Shared utilities (formatting, class helpers)
  mocks/              # Static data used by screens
  styles/             # Placeholder for additional style modules
```

Feel free to adjust copy, mock values, or extend the primitive set as product requirements evolve. The existing foundation is ready for real data wiring or additional screens without reworking the design system.
