process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, 'app/assets/src/javascripts/main'),
    ],
  },
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, 'app/assets/dist'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [],
}


const extractStyles = new ExtractTextPlugin({
  filename: 'stylesheets/[name].css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'development',
})

webpackConfig.module.rules.push({
  test: /\.scss$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          minimize: {
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions', 'ie >= 9'],
            },
            discardComments: {
              removeAll: true,
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: true,
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  })
})

webpackConfig.plugins.push(extractStyles)

module.exports = webpackConfig
