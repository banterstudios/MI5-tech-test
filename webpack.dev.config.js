const webpack                 = require('webpack')
const path                    = require('path')
const HtmlWebpackPlugin       = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template : path.join(__dirname,'/app/index.html'),
  filename : 'index.html',
  inject   : 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname,'/dist'),
    filename: '/js/index_bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components|dist)/
      }
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
      {
        test: /\.(jpe?g|png|gif|svg|ttf)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          context: './app/assets'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
