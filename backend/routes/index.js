const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
router.use('/api', apiRouter);

router.get('/api/csrf/restore', (req, res) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  return res.json({});
});

module.exports = router;
