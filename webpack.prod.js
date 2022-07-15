const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',       
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
				test: /\.(scss|css)$/,
				use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
			}
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
      		ignoreOrder: false
		})
    ]
})
