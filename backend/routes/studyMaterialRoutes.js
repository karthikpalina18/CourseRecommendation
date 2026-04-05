// // routes/studyMaterialRoutes.js
// const express = require("express");
// const router = express.Router();
// const {
//   createMaterial,
//   getMaterialsByCourse,
//   getMaterialById,
//   updateMaterial,
//   deleteMaterial,
// } = require("../controllers/studyMaterialController");

// // Add study material
// router.post("/", createMaterial);

// // Get all materials for a course (sorted by order)
// router.get("/:courseId", getMaterialsByCourse);

// // Single material
// router.get("/single/:id", getMaterialById);

// // Update material
// router.put("/:id", updateMaterial);

// // Delete material
// router.delete("/:id", deleteMaterial);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createMaterial, getMaterialsByCourse, getMaterialById, updateMaterial, deleteMaterial,
} = require("../controllers/studyMaterialController");

router.post("/",          createMaterial);
router.get("/:courseId",  getMaterialsByCourse);
router.get("/single/:id", getMaterialById);
router.put("/:id",        updateMaterial);
router.delete("/:id",     deleteMaterial);

module.exports = router;