const router = require('express').Router();
const sessionRouter = require('./task.js');
const usersRouter = require('./users.js');

router.use('/tasks', taskRouter);
router.use('/users', usersRouter);

module.exports = router;