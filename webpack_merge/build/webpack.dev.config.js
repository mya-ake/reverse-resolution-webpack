const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const { CREATE_LOADER_TYPES, createStyleLoaders } = require('./style-loaders')

module.exports = merge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: createStyleLoaders(CREATE_LOADER_TYPES.css, { isExtract: false }),
      },
      {
        test: /\.scss$/,
        use: createStyleLoaders(CREATE_LOADER_TYPES.sass, { isExtract: false }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '..', 'dist', 'index.html'),
      template: path.join(__dirname, '..', 'src', 'index.html'),
      inject: true,
    }),
  ],
})
