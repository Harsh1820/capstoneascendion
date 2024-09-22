const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  providers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  
});

module.exports = mongoose.model('Service', serviceSchema);
