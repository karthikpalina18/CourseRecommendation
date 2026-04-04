const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const passport = require("passport");
require("./config/passport");

app.use(require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const recommendRoutes = require("./routes/recommendRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/study-materials", require("./routes/studyMaterialRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));


app.get("/", (req, res) => {
  res.send("API running...");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));