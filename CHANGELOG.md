# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/jonaskello/eslint-plugin-functional/compare/v9.0.0...HEAD)

## [v9.0.0](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.8.0...v9.0.0) - 2026-09-05

Package version now tracks the ESLint major version it targets.

### Changed

- Rewritten as native ESLint 9 flat config (`src/index.js` now exports a flat config array instead of an eslintrc-style object with `extends`). Consumers now use `eslint.config.js` with `import divid from "eslint-config-divid"; export default [...divid, ...]` instead of `.eslintrc.js` + `extends: "divid"`.
- The package itself is now published as an ES module (`"type": "module"`); every rule file uses `import`/`export default`.
- Upgraded to ESLint 9 and `eslint-plugin-functional` v9, with the corresponding rule renames (e.g. `no-class` → `no-classes`, `no-method-signature` → `prefer-property-signatures`, `no-let` option names updated). `prefer-type-literal` was dropped (removed upstream, overlapped with the already-off `@typescript-eslint/consistent-type-definitions`).
- `confusing-browser-globals` moved from `devDependencies` to `dependencies`, since it's required at runtime by consumers (this was a pre-existing bug).
- Turned off `@typescript-eslint/no-non-null-assertion` and `@typescript-eslint/no-unsafe-function-type`.

## [v0.8.0](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.7.1...v0.8.0) - 2026-07-07

- Switch to pnpm

### Changed

- Updated peer deps.
- Upgraded to ESLint 8 (`@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to v8, with the corresponding rule renames in `src/rules/typescript-eslint/all.js`).

## [v0.7.1](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.7.0...v0.7.1) - 2022-03-24

### Changed

- Updated peer deps.

## [v0.7.0](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.6.0...v0.7.0) - 2022-03-24

### Changed

- Updated peer deps.

## [v0.6.0](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.5.0...v0.5.1) - 2021-08-15

### Changed

- In rules `functional/no-let`, `functional/prefer-readonly-type` enabled option `ignorePattern: "^[mM]utable"`.

## [v0.5.1](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.5.0...v0.5.1) - 2020-09-27

### Changed

- Turned off `@typescript-eslint/brace-style` becuase it confilicts with prettier

## [v0.5.0](https://github.com/jonaskello/eslint-plugin-functional/compare/v0.4.2...v0.5.0) - 2020-09-27

### Changed

- Upgraded plugins and settings for new rules in `@typescript-eslint/eslint-plugin`.

## [v0.4.2](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.4.1..v0.4.2) - 2019-10-16

### Fixed

- Add `eslint-plugin-import` rules to index.

## [v0.4.1](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.4.0..v0.4.1) - 2019-10-16

### Fixed

- Add `eslint-plugin-import` as peer dependency.

## [v0.4.0](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.3.0..v0.4.0) - 2019-10-16

### Changed

- Rules from `eslint-plugin-import` are now checked.

## [v0.3.0](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.2.0..v0.3.0) - 2019-10-14

### Changed

- Upgrade peer dependencies.

## [v0.2.0](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.1.0..v0.2.0) - 2019-08-11

### Changed

- Switch to eslint ^5.0.0 as peer dep becuase @typescript-eslint/eslint-plugin needs this

## [v0.1.0](https://github.com/jonaskello/eslint-plugin-functional/releases/tag/v0.1.0) - 2019-08-11

### Added

- Initial release
