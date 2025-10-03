const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),

      clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
