module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: ['./setupTests.ts'],
};
