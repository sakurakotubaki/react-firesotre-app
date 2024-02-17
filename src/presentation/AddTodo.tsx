import { useState } from "react";
import { addTodo } from "../application/todo";
import { Todo } from "../domain/Todo";
import { Button, Checkbox, TextField } from "@mui/material";

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
      <TextField
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      id="outlined-basic" label="やることを書く" variant="outlined" />
      <Checkbox
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
       />
      <Button
        type="submit"
       variant="contained">タスクを追加</Button>
    </form>
  );
};

export default AddTodo;