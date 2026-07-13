# portfolio

The website for **trroev development** — Trevor Mathiak's personal developer brand.

**Check it out:** [trevormathiak.dev](https://trevormathiak.dev)

![page preview image](/portfolio_splash.jpg)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/) via [Ultracite](https://www.ultracite.ai/) for linting & formatting
- [pnpm](https://pnpm.io/) package manager
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```sh
# clone this repo
git clone https://github.com/trroev/portfolio.git
# change into the directory
cd portfolio
# install dependencies
pnpm install
# start the development server
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the development server         |
| `pnpm build`     | Build for production                 |
| `pnpm start`     | Serve the production build           |
| `pnpm lint`      | Lint with Biome (via Ultracite)      |
| `pnpm format`    | Format & auto-fix with Ultracite     |
| `pnpm typecheck` | Type-check with the TypeScript compiler |
