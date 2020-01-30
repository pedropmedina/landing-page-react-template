const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = mode =>
  console.log(mode) || {
    mode,
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true,
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  };
