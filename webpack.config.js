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
          "babel-loader",
          "ts-loader",
        ],
        exclude: /dist|node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff2?|ttf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.less$/,
        exclude: /dist|node_modules/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }],
      },
      {
        test: /\.css$/,
        exclude: /dist|node_modules/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less"],
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
}
