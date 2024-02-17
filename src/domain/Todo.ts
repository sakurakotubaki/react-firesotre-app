// Firestoreのtodoコレクションのドキュメントの型を定義
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}