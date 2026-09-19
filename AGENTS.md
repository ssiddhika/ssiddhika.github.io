# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 14 (Pages Router) + TypeScript personal portfolio site. There is no backend, database, or external service — the only runnable service is the Next.js web app. Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`).

- Node: `package.json` `engines` declares `node: 24.x`, but the VM's default Node (22.x) runs everything fine (Next.js 14.2 supports Node 18.17+). `npm install` only prints a non-blocking `EBADENGINE` warning. Nvm has Node 24 installed, but `/exec-daemon/node` takes PATH precedence, so the default Node 22 is what's actually used — that's expected and works.
- Run the app (dev): `npm run dev` serves on http://localhost:3000 with hot reload.
- Lint gotcha: the repo ships **no** ESLint config, so `npm run lint` (`next lint`) drops into an **interactive** prompt asking you to configure ESLint and will appear to hang. To lint non-interactively, temporarily add an `.eslintrc.json` with `{ "extends": "next/core-web-vitals" }`, run `npm run lint`, then remove it (don't commit it unless intended). Note there are pre-existing `react/no-unescaped-entities` errors and `@next/next/no-img-element` warnings in the committed source.
- `next build` does not fail on those lint issues because it skips linting when no ESLint config is present.
