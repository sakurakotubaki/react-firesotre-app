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

## react-routerを導入する
ページ遷移するには、packageが必要。

```bash
npm install react-router-dom@6
```

Viteを使用している場合は、`main.tsx`を修正する。
```ts
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`App.tsx`を修正する
```tsx
import { Routes, Route } from 'react-router-dom';
import AddTodo from "./presentation/component/AddTodo"
import GetTodo from "./presentation/component/GetTodo"
import NoMatch from './presentation/page/NoMatch';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<GetTodo />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
```