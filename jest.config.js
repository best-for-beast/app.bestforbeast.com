module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svg-transform.js',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFiles: ['jest-date-mock'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  testResultsProcessor: 'jest-sonar-reporter',
}
