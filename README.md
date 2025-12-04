# ランディングページ

Vue3とPythonローカルサーバーで構築されたランディングページプロジェクトです。

## プロジェクト構成

```
LPtest/
├── frontend/          # Vue3フロントエンドアプリケーション
│   ├── src/
│   │   ├── App.vue   # メインコンポーネント
│   │   ├── main.js   # エントリーポイント
│   │   └── style.css # グローバルスタイル
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/           # Pythonサーバー
│   └── server.py     # ローカルサーバースクリプト
└── README.md
```

## 環境構築

### 必要な環境

- Node.js 18以上
- Python 3.7以上

### セットアップ手順

#### 1. Node.jsのインストール

まず、Node.jsがインストールされているか確認してください:

```bash
node --version
npm --version
```

インストールされていない場合は、[Node.js公式サイト](https://nodejs.org/)からダウンロードしてインストールしてください。

#### 2. 依存関係のインストール

```bash
cd frontend
npm install
```

## 開発環境での起動

### 開発サーバー（推奨）

Vue開発サーバーを使用する場合（ホットリロード対応）:

```bash
cd frontend
npm run dev
```

ブラウザで http://localhost:5173 にアクセスしてください。

### 本番ビルド + Pythonサーバー

本番環境と同じようにPythonサーバーで動作確認する場合:

1. フロントエンドをビルド:
```bash
cd frontend
npm run build
```

2. Pythonサーバーを起動:
```bash
cd ../server
python3 server.py
```

ブラウザで http://localhost:8080 にアクセスしてください。

## 開発

### フロントエンドの開発

- メインコンポーネント: [frontend/src/App.vue](frontend/src/App.vue)
- エントリーポイント: [frontend/src/main.js](frontend/src/main.js)
- グローバルスタイル: [frontend/src/style.css](frontend/src/style.css)

### サーバーのカスタマイズ

[server/server.py](server/server.py) を編集して、ポート番号やCORS設定をカスタマイズできます。

## ビルド

本番用にビルドする場合:

```bash
cd frontend
npm run build
```

ビルドされたファイルは `frontend/dist/` ディレクトリに出力されます。

## トラブルシューティング

### Node.jsがインストールされていない

`npm` コマンドが見つからない場合は、Node.jsをインストールしてください。

### ポートが使用中

デフォルトでPythonサーバーはポート8080、Vue開発サーバーはポート5173を使用します。
他のアプリケーションが使用している場合は、設定ファイルでポート番号を変更してください。
