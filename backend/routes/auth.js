var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/login',
passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true }),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  // gated login?
  res.redirect('/users/' + req.user.username);
});