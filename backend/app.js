var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet')
var passport = require('passport')
var session = require('express-session')
const redis = require('redis')
var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');

var app = express();

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()

require('dotenv').config()

app.use(helmet())

app.use(bodyParser.urlencoded({
    extended: true
  }));

  var sess = {
    secret: process.env.EXPRESS_SESSION_SECRET,
    genid: function(req) {
        return genuuid() // use UUIDs for session IDs
      },
    name:'ephemeral.cookies.of.an.unknown.soul',
    cookie: {},
    store: new RedisStore({ client: redisClient }),
    saveUninitialized:false,
    resave: false,
  }

  redisClient.on('error', console.error)

  //In production, use secure cookies and proxy settings
  //otherwise not in development mode (for debugging).
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    if (!req.session) {
      return next(new Error('oh no')) // handle error
    }
    next() // otherwise continue
  })

app.use('/auth', authRouter);
app.use('/api', apiRouter);

module.exports = app;

// Sessions
// In a typical web application, the credentials used to authenticate a user will
// only be transmitted during the login request. If authentication succeeds, a 
// session will be established and maintained via a cookie set in the user's browser.