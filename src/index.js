/* eslint-disable */
import tsParser from "@typescript-eslint/parser";
// eslint core
import bestPractices from "./rules/core/best-practices.js";
import errors from "./rules/core/errors.js";
import es6 from "./rules/core/es6.js";
import node from "./rules/core/node.js";
import strict from "./rules/core/strict.js";
import style from "./rules/core/style.js";
import variables from "./rules/core/variables.js";
// typescript-eslint
import typescriptEslintAll from "./rules/typescript-eslint/all.js";
// functional
import currying from "./rules/functional/currying.js";
import noExceptions from "./rules/functional/no-exceptions.js";
import noMutations from "./rules/functional/no-mutations.js";
import noObjectOrientation from "./rules/functional/no-object-orientation.js";
import noStatements from "./rules/functional/no-statements.js";
// imports
import helpfulWarnings from "./rules/imports/helpful-warnings.js";
import moduleSystems from "./rules/imports/module-systems.js";
import staticAnalysis from "./rules/imports/static-analysis.js";
import styleGuide from "./rules/imports/style-guide.js";

export default [
  bestPractices,
  errors,
  es6,
  node,
  strict,
  style,
  variables,
  typescriptEslintAll,
  currying,
  noExceptions,
  noMutations,
  noObjectOrientation,
  noStatements,
  helpfulWarnings,
  moduleSystems,
  staticAnalysis,
  styleGuide,
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: "module",
    },
  },
];
