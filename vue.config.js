let HyperDown = require('hyperdown');
let parser = new HyperDown;

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
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preprocess: function (markdownIt, source) {
                    return parser.makeHtml(source);//重点在这里！！！
                }
            })
    }
};