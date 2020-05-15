module.exports = {
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