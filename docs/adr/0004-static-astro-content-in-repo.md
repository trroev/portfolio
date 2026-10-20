# Static Astro site with content in the repo, superseding Payload

Supersedes [0001](./0001-payload-cms-mongodb.md) and [0003](./0003-block-built-pages-collection.md).

The site moves from Next.js + Payload CMS (MongoDB Atlas, Vercel Blob) to a statically built **Astro** site, with React only as islands where interactivity needs it. All content — pages, projects, technologies, site chrome, media — lives in the repository as Astro content collections validated by Zod schemas. There is no CMS and no editing UI: changing content is a commit and a deploy. The only server code is a single on-demand route for the contact form (Resend), deployed on Vercel alongside the prerendered pages so the existing Vercel WAF rate limit on it keeps working.

We knowingly drop ADR 0001's central promise, "editable without a deploy". For one author who edits copy rarely, a git commit is an adequate CMS, and removing the database, blob store, admin panel and revalidation hooks removes the site's running cost and most of its moving parts.

## Considered Options

- **Keep Next.js + Payload** — works, but carries a database, blob store, admin auth and revalidation for a site edited a few times a year.
- **Git-based CMS (Keystatic/Decap) over repo content** — restores an editing UI, but adds tooling nobody needs yet; it can be layered on later without remodelling content.
- **Headless CMS read at build time** — keeps the CMS and its costs while giving up live edits; worst of both.
- **Third-party form backend or `mailto:` for contact** — would make the site fully static, but loses the existing Resend integration, Zod validation and WAF rate limit.
- **Astro + repo content + one server route (chosen)**.

## Consequences

- `MongoDB Atlas`, `Vercel Blob`, `PAYLOAD_SECRET` and the `/admin` panel leave the deploy; `RESEND_API_KEY` and `CONTACT_TO_EMAIL` remain.
- Media moves from Vercel Blob into the repo and is optimised at build time.
- Payload's drafts disappear; unpublished work is simply not merged.
- Pages stop being data. Each page is a hand-written route file composing block components directly, so 0003's Pages collection, dynamic slug route and block registry go away. Rich text becomes plain markup in those files.
- Site chrome becomes a typed module in code; nav links are typed against the list of known pages, preserving the "nav links point at pages" rule that a relationship field enforced before.
- The migration lands on a long-lived integration branch via stacked PRs and reaches production in one cutover merge, as the 0003 cutover did.
