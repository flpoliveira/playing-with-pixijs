const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  devtool: "inline-source-map",
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "build/assets",
    //       to: "assets",
    //     },
    //   ],
    // }),
    new HTMLWebpackPlugin({
      template: "build/index.html",
      filename: "index.html",
    }),
  ],
};
