module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  //   "^.+\\.ts?$": "ts-jest",
  //   "^.+\\.js?$": "ts-jest"
  // },
  transform: {
    '^.+\.(ts|tsx|js)$': 'ts-jest',
  },
  testMatch: [
    // '**/tests/**/*.spec.ts',
    // '**/tests/**/*.spec.js',
    // '<rootDir>/__tests__/RecapSpec.js',
    '<rootDir>/build/tests/*.spec.js',],
  // '<rootDir>/build/tests/pacer.spec.js',],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/'],
  globals: {
    chrome: true,
  },
  coverageReporters: ['text', 'html'],
  coverageDirectory: './coverage/'
};
