const express = require('express');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

router.post('/login',
  async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  }
);
router.delete(
  '/logout',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);


router.post('/signup',
  async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ username,email, password });

    await setTokenCookie(res, user);
    return res.json({user});
  }
);
module.exports = router;