const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validateUserAddress = require('../middleware/userMiddleware');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, maxLength: 16 },
  email: { type: String, required: true, unique: true, maxLength: 255 },
  password: { type: String, required: true, maxLength: 32 },
  isAdmin: { type: Boolean, required: true, default: false },
  profile: {
    fullName: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 16 },
    address: [{
      label: { type: String, maxLength: 32 },
      fullAddress: { type: String, maxLength: 255 },
      note: { type: String, maxLength: 32 },
      isMain: { type: Boolean, default: false },
      tag: { type: String, enum: ['Office', 'House'] }
    }]
  },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  photo: { type: String },
  adminData: {
    permissions: [String],
    lastLogin: Date
  }
}, { timestamps: true });

// Menggunakan middleware validasi dari userValidation.js
userSchema.pre('save', validateUserAddress);

module.exports = mongoose.model('User', userSchema);
