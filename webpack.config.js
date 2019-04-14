var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: './main.ts',
  output: {
    path : path.resolve(__dirname,"dist"),
    filename: 'bundle.js',
    publicPath : "xuni"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  resolve: { 
    extensions: ['.ts', '.js' , '.html' , '.css']
  },
  watch : true
}

