var express = require('express');
const router = express.Router();
const { User } = require('../../db/models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../../config');

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    config.jwtConfig.secret
  );
};

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ username, email, password: hashedPassword });
    const userWithoutPassword = {...user.dataValues}
    delete userWithoutPassword.password;
    const token = generateToken(user); 
    res.json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const passwordValid = await bcrypt.compare(
      req.body.password.toString(),
      user.password.toString()
    );
    if (!passwordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const userWithoutPassword = { ...user.dataValues };
    delete userWithoutPassword.password;
    const token = generateToken(user);
    res.status(200).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


module.exports = router;
