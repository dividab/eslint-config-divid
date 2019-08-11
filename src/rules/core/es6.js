module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    "arrow-body-style": "off", // prettier-maybe
    "arrow-parens": "off", // prettier
    "arrow-spacing": "off", // prettier
    "constructor-super": "error",
    "generator-star-spacing": "off", // prettier
    "no-class-assign": "error",
    "no-confusing-arrow": "off", // prettier-maybe
    "no-const-assign": "off", // // Checked by Typescript - ts(2588)
    "no-dupe-class-members": "off", // This is already checked by Typescript.
    "no-duplicate-imports": "off", // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "no-new-symbol": "off", // Checked by Typescript - ts(2588)
    "no-restricted-imports": "off", // Nothing to restrict
    "no-this-before-super": "off", // Checked by Typescript - ts(2376)
    "no-useless-computed-key": "error",
    "no-useless-constructor": "off", // Replaced by @typescript-eslint/no-useless-constructor
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["off", "always"], // Allow explicitly setting names of properties
    "prefer-arrow-callback": "off", // prettier-maybe
    "prefer-const": "error",
    "prefer-destructuring": "off", // TODO: Enable?
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off", // TODO: Enable?
    "require-yield": "error",
    "rest-spread-spacing": "off", // prettier
    "sort-imports": "off", // TODO: Enable?
    "symbol-description": "error",
    "template-curly-spacing": "off", // prettier
    "yield-star-spacing": "off", // prettier
  },
};
