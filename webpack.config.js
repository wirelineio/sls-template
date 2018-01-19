//
// Copyright 2017 Wireline, Inc.
//

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    libraryTarget: 'commonjs2'
  },

  plugins: [
    new CopyWebpackPlugin([
      'wireline.yml'
    ])
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,    // Don't transpile deps.
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
