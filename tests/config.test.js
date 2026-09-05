import { describe, it, expect } from "vitest";
import { ESLint } from "eslint";
import config from "../src/index.js";

async function getErrors() {
  const cli = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      ...config,
      {
        languageOptions: {
          parserOptions: {
            project: "tests/dummy.tsconfig.json",
          },
        },
      },
    ],
  });
  // Seems we need to give a filepath of a valid file that is included in tsconfig.json
  // even if we are only linting text
  // https://github.com/typescript-eslint/typescript-eslint/issues/885
  return await cli.lintText("", { filePath: "src/index.js" });
}

describe("Validate ESLint config", () => {
  it("load src/index.js in ESLint to validate all rules are correct", async () => {
    const lintResults = await getErrors();
    expect(lintResults[0].messages).toEqual([]);
  });
});
