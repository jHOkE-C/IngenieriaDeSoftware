const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:80/estu_prime/src', // Ruta base de tu aplicación React
        changeOrigin: true,
    }));
};