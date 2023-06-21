import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, createTask, deleteTask, updateTask } from '../../store/task';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  
  console.log(tasks);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);

  const handleCreateTask = () => {
    const newTask = {
      title: useState(''),
      description: useState(''),
      userId: useState('')
    };
    dispatch(createTask(newTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdateTask = (taskId) => {
    const updatedTask = {
      taskId,
      title: 'Updated Task',
      description: 'Description of the updated task',
      completed: true,
    };
    dispatch(updateTask(updatedTask));
  };

  return (
    <div>
      <h1>Task List</h1>
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.completed ? 'Completed' : 'Incomplete'}</div>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleUpdateTask(task.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
