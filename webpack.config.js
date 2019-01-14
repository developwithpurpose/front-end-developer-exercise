const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
   entry: "./app/assets/javascripts/index.js",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
   },
   plugins: [
      new HtmlWebpackPlugin({ template: "app/index.html" })
   ],
   module: {
      rules: [
         {
            //scss
            test: /\.scss$/,
            use: [
               {
                  loader: "style-loader"
               },
               {
                  loader: "css-loader"
               },
               {
                  loader: "sass-loader"
               }
            ]
         },
         {
            // images
            test: /\.(ttf|eot|svg|gif|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     name: "[path][name].[ext]",
                     context: path.resolve(__dirname, "app/assets/images"),
                     outputPath: "images/"
                  }
               }
            ]
         },
         {
            test: /\.ico$/,
            loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
         },
         {
            type: 'javascript/auto',
            test: /\.(json)/,
            exclude: /(node_modules|bower_components|dist)/,
            use: [{
               loader: 'file-loader',
               options: { name: '[name].[ext]' },
            }]
         }
      ]
   }
};
