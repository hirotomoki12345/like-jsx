このプロジェクトは、カスタムフレームワークを使用して構築されたシンプルなNode.jsアプリケーションです。ディレクトリ構造に基づいてページを動的にレンダリングし、ルーティングを設定する方法を示しています。

## 機能
Expressのようなフレームワークを使わずに、カスタムのルーティングシステムを実装。
src/pages ディレクトリからページを動的にロード。
シンプルな404エラーページの処理。
新しいページやルートを簡単に追加できる構造。

## ディレクトリ構造
```
apps/
├── src/
│   ├── pages/
│   │   ├── index.js        # ホームページ
│   │   ├── about.js        # Aboutページ
│   │   ├── contact.js      # Contactページ（例）
│   │   └── 404.js          # カスタム404ページ
│   ├── router.js           # ルーティング処理
│   ├── server.js           # サーバーのエントリーポイント
│   └── route.js            # ページファイルに基づいてルートを動的に設定
├── package.json            # NPM依存関係
└── README.md               # このファイル
```

## 必要条件

**プロジェクトを実行するには、Node.js と npm がインストールされている必要があります。**

## 新しいページの追加方法

src/pages/ ディレクトリに新しいJavaScriptファイルを作成します。

例えば、"services" ページを追加する場合は、services.js というファイルを作成します。

src/route.js ファイルに、新しいファイルとURLパスをマッピングします。

## 使用方法

セットアップ方法は省きます。

アプリは、appsディレクトリ

package.json　は、自分の環境に合わせて編集してください。

```
npm i
```

で、フレームワークをインストールします。

appsディレクトリに入り、

```npm start```

でアプリをport5000で起動します。

## ルート

デフォルトでは、以下のルートが利用可能です：

```
/ - ホームページ
/about - Aboutページ
/contact - Contactページ（例）
404 - 存在しないページにアクセスした場合、カスタム404ページが表示されます。
```

**新しいページを追加したい場合は、src/pages ディレクトリにファイルを追加し、src/route.js にそれを設定するだけで新しいルートを簡単に作成できます。**

## 新しいページの追加方法

新しいページを追加するには、以下の手順を実行します：

src/pages/ ディレクトリに新しいJavaScriptファイルを作成します。

例えば、"services" ページを追加する場合は、services.js というファイルを作成します。

src/route.js ファイルに、新しいページとURLパスをマッピングします。

```
const routes = {
  '/': 'index.js',
  '/about': 'about.js',
  '/contact': 'contact.js',
  '/services': 'services.js', // 新しいルート
};

```

新しいページファイル（src/pages/services.js）で、ページの内容を定義します：

```
function renderServices() {
  return `
    <html>
      <head><title>サービス</title></head>
      <body>
        <h1>私たちのサービス</h1>
        <p>私たちは、さまざまなWeb開発サービスを提供しています。</p>
      </body>
    </html>
  `;
}

module.exports = renderServices;

```

新しいページは、http://localhost:5000/services でアクセスできるようになります。

## 404ページ

デフォルトの404ページは、リクエストされたページが存在しない場合に表示されます。カスタム404ページを作成したい場合は、src/pages/404.js を編集し、表示するコンテンツを変更できます。

```
function render404() {
  return `
    <html>
      <head><title>ページが見つかりません</title></head>
      <body>
        <h1>ページが見つかりません</h1>
        <p>要求されたページは存在しません。</p>
        <p><a href="/">ホームに戻る</a></p>
      </body>
    </html>
  `;
}

module.exports = render404;

```

## ライセンス

© 2024 Psannetwork. All rights reserved.
