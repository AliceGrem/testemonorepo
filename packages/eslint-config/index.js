module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: true,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  overrides: [
    {
      files: ['**/*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  ignorePatterns: [
    '**/page-data/*',
    '**/node-modules/*',
    'chunk.js',
    'bundle.js',
    '**/build/*',
    '**/dist/*',
    '**/public/*',
  ],
};
