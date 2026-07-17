# TypeScript Conventions Audit

**Date:** 2026-07-16 (re-run; supersedes same-day first pass) · **Branch:** `dev` @ `a97930f` · **Standard:** `/typescript-conventions` skill (mkosir-style guide)

## Scope

61 `.ts`/`.tsx` files found under `src/`; 6 are Payload-generated wrappers in `src/app/(payload)/` marked "DO NOT MODIFY" (also excluded from Biome), leaving **55 hand-written files audited** — all read in full or diffed against the previously audited baseline (`d3277ee`). Excluded: `payload-types.ts`, `migrations/`, `importMap.js`, root configs.

## Changes since the first pass

Seven commits landed between audits. They resolved most prior findings:

- **Resolved — deep relative imports (prior 1b):** all `../../` imports now use `~/`, and Biome boundary overrides (`noRestrictedImports`, per ADR 0002) machine-enforce layer/feature boundaries going forward.
- **Resolved — style-string constants (part of prior 2a):** `src/lib/styles.ts` is gone, replaced by a `tv`-based `Button`/`ButtonLink` design-system pair and a `focus-ring` CSS utility.
- **Improved — data fetching:** the per-global fetchers collapsed into a generic `getGlobal` in `src/lib/payload.ts` with a properly named generic (`TSlug extends GlobalSlug`), single-object args, and observable failures (throw to error boundaries instead of silent empty fallbacks).
- **Changed shape — sharp typing:** the `@ts-expect-error` became `sharp as unknown as SharpDependency` (assessed below).

## Summary

The codebase remains in excellent shape. **Zero instances** of `any`, `interface`, `enum`, `T[]`, `React.FC`, `@ts-ignore`, non-null assertions, or bare generics. One deliberate, well-documented double cast. Discriminated unions, `unknown`-with-guards, and the feature/shared/app layering all match the skill — and the layering is now lint-enforced.

| # | Finding | Severity | Status |
|---|---|---|---|
| 1 | Exported React components/pages lack explicit return types | Hard rule (or needs documented exemption) | 25 components — carried over, grew with new files |
| 2 | `sharp as unknown as SharpDependency` double cast | Justified deviation | Accept — documented, references issue #22 |
| 3 | Config-object constants use camelCase | Default deviation | Carried over, smaller — document the convention |
| 4 | No test suite | Observation | Carried over |
| 5 | ts-pattern | Assessed — **not warranted yet** | See §4 |

## 1. Hard-rule violations

### 1a. Exported functions without explicit return types (25 components/pages)

Unchanged policy gap from the first audit, now spanning more files. Every exported **non-component** function has explicit return types (`sendMessage`, `getGlobal`, `getProjects`, `isBotSubmission`, `POST`, `cn`, `pageMetadata`, all hooks). The exceptions are all React components and pages:

- App pages/boundaries: `layout.tsx:59`, `page.tsx:19`, `about/page.tsx:24`, `contact/page.tsx:12`, `portfolio/page.tsx:13`, `services/page.tsx:18`, `error.tsx:13`, `global-error.tsx:11`, `not-found.tsx:9`, `[...rest]/page.tsx:3`
- Shared components: `button.tsx:24`, `button-link.tsx:7`, `cta-band.tsx:9`, `page-intro.tsx:10`, `site-header.tsx:62`, `site-footer.tsx:7`, `theme-toggle.tsx:24`, `theme-provider.tsx:8`, `wordmark.tsx:3`
- Feature components: `contact-form.tsx:20`, `form-field.tsx:10`, `feature-list.tsx:11`, `story.tsx:11`, `project-card.tsx:16`, `project-grid.tsx:8`

**Recommendation unchanged:** either add `: ReactNode` across the board, or (better, given the pattern is universal and intentional) document "React components rely on inferred JSX return types" as a project override in CLAUDE.md. Async pages would need `: Promise<ReactNode>` if enforcing.

## 2. Justified deviations (accepted)

### 2a. `payload.config.ts:46` — `sharp as unknown as SharpDependency`

