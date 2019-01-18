const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('Html-Webpack-Plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dir'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /'node_modules'/},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
      {test: /\.scss$/, loader: ['style-loader', 'css-loader','sass-loader']}
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
