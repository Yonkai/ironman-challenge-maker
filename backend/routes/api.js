var express = require('express');
var router = express.Router();
var passport = require('passport')

router.post('/test', function(req, res, next) {
    res.send('Test route (api) POST.');
});

module.exports = router;