// routes/studyMaterialRoutes.js
const express = require("express");
const router = express.Router();
const {
  createMaterial,
  getMaterialsByCourse
} = require("../controllers/studyMaterialController");

// Add study material
router.post("/", createMaterial);

// Get materials by course
router.get("/:courseId", getMaterialsByCourse);

module.exports = router;