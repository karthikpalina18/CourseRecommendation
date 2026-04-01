const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne(req.body);

  if (!user) return res.status(400).json({ msg: "User not found" });

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token });
};