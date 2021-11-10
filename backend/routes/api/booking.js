const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing, Catagory, Image, User, Booking } = require('../../db/models');
const router = express.Router();


const validateBookings = [
    check('rentDate')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid address.'),
    handleValidationErrors,
];


router.post(
    '/',
    // validateBookings,
    asyncHandler(async (req, res,next) => {
      const {
        userId,
        listingId,
        startTime,
        endTime
      } = req.body;
      console.log(req.body,"XXXXXXXXXXXX")
      const booking = await Booking.create({
        userId,
        listingId,
        startTime,
        endTime
      });
      if (!booking) {
        const err = new Error('Posting failed');
        err.status = 401;
        err.title = 'Posting failed';
        err.errors = ['The provided information was invalid.'];
        return next(err);
      }
      return res.json({
        booking
      });
    }),
);

router.get('/',asyncHandler(async(req,res)=>{
  const bookings= await Booking.findAll({
    include:[{model:User},{model:Listing}]
  })
  res.json({bookings})

}))

router.get('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const booking= await Booking.findByPk(pk,{
    include:[{model:User},{model:Listing}]
  })
  res.json({booking})
}))

router.delete('/:pk',asyncHandler(async(req,res)=>{
  const {pk} = req.params
  const booking= await Booking.findByPk(pk)
  await booking.destroy()
  res.json({message:"deleted"})

}))

router.put(
  '/:id',
  validateBookings,
  asyncHandler(async (req, res,next) => {
    const id = req.params.id
    const {
      userId,
      listingsId,
      startTime,
      endTime,
    } = req.body;
    const listing = await Listing.findByPk(id)
    const updated = await listing.update({
      userId,
      listingsId,
      startTime,
      endTime,
    });
    if (!updated) {
      const err = new Error('Posting failed');
      err.status = 401;
      err.title = 'Posting failed';
      err.errors = ['The provided information was invalid.'];
      return next(err);
    }
    return res.json(
      updated
    );
  }),
);







module.exports = router;
