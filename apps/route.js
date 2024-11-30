// route.js

const path = require('path');
const fs = require('fs');

const pageDirectory = path.join(__dirname, 'pages');

// 各ルートとページをマッピングする
const routes = {
  '/': 'index.js',
  '/about': 'about.js',
};

function setupRoutes(addRoute) {
  Object.entries(routes).forEach(([url, file]) => {
    const filePath = path.join(pageDirectory, file);

    if (fs.existsSync(filePath)) {
      const renderPage = require(filePath);
      addRoute('GET', url, (req, res) => {
        const html = renderPage();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
    } else {
      console.warn(`ページ ${file} が見つかりません: ${url}`);
    }
  });
}

module.exports = { setupRoutes };
