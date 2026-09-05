import functionalPlugin from "eslint-plugin-functional";

export default {
  plugins: { functional: functionalPlugin },
  rules: {
    "functional/immutable-data": "off", // TODO: Enable?
    "functional/no-let": [
      "error",
      // options renamed in v8: allowLocalMutation -> allowInFunctions, ignorePattern -> ignoreIdentifierPattern
      { allowInFunctions: true, ignoreIdentifierPattern: "^[mM]utable" },
    ],
    "functional/prefer-property-signatures": "error", // renamed from no-method-signature in v8
    // prefer-readonly-type is deprecated in v8+ (replaced by prefer-immutable-types / type-declaration-immutability)
    // but still works unchanged with the same options, kept as-is for now
    "functional/prefer-readonly-type": [
      "error",
      { allowLocalMutation: true, ignorePattern: "^[mM]utable" },
    ],
  },
};
