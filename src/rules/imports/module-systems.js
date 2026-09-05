import importPlugin from "eslint-plugin-import";

export default {
  plugins: { import: importPlugin },
  rules: {
    "import/unambiguous": "off",
    "import/no-commonjs": "off", // Checked by @typescript-eslint/no-require-imports
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off"
  }
};
