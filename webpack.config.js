const path = require("path")
const webpack = require("webpack")

module.exports = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./js/ClientApp.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true,
    host: "0.0.0.0",
    port: "3000",
    disableHostCheck: true},

    resolve: {
      extensions: [".js", ".json", ".jsx"]
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "standard-loader",
          exclude: /node_modules/
        },
        {
          include: path.resolve(__dirname, "js"),
          test: [/\.js$/, /\.jsx$/],
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            { loader: "sass-loader" } // compiles Sass to CSS
          ]
        }
      ]
    }
  }

