//server.js

const { addRoute, handleRequest, setCustom404Handler } = require('framework/src/router');
const http = require('http');
const { setupRoutes } = require('./route');

const Port = 5000;

// 404ページの設定
setCustom404Handler((req, res) => {
  const html = `
    <html>
      <head><title>404 Not Found</title></head>
      <body>
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p><a href="/">Go back to the homepage</a></p>
      </body>
    </html>
  `;
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(html);
});

setupRoutes(addRoute);

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(Port, () => {
  console.log(`Server running at http://localhost:${Port}`);
});
