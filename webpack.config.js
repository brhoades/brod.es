/* tslint:disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    build: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[hash:8].js",
    chunkFilename: "[name].[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              "cacheDirectory": "../.babel_cache",
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules|dist/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        exclude: /node_modules/,
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".less"],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/assets/*",
        to: "assets/[name].[ext]"
      },
    ]),
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  module.exports.output.publicPath = "./";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"production\"",
      },
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: 4,
      sourceMap: true,
      uglifyOptions: {
        toplevel: true,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ])
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
  ]);
}
