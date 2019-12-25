var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet')


var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');

var app = express();

app.use(helmet())

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/api', apiRouter);

module.exports = app;
