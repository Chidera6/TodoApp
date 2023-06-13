const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome  to todo Application'))
//router.post('/register-users', controllers.createUser)
module.exports = router;