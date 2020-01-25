var mysql = require('mysql');
var _ = require('lodash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
require('dotenv').config()

var connection = mysql.createConnection({
  host     : `${process.env.DB_HOST}`,
  port     :  process.env.DB_PORT,
  user     : `${process.env.DB_USER}`,
  password : `${process.env.DB_PASSWORD}`,
  database : `${process.env.DB_NAME}`,
  charset  : `${process.env.DB_CHARSET}`,
  multipleStatements: process.env.DB_MULTIPLE_STATEMENTS,
  debug    :  true
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//Select the MySQL Database
connection.query('USE ironman');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
  // PASSPORT SESSION SETUP ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
      console.log('called serial',user)
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
    console.log(id,'deserial') 
		connection.query("SELECT * FROM user WHERE id = "+ id,function(err,rows){	
			done(err, rows[0]);
		});
    });
	

 	// =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      console.log(email,'passport email');
      console.log(password,'passport password');
      console.log('begin',req.user,'end');

		// find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    // TODO: switch to ? fill-in format to automatically enable escaping* as explained in the docs.
        connection.query("SELECT * FROM user WHERE email = '"+ email +"'",async function(err,rows){
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
         //return 'email already taken' message'
                return done(null, false, { message: 'Email already in use.' });
            } else {

				// if there is no user with that email, create the user
        var newUserMysql = new Object();

				//lowercase their email
				newUserMysql.email = email.toLowerCase();
                
        // Hash users password with bcrypt
        newUserMysql.bcrypt_hash = await bcrypt.hash(password, 10); 

        newUserMysql.username = req.body.username;
        // TODO: Switch to ? fill in format to automatically enable validation
        // TODO: Add server side validation, client side validation is not enough, mirror 
        // TODO: Add formik Yup rules
        // 1. Set/Store the user in the database.
        // 2. Set/Store the user's email in the database.
        // 3. Set/Store permissions level in the database. Defaults to "Minimum."
        // 4. Set/Store pw bcrypt hash in database.
        var insertQuery = "INSERT INTO user ( email, bcrypt_hash, role, username ) values ('" + email + "','" + newUserMysql.bcrypt_hash + "','" + 'Minimum' +"','"+ newUserMysql.username + "')";
				console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
        console.log(rows, rows[0],'rows post query')
        newUserMysql.id = rows.insertId;
        //----Could set JWT token instead of normal session cookies if wanted.----
        
        //Return the user to the browser
				return done(null, newUserMysql);
				});	
            }	
		});
    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM user WHERE `email` = '" + email + "'",function(err,rows){
			if (err)
                return done(err);
       // if no user is found.
           if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }
            console.log('d4fg400',rows[0].bcrypt_hash.toString(),'333fddfs');
			
            // Compare password with bcryptjs hash in database for the supplied user.
            bcrypt.compare(password, rows[0].bcrypt_hash.toString(), function(err, res) {
              if (err)
              return done(err);
              console.log('bcrypt res?', res);
              // if the user is found but the password is wrong
              if (!(res))
              return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
              // all is well, return successful user
              return done(null, rows[0]);
            });
		});
    }));
};