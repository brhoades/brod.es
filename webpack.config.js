/* tslint:disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
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
        use: [
          "babel-loader",
          "ts-loader",
        ],
        exclude: /dist|node_modules/,
      },
      {
        test: /\.(jpg|png|gif|svg|webp|eot|woff2?|ttf)$/,
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
    new CopyWebpackPlugin({
      patterns: [{
        from: "./src/assets/img/*",
        to: "./assets/[name].[ext]",
      }],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/[name].bundle.css',
    }),
  ],
};

if (process.env.NODE_ENV === "production") {
  module.exports.output.publicPath = "./";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"production\"",
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ])

  module.exports.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {}
      }),
    ],
  }
}
