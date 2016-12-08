const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')
const APP_PATH = path.resolve(__dirname, 'app')
const node_modules_dir = path.resolve(__dirname, 'node_modules')

module.exports = {
  devtool: false,
  context: APP_PATH,
  entry:{
    main: ['babel-polyfill', './index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.jsx?$/,
      exclude: [node_modules_dir],
      loader: 'babel',
      include: APP_PATH
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(scss|css)$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    }, {
      test: /\.eot/,loader : 'file?prefix=&name=font/[name].[ext]'},
      {test: /\.woff/,loader : 'file?prefix=&limit=10000&mimetype=font/application/font-woff&name=font/[name].[ext]'},
      {test: /\.ttf/, loader : 'file?prefix=&name=font/[name].[ext]'},
      {test: /\.svg/, loader : 'file?prefix=&name=font/[name].[ext]'
    }]
  },
  postcss: [
    autoprefixer({
        browsers: ['last 2 version']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  }
}
