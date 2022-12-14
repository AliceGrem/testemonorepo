module.exports = {
  testEnvironment: 'jsdom',
  displayName: 'app-financiamento',
  preset: '../../jest.preset.js',
  modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json|svg)$)': 'babel-jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/transform.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^~Atoms(.*)$': '<rootDir>../../packages/ui-components/src/components/Atoms/$1',
    '^~Molecules(.*)$': '<rootDir>../../packages/ui-components/src/components/Molecules/$1',
    '^~Organisms(.*)$': '<rootDir>../../packages/ui-components/src/components/Organisms/$1',
    '^~Templates(.*)$': '<rootDir>../../packages/ui-components/src/components/Templates/$1',
    '^~Pages(.*)$': '<rootDir>../../packages/ui-components/src/components/Pages/$1',
    '^~hooks(.*)$': '<rootDir>../../packages/ui-components/src/hooks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
};
