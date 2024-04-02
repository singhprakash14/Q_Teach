
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = action.payload;
      localStorage.setItem(
        'tasks',
        JSON.stringify([...state.tasks, newTask])
      );
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case DELETE_TASK:
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default reducer;
