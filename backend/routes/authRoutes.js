const router = require("express").Router();
const passport = require("passport");
const { signup, login } = require("../controllers/AuthController");
const jwt = require("jsonwebtoken");

// ── Local auth ──────────────────────────────────────────────
router.post("/signup", signup);
router.post("/login", login);

// ── Google OAuth ─────────────────────────────────────────────
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "http://localhost:5173/login?error=oauth_failed" }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    const name = encodeURIComponent(req.user.name || req.user.email);
    res.redirect(`http://localhost:5173/oauth-callback?token=${token}&name=${name}`);
  }
);

// ── GitHub OAuth ─────────────────────────────────────────────
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { session: false, failureRedirect: "http://localhost:5173/login?error=oauth_failed" }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    const name = encodeURIComponent(req.user.name || req.user.login || req.user.email);
    res.redirect(`http://localhost:5173/oauth-callback?token=${token}&name=${name}`);
  }
);

module.exports = router;