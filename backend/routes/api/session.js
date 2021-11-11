const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Listing, Catagory,Image, User, Booking, Review } = require('../../db/models');

const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,
];

router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const check = await User.login({ credential, password });

    console.log(check)
    if (!check) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }
    const user = await User.scope('currentUser').findByPk(check.id,{
      include:[{model:Listing},{model:Booking},{model:Review},]
    })

    await setTokenCookie(res, user);
    // console.log(user)
    return res.json({
      user,
    });
  })
);

router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
);

router.get(
    '/',
    restoreUser,
    (req, res) => {
      const { user } = req;
      const authUser = User.findByPk()
      if (user) {
        return res.json({
          user
        });
      } else return res.json({});
    }
);

module.exports = router;
