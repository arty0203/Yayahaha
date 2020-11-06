const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  color: String,
  model: String,
  weight: Number
});

module.exports = mongoose.model("car", CarSchema);
