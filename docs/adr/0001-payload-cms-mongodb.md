# Payload CMS backed by MongoDB Atlas, media on Vercel Blob

All site content — the `/portfolio` projects and the marketing page copy/media (Home, About, Services) — is managed in **Payload CMS**, installed natively into the Next.js App Router app. Payload is backed by **MongoDB Atlas** (Mongoose adapter) with uploaded media stored in **Vercel Blob**. We chose this over keeping content in MDX/code so the whole site is editable without a deploy, and because building on Payload also demonstrates the skill on the site itself.

## Considered Options

- **MDX / code-managed content** — simplest, no database or admin, but every copy change is a code edit + deploy, and it shows off nothing.
- **Payload + Neon Postgres** — Vercel-native and relational, but the Postgres adapter requires managing schema migrations on every collection change, which is friction for a solo, iterative build.
- **Payload + MongoDB Atlas (chosen)** — Payload's most mature adapter, schemaless (no migrations while iterating), and matches Trevor's existing MongoDB experience.

## Consequences

- Serverless has no persistent filesystem, so media cannot live locally in production — hence Vercel Blob.
- The site needs a MongoDB Atlas connection string and Vercel Blob token as environment variables; the `/admin` panel and its single admin user become part of the deploy.
- Pages render statically and revalidate on publish (on-demand revalidation) so CMS edits go live without a redeploy while keeping the site fast.
