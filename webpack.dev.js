const defaultConfig = require('./webpack.config');

const config = {
  ...defaultConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
};

module.exports = config;
