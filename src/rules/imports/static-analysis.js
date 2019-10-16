module.exports = {
  plugins: ["import"],
  rules: {
    "import/no-unresolved": "off", // Checked by Typescript
    "import/named": "off", // Checked by Typescript
    "import/default": "off", // Checked by Typescript
    "import/namespace": "off", // Checked by Typescript
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "off", // require() is forbidden
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-useless-path-segments": "error",
    "import/no-relative-parent-imports": "off",
    "import/no-unused-modules": "off"
  }
};
