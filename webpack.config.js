const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: { 
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};