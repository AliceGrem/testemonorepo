const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '~Atoms': path.resolve(__dirname, '../src/components/Atoms'),
          '~Molecules': path.resolve(__dirname, '../src/components/Molecules'),
          '~Organisms': path.resolve(__dirname, '../src/components/Organisms'),
          '~Templates': path.resolve(__dirname, '../src/components/Templates'),
          '~Pages': path.resolve(__dirname, '../src/components/Pages'),
          '~hooks': path.resolve(__dirname, '../src/hooks'),
        },
      },
    };
  },
};
