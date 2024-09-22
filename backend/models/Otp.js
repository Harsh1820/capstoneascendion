const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    fileId: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true }  // Store file reference
});

module.exports = mongoose.model('Otp', otpSchema);
