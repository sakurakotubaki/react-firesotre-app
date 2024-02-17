import { useState } from "react";
import { addTodo } from "../application/todo";
import { Todo } from "../domain/Todo";
import { Checkbox, Fab, TextField, FormControlLabel, FormHelperText } from "@mui/material";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !isChecked) {
      setError(true);
      return;
    }

    const newTodo: Omit<Todo, "id"> = {
      title: title,
      completed: isChecked,
    };

    await addTodo(newTodo);

    // フォームをリセット
    setTitle("");
    setIsChecked(false);
    setError(false);
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
            required
            error={!title && error}
            helperText={!title && error ? "やることを書いてください!" : ""}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            }
            label="Check me"
          />
          {!isChecked && error && <FormHelperText error>checkboxにチェックがされていません!</FormHelperText>}
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