module.exports = {
  plugins: ["import"],
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
    "import/no-default-export": "error",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "off", // default exports are forbidden
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": "off"
  }
};
