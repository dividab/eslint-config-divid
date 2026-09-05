import functionalPlugin from "eslint-plugin-functional";

export default {
  plugins: { functional: functionalPlugin },
  rules: {
    "functional/no-classes": "error", // renamed from no-class in v8
    "functional/no-mixed-types": "off", // TODO: Enable? (renamed from no-mixed-type in v8)
    "functional/no-this-expressions": "error", // renamed from no-this-expression in v8
    // prefer-type-literal was removed in v8 with no replacement; overlaps with the
    // already-off @typescript-eslint/consistent-type-definitions
  },
};
