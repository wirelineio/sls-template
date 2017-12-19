//
// Copyright 2017 Wireline, Inc.
//

const path = require('path');

module.exports = {

  target: 'node',

  entry: {
    handler: [
      'babel-polyfill', path.resolve('./handler.js')
    ]
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,    // Don't transpile deps.
        include: [
          '.'
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './dist/babel-cache/'
          }
        }
      }
    ]
  }
};