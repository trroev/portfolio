# portfolio

The website for **trroev development** — Trevor Mathiak's personal developer brand, hosted at trevormathiak.dev. See `CONTEXT.md` for the domain glossary.

## TypeScript conventions — project overrides

The `/typescript-conventions` skill applies, with these deliberate overrides (rationale in `docs/audits/typescript-conventions-audit.md`):

- **Component return types**: exported React components and pages rely on inferred JSX return types — no explicit `: ReactNode`. All other exported functions still require explicit return types.
- **Constant naming**: UPPER_SNAKE_CASE for primitive/value constants (`GENERIC_ERROR`); camelCase for config/style objects consumed as values (`siteConfig`, `buttonStyles`); PascalCase for Payload collection/global configs (`Projects`, `Home`) per Payload convention.
- **ts-pattern**: installed (as of #23). Reserved for value-returning conditionals over a 3+-variant discriminated union with parallel alternatives (see audit §4) — currently the block dispatch in `src/app/(frontend)/_components/render-blocks.tsx` (`match(block).with(...).exhaustive()`). For simpler cases, guard clauses and two-branch `if`/`else` still stay.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (`trroev/portfolio`), via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles, label strings unchanged. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
