const mongoose = require("mongoose");

const behaviorSchema = new mongoose.Schema({
  userId: String,
  action: String,
  course: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Behaviour", behaviorSchema);