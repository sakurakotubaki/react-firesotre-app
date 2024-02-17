import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from '../infra/firebase';
import { Todo } from '../domain/Todo';

const db = getFirestore(app);

export const getTodos = async ():  Promise<Todo[]> => {
    const todosCollection = collection(db, 'todo');
    const todosSnapshot = await getDocs(todosCollection);
    const snapshot = todosSnapshot.docs.map(doc => doc.data());
    return snapshot as Todo[];
};