import { useEffect, useState, memo } from "react";
import { getTodos } from "../application/todo";
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

  return (
    <div>
      <h1>Get Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default GetTodo;