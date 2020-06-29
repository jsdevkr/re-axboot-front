/* eslint-disable no-console */
const express = require('express');
const next = require('next'); 
const configs = require('./env-config'); // 현재 환경에 맞는 API 서버 주소를 가지고 있음

// proxy 설정
const devProxy = {
  '/api': {
    target: `${configs['process.env.API_HOST']}/api/`, 
    pathRewrite: { '^/api': '/' }, // 경로 재 설정 -> localhost:3000/api/test => localhost:3000/test
    changeOrigin: true, // 대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하여 준다.
  },
};

const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';

// server customize for own route patterns
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
}); // ?

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (dev && devProxy) {
      const {createProxyMiddleware} = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function(context) {
        server.use(createProxyMiddleware(context, devProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
