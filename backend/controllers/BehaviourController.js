const Behavior = require("../models/Behaviour");

exports.recommendCourses = async (req, res) => {
  const userId = req.user.id;

  const behaviors = await Behavior.find({ userId });

  // SIMPLE LOGIC (you can upgrade for research)
  const courses = behaviors.map(b => b.course);

  const recommendations = [...new Set(courses)];

  res.json(recommendations);
};