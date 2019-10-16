# eslint-config-divid

This package contains rules to enforce the programming style we use at [Divid](https://divid.se/) but should be useful to anyone using typescript and prettier with functional programming style.

## Features

Rules are configured for use with:

- Prettier for code formatting
- Typescript
- Functional programing style

## Usage

Install the package and it's peer dependencies:

```bash
yarn add --dev eslint-config-divid eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-functional eslint-plugin-import confusing-browser-globals
```

Add a file called `.eslintrc.js` to your project's root with the following content:

```js
module.exports = {
  extends: "divid",
  parserOptions: {
    project: "./tsconfig.json"
  }
};
```

## vscode config

In order for the vscode [eslint plugin](https://github.com/Microsoft/vscode-eslint) to work for typescript this is needed in the `.vscode/settings.json` file:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

You can set the vscode eslint plugin as recommended by adding a file `.vscode/extensions.json` with this content:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```

## Overriding rules

If you want to override a rule, just put it in `.eslintrc.js` like this:

```js
module.exports = {
  extends: "divid",
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array" }]
  }
};
```

## Prettier and typescript

Any rules that conflicts or are uncessary becuase of prettier and typescript has been turned off according to [prettier source](https://github.com/prettier/eslint-config-prettier/blob/8e50dacca2067fd4ca1f258e47d0e6973cbea1fd/index.js) and [typescript source](https://github.com/typescript-eslint/typescript-eslint/blob/ebbcc010c546b5777c14f0b33ead851b620184e0/packages/eslint-plugin/src/configs/eslint-recommended.ts)). The affected rules are commented to indicate they are turened of becuase of prettier or typescript.

## How to publish

```
yarn version --patch
yarn version --minor
yarn version --major
```
