import functionalPlugin from "eslint-plugin-functional";

export default {
  plugins: { functional: functionalPlugin },
  rules: {
    "functional/functional-parameters": "off", // TODO: Enable?
  },
};
