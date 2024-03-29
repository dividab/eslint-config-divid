module.exports = {
  plugins: ["functional"],
  rules: {
    "functional/immutable-data": "off", // TODO: Enable?
    "functional/no-let": [
      "error",
      { allowLocalMutation: true, ignorePattern: "^[mM]utable" },
    ],
    "functional/no-method-signature": "error",
    "functional/prefer-readonly-type": [
      "error",
      { allowLocalMutation: true, ignorePattern: "^[mM]utable" },
    ],
  },
};
