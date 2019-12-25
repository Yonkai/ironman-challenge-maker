var express = require('express');
var router = express.Router();
var passport = require('passport')

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.send('Test route.');
});

router.get('/api/users/me',
  //Don't establish an unneeded session on API accesses
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
});

module.exports = router;