const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')


module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'app'),
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[name].[chunkhash].js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(__dirname, 'src', 'scss', '_variables.scss')
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              outputPath(name) {
                return name.replace(/src\//, '')
              },
              limit: 10000,
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      async: ['app'],
    }),
  ],
}
