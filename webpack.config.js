const HtmlPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: "./src/main.ts",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
};
