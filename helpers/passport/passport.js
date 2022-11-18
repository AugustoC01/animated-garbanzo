const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../daos/models/userModel');
const { createHash, isValidPass } = require('../bcrypt/brycpt');
// const upload = require('../upload');

passport.use(
  'login',
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      await User.findOne({ email: email }, (err, user) => {
        if (err) {
          console.log('Error en login: ', err);
          return done(err);
        }
        if (!user) {
          console.log('User not found with username ', username);
          return done(null, false);
        }
        if (!isValidPass(user, password)) {
          console.log('Invalid pass');
          return done(null, false);
        }
        console.log('loged');
        return done(null, user);
      }).clone();
    }
  )
);

passport.use(
  'signup',
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      await User.findOne({ email: email }, async (err, user) => {
        if (err) {
          console.log('Error en signup: ', err);
          return done(err);
        }
        if (user) {
          console.log('User already exists');
          return done(null, user);
        }
        const newUser = {
          email: email,
          password: createHash(password),
          name: req.body.name,
          address: req.body.address,
          age: req.body.age,
          phone: req.body.phone,
          // avatar: req.file.filename,
        };
        User.create(newUser, (err, user) => {
          if (err) {
            console.log('Error saving user: ', err);
            return done(err);
          }
          console.log('User registration succesful');
          return done(null, user);
        });
      }).clone();
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});

module.exports = passport;
