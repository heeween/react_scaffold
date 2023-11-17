const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5001', // 测试门户后端
            pathRewrite: {
                '^/api1': '',
            },
            changeOrigin: true
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5002', // 测试门户后端
            pathRewrite: {
                '^/api2': '',
            },
            changeOrigin: true
        })
    );
};
