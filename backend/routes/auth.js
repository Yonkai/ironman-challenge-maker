var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var _ = require('lodash');
var passportConfig = require('../config/passport')(passport);

router.post('/test', function(req, res, next) {
    console.log(req.body);
    res.send('Test route (auth) POST.');
});


router.get('/test', function(req, res, next) {
  console.log(req.body);
  res.send('Test route (auth) GET.');
});

router.post('/signup',
passport.authenticate('local-signup', 
// Gates redirect to protected resource
// validation that the user is who they say they are.
{successRedirect: '/auth/test', 
failureRedirect: '/api/test', 
failureFlash: true ,  
successFlash: 'Welcome!'}),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log('success')
});

module.exports = router;