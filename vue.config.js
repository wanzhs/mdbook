module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.124.5:8021',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
    }
};