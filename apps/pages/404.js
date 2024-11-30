function render404() {
  return `
    <html>
      <head><title>404 Not Found</title></head>
      <body>
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p><a href="/">Go back to the homepage</a></p>
      </body>
    </html>
  `;
}

module.exports = render404; // 関数としてエクスポート
