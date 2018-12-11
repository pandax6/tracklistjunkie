const withCss = require('@zeit/next-css')
require('dotenv').config({
	path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
module.exports = withCss({
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
			use: {
				loader: 'url-loader',
				options: {
					limit: 8192,
					publicPath: './',
					outputPath: 'static/css/',
					name: '[name].[ext]'
				}
			}
		})

		return config
	}
})
