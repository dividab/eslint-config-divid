import functionalPlugin from "eslint-plugin-functional";

export default {
  plugins: { functional: functionalPlugin },
  rules: {
    "functional/no-promise-reject": "off", // TODO: Enable?
    "functional/no-throw-statements": "off", // TODO: Enable? (renamed from no-throw-statement in v8)
    "functional/no-try-statements": "off", // TODO: Enable? (renamed from no-try-statement in v8)
  },
};
