module.exports = {
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }], // ReadonlyArray<> only as generic before typescript version X.X
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "off", // prettier
    "@typescript-eslint/class-literal-property-style": "error",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "error",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off", // TODO: Determine if we want type of interface enforced...
    "@typescript-eslint/consistent-type-imports": "error",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off", // TODO: Enable this?
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/func-call-spacing": "off", // prettier
    "@typescript-eslint/indent": "off", // prettier
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/keyword-spacing": "off", // prettier
    "@typescript-eslint/lines-between-class-members": "off", // prettier
    "@typescript-eslint/member-delimiter-style": "off", // prettier
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "off", // TODO: Enable this?
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "variableLike", format: ["camelCase", "snake_case"] },
    ],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "off", // Interfaces can be empty but still add semantic meaning
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off", // prettier
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "off", // prettier
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off", // TODO: Enable?
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "off", // Being explicit is always a good thing
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off", // Numbers are needed in formulas
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "off", // TODO: Enable?
    "@typescript-eslint/no-parameter-properties": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-require-imports": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "off", // TODO: Enable?
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "off", // TODO: Enable?
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // This rule does not work if the project is not built, so it fails in CI build!
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off", // TODO: Enable?
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "off", // TODO: Enable?
    "@typescript-eslint/prefer-includes": "off", // TODO: Enable?
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "off", // TODO: Enable?
    quotes: "off",
    "@typescript-eslint/quotes": "off", // prettier
    "@typescript-eslint/require-array-sort-compare": "off", // TODO: Enable?
    "require-await": "off",
    "@typescript-eslint/require-await": "off", // TODO: Enable?
    "@typescript-eslint/restrict-plus-operands": "off", // TODO: Enable?
    "@typescript-eslint/restrict-template-expressions": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    semi: "off",
    "@typescript-eslint/semi": "off", // prettier
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off", // prettier
    "@typescript-eslint/strict-boolean-expressions": "off", // TODO: Enable?
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "off", // prettier
    "@typescript-eslint/typedef": "off", // TODO: Enable?
    "@typescript-eslint/unbound-method": "off", // TODO: Enable?
    "@typescript-eslint/unified-signatures": "error",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off", // prettier
  },
};
