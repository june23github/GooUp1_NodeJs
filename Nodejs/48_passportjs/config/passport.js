const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    }).catch((err) => {
        done(err, null)
    })
});

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email,password,done) => {
      User.findOne({email}).then((user) => {
          bcrypt.compare(password, user.password, (err,result) => {
              if (err) { return done(err); }
              if(!result) {
                  return done(null, false, { message: 'Incorrect email and password' });
              }
              return done(null, user);
          })
      }).catch((err) => {
          return done(err);
      })
}
));

module.exports = passport;