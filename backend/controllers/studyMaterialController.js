// // controllers/studyMaterialController.js
// const StudyMaterial = require("../models/StudyMaterial");

// // CREATE
// exports.createMaterial = async (req, res) => {
//   try {
//     const material = new StudyMaterial(req.body);
//     await material.save();
//     res.status(201).json(material);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // READ (by course)
// exports.getMaterialsByCourse = async (req, res) => {
//   try {
//     const materials = await StudyMaterial.find({
//       course_id: req.params.courseId,
//     }).sort({ order: 1, createdAt: 1 });
//     res.json(materials);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // GET SINGLE
// exports.getMaterialById = async (req, res) => {
//   try {
//     const material = await StudyMaterial.findById(req.params.id);
//     if (!material) return res.status(404).json({ error: "Material not found" });
//     res.json(material);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // UPDATE
// exports.updateMaterial = async (req, res) => {
//   try {
//     const material = await StudyMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!material) return res.status(404).json({ error: "Material not found" });
//     res.json(material);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // DELETE
// exports.deleteMaterial = async (req, res) => {
//   try {
//     const material = await StudyMaterial.findByIdAndDelete(req.params.id);
//     if (!material) return res.status(404).json({ error: "Material not found" });
//     res.json({ message: "Material deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const StudyMaterial = require("../models/StudyMaterial");

exports.createMaterial = async (req, res) => {
  try {
     console.log("BODY:", JSON.stringify(req.body, null, 2));
    const { course_id, title, type, content_url, duration, difficulty, tags, order } = req.body;
    const material = new StudyMaterial({
      course_id,
      title,
      type,
      content_url,
      duration: duration ? parseInt(duration, 10) : undefined,
      difficulty,
      tags,
      order: order ? parseInt(order, 10) : undefined,
    });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialsByCourse = async (req, res) => {
  try {
    const materials = await StudyMaterial.find({ course_id: req.params.courseId })
      .sort({ order: 1, createdAt: 1 });
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ error: "Material not found" });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!material) return res.status(404).json({ error: "Material not found" });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ error: "Material not found" });
    res.json({ message: "Material deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};