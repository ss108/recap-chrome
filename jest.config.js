// module.exports = {
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/__mocks__/fileMock.js',
//     '\\.(css|less)$': '<rootDir>/src/assets/css/',
//   },
//   setupFilesAfterEnv: ['./jest.setup.js'],
//   testPathIgnorePatterns: [
//     '<rootDir>/src/assets/',
//     '<rootDir>/__tests__/appellate/mocks',
//     '<rootDir>/__tests__/district/mocks',
//     '<rootDir>/__tests__/RecapSpec.js',
//   ],
// };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest"
  },
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js',
    // '<rootDir>/__tests__/RecapSpec.js',
    '<rootDir>/tests/pacer.spec.ts',],
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist'],
  transformIgnorePatterns: ['node_modules/'],
  globals: {
    chrome: true,
  },
  coverageReporters: ['text', 'html'],
  coverageDirectory: './coverage/'
};
