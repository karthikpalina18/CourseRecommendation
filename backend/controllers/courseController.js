// // controllers/courseController.js
// const Course = require("../models/Course");

// // CREATE COURSE
// // exports.createCourse = async (req, res) => {
// //   console.log("Body received:", req.body); 
// //   try {
// //     const course = new Course(req.body);
// //     await course.save();
// //     res.status(201).json(course);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };
// // In studyMaterialController.js — temporarily
// exports.createMaterial = async (req, res) => {
//   try {
//     console.log("REQ BODY:", JSON.stringify(req.body, null, 2));
//     const material = new StudyMaterial(req.body);
//     await material.save();
//     res.status(201).json(material);
//   } catch (err) {
//     console.error("ERROR:", err.message);
//     res.status(500).json({ error: err.message, details: err.errors });
//   }
// };

// // GET ALL COURSES
// exports.getCourses = async (req, res) => {
//   try {
//     const { category, difficulty, search } = req.query;
//     const filter = {};
//     if (category)   filter.category   = category;
//     if (difficulty) filter.difficulty = difficulty;
//     if (search)     filter.title      = { $regex: search, $options: "i" };

//     const courses = await Course.find(filter).sort({ createdAt: -1 });
//     res.json(courses);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // GET SINGLE COURSE
// exports.getCourseById = async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // UPDATE COURSE
// exports.updateCourse = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // DELETE COURSE
// exports.deleteCourse = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndDelete(req.params.id);
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     res.json({ message: "Course deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};