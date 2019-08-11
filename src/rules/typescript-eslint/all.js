module.exports = {
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", "generic"], // ReadonlyArray<> only as generic before typescript version X.X
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-ignore": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/camelcase": "off", // TODO: Enable but allow snake case somehow...
    "@typescript-eslint/class-name-casing": "error",
    // "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off", // TODO: Determine if we want type of interface enforced...
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off", // TODO: Enable this?
    "@typescript-eslint/func-call-spacing": "off", // prettier
    "@typescript-eslint/generic-type-naming": "off", // TODO: Enable this?
    "@typescript-eslint/indent": "off", // prettier
    "@typescript-eslint/interface-name-prefix": "off", // Interfaces are types and should not have I prefix
    "@typescript-eslint/member-delimiter-style": "off", // prettier
    "@typescript-eslint/member-naming": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "off", // Interfaces can be empty but still add semantic meaning
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-parens": "off", // prettier
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off", // TODO: Enable?
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "off", // Being explicit is always a good thing
    "@typescript-eslint/no-magic-numbers": "off", // Numbers are needed in formulas
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "off", // TODO: Enable?
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-type-alias": "off", // TODO: Enable?
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    // "@typescript-eslint/no-unnecessary-type-arguments": "error",",

    // This rule does not work if the project is not built, so it fails in CI build!
    //"@typescript-eslint/no-unnecessary-type-assertion": "error",

    "@typescript-eslint/no-unused-vars": "off", // Does not seem to work properly?
    "@typescript-eslint/no-use-before-define": "off", // TODO: Enable?
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "off", // TODO: Enable?
    "@typescript-eslint/prefer-includes": "off", // TODO: Enable?
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "off", // TODO: Enable?
    "@typescript-eslint/require-array-sort-compare": "off", // TODO: Enable?
    "@typescript-eslint/require-await": "off", // TODO: Enable?
    "@typescript-eslint/restrict-plus-operands": "off", // TODO: Enable?
    "@typescript-eslint/semi": "off", // prettier
    "@typescript-eslint/strict-boolean-expressions": "off", // TODO: Enable?
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "off", // prettier
    // "@typescript-eslint/typedef": "error",
    "@typescript-eslint/unbound-method": "off", // TODO: Enable?
    "@typescript-eslint/unified-signatures": "error",
  },
};
