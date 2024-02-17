import { useEffect, useState, memo } from "react";
import { getTodos, deleteTodo } from "../../application/todo";
import { Todo } from "../../domain/Todo";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";


const primary = red[500];

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
  }, []); // 第２引数が空の配列の場合、初回レンダリング時のみ副作用が呼ばれる

  const handleDelete = async (todo: Todo) => {
    await deleteTodo(todo);
    // !== で一致しないものだけを抽出して新しい配列を作成
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      <SignOutButton />
      <Button variant="outlined" size="large" component={Link} to="/add" endIcon={<AddIcon />}>
        タスクを追加
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} />
            <IconButton
              sx={{ color: primary }}
              aria-label="delete"
              size="large"
              onClick={() => handleDelete(todo)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
});

export default GetTodo;
