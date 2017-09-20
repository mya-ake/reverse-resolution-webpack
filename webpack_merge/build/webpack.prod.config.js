const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const { createStyleLoaders } = require('./style-loaders')

module.exports = merge(baseConfig, {
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: createStyleLoaders('css', { isExtract: true }),
      },
      {
        test: /\.scss$/,
        use: createStyleLoaders('sass', { isExtract: true }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '..', 'dist', 'index.html'),
      template: path.join(__dirname, '..', 'src', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
})
