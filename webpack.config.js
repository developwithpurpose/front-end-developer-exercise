module.exports = {
  entry: "./source/assets/javascripts/base.js",
  output: {
      path: "./source/assets/javascripts/",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
