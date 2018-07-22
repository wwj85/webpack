const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
		filename: 'js/[name].js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
		new ExtractTextPlugin("css/[name].css"),
		new webpack.HotModuleReplacementPlugin(),
		new HTMLPlugin({
			template: './index.html'
		})
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
          test: /\.(gif|jpg|jpeg|png|svg)$/,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 1024,
                      name: 'resources/[path][name].[hash:8].[ext]'
                  }
              }
          ]
      }
    ]
  },
  devServer: {
		contentBase: path.resolve('./'),
		port: 8888,
		inline: true,
		hot: true,
		proxy: {}
	}
}