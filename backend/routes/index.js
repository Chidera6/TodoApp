const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => res.send('Welcome to the todo Application'));

module.exports = router;
