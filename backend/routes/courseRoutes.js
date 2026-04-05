// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.post("/",        createCourse);
router.get("/",         getCourses);
router.get("/:id",      getCourseById);
router.put("/:id",      updateCourse);
router.delete("/:id",   deleteCourse);

module.exports = router;


// ─────────────────────────────────────────────────────────────────────────────
// routes/studyMaterialRoutes.js
// ─────────────────────────────────────────────────────────────────────────────
// const express = require("express");
// const router = express.Router();
// const {
//   createMaterial,
//   getMaterialsByCourse,
//   getMaterialById,
//   updateMaterial,
//   deleteMaterial,
// } = require("../controllers/studyMaterialController");
//
// router.post("/",                createMaterial);
// router.get("/:courseId",        getMaterialsByCourse);
// router.get("/single/:id",       getMaterialById);
// router.put("/:id",              updateMaterial);
// router.delete("/:id",           deleteMaterial);
//
// module.exports = router;