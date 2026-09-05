import functionalPlugin from "eslint-plugin-functional";

export default {
  plugins: { functional: functionalPlugin },
  rules: {
    "functional/no-conditional-statements": "off", // TODO: Enable? (renamed from no-conditional-statement in v8)
    "functional/no-expression-statements": "off", // TODO: Enable? (renamed from no-expression-statement in v8)
    "functional/no-loop-statements": "off", // TODO: Enable? (renamed from no-loop-statement in v8)
    "functional/no-return-void": "off", // TODO: Enable?
  },
};
