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
    // "./rules/imports/all",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
