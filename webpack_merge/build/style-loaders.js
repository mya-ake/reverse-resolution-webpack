const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassResources = require('./sass-resources')

const CREATE_LOADER_TYPES = Object.freeze({
  css: 'css',
  sass: 'sass',
})

const BASE_RULES = {
  [CREATE_LOADER_TYPES.css]: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
  [CREATE_LOADER_TYPES.sass]: [
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
        sourceMap: false,
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
  isExtract = Boolean(isExtract)

  const rule = BASE_RULES[type]
  if (isExtract === true) {
    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: rule,
    })
  } else {
    return [
      'style-loader',
    ].concat(rule)
  }
}

module.exports = {
  CREATE_LOADER_TYPES,
  createStyleLoaders,
}
