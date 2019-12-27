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
  multipleStatements: process.env.DB_MULTIPLE_STATEMENTS
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
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
		connection.query("select * from user where id = "+id,function(err,rows){	
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

		// find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    // TODO: switch to ? fill in format to automatically enable validation
        connection.query("SELECT * FROM user WHERE email = '"+ email +"'",async function(err,rows){
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

				// if there is no user with that email, create the user
        var newUserMysql = new Object();

				//lowercase their email
				newUserMysql.email = email.toLowerCase();
                
        // Hash users password with bcrypt
        newUserMysql.bcrypt_hash = await bcrypt.hash(password, 10); 
          // TODO: switch to ? fill in format to automatically enable validation
          // TODO: Add server side validation, client side validation is not enough, mirror 
          // formik Yup rules
        //Create the user in the database and set role/permissions to Minimum
				var insertQuery = "INSERT INTO user ( email, bcrypt_hash, role ) values ('" + email +"','"+ newUserMysql.bcrypt_hash +"','"+ 'Minimum' +"')";
				console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
        console.log(rows,rows[0],'rows post query')
        newUserMysql.id = rows.insertId;
        //----could set JWT token instead of normal session cookies if wanted.----
        
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
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);			
		
		});
		


    }));

};