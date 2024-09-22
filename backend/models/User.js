// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['consumer', 'provider'],
//     required: true,
//   },
//   services: {
//     type: [String],  // Only used for providers
//   },
// });

// module.exports = mongoose.model('User', UserSchema);

// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['consumer', 'provider', 'admin'], default: 'consumer' },
  services: [String],  // for providers
  isAdmin: { type: Boolean, default: false },
    
});

module.exports = mongoose.model('User', userSchema);
