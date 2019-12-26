const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: {
    // options: path.resolve(__dirname, 'src/app/options.js'),
    popup: path.resolve(__dirname, 'src/app/popup.js'),
    main: path.resolve(__dirname, 'src/app/main.js'),
    background: path.resolve(__dirname, 'src/app/background.js'),
    images: path.resolve(__dirname, 'src/images/**/*.(png)'),
  },

  output: {
    path: path.resolve(__dirname, 'extension/dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: [ '.js', '.json', '.scss', '.css', '.png' ],
    alias: {
      utils: path.resolve(__dirname, 'src/app/utils'),
      images: path.resolve(__dirname, 'src/images')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loaders: [ 'html-loader' ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          }
        )
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/views/options.html'),
    //   filename: 'options.html',
    //   chunks: ['options'],
    //   inject: true,
    //   minify: {}
    // }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      inject: true,
      minify: {}
    }),

    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        compress: {
          warnings: false
        },
        comments: false
      }
    ),

    new ExtractTextPlugin('[name].css'),

    new CompressionPlugin(
      {
        test: /\.js$|\.css$|\.html$/
      }
    ),

    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  devtool: 'cheap-module-source-map'
}
