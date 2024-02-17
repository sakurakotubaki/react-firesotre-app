import { useEffect, useState, memo } from "react";
import { getTodos, deleteTodo } from "../application/todo";
import { Todo } from "../domain/Todo";

const GetTodo = memo(() => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
  
    fetchTodos();
    // 副作用が呼ばれた回数をチェックるlog
    console.log("副作用が呼ばれた");
  }, []);// 第２引数が空の配列の場合、初回レンダリング時のみ副作用が呼ばれる

  const handleDelete = async (todo: Todo) => {
    await deleteTodo(todo);
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <div>
      <h1>Get Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default GetTodo;