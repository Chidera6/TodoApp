const router = require('express').Router();
const taskRouter = require('./task');
const userRouter = require('./user');
router.use('/tasks', taskRouter);
router.use('/users', userRouter);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

router.get('/csrf/restore', (req, res) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  return res.json({});
});
module.exports = router;
