// models/Company.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  subject: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }
}, { timestamps: true });

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  foundedOn: { type: Date, required: true },
  city: { type: String, required: true },
  reviews: [reviewSchema]
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
