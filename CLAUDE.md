# portfolio

The website for **trroev development** — Trevor Mathiak's personal developer brand, hosted at trevormathiak.dev. See `CONTEXT.md` for the domain glossary.

## TypeScript conventions — project overrides

The `/typescript-conventions` skill applies, with these deliberate overrides (rationale in `docs/audits/typescript-conventions-audit.md`):

- **Component return types**: exported React components and pages rely on inferred JSX return types — no explicit `: ReactNode`. All other exported functions still require explicit return types.
- **Constant naming**: UPPER_SNAKE_CASE for primitive/value constants (`GENERIC_ERROR`); camelCase for config/style objects consumed as values (`siteConfig`, `buttonStyles`); PascalCase for Payload collection/global configs (`Projects`, `Home`) per Payload convention.
- **ts-pattern**: not installed. Add it when the first genuine trigger appears — a value-returning conditional over a 3+-variant discriminated union with parallel alternatives (see audit §4). Until then, guard clauses and two-branch `if`/`else` stay.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (`trroev/portfolio`), via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles, label strings unchanged. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
