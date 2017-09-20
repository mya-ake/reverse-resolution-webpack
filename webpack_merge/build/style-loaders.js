const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassResources = require('./sass-resources')

const BASE_RULES = {
  css: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
  sass: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: sassResources,
      },
    },
  ],
}

const createStyleLoaders = (type, { isExtract } = {}) => {
  if ((type in BASE_RULES) === false) {
    throw new Error('Undefined type')
  }
  isExtract = !!isExtract

  const rule = BASE_RULES[type]
  if (isExtract === true) {
    return ExtractTextPlugin.extract({
      use: rule,
    })
  } else {
    return [
      'style-loader',
    ].concat(rule)
  }
}

module.exports = {
  createStyleLoaders,
}
