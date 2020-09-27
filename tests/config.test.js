const { ESLint } = require("eslint");

async function getErrors(configFile) {
  const cli = new ESLint({
    overrideConfigFile: configFile,
    overrideConfig: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tests/dummy.tsconfig.json",
      },
    },
  });
  // Seems we need to give a filepath of a valid file that is included in tsconfig.json
  // even if we are only linting text
  // https://github.com/typescript-eslint/typescript-eslint/issues/885
  return await cli.lintText("", { filePath: "src/index.js" });
}

// describe("Validate ESLint configs", () => {
//   ["src/rules/core/errors.js", "src/rules/typescript-eslint/all.js"].forEach(
//     (file) => {
//       it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
//         const lintResults = await getErrors(file);
//         expect(lintResults[0].messages).toEqual([]);
//       });
//     }
//   );
// });

describe("Validate ESLint config", () => {
  ["src/index.js"].forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
      const lintResults = await getErrors(file);
      expect(lintResults[0].messages).toEqual([]);
    });
  });
});
