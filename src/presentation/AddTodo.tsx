import { useState } from "react";
import { addTodo } from "../application/todo";
import { Todo } from "../domain/Todo";
import { Checkbox, Fab, TextField } from "@mui/material";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Omit<Todo, "id"> = {
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
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="やることを書く"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Grid>
      </Grid>
      <Box position="fixed" right={20} bottom={20}>
        <Fab color="primary" aria-label="add" type="submit">
          <AddIcon />
        </Fab>
      </Box>
    </form>
  );
};

export default AddTodo;
