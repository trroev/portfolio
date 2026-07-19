# portfolio

The website for **trroev development** — Trevor Mathiak's personal developer brand.

**Check it out:** [trevormathiak.dev](https://trevormathiak.dev)

![page preview image](/portfolio_splash.jpg)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Payload CMS 3](https://payloadcms.com/) (in-app admin at `/admin`)
- [MongoDB Atlas](https://www.mongodb.com/atlas) datastore via the Mongoose adapter
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for media uploads
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
# set up environment variables (see below), then start the dev server
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000) and the CMS admin
panel at [http://localhost:3000/admin](http://localhost:3000/admin).

## Environment variables

Create a `.env` file in the project root with the following. Values are also read
from Vercel in preview/production — pull them locally with `vercel env pull`.

| Variable                | Required | Description                                                                                                  |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `PAYLOAD_SECRET`        | yes      | Long random string used to sign/encrypt Payload tokens. Generate with `openssl rand -hex 32`.                |
| `DATABASE_URI`          | yes      | MongoDB Atlas connection string (`mongodb+srv://…`). The Payload datastore.                                  |
| `BLOB_READ_WRITE_TOKEN` | yes      | Vercel Blob read/write token for media uploads. Auto-provisioned when a Blob store is linked to the project. |
| `RESEND_API_KEY`        | yes      | [Resend](https://resend.com) API key used by the contact form to deliver messages.                          |
| `CONTACT_TO_EMAIL`      | yes      | Inbox that contact-form submissions are delivered to.                                                        |

```sh
# .env
PAYLOAD_SECRET=your-generated-secret
DATABASE_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/portfolio?retryWrites=true&w=majority
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxx
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=you@example.com
```

The contact form sends from `contact@trevormathiak.dev`; that domain must be
verified in Resend for delivery to succeed.

## CMS

Content is managed in [Payload](https://payloadcms.com/), mounted inside the Next.js
app. There is a single **Admin** login and no public registration — the first admin
is created via `/admin` on first run, and creating further admins requires being
logged in.

- Admin panel: `/admin`
- REST API: `/api`
- GraphQL: `/api/graphql` (playground at `/api/graphql-playground`)

### Content model

Every public route is a document in the **Pages** collection, composed from
reusable blocks and rendered by a single dynamic slug route (`src/app/(frontend)/[slug]`);
the `home` page backs the root route. Pages support drafts and publishing, and
publishing revalidates the affected path. The
[SEO plugin](https://payloadcms.com/docs/plugins/seo) adds an editable metadata tab
to each Page, falling back to the site defaults in `src/config/site.ts`.

**Collections**

| Collection     | Purpose                                                       |
| -------------- | ------------------------------------------------------------- |
| `Pages`        | Block-built pages; one document per public route             |
| `Projects`     | Portfolio projects surfaced by the project-showcase block    |
| `Technologies` | Tech tags referenced by projects                             |
| `Media`        | Uploaded images (stored in Vercel Blob)                      |
| `Admins`       | Admin users for the CMS                                       |

**Globals**

| Global       | Purpose                                                        |
| ------------ | ------------------------------------------------------------- |
| `Navigation` | Header nav items and CTA — links are relationships to Pages   |
| `Footer`     | Footer links and social links                                 |

**Blocks** — the layout building blocks a Page is composed from: `hero`,
`pageIntro`, `featureList`, `projectShowcase` (with a featured-only mode), `story`
(rich text + optional portrait), `ctaBand`, and `contactForm`.

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the development server         |
| `pnpm build`     | Build for production (`next build`)  |
| `pnpm start`     | Serve the production build           |
| `pnpm lint`      | Lint with Biome (via Ultracite)      |
| `pnpm format`    | Format & auto-fix with Ultracite     |
| `pnpm typecheck` | Type-check with the TypeScript compiler |
| `pnpm generate:types`     | Regenerate `src/payload-types.ts` from the Payload config |
| `pnpm generate:importmap` | Regenerate the admin panel import map                     |
