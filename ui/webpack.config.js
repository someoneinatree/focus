const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'development',
	watch: true,
	entry: './ui/in/entry.js',
	output: {
		path: path.resolve(__dirname, 'out'),
		filename: 'app.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './ui/in/index.html',
			inject: false
		})
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['react']
				}
			}]
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}
