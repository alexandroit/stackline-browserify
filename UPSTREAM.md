# Upstream review

Base: browserify17.0.1, commit d1d3fed4fea333f5d7a3b933e7ff12b045112322. All 431 files of the integrity-verified upstream npm tarball match the selected source commit byte-for-byte. Runtime files and dependency ranges remain unchanged. Original license/authorship and readme.markdown/changelog.markdown are retained.

## Issue triage (2026-09-29)

- [#2101](https://github.com/browserify/browserify/issues/2101): retain real module and CLI bundle checks, including browser core-module shims.
- [#2096](https://github.com/browserify/browserify/issues/2096): scope this fork to compatible maintenance and supported development tooling; do not rewrite the bundler architecture or modernize runtime syntax.

No upstream contact was made. These are scoped compatibility decisions, not blanket resolution claims.

## Verification

The upstream test suite runs with current TAP. A separately installed archive bundles a dependency graph and executes it in a browser-like VM through both API and CLI. `npm ci --ignore-scripts`, `npm test`, `npm run test:package` and `npm audit --audit-level=low` gate CI. Publication uses the exact CI tarball with provenance and immutable release evidence.

Legacy TAP assertion aliases in test files are mapped to their current equivalents (deepEqual/same, ifError/error, notEqual/not, notok/notOk, similar/match), preserving assertions and expected counts.

Backbone1.6.1 is used only as a bundling fixture with its optional jQuery3.7.1 dependency explicitly installed, replacing the vulnerable legacy fixture tree.

## Publication blocker

The complete development and packed-consumer suites pass, but full npm audit reports the elliptic6.6.1 advisory GHSA-848j-6mx2-7j84 through crypto-browserify -> browserify-sign/create-ecdh. The advisory lists no patched upstream version. Dropping the crypto builtin or replacing it with asynchronous WebCrypto would break existing contracts. Publication is blocked; no vulnerability is suppressed and no package version is published until a compatible audited remedy is available.
