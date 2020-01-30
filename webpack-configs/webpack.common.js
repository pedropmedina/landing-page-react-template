const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: { loader: 'babel-loader' } },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'styled-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: { loader: 'file-loader' }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: { loader: 'file-loader' }
      },
      {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }]
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()]
};
