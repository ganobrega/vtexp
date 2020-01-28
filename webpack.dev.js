const path = require('path');
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin');
const baseManifest = require('./chrome/manifest.json');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    detector: path.join(__dirname, './chrome/scripts/detector.js'),
    popup: path.join(__dirname, './chrome/static/popup.js'),
    devtools: path.join(__dirname, './chrome/static/devtools.js'),
    attacher: path.join(__dirname, './chrome/scripts/attacher.js'),
    background: path.join(__dirname, './chrome/scripts/background.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: './chrome/static/popup.html',
      chunks: ['popup'],
      excludeChunks: ['devtools', 'attacher', 'background']
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      template: './chrome/static/devtools.html',
      chuncks: ['devtools'],
      excludeChunks: ['popup', 'attacher', 'background']
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.init.html',
      template: './chrome/static/devtools.init.html',
      excludeChunks: ['devtools', 'popup', 'attacher', 'background']
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.disabled.html',
      template: './chrome/static/popup.disabled.html',
      excludeChunks: ['devtools', 'popup', 'attacher', 'background']
    }),
    new ChromeExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        background: 'background',
      },
    }),
    new CopyPlugin([
      {
        from: 'chrome/icons',
        to: 'icons',
      },
    ]),
    new CopyPlugin([
      {
        from: 'chrome/_locales',
        to: '_locales',
      },
    ]),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
};

module.exports = config;
