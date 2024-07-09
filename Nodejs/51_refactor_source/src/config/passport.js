require('dotenv').config();
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const User = require('../models/user')

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'displayName', 'emails', 'photos']
}, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({ facebookId: profile.id });
      if (!user) {
        await User.create({
          facebookId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          profilePicture: profile.photos[0].value
        })
      }

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
}));
  
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;