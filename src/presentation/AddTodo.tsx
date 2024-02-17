import { useState } from "react";
import { addTodo } from "../application/todo";
import { Todo } from "../domain/Todo";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);


const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Omit<Todo, 'id'> = {
      title: title,
      completed: isChecked,
    };

    await addTodo(newTodo);

    // フォームをリセット
    setTitle("");
    setIsChecked(false);
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;