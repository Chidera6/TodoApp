const router = require('express').Router();
const taskRouter = require('./task');
const userRouter = require('./user');
router.use('/api/tasks', taskRouter);
router.use('/api/users', userRouter);

router.get('/', async (res) => {
    res.send("hello world");
  });

module.exports = router;
