const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router
    .post('/book', bookingController.Hallbooking_post);

router
    .get('/getBooking', bookingController.getBooking);


module.exports = router;