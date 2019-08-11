module.exports = {
  rules: {
    "array-bracket-newline": "off", // prettier
    "array-bracket-spacing": "off", // prettier
    "array-element-newline": "off", // prettier
    "block-spacing": "off", // prettier
    "brace-style": "off", // prettier
    camelcase: "off", // Replaced by @typescript-eslint/camelcase
    "capitalized-comments": "off", // TODO: Enable this?
    "comma-dangle": "off", // prettier
    "comma-spacing": "off", // prettier
    "comma-style": "off", // prettier
    "computed-property-spacing": "off", // prettier
    "consistent-this": "off", // Not using this
    "eol-last": "off", // prettier
    "func-call-spacing": "off", // Replaced by @typescript-eslint/func-call-spacing (and prettier)
    "func-name-matching": "off", // TODO: Enable?
    "func-names": "off", // TODO: Enable?
    "func-style": ["off", "expression"], // TODO: ENABLE!!?
    "function-paren-newline": "off", // prettier
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off", // prettier
    indent: "off", // Replaced by @typescript-eslint/indent (and prettier)
    "jsx-quotes": "off", // prettier
    "key-spacing": "off", // prettier
    "keyword-spacing": "off", // prettier
    "line-comment-position": "off", //
    "linebreak-style": "off", // prettier
    "lines-around-comment": "off", // prettier-maybe
    "lines-between-class-members": "off", // not between member variables
    "max-depth": ["off", 4], // TODO: Enable this?
    "max-len": "off", // prettier-maybe
    "max-lines": ["error", { max: 800 }],
    "max-lines-per-function": ["off", { max: 200 }], // TODO: Enable
    "max-nested-callbacks": "off", // TODO: Enable?
    "max-params": ["off", 3], // TODO: Enable?
    "max-statements": ["off", 10], // TODO: Enable?
    "max-statements-per-line": ["off", { max: 1 }], // TODO: Enable?
    "multiline-comment-style": ["off", "starred-block"], // TODO: Enable?
    "multiline-ternary": "off", // prettier
    "new-cap": "off", // TODO: Enable?
    "new-parens": "off", // prettier
    "newline-per-chained-call": "off", // prettier
    "no-array-constructor": "off", // Replaced by @typescript-eslint/no-array-constructor
    "no-bitwise": "error",
    "no-continue": "off", // TODO: Enable?
    "no-inline-comments": "off", // Inline commments are OK
    "no-lonely-if": "error",
    "no-mixed-operators": "off", // prettier-maybe
    "no-mixed-spaces-and-tabs": "off", // prettier
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "off", // prettier
    "no-negated-condition": "off", // TODO: Enable?
    "no-nested-ternary": "off", // Tenary expressions are more functional than if statements
    "no-new-object": "error",
    "no-plusplus": "off", // Common usage
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-tabs": "off", // prettier-maybe
    "no-ternary": "off", // Tenary operations are expressions and therefore better than if statements
    "no-trailing-spaces": "off", // prettier
    "no-underscore-dangle": "off", // Prefixing with underscore to signal private
    "no-unneeded-ternary": "off", // TODO: Enable?
    "no-whitespace-before-property": "off", // prettier
    "nonblock-statement-body-position": "off", // prettier
    "object-curly-newline": "off", // prettier
    "object-curly-spacing": "off", // prettier
    "object-property-newline": "off", // prettier
    "one-var": ["error", "never"], // TODO: Enable?
    "one-var-declaration-per-line": "off", // prettier
    "operator-assignment": ["error", "always"],
    "operator-linebreak": "off", // prettier
    "padded-blocks": "off", // prettier
    "padding-line-between-statements": "off", // Seems complicated...
    "prefer-object-spread": "error",
    "quote-props": "off", // prettier
    quotes: "off", // prettier-maybe
    semi: "off", // Replaced by @typescript-eslint/semi (and prettier)
    "semi-spacing": "off", // prettier
    "semi-style": "off", // prettier
    "sort-keys": "off", // Alphabetical order is not always the best sorting
    "sort-vars": "off", // Alphabetical order is not always the best sorting
    "space-before-blocks": "off", // prettier
    "space-before-function-paren": "off", // prettier
    "space-in-parens": "off", // prettier
    "space-infix-ops": "off", // prettier
    "space-unary-ops": "off", // prettier
    "spaced-comment": "off", // TODO: Enable?
    "switch-colon-spacing": "off", // prettier
    "template-tag-spacing": "off", // prettier
    "unicode-bom": "off", // prettier
    "wrap-regex": "off", // prettier
  },
};
