import type { JestConfigWithTsJest } from 'ts-jest'

const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig: JestConfigWithTsJest = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      },
    ],
  },
};
module.exports = createJestConfig(customJestConfig);
