const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

// GOOGLE
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {

  let user = await User.findOne({ email: profile.emails[0].value });

  if (!user) {
    user = await User.create({
      name: profile.displayName,
      email: profile.emails[0].value,
      password: "oauth" // dummy
    });
  }

  done(null, user);
}));

// GITHUB
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/api/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {

  let user = await User.findOne({ email: profile.username });

  if (!user) {
    user = await User.create({
      name: profile.username,
      email: profile.username + "@github.com",
      password: "oauth"
    });
  }

  done(null, user);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, id));