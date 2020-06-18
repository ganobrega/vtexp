const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const defaultConfig = require('./webpack.config');

const config = {
  ...defaultConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    ...defaultConfig.plugins,
    /**
     * Plugins
     */
    new ChromeExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScripts: ['detector'],
        background: 'background',
      },
    }),
  ],
};

module.exports = config;
