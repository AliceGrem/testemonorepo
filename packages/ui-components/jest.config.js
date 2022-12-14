module.exports = {
  testEnvironment: 'jsdom',
  displayName: 'ui-components',
  preset: '../../jest.preset.js',
  modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': 'babel-jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^~Atoms(.*)$': '<rootDir>/src/components/Atoms/$1',
    '^~Molecules(.*)$': '<rootDir>/src/components/Molecules/$1',
    '^~Organisms(.*)$': '<rootDir>/src/components/Organisms/$1',
    '^~Templates(.*)$': '<rootDir>/src/components/Templates/$1',
    '^~Pages(.*)$': '<rootDir>/src/components/Pages/$1',
    '^~hooks(.*)$': '<rootDir>/src/hooks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
};
