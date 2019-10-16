module.exports = {
  plugins: ["import"],
  rules: {
    "import/export": "off", // Checked by Typescript?
    "import/no-named-as-default": "off", // default export is not allowed
    "import/no-named-as-default-member": "off", // default export is not allowed
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "off" // Checked by Typescript?
  }
};
