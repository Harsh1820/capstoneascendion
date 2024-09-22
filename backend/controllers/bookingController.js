// // controllers/bookingController.js
// const Booking = require('../models/Booking');
// const Service = require('../models/Service');
// const crypto = require('crypto'); // For OTP generation

// // Function to generate OTP
// const generateOTP = () => {
//   return crypto.randomBytes(3).toString('hex');  // Example: 6-character OTP
// };

// // Book a service
// exports.bookService = async (req, res) => {
//   const { serviceId, providerId, paymentInfo } = req.body;

//   try {
//     const service = await Service.findById(serviceId);
//     if (!service) {
//       return res.status(404).json({ error: 'Service not found' });
//     }

//     // Generate OTP
//     const otp = generateOTP();

//     // Create a booking
//     const booking = new Booking({
//       user: req.user._id,
//       service: service._id,
//       provider: providerId,
//       paymentInfo,
//       otp
//     });

//     await booking.save();

//     res.status(201).json({
//       booking,
//       message: 'Booking created. OTP will be sent upon service completion.'
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating booking' });
//   }
// };

// // Verify OTP for booking completion
// exports.verifyOTP = async (req, res) => {
//   const { bookingId, otp } = req.body;

//   try {
//     const booking = await Booking.findById(bookingId);
//     if (!booking) {
//       return res.status(404).json({ error: 'Booking not found' });
//     }

//     if (booking.otp === otp) {
//       booking.isCompleted = true;
//       await booking.save();
//       return res.status(200).json({ message: 'Service verified successfully. Booking completed!' });
//     } else {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error verifying OTP' });
//   }
// };

const Booking = require('../models/Booking');
const Service = require('../models/Service');
const crypto = require('crypto'); // For OTP generation
const { body, validationResult } = require('express-validator'); // Import Express Validator

// Function to generate OTP
const generateOTP = () => {
  return crypto.randomBytes(3).toString('hex');  // Example: 6-character OTP
};

// Book a service
exports.bookService = [
  // Validation rules
  body('serviceId').isMongoId().withMessage('Invalid service ID'),
  body('providerId').isMongoId().withMessage('Invalid provider ID'),
  body('paymentInfo').isObject().withMessage('Payment info must be an object'),

  // Controller logic
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { serviceId, providerId, paymentInfo } = req.body;
    try {
      const service = await Service.findById(serviceId);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }

      // Generate OTP
      const otp = generateOTP();
    console.log(otp)
      // Create a booking
      const booking = new Booking({
        // user: req.user._id,
        service: service._id,
        provider: providerId,
        paymentInfo,
        // otp
      });

      await booking.save();

      res.status(201).json({
        booking,
        message: 'Booking created. OTP will be sent upon service completion.'
      });
    } catch (error) {
      res.status(500).json({ error: 'Error creating booking' });
    }
  }
];

// Verify OTP for booking completion
exports.verifyOTP = [
  // Validation rules
  body('bookingId').isMongoId().withMessage('Invalid booking ID'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 characters long'),

  // Controller logic
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bookingId, otp } = req.body;

    try {
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }

      if (booking.otp === otp) {
        booking.isCompleted = true;
        await booking.save();
        return res.status(200).json({ message: 'Service verified successfully. Booking completed!' });
      } else {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error verifying OTP' });
    }
  }
];



// controllers/bookingController.js

// Get all bookings for the logged-in user
// controllers/bookingController.js

// Get all bookings (No authentication required)
exports.getAllBookings = async (req, res) => {
  try {
    // Find all bookings and populate related fields
    const bookings = await Booking.find()
      .populate('service')
      .populate('provider');
    
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving bookings' });
  }
};