A double cast is normally the worst kind of assertion, but this one has a five-line comment explaining the constraint (sharp 0.34's overloads resolve differently per environment, making `@ts-expect-error` flip-flop — see issue #22) and is scoped to a single third-party boundary. This is exactly the skill's "explicit justification" carve-out. **No action.** Worth re-checking when Payload or sharp majors bump.

## 3. Default deviations worth discussing

### 3a. Config-object constants: camelCase instead of UPPER_SNAKE_CASE

Smaller than before (the style strings are gone), but still present: `siteConfig`, `mainNav`, `socialLinks` (`src/config/site.ts`), `buttonStyles` (`button.tsx:4`), `twMergeConfig` (`tw-merge-config.ts:1`), `fieldControl` (`contact-form.tsx:17`), `projectLink` (`project-card.tsx:14`). Payload configs (`Admins`, `Projects`, `Home`, …) stay PascalCase per Payload convention; true value constants (`GENERIC_ERROR`, `RATE_LIMIT_ERROR`, `FROM_ADDRESS`, `PROJECT_PATHS`, `URL_FORMAT_ERROR`) correctly use UPPER_SNAKE.

The de facto rule — UPPER_SNAKE for primitive/value constants, camelCase for config/style objects consumed like values, PascalCase for Payload configs — is coherent. **Recommendation:** write it into CLAUDE.md as the project override rather than renaming.

## 4. ts-pattern assessment — not warranted yet

The skill prefers `match(...).exhaustive()` for **non-trivial value-returning conditionals**. ts-pattern is not installed; I audited every conditional in the codebase for candidates:

- **`ContactForm` `FormState`** (`contact-form.tsx:12,43,70`) — the only real discriminated union with 3+ variants. But the render intentionally isn't three parallel trees: `success` early-returns, while `idle` and `error` share the form markup with an inline banner. Forcing this into `match` would duplicate the form JSX or contort the structure. The existing narrowing is already exhaustive in practice. **Not a fit.**
- **`NavLink` `variant: "desktop" | "mobile"`** (`site-header.tsx:24`) — two branches; the skill explicitly says plain `if`/`else` is clearer for two-branch conditionals. **Not a fit.**
- **`sendMessage` response handling** (`send-message.ts:35–47`) — branches on HTTP status codes (numbers + `response.ok`), not a discriminated union; the guard-clause chain is idiomatic. **Not a fit.**
- **`ThemeToggle.resolveLabel`** (`theme-toggle.tsx:38`) — two-state. **Not a fit.**
- No `switch` statements exist anywhere in `src/`.

**Verdict: don't install ts-pattern yet.** There is no site where it would beat the current code. **Install it when the first genuine trigger appears**, which for this codebase would look like:

1. `FormState` (or a similar union) growing a 4th+ variant rendered as *parallel* alternatives (e.g. adding `{ kind: "submitting" }` with its own tree);
2. a status→label/style mapping over a 3+-member union (e.g. if projects gain a `status: 'live' | 'archived' | 'wip'` badge);
3. any value-returning `switch` that would otherwise be written.

Until then the dependency would be dead weight. When it is added, prefer it via a single conventions note so usage stays consistent.

## 5. Verified non-findings (checked, deliberately not flagged)

- **Optional-props in `HomeHero`/`CtaBand`/`PageIntro`/`FeatureList`**: mirror Payload's nullable CMS fields; each component has one job. `Button`/`ButtonLink` optionals are design-system primitives — the skill's explicit carve-out.
- **`tv`/`cn`/`twMergeConfig` setup** (`src/lib/`): thin, typed wrappers; `VariantProps` re-export keeps consumers off the raw dependency. Good seam.
- **`getGlobal`'s internal `findProjects(limit)` positional arg**: internal single-primitive param — allowed.
- **`console.error` in fetchers/route/boundaries**: intentional observability change (commit `1144315`), side effects at boundaries per the skill.
- **`null` vs `undefined`**: still consistent — `null` from CMS types, `undefined` for absent props.
- **`biome-ignore` in `site-header.tsx:66`**: carries a clear justification. Compliant with the spirit of the suppression rule.
- **`global-error.tsx` inline button styling**: duplicates `Button`'s primary styles, but a root global-error boundary rendering its own `<html>` is deliberately dependency-light. Acceptable.

## 6. Already enforced by tooling

`ultracite` (Biome) + `tsc --strict` + husky + CI now lock in: no `any`, `type` over `interface`, `Array<T>` syntax, no enums, `import type` hygiene, import sorting, exhaustive-deps, **and — new — the full architecture boundary matrix** (no cross-feature imports, no feature→app or feature→cms imports, no `@payload-config` outside `~/lib/payload`, no boundary-crossing relative imports; see `biome.jsonc` overrides + `docs/adr/0002-architecture-import-boundaries.md`). `src/app/(payload)` remains Biome-excluded (generated).

## 7. Observations outside the rule set

- **No test suite exists** — unchanged. The contact flow is now richer (honeypot via `isBotSubmission`, 429 handling, schema split into `contactSchema`/`contactFormSchema`) and remains the highest-value first target: `contactSchema`, `isBotSubmission`, the `POST` route, and `ContactForm` submission states.
- **Duplicated media-resolution logic** — unchanged: `resolveScreenshot` (`project-card.tsx:9`) and `resolvePortrait` (`about/page.tsx:20`) are the same narrowing; candidate for a shared `resolveMedia` in `~/lib`.

## 8. Suggested issues

1. **chore(conventions): document project overrides in CLAUDE.md** — component return-type stance (§1a), constant-naming convention (§3a), and the ts-pattern adoption trigger (§4). Resolves three findings by declaration.
2. **refactor(lib): extract shared `resolveMedia` helper** — dedupe `resolveScreenshot`/`resolvePortrait` (§7).
3. **feat(testing): stand up a test runner and cover the contact flow** — schema, honeypot, route handler, form states (§7). The only session-sized ticket.

*(If the ticket-1 decision is to enforce component return types instead of exempting them: add **chore(types): add explicit return types to 25 exported components**.)*
