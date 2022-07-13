const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},
  	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
		clean: true
  	},
	module: {
    	rules: [
			{
      			test: /\.(js|jsx)$/,
      			exclude: /node_modules/,
      			use: ['babel-loader']
      		}, {
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}, {
				test: /\.(png|jpe?g|gif|svg)$/,
				use: ['file-loader']
			}
    	]
  	},
	infrastructureLogging: {
		level: 'warn'
	},
	devServer: {
    	static: {
			directory: path.resolve(__dirname, './public')
		},
		port: 8080,
		compress: true,
		hot: false,
		open: true,
		liveReload: true
  	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			filename: 'index.html'
		})
	],
	mode: 'development',
	target: 'web',
	devtool: 'source-map'
}
