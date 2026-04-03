// models/StudyMaterial.js
const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  title: String,
  type: String, // video, article, pdf
  content_url: String,
  duration: Number
});

module.exports = mongoose.model("StudyMaterial", studyMaterialSchema);