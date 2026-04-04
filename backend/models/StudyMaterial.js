// models/StudyMaterial.js
const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  title: String,
  type: String, // video, article, pdf
  content_url: String,
  duration: Number, // seconds
  difficulty: String,
  tags: [String],
  order: Number // sequence in course
});

module.exports = mongoose.model("StudyMaterial", studyMaterialSchema);