
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const upload = require('../config/multer');
const Booking = require('../models/Booking'); // Import Booking model

// Route for file upload and OTP sending
router.post('/upload-and-send-otp', upload.single('file'), fileController.uploadFileAndSendOtp);

// Route for OTP verification and file retrieval
router.post('/verify-otp', fileController.verifyOtpAndGetFile);

router.get('/files/:id', fileController.getFileAndPhoneNumber);

router.post('/update-status', async (req, res) => {
  const { bookingId, status } = req.body;
  try {
    await Booking.updateOne({ _id: bookingId }, { status, isCompleted: status === 'Completed' });
    res.status(200).json({ message: 'Booking status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status' });
  }
});



module.exports = router;
