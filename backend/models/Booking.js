const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  paymentInfo: { type: Object, required: true },
  status: { type: String, default: 'Pending' },
  otp: String,  // Store OTP here
  isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Booking', bookingSchema);
