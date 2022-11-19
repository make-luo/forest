module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8080,
        proxy: {
            '/img': {
                target: 'http://localhost:8888',
                pathRewrite: { '^/img': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
}