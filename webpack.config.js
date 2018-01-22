'use strict'

const path = require('path')

module.exports = {
  //  Entrada do arquivo principal
  entry: path.join(__dirname, 'src', 'index'),
  //  Saida do arquivo, o arquivo bundle
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}
