import { doc, getFirestore, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore/lite';
import { app } from '../infra/firebase';
import { Todo } from '../domain/Todo';

const db = getFirestore(app);

// Firestoreから全てのTodoを取得する getTodos
export const getTodos = async (): Promise<Todo[]> => {
    const todosCollection = collection(db, 'todo');
    const todoSnapshot = await getDocs(todosCollection);
    const todos: Todo[] = todoSnapshot.docs.map(doc => ({
        id: doc.id, // ドキュメントのIDをTodoのidフィールドに設定
        ...doc.data()
    } as Todo));
    return todos;
}

/* Firestoreに新しいTodoを追加する addTodo
    * @param newTodo - 追加するTodo
    * @returns Promise<void>
    * Omitとは、指定したプロパティを除外した型を作成するTypeScriptのユーティリティ型です。
**/
export const addTodo = async (newTodo: Omit<Todo, 'id'>): Promise<void> => {
    const todosCollection = collection(db, 'todo');
    await addDoc(todosCollection, newTodo);
}

// Firestoreのデータを削除する deleteTodo
// Firestoreのデータを削除する deleteTodo
export const deleteTodo = async (todo: Todo): Promise<void> => {
    const docRef = doc(db, 'todo', todo.id);
    await deleteDoc(docRef);
    console.log('Document successfully deleted!');
    
}