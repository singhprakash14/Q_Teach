import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Grid } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              className={task.completed ? 'completed' : ''}
              disablePadding
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <ListItemText primary={task.text} />
            
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(task.id)}
                >
                 X
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default TaskList;
