const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = () => {
  const webpackConfig = require('../../webpack.config.js')

  webpackConfig.entry.main.unshift('webpack-hot-middleware/client.js?path=/__webpack_hmr')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  )

  const compiler = webpack(webpackConfig)
  return [
    webpackDevMiddleware(compiler, {
      noInfo: false,
      stats: 'none',
      publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(compiler)
  ]
}
