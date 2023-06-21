import { csrfFetch } from './csrf';
const SET_TASK = 'tasks/setTasks';
const ADD_TASK = 'tasks/addTasks';
const REMOVE_TASK = 'tasks/removeTasks';
const UPDATE_TASK = 'tasks/updateTasks';

const setTask = (task) => ({
  type: SET_TASK,
  payload: task,
});


const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});



export const fetchTasks = () => async (dispatch) => {
  const response = await csrfFetch('/api/tasks/');
  const data = await response.json();
  console.log(data);
  dispatch(setTask(data.tasks));
  return response;
};

export const createTask = (task) =>async (dispatch) => {
  const {title,description,userId} = task;
  const response = await csrfFetch('/api/tasks/create', {
    method: 'POST',
    body: JSON.stringify({title,description,userId:userId.id}),
  });
  const data = await response.json();
  dispatch(setTask(data.task));
  return response;
};

export const deleteTask = (taskId) => async (dispatch) => {
  await csrfFetch(`/api/tasks/${taskId}`, {
    method: 'DELETE',
  });
  dispatch(removeTask(taskId));
};

export const getTask = (taskId) => async (dispatch) => {
  const response = await csrfFetch(`/api/tasks/${taskId}`);
  const data = await response.json();
  dispatch(setTask(data.task));
};

export const updateTask = (task) => async (dispatch) => {
  const {title, taskId,description, completed} = task;
  const response = await csrfFetch(`/api/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, description, completed }),
  });
  const data = await response.json();
  dispatch(setTask(data.task));
  return response;
};



const initialState = {tasks: []};

const tasksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_TASK:
      newState = {
        ...state,
        tasks: action.payload,
      };
      return newState;
      
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      return newState;

    case REMOVE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      return newState;

    case UPDATE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
