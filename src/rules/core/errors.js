module.exports = {
  rules: {
    "for-direction": "error",
    "getter-return": "off", //Checked by Typescript - ts(2378)
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": "off", // TODO: Switch to warning?
    "no-constant-condition": "warn", // TODO: Use error?
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "off", // Checked by Typescript - ts(2300)
    "no-dupe-keys": "off", // Checked by Typescript - ts(1117)
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off", // Replaced by @typescript-eslint/no-extra-parens (and prettier)
    "no-extra-semi": "off", // prettier
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "off", // prettier-maybe
    "no-unreachable": "off", // // Checked by Typescript - ts(7027)
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "off", // TODO: Enable this?
    "use-isnan": "error",
    "valid-typeof": "off", // Checked by Typescript - ts(2367)
  },
};
