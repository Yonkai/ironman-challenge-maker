var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var passportConfig = require('../config/passport')(passport);

router.post('/checkforsessionidtoken', function(req, res, next) {
    console.log(req.body);
    console.log('user data added by passport', req.user);
    // console.log('full request', req);
    res.send('Test route (auth) POST.');
});

router.post('/signup', function(req,res,next){
  // Passport strategy is renamed here, see the passport.js file in config/passport.js
passport.authenticate('local-signup', 
// Gates redirect to protected resource
// validation that the user is who they say they are.
// all can get user info session info from req.user set by passport
{
  session: true
}, 
function(err, user, info) {
  if (err) { return next(err); }
  if (!user) { return res.redirect('/signup'); }
  req.logIn(user, function(err) {
    if (err) { return next(err); }
    console.log(user)
    // console.log(req,'req')
    return res.redirect('/');
  });
})(req, res, next)
});

router.post('/login', function(req,res,next){
  // Passport strategy is renamed here, see the passport.js file in config/passport.js
passport.authenticate('local-login', 
// Gates redirect to protected resource
// validation that the user is who they say they are.
// all can get user info session info from req.user set by passport
function(err, user, info) {
  if (err) { return next(err); 
  }
  if (!user) { 
    // This callback is called when the user submits wrong credentials (Failed login.)...
    console.log('Unsuccessful login'); 
    // Handle failed login here.
    return res.send('FAILURE.');
  }
  req.logIn(user, function(err) {
    if (err) { 
      return next(err); 
    }
    console.log('Successful login')
    return res.send('SUCCESS.');
  });
})(req, res, next);
});

module.exports = router;