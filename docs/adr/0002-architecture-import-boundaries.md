# Import boundaries enforced by Biome, with a distinct cms layer

Source code follows the bulletproof-react unidirectional dependency flow — **shared → features → app** — plus a fourth layer for Payload configuration. The rules are enforced mechanically by Biome `noRestrictedImports` overrides in `biome.jsonc` (two depth-aware zones per feature plus zones for the shared and cms layers), not by review discipline. A pre-commit hook and a GitHub Actions workflow run lint and typecheck so a violation can't land.

The zones block both alias imports (`~/features/other-feature/...`) and relative escapes: feature root files may not import `../**` (anything above the feature), files one level deeper may not import `../../**`, and shared/cms files may not use `../` at all. Intra-feature relative imports (`./sibling`, `../api/x` from a subdirectory) stay legal. Consequence: feature subdirectories may only nest one level deep — a second level would need a third zone per feature.

## The layers and their allowed imports

- **shared** (`src/components`, `src/lib`, `src/config`) — may import only other shared modules. Never features, app, or cms.
- **features** (`src/features/<name>`) — may import shared modules and their own feature. Never another feature, the app layer, or the cms layer. CMS data is fetched through the feature's `api/` folder via the Payload local API (typed by `payload-types.ts`, which is generated and belongs to no layer).
- **app** (`src/app`) — composes everything: may import features and shared. Nothing imports app.
- **cms** (`src/collections`, `src/globals`, `src/access`, `src/payload.config.ts`) — Payload's declarative backend configuration. May import only from `src/lib` (e.g. revalidation helpers) and within itself. Features and shared modules never import from it; the app layer reaches it only through Payload's own routes.

## Considered Options

- **Review discipline only** — free, but the audit that produced this ADR found relative-import drift already; rules that aren't mechanical erode.
- **Moving cms code under `src/features/cms/`** — makes the feature rules apply for free, but Payload config isn't a feature: it's server-only declarative config that features must never import, and pretending otherwise invites exactly that import.
- **Biome overrides per layer (chosen)** — zero new dependencies (Biome is already the toolchain), gitignore-style patterns match the `~/*` alias, and each new feature adds one small override block.

## Consequences

- Adding a feature folder requires adding its pair of override blocks to `biome.jsonc` (copy an existing feature's two zones, change the name in `includes` and the self-exceptions).
- Intra-feature imports may use either relative paths or the `~/features/<own>` alias; everything crossing a directory or layer boundary must use `~/*` (relative escapes are lint errors).
- The pre-commit hook (`.husky/pre-commit`) runs staged lint + typecheck; CI (`.github/workflows/ci.yml`) runs full lint + typecheck on pushes and PRs to `main`/`dev`. Test execution joins CI when the test foundation lands (#18).

## Amendment (2026-07-16): the shared Payload client is the single cms touchpoint

Issue #17 introduced `src/lib/payload.ts`, a shared helper that wraps `getPayload({ config })` in per-request `cache()` and exposes `getGlobal` for typed global fetches. This is the **only** module allowed to import `@payload-config`; feature `api/` folders get their Payload client from `~/lib/payload` rather than importing the config themselves. The Biome zones enforce it: `@payload-config` is a restricted import in every feature zone and the shared zone, with a dedicated override exempting `src/lib/payload.ts`. This narrows the original rule ("shared never imports cms") to a single audited exception instead of a per-feature convention.
