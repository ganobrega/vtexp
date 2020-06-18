const defaultConfig = require('./webpack.config');

const config = {
  ...defaultConfig,
  mode: 'production',
};

module.exports = config;
