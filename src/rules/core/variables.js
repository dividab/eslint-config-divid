/* eslint-disable */
const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  rules: {
    "init-declarations": "off", // Implicit undefined?
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(confusingBrowserGlobals),
    "no-shadow": "off", // TODO: Enable?
    "no-shadow-restricted-names": "error",
    "no-undef": "off", // This is checked by Typescript using the option `strictNullChecks`
    "no-undef-init": "off", // Explicit init is good
    "no-undefined": "off", // Checking against undefined is common
    "no-unused-vars": "off", // @typescript-eslint/no-unused-vars
    "no-use-before-define": "off", // Replaced by @typescript-eslint/no-use-before-define
  },
};
