const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Listing, Catagory,Image, User, Booking } = require('../../db/models');

const router = express.Router();
module.exports = router;
