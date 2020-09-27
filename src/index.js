/* eslint-disable */
module.exports = {
  extends: [
    // eslint core
    "./rules/core/best-practices",
    "./rules/core/errors",
    "./rules/core/es6",
    "./rules/core/node",
    "./rules/core/strict",
    "./rules/core/style",
    "./rules/core/variables",
    // typescript-eslint
    "./rules/typescript-eslint/all",
    // functional
    "./rules/functional/currying.js",
    "./rules/functional/no-exceptions.js",
    "./rules/functional/no-mutations.js",
    "./rules/functional/no-object-orientation.js",
    "./rules/functional/no-statements.js",
    // imports
    "./rules/imports/helpful-warnings.js",
    "./rules/imports/module-systems.js",
    "./rules/imports/static-analysis.js",
    "./rules/imports/style-guide.js",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
