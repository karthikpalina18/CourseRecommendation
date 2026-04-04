// controllers/studyMaterialController.js
const StudyMaterial = require("../models/StudyMaterial");

// CREATE
exports.createMaterial = async (req, res) => {
  try {
    const material = new StudyMaterial(req.body);
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (by course)
exports.getMaterialsByCourse = async (req, res) => {
  try {
    const materials = await StudyMaterial.find({
      course_id: req.params.courseId
    }).sort({ order: 1 });

    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};