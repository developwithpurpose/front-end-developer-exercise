const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: ['./src/scripts/main.js', './src/styles/main.scss'],
  output: {
    filename: 'assets/javascripts/bundle.js',
    path: path.resolve(__dirname, 'app'),
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: devMode
                ? () => []
                : () => [
                    postcssPresetEnv({
                      browsers: ['>1%', 'last 3 ie versions']
                    }),
                    require('cssnano')()
                  ]
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../images',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name].css'
    })
  ]
};
