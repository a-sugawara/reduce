const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing, Catagory,Image, User, Booking, Review } = require('../../db/models');

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
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Please enter a detailed description'),
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
    asyncHandler(async (req, res,next) => {
      const {
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price,
        description
    } = req.body;
      const listing = await Listing.create({
          userId,
          address,
          city,
          state,
          country,
          catagoryId,
          name,
          price,
          description
      });
      if (!listing) {
        const err = new Error('Posting failed');
        err.status = 401;
        err.title = 'Posting failed';
        err.errors = ['The provided information was invalid.'];
        return next(err);
      }
      return res.json({
        listing
      });
    }),
);

router.get('/',asyncHandler(async(req,res)=>{
  const listing= await Listing.findAll({
    include:[{model:Image},{model:User},{model:Booking},{model:Review}]
  })
  res.json({listing})

}))

router.get('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const listings= await Listing.findByPk(pk,{
    include:[{model:Image},{model:User},{model:Booking},{model:Review}]
  })
  res.json({listings})

}))

router.delete('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const listing= await Listing.findByPk(pk)
  await listing.destroy()
  res.json({message:"deleted"})

}))

router.put(
  '/:id',
  validateListing,
  asyncHandler(async (req, res,next) => {
    const id = req.params.id
    const {
      userId,
      address,
      city,
      state,
      country,
      catagoryId,
      name,
      price,
      description
    } = req.body;
    const listing = await Listing.findByPk(id)
    const updated = await listing.update({
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price,
        description
    });
    if (!listing) {
      const err = new Error('Posting failed');
      err.status = 401;
      err.title = 'Posting failed';
      err.errors = ['The provided information was invalid.'];
      return next(err);
    }
    return res.json({
      updated
    });
  }),
);







module.exports = router;
