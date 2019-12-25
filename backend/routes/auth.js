var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var _ = require('lodash');

passport.use(new LocalStrategy(
    function(username, password, done) {
      //"verify callback", database agnostic (use mysql though)
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.send('Test route.');
});

router.post('/login',
passport.authenticate('local', 
{successRedirect: '/', 
failureRedirect: '/login', 
failureFlash: true ,  
successFlash: 'Welcome!'}),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  // gated login?
  res.redirect('/users/' + req.user.username);
});

module.exports = router;