var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var _ = require('lodash');
var passportConfig = require('../config/passport')(passport);

router.post('/test', function(req, res, next) {
    console.log(req.body);
    console.log(req.user, 'user data added by passport');
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
// all can get user info session info from req.user set by passport
{successRedirect: '/auth/test', 
failureRedirect: '/api/test', 
failureFlash: true ,  
successFlash: 'Welcome!'}));

module.exports = router;