module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.admin.charge.gapsd.com/api',
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