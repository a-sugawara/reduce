const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing, Catagory, Image, User, Booking } = require('../../db/models');
const router = express.Router();


const validateImage = [
    check('url')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid url.'),
    handleValidationErrors,
];


router.post(
    '/',
    validateImage,
    asyncHandler(async (req, res,next) => {
      const {
        listingId,
        url
    } = req.body;
      const image = await Image.create({
        listingId,
        url
      });
      if (!image) {
        const err = new Error('Posting failed');
        err.status = 401;
        err.title = 'Posting failed';
        err.errors = ['The provided information was invalid.'];
        return next(err);
      }
      return res.json({
        image
      });
    }),
);

router.get('/',asyncHandler(async(req,res)=>{
  const images= await Image.findAll({
    include:[{model:Listing}]
  })
  res.json({images})

}))

router.get('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const image= await Image.findByPk(pk,{
    include:[{model:User},{model:Listing}]
  })
  res.json({image})
}))

router.delete('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const image= await Image.findByPk(pk)
  await image.destroy()
  res.json({message:"deleted"})

}))









module.exports = router;
