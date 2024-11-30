const routes = {
  GET: {},
  POST: {}
};

let custom404Handler = null; // 404ページ用のカスタムハンドラー

function addRoute(method, path, handler) {
  if (!routes[method]) {
    throw new Error(`Method ${method} is not supported.`);
  }
  routes[method][path] = handler;
}

// 404ページ用のカスタムハンドラーを設定する関数
function setCustom404Handler(handler) {
  custom404Handler = handler;
}

function handleRequest(req, res) {
  const { method, url } = req;
  if (routes[method] && routes[method][url]) {
    routes[method][url](req, res);
  } else {
    // カスタム404ハンドラーが設定されている場合、それを呼び出す
    if (custom404Handler) {
      custom404Handler(req, res);
    } else {
      // 設定されていない場合は、デフォルトの404ページを返す
      res.statusCode = 404;
      res.end('404 Not Found');
    }
  }
}

module.exports = { addRoute, handleRequest, setCustom404Handler };
