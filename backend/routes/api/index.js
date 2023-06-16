const router = require('express').Router();
const taskRouter = require('./task');
const userRouter = require('./user');

router.use('/tasks', taskRouter);
router.use('/users', userRouter);
router.get('/test', function(req, res) {
  res.send("hello world" );
});


module.exports = router;
