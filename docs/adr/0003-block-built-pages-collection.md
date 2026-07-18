# Every public route is a block-built Page

Page content was modeled as one Payload global per page (Home, About, Services), which froze the set of pages and their section layout at deploy time, while portfolio and contact stayed hardcoded feature routes. We replaced the globals with a single Pages collection whose documents are composed from a small set of blocks, rendered by one dynamic slug route — including contact (the form mounts as a block) and portfolio (a project-showcase block queries the Projects collection), so there are no hardcoded content routes left.

## Considered Options

- Keep static routes fetching Page documents by known slug — rejected: the collection would be three globals wearing a collection costume, unable to actually add pages.
- Keep contact/portfolio as feature routes outside the CMS — rejected: one lone hardcoded route is an inconsistency that would be removed eventually anyway; blocks are just mount points for feature components.

## Consequences

- The cutover against the production database (local dev writes to prod Mongo) was done by populating Page documents from a local admin session before a single atomic deploy flipped the site; the retired globals' documents remain orphaned in Mongo.
- Site chrome moved into `Navigation` and `Footer` globals; their nav links are relationships to Pages, not URLs, so navigation follows slug changes. The layout reads both globals and resolves each relationship to an href before handing plain data to the presentational header/footer.
- Blocks render through a single app-layer registry (`src/app/(frontend)/_components/render-blocks.tsx`) that maps `blockType` to feature/shared components via a `ts-pattern` exhaustive match; page reads are app-layer helpers (`_lib/pages.ts`), not a synthetic feature.
- Per-page SEO metadata is derived from page content (the Page `title` and the first hero/pageIntro copy) with `siteConfig` fallbacks. Editable per-page SEO via `@payloadcms/plugin-seo` is deferred to #32, which will layer an overridable `meta` group on top of these derived defaults.
