// ✅ models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String]
});

module.exports = mongoose.model('Product', productSchema);
