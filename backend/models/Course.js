// models/Course.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  category: String,
  difficulty: String,
  tags: [String],
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Course", courseSchema);