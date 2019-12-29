var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var passport = require('passport');
var session = require('express-session');
const redis = require('redis');
const uuidv4 = require('uuid/v4');
const pokemon = require('pokemon');
var flash = require('connect-flash');
var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');
var cors = require('cors')
var app = express();

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()

require('dotenv').config()

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials:true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var sess = {
  secret: process.env.EXPRESS_SESSION_SECRET,
  genid: function(req) {
    const pkmon_end = pokemon.getName(Math.floor(Math.random() * 152)+1);
    const pkmon_start = pokemon.getName(Math.floor(Math.random() * 152)+1);
    return  `${pkmon_start}_${uuidv4()}_${pkmon_end}` // use UUIDv4s for session IDs and pokemon names for debugging purposes
  },
  name:'SID',
  store: new RedisStore({ client: redisClient }),
  saveUninitialized:false,
  resave: false,
}

app.use(helmet())

app.use(bodyParser.urlencoded({
    extended: false
  }));
  
app.use(cookieParser());

app.use((req,res,next)=>{
  console.log('Testing middleware')
  const cookies = req.cookies
  console.log(cookies, 'monster');
  next()
})

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
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(function(req, res, next) {
  if (!req.session) {
    return next(new Error('oh no')) // handle error
  }
  next() // otherwise continue
})
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cors(corsOptions))

app.use('/auth', authRouter);
app.use('/api', apiRouter);

module.exports = app;

// Sessions
// In a typical web application, the credentials used to authenticate a user will
// only be transmitted during the login request. If authentication succeeds, a 
// session will be established and maintained via a cookie set in the user's browser.