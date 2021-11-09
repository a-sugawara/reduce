const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingRouter = require('./listing.js');
const imageRouter = require('./image.js');
const reviewRouter = require('./review.js');
const bookingRouter = require('./booking.js');


router.use('/session', sessionRouter);
router.use('/image', imageRouter)
router.use('/review', reviewRouter)
router.use('/booking', bookingRouter)
router.use('/users', usersRouter);
router.use('/listings', listingRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;
