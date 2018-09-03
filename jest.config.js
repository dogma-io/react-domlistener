/* eslint-disable comma-dangle, prettier/prettier */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: ['<rootDir>/jest-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '/__tests__/.*-test\\.js$'
}
