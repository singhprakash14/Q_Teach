import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>To-Do List</h3>
      <TaskInput />
      <TaskList />
    </>
  );
}

export default App;
