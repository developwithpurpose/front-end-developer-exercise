const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: '.env'});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');
const { optimize: { CommonsChunkPlugin }, ProvidePlugin } = require('webpack');
const webpack = require('webpack');
// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
condition ? ensureArray(config) : ensureArray(negativeConfig);

// primary config:
const title = 'Dave Ramsey Solutions';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'app');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const baseUrl = '/';

const cssRules = [
  { loader: 'css-loader' },
  {
    loader: 'postcss-loader',
    options: { plugins: () => [require('autoprefixer')({ browsers: ['last 2 versions'] })]}
  }
];

module.exports = ({production, server, extractCss, coverage} = {}) => ({
  resolve: {
    extensions: ['.js'],
    modules: [srcDir, 'node_modules']
  },
  entry: {
    //app: ['aurelia-bootstrapper'],
    vendor: ['bluebird', 'jquery', 'bootstrap']
  },
  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js',
    sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[hash].bundle.map',
    chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[hash].chunk.js'
  },
  devServer: {
    contentBase: outDir,
    historyApiFallback: true,
    port: parseInt(process.env.PORT, 10)
  },
  devtool: (process.env.NODE_ENV !== 'production') ? 'inline-source-map' : false,
  // server: {port: parseInt(process.env.PORT, 10)},
  module: {
    rules: [
      // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
      // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: extractCss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssRules
        }) : ['style-loader', ...cssRules]
      },
      {
        test: /\.css$/i,
        issuer: [{ test: /\.html$/i }],
        // CSS required in templates cannot be extracted safely
        // because Aurelia would try to require it again in runtime
        use: cssRules
      },
      { test: /\.html$/i, loader: 'html-loader' },
      { test: /\.js$/i, loader: 'babel-loader', exclude: nodeModulesDir,
        options: coverage ? { sourceMap: 'inline', plugins: [ 'istanbul' ] } : {}
      },
    { test: /\.json$/i, loader: 'json-loader' },
    // use Bluebird as the global Promise implementation:
    { test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
    // exposes jQuery globally as $ and as jQuery:
    { test: require.resolve('jquery'), loader: 'expose-loader?$!expose-loader?jQuery' },
    // embed small images and fonts as Data Urls and larger ones as files:
    { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
    { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
    { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
    // load these fonts normally, as files:
    { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
    ]
  },
  plugins: [
  //new AureliaPlugin(),
  // new ModuleDependenciesPlugin({
  //   'aurelia-auth': ['./auth-filter'],
  //   'aurelia-polymer': ['./au-select-custom-attribute'],
  //   'au-table': ['./au-table', './au-table-select', './au-table-sort']
  // }),
    new ProvidePlugin({
      'Promise': 'bluebird',
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      minify: production ? {
        removeComments: true,
        collapseWhitespace: true
      } : undefined,
      metadata: {
      // available in index.ejs //
        title, server, baseUrl
      }
    }),
    new CopyWebpackPlugin(
      [{ from: 'app/assets/favicon.ico', to: 'favicon.ico' },
    { from: 'app/assets/javascripts', to: 'assets/javascripts' },
    { from: 'app/assets/stylesheets', to: 'assets/stylesheets' },
    { from: 'app/baby-steps.json', to: 'baby-steps.json' },
    { from: 'app/assets/images', to: 'assets/images' }]
  ),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'PORT']),
    new webpack.DefinePlugin({'process.env': Object.keys(process.env).reduce((o, k) => {
      o[k] = JSON.stringify(process.env[k]);
      return o;
    }, {})}
),
// new HtmlWebpackPlugin({
//   filename: 'polymer.html',
//   template: 'bower_components/polymer/polymer.html'
// }),
// new HtmlWebpackPlugin({
//   filename: 'polymer-mini.html',
//   template: 'bower_components/polymer/polymer-mini.html'
// }),
// new HtmlWebpackPlugin({
//   filename: 'polymer-micro.html',
//   template: 'bower_components/polymer/polymer-micro.html'
// }),
//   new CopyWebpackPlugin([
// { from: 'bower_components/webcomponentsjs/webcomponents.min.js', to: 'webcomponents.min.js' }
//   ]),
    ...when(extractCss, new ExtractTextPlugin({
      filename: production ? '[contenthash].css' : '[id].css',
      allChunks: true
    })),
    ...when(production, new CommonsChunkPlugin({
      name: ['common']
    })),
    ...when(production, new CopyWebpackPlugin([
  { from: 'app/assets/favicon.ico', to: 'favicon.ico' }
  // { from: 'static/includes.html', to: 'includes.html' }
    ]))
  ]
});
