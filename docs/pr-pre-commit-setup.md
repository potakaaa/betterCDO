## Description

Adds local git hooks (Husky + lint-staged) and a GitHub Actions workflow so pull requests targeting `development` or `main` run the same checks as local pre-push: ESLint and a production build.

## Type of change

- [x] New feature (developer experience / CI)
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation only

## What changed

- **Dependencies:** `husky`, `lint-staged`; `prepare` script runs `husky` after `npm install`.
- **Pre-commit:** `lint-staged` runs `eslint --max-warnings 0` on staged `*.{js,jsx,ts,tsx}` files.
- **Pre-push:** `npm run lint` then `npm run build` (matches CI intent).
- **CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) on `pull_request` to `development` and `main` — Node 20, `npm ci`, lint, build, with concurrency cancel for outdated runs.
- **Code fixes** required for a clean lint/build and strict ESLint on commit: Figtree via `next/font/google`, logos use `next/image`, removed unused `lguName` in Header, fixed Terms page `className` typo.

## How has this been tested?

- [x] `npm run lint`
- [x] `npm run build`
- [x] `npx eslint --max-warnings 0 "src/**/*.{js,jsx,ts,tsx}"` (parity with lint-staged)

## Checklist

- [x] Lint and build pass locally
- [x] Hooks are committed under `.husky/` (root scripts; `prepare` regenerates Husky internals on install)
- [ ] CI run passes on this PR (verify in Actions after merge target is correct)

## Notes

- Contributors should run `npm install` (not `npm install --omit=dev`) locally so the `prepare` script installs Husky hooks.
