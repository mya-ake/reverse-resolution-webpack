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
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
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
