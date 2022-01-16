const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: 'http://10.1.2.186:3080',
      changeOrigin: true
    })
  );
};
