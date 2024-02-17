# React + TypeScript + Vite
React + TypeScript + Firestoreで簡単なアプリケーションを作ってみる。

firebase の package を追加する

```bash
npm install firebase
```

## Viteで.envの設定
`.env.local`ファイルには、VITE_から環境変数を書く!<br>
Reactはnpmのパッケージをinstallしなくてもdefaultで使える。<br>
書き方の例:
```
VITE_PASSWORD=12340000
```

## レイヤーを分ける
オニオンアーキテクチャぽくしてみた。
```
src
├── App.tsx
├── application
│   └── todo.ts
├── assets
│   └── react.svg
├── domain
│   └── Todo.ts
├── infra
│   └── firebase.ts
├── main.tsx
├── presentation
│   └── GetTodo.tsx
└── vite-env.d.ts
```

applicationは、ロジックを書いたメソッドを配置。domainは、Firestoreのコレクションに合わせて、interfaceを定義。infraには、Firebaseと接続をするファイルを配置。presentationには、UIとコンポーネントを配置する。

## MUIを導入してデザインを整える
公式サイトから追加する。

https://mui.com/material-ui/getting-started/installation/

1. 必要なpackageをinstall
```bash
npm install @mui/material @emotion/react @emotion/styled
```

2. iconが必要なので追加
```bash
npm install @mui/icons-material
```