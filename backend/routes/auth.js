var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var _ = require('lodash');
var passportConfig = require('../config/passport')(passport);

router.get('/success', function(req, res, next) {
    console.log(req.body);
    console.log(req.user, 'user data added by passport');
    res.send('Test route (auth) GET.');
});

router.post('/signup', function(req,res,next){
passport.authenticate('local-signup', 
// Gates redirect to protected resource
// validation that the user is who they say they are.
// all can get user info session info from req.user set by passport
{successRedirect: '/auth/success', 
failureRedirect: '/api/test', 
failureFlash: true ,  
successFlash: 'Welcome!',
session: true}, 
function(err, user, info) {
  if (err) { return next(err); }
  if (!user) { return res.redirect('/signup'); }
  req.logIn(user, function(err) {
    if (err) { return next(err); }
    console.log(user)
    console.log(req,'req')
    return res.redirect('/');
  });
})(req, res, next)
});

module.exports = router;