import importPlugin from "eslint-plugin-import";

export default {
  plugins: { import: importPlugin },
  rules: {
    "import/first": "error",
    "import/exports-last": "off", // TODO: Enable?
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/extensions": "off", // Typescript does not allow extensions?
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "never"
      }
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "error",
    "import/no-named-default": "off",
    // Disabled: crashes under ESLint 10 (context.parserOptions was removed; this rule
    // still unconditionally reads it - https://github.com/import-js/eslint-plugin-import
    // has no ESLint 10-compatible release yet). Re-enable once eslint-plugin-import fixes this.
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "off", // default exports are forbidden
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": "off"
  }
};
