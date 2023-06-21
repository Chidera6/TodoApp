import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, createTask, deleteTask, updateTask } from '../../store/task';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user.user);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreateTask = () => {
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      userId: user.id,
    };
    dispatch(createTask(newTask));
    setNewTaskTitle('');
    setNewTaskDescription('');
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

  if (!user) {
    // Redirect or handle the case when user is not logged in
    return <div>Please log in to view tasks.</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
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
