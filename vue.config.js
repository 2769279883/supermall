module.exports = {
	configureWebpack: {
		resolve: {
		  alias: {
		  	'assets': '@/assets',
		  	'common': '@/common',
		  	'components': '@/components',
		  	'network': '@/network',
		  	'views': '@/views',
				// 'views': resolve('src/views'),
		  }
		}
		
	}
}