const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = {
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: './build/'
  },
  watch: true,
  devtool: 'source-map',
  plugins: [new ExtractTextPlugin('style.css')],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [{loader: 'url-loader', options: {limit: 2000}}, 'image-webpack-loader']
      }
    ]
  } 
}

module.exports = config;
