const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/oauth2',
    createProxyMiddleware({
      target: 'https://j8a303.p.ssafy.io',
      changeOrigin: true,
    }),
  );
};
