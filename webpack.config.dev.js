const path = require('path')
const APP_PATH = path.resolve(_dirname, 'app')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  context: APP_PATH,
  entry: {
    main: ['babel-polyfill', './index.js'],
    html: './index.html'
  },
  output: {
    path: path.resolve(_dirname, 'build'),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },{
      test: /\.jsx?$/,
      loader: 'babel',
      include: APP_PATH
    },{
      test: /\.(scss|css)$/,
      loaders: ['style', 'css?sourceMap', 'autoprefixer', 'sass'],
    },{
      test: /\.eot/,loader : 'file?prefix=font/'},
      {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf/, loader : 'file?prefix=font/'},
      {test: /\.svg/, loader : 'file?prefix=font/'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
}
