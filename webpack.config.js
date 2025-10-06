const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FontPreloadPlugin = require("webpack-font-preload-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),

      clean: true,
  },

  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),

    new FontPreloadPlugin({
      extensions: ["woff", "woff2"],

      crossorigin: true,

      loadType: "preload",
    }),
  ],

  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        {
          test: /\.html$/i,
          loader: "html-loader",
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },

        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
        },
      ],
  },
};
