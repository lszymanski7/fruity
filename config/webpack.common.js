const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/,
				type: 'asset/resource'
			},
			// Fonts
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/, 
				type: 'asset/inline'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
			template: path.resolve(__dirname, '../public/index.html'),
			inject: 'body',
			minify: {
                removeComments: true,
                collapseWhitespace: false
            }
		})
    ]
}
