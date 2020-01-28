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
    app: path.join(__dirname, './chrome/static/index.js'),
    background: path.join(__dirname, './chrome/scripts/background.js'),
    attacher: path.join(__dirname, './chrome/scripts/attacher.js'),
    detector: path.join(__dirname, './chrome/scripts/detector.js'),
    devtools: path.join(__dirname, './chrome/scripts/devtools.js'),
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
      filename: 'index.html',
      template: './chrome/static/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      template: './chrome/static/devtools.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools-panel.html',
      template: './chrome/static/devtools-panel.html',
    }),
    new ChromeExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        background: 'background',
        content: 'content',
        detector: 'detector',
        devtools: 'devtools',
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
