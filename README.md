# eslint-config-divid

This package contains rules to enforce the programming style we use at Divid but should be useful to anyone using typescript and prettier with functional programming style.

## Usage

Install the package and it's peer dependencies:

```bash
yarn add --dev eslint-config-divid eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-functional
```

Add a file called `.eslintrc.js` to your project's root with the following content:

```js
module.exports = {
  extends: "./packages/eslint-config-divid",
  parserOptions: {
    project: "./packages/tsconfig.settings.json"
  }
};
```

## Features

Rules are configured for use with:

- Prettier for code formatting
- Typescript
- Functional programing style

## Prettier and typescript

Any rules that conflicts or are uncessary becuase of prettier and typescript has been turned off according to [prettier source](https://github.com/prettier/eslint-config-prettier/blob/8e50dacca2067fd4ca1f258e47d0e6973cbea1fd/index.js) and [typescript source](https://github.com/typescript-eslint/typescript-eslint/blob/ebbcc010c546b5777c14f0b33ead851b620184e0/packages/eslint-plugin/src/configs/eslint-recommended.ts)). The affected rules are commented to indicate they are turened of becuase of prettier or typescript.

## How to publish

```
yarn version --patch
yarn version --minor
yarn version --major
```
