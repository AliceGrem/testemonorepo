const path = require('path');

const PATH_COMPONENTS = '../../packages/ui-components/src/components';
const PATH_HOOKS = '../../packages/ui-components/src/hooks';

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /keycloak-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~Atoms': path.resolve(__dirname, `${PATH_COMPONENTS}/Atoms`),
        '~Organisms': path.resolve(__dirname, `${PATH_COMPONENTS}/Organisms`),
        '~Molecules': path.resolve(__dirname, `${PATH_COMPONENTS}/Molecules`),
        '~Templates': path.resolve(__dirname, `${PATH_COMPONENTS}/Templates`),
        '~Pages': path.resolve(__dirname, `${PATH_COMPONENTS}/Pages`),
        '~hooks': path.resolve(__dirname, PATH_HOOKS),
      },
    },
  });
};
