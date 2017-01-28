var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/"),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')//'style-loader!css-loader?minimize'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['syntax-decorators']
        },
        include: path.resolve(__dirname, 'src/')
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
};
