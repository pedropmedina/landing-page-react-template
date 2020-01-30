const merge = require('webpack-merge');

const common = require('./webpack-configs/webpack.common');

const loadWebpackEnv = ({ mode }) =>
  require(`./webpack-configs/webpack.${mode}`)(mode);

module.exports = mode => merge(common, loadWebpackEnv(mode));
