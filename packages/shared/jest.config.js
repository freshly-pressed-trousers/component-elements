/* -----------------------------------
 *
 * Jest
 *
 * -------------------------------- */

module.exports = {
  testEnvironment: 'jsdom',
  globals: { __DEV__: true },
  roots: ['<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/tests/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '(.*).d.ts'],
  // coverageThreshold: {
  //   global: {
  //     statements: 97,
  //     branches: 86,
  //     functions: 100,
  //     lines: 97,
  //   },
  // },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\js$': 'babel-jest',
  },
};