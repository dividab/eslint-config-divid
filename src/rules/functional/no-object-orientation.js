module.exports = {
  plugins: ["functional"],
  rules: {
    "functional/no-class": "error",
    "functional/no-mixed-type": "off", // TODO: Enable?
    "functional/no-this-expression": "error",
    "functional/prefer-type-literal": "off", // TODO: Enable?
  },
};
