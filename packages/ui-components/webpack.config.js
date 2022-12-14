const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  externals: {
    '@monorepo/utils': 'commonjs2 @monorepo/utils',
    '@monorepo/theme': 'commonjs2 @monorepo/theme',
    '@monorepo/assets': 'commonjs2 @monorepo/assets',
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~Atoms': path.resolve(__dirname, 'src/components/Atoms'),
      '~Molecules': path.resolve(__dirname, 'src/components/Molecules'),
      '~Organisms': path.resolve(__dirname, 'src/components/Organisms'),
      '~Templates': path.resolve(__dirname, 'src/components/Templates'),
      '~Pages': path.resolve(__dirname, 'src/components/Pages'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
};
