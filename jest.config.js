/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "\\.ts$": "<rootDir>/node_modules/ts-jest",
  },
  moduleFileExtensions: ["js", "ts"],
};
