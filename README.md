# @stackline/browserify

Independent maintenance fork of `browserify@17.0.1`. Original API, module format, runtime dependency ranges, and supported Node.js engines are preserved.

```sh
npm install @stackline/browserify
# Preserve existing imports with an npm alias:
npm install browserify@npm:@stackline/browserify@1.0.0
```

See [UPSTREAM.md](UPSTREAM.md) for the exact source and issue review, and [CHANGELOG.md](CHANGELOG.md) for focused maintenance changes. Development and release tooling runs on Node.js 24; that does not change the library runtime requirement.

Maintained by [Stackline](https://alexandro.net/). [Issues](https://github.com/alexandroit/stackline-browserify/issues) · [npm](https://www.npmjs.com/package/@stackline/browserify).

## Upstream documentation

The complete original manual remains in [readme.markdown](readme.markdown).

Publication is currently blocked by an unpatched elliptic advisory in the crypto builtin dependency chain; see [UPSTREAM.md](UPSTREAM.md).
