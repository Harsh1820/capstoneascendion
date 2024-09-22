// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const {authMiddleware} = require('../middleware/authMiddleware');  // Ensure user authentication
const Booking = require('../models/Booking');


// Route to book a service
router.post('/book', bookingController.bookService);

// Route to verify OTP for booking completion
router.post('/verify', authMiddleware, bookingController.verifyOTP);

router.get('/all', bookingController.getAllBookings);


router.get('/provider/:providerId', async (req, res) => {
  try {
    const providerId = req.params.providerId;
    const bookings = await Booking.find({ provider: providerId }).populate('service'); // Populate service info
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching provider bookings', error });
  }
});





module.exports = router;
