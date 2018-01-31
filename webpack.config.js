'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  //  Gera um sourcemap
  devtool: 'source-map',
  entry: [
    //  Entrada do arquivo principal
    path.join(__dirname, 'src', 'index'),
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ],
  //  Saida do arquivo, o arquivo bundle
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  //  Modules
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
