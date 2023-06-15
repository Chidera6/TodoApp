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
  

module.exports = router;