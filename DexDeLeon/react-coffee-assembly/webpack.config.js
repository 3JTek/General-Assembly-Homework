const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyWebpack = new CopyWebpackPlugin([
  { from: './src/assets', to: 'assets' }
])

const HotModuleReplcement = new webpack.HotModuleReplacementPlugin()

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8000,
    open: true
  },
  plugins: [HotModuleReplcement, HtmlWebpack, CopyWebpack]
}
