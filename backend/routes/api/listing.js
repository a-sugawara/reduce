const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing, Catagory } = require('../../db/models');

const router = express.Router();

const validateListing = [
    check('address')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid address.'),
    check('city')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid city.'),
    check('state')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid state.'),
    check('country')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid country.'),
    check('catagoryId')
      .exists({ checkFalsy: true })
      .withMessage('Please choose a catagory.'),
    check('name')
      .exists({ checkFalsy: true })
      .isLength({ min: 4, max:255 })
      .withMessage('Please provide a name with at least 4 characters.'),
    check('price')
      .exists({ checkFalsy: true })
      .isNumeric()
      .withMessage('Please enter a valid price'),
    handleValidationErrors,
];
router.get(
    '/catagories',
    asyncHandler(async (req,res) => {
        const catagories = await Catagory.findAll()
        res.json(catagories)
}))


router.post(
    '/',
    validateListing,
    asyncHandler(async (req, res) => {
      const {
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price
    } = req.body;
      const listing = await Listing.create({
          userId,
          address,
          city,
          state,
          country,
          catagoryId,
          name,
          price
      });
      if (!listing) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }

      return res.json({
        listing
      });
    }),
);

router.get('/',asyncHandler(async(req,res)=>{
  const listings= await Listing.findAll()
  res.json({listings})

}))








module.exports = router;
