const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { recommendCourses } = require("../controllers/BehaviourController");

router.get("/", auth, recommendCourses);

module.exports = router;