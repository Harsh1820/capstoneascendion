// models/Rating.js
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: false },
  entityType: { type: String, enum: ['Service', 'Provider'], required: true },
  entityId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Rating', ratingSchema);
