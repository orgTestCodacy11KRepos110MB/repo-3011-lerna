/* eslint-disable */
export default {
  displayName: "integration",
  preset: "../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  // Needed to add "json" to avoid issue resolving spdx-license-ids
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  coverageDirectory: "../coverage/integration",
  setupFiles: ["../libs/test-helpers/src/lib/npm/set-npm-userconfig.js"],
  snapshotSerializers: ["../libs/test-helpers/src/lib/serializers/serialize-placeholders"],
  verbose: true,
  // allow CLI integration tests to run for a while (300s)
  testTimeout: 300e3,
};
