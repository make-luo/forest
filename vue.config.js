module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8080,
        proxy: {
            '/': {
                target: 'http://localhost:8989',
                pathRewrite: { '^/': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
}