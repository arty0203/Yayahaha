const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  model: String,
  weight: Number,
  color: String
});

module.exports = mongoose.model("car", carSchema);
