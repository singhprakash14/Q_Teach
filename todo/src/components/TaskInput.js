import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Grid } from '@mui/material';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task.trim()));
      setTask('');
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" style={{ width: '100%'}}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={20} sm={10} md={9}>
            <TextField
              fullWidth
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              label="Add a task"
              InputProps={{
              style: {width:'105%'}}}
            />
          </Grid>
        </Grid>

        <Grid container spacing={10} paddingTop={2} alignItems="center" justify="center">
          <Grid item xs={12} sm={3} md={2}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: 'green', color: 'white', borderRadius: '20px', width: '150px',  height: '50px',  }}
             
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default TaskInput;
