const express = require('express')
const router = express.Router();
const { Task } = require('../../db/models');
const { authenticate } = require('./authenticate');


router.post('/create', authenticate, async (req, res) => {
    const { title, description,completed } = req.body;
    const userId = req.userId;
    try {
    const task = await Task.create({title,description,completed,userId,
        });
        res.json(task);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
  router.delete('/:taskId',authenticate, async (req, res) => {
    const { taskId } = req.params;
    const userId = req.userId;
    try {
      const task = await Task.findOne({
        where: {
          id: taskId,
          userId: userId,
        },
      });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      } 
      await task.destroy();
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });


  
  router.patch('/:taskId', authenticate,async (req, res) => {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;
    const userId = req.userId;
    try {
      const task = await Task.findOne({
        where: {
          id: taskId,
          userId: userId,
        },
      });
      if (!task) {
       return res.status(404).json({ error: 'Task not found' });
      }
      task.title = title;
      task.description = description;
      task.completed = completed;
      await task.save();
      res.json(task);
    } catch (error) {
      console.error('Error updating task:', error);
     res.status(500).json({ error: 'Server Error' });
    }
  });
  
 
  router.get('/:taskId', authenticate,async (req, res) => {
    const { taskId } = req.params;
    const userId = req.userId;
    try {
      const task = await Task.findOne({
        where: {
          id: taskId,
          userId: userId,
        },
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      console.error('Error retrieving task:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
router.get('/', authenticate,async (req, res) => {
  const userId = req.userId;
  try {
  const tasks = await Task.findAll({where: { userId: userId, },});
  res.json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;