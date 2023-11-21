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
  on: {
    proxyReq: (proxyReq, req, res) => {
      proxyReq.headers['Access-Control-Allow-Origin'] = '*'; // add new header to response
    },
    proxyRes: (proxyRes, req, res) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*'; // add new header to response
    },
    },
});

export default function (req, res) {
  console.log('Req address => ', req.socket.remoteAddress);
  return apiProxy(req, res);
}

// export default async function handler(req, res) {
//   res.status(200).send(`Hello world!`);
// }
