// routes/otpRoutes.js
const express = require('express');
const otpController = require('../controllers/otpController');
const router = express.Router();

// Route to send OTP
router.post('/send-otp', otpController.sendOtp);

// Route to verify OTP
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;
