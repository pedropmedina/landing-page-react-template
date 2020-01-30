const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = mode =>
  console.log(mode) || {
    mode,
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inlineSource: '.js$'
      }),
      new HtmlWebpackInlineSourcePlugin()
    ]
  };
