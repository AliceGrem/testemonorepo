const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const PATH_PACKAGES = '../../packages';
const PATH_COMPONENTS = '../../packages/ui-components/src/components';
const PATH_HOOKS = '../../packages/ui-components/src/hooks';

const packages = [];
packages.push(path.join(__dirname, `${PATH_PACKAGES}/ui-components`));
packages.push(path.join(__dirname, `${PATH_PACKAGES}/utils`));
packages.push(path.join(__dirname, `${PATH_PACKAGES}/assets`));
packages.push(path.join(__dirname, `${PATH_PACKAGES}/theme`));
module.exports = {
  webpack: {
    configure: webpackConfig => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      let oneOfRule = webpackConfig.module.rules.find(r => r.oneOf);
      oneOfRule.oneOf.splice(0, 0, {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      });
      webpackConfig.ignoreWarnings = [/Failed to parse source map.*react-keycloak/];
      return webpackConfig;
    },

    alias: {
      '~': path.resolve(__dirname, './src/'),
      '~Atoms': path.resolve(__dirname, `${PATH_COMPONENTS}/Atoms`),
      '~Molecules': path.resolve(__dirname, `${PATH_COMPONENTS}/Molecules`),
      '~Organisms': path.resolve(__dirname, `${PATH_COMPONENTS}/Organisms`),
      '~Templates': path.resolve(__dirname, `${PATH_COMPONENTS}/Templates`),
      '~Pages': path.resolve(__dirname, `${PATH_COMPONENTS}/Pages`),
      '~hooks': path.resolve(__dirname, PATH_HOOKS),
    },
  },
};
