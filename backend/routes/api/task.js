const express = require('express')
const router = express.Router();
const { Task } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
  
router.post('/create', requireAuth, async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id;
  
    try 
    {
    const task = await Task.create({title,description,completed: false,userId,
        });
        res.json(task);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
  
  
 
  router.delete('/:taskId', requireAuth, async (req, res) => {
    const { taskId } = req.params;
    const userId = req.user.id;
  
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


  
  router.put('/:taskId', requireAuth, async (req, res) => {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;
    const userId = req.user.id;
  
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
  
    
      task.title = title || task.title;
      task.description = description || task.description;
      task.completed = completed || task.completed;
  
      await task.save();
  
      res.json({ message: 'Task updated successfully' });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
 
  router.get('/:taskId', requireAuth, async (req, res) => {
    const { taskId } = req.params;
    const userId = req.user.id;
  
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
  
module.exports = router;