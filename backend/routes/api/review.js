const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing, Catagory,Image, User, Booking, Review } = require('../../db/models');
const router = express.Router();


const validateReview = [
    check('review')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid url.'),
    check('rating')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid url.'),
    handleValidationErrors,
];


router.post(
    '/',
    validateReview,
    asyncHandler(async (req, res,next) => {
      const {
        listingId,
        userId,
        review,
        rating
    } = req.body;
      const newReview = await Review.create({
        listingId,
        userId,
        review,
        rating
      });
      if (!newReview) {
        const err = new Error('Posting failed');
        err.status = 401;
        err.title = 'Posting failed';
        err.errors = ['The provided information was invalid.'];
        return next(err);
      }
      return res.json({
        newReview
      });
    }),
);

router.get('/',asyncHandler(async(req,res)=>{
  const reviews= await Review.findAll({
    include:[{model:User},{model:Listing}]
  })
  res.json({reviews})

}))

router.get('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const review= await Review.findByPk(pk,{
    include:[{model:User},{model:Listing}]
  })
  res.json({review})
}))

router.delete('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const review= await Review.findByPk(pk)
  await review.destroy()
  res.json({message:"deleted"})

}))


router.put(
    '/:pk',
    validateReview,
    asyncHandler(async (req, res,next) => {
        const {pk} = req.params
        const {
            listingId,
            userId,
            review,
            rating
          } = req.body;
          const oldReview = await Review.findByPk(pk)
          const updated = await oldReview.update({
            listingId,
            userId,
            review,
            rating
          });
      if (!updated) {
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
