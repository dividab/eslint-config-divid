module.exports = {
  rules: {
    "accessor-pairs": "off", // properties should be readonly so no getters should exist
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    complexity: ["off", 10], // TODO: Enable this?
    "consistent-return": "error",
    curly: ["error", "all"], // Works with Prettier as long as you don’t use the "multi-line" or "multi-or-nest" option
    "default-case": "error",
    "dot-location": "off", // prettier
    "dot-notation": ["off", { allowKeywords: true }], // TODO: Enable this?
    eqeqeq: ["error", "always"],
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "warn", // may want to temporary allow it during debugging
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "off", // TODO: Enable this?

    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "off", //  Not needed since we always enforce tripple ===
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "off", // prettier
    "no-global-assign": "error",
    "no-implicit-coercion": [
      "error",
      {
        boolean: false,
        number: false,
        string: true,
      },
    ], // REASON: Consider !! idiomatic to JS
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loop-func": "off", // TODO: Enable this
    "no-magic-numbers": "off", // Replaced by @typescript-eslint/no-magic-numbers
    "no-multi-spaces": "off", // prettier
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "off",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext", // for ReactRouter context
        ],
      },
    ], // TODO: Enable this
    "no-proto": "error",
    "no-redeclare": "off", // This is already checked by Typescript.
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],
    "no-return-assign": ["off", "always"], // TODO: Enable this?
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": ["off", { terms: ["todo", "fixme", "xxx"], location: "start" }], // TODO: Enable?
    "no-with": "error",
    "prefer-named-capture-group": "off", // TODO: Enable?
    "prefer-promise-reject-errors": "error",
    radix: "error",
    "require-await": "off", // May return Promise from async function?
    "require-unicode-regexp": "off", // TODO: Enable?
    "vars-on-top": "error",
    "wrap-iife": "off", // prettier
    yoda: "error",
  },
};
