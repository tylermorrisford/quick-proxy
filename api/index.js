const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'https://api-web.nhle.com/v1/',
  changeOrigin: true,
  hostRewrite: true,
  methodRewrite: true,
  followRedirects: true,
  pathRewrite: {
    '^/api': '',
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}

// export default async function handler(req, res) {
//   res.status(200).send(`Hello world!`);
// }
