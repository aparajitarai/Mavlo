# Mavlo - UI-First MVP

This is a UI-first MVP for Mavlo, a project management and design tool for architects and interior designers. This repository contains the production-ready, modern frontend for the application.

## Tech Stack

*   **Framework:** Next.js (App Router) with React and TypeScript
*   **Styling:** Tailwind CSS + shadcn/ui components
*   **Icons:** lucide-react
*   **State Management:** Zustand for client state; TanStack Query for server state
*   **Forms:** react-hook-form + zod
*   **Tables:** @tanstack/react-table
*   **Drag & Drop:** @dnd-kit/core
*   **Charts:** recharts
*   **Calendar:** @fullcalendar/react
*   **Mock Backend:** MSW (Mock Service Worker)
*   **Testing:** Playwright for E2E tests; Vitest for unit tests

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or higher)
*   [pnpm](https://pnpm.io/installation)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/mavlo.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd mavlo/apps/web
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

*   `pnpm dev`: Starts the development server.
*   `pnpm build`: Builds the application for production.
*   `pnpm start`: Starts the production server.
*   `pnpm lint`: Lints the code using ESLint.
*   `pnpm test`: Runs the Vitest unit tests.
*   `pnpm test:e2e`: Runs the Playwright E2E tests.
*   `pnpm seed`: Seeds the mock data (this is run automatically on the first run of the dev server).

## Vercel Deployment

To deploy the application to Vercel, follow these steps:

1.  Push the code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  [Import the project into Vercel](https://vercel.com/new).
3.  Vercel will automatically detect that you are using Next.js and will configure the build settings for you.
4.  Click the "Deploy" button.

The application will be deployed and you will be provided with a URL to access it.
