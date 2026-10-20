# Retire the Biome-enforced import layers

Supersedes [0002](./0002-architecture-import-boundaries.md).

With the move to Astro ([0004](./0004-static-astro-content-in-repo.md)) the cms layer disappears, most source becomes `.astro` files, and the site shrinks to a handful of pages, shared components and one real feature (contact). We drop the `noRestrictedImports` zones in `biome.jsonc` and keep the folder layout — shared components, `features/contact`, pages and layouts — as a convention rather than a lint rule.

## Considered Options

- **Remap the zones to the new paths** — preserves the guarantee on paper, but Biome only analyses the frontmatter script of `.astro` files, so the rule would cover a minority of the code and give false confidence.
- **Retire the zones, keep the layout as convention (chosen)** — matches the reduced size of the codebase; review is enough when there is one feature.

## Consequences

- A new feature no longer requires adding override blocks to `biome.jsonc`.
- If the codebase grows several features again, mechanical enforcement should be revisited, ideally with a tool that understands `.astro` files.
