//passport.js

var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function(passport){

	//serializing utilities
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	//signup

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'local.email': email}, function(err, user){
				if (err)
					return done(err);
				if (user){
					return done(null, false, req.flash('signupMessage', 'You\'re already registered!'));
				} else {
					//create user
					var newUser = new User();

					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);

					//save
					newUser.save(function(err){
						if (err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

	//login

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){

		User.findOne({'local.email': email}, function(err, user){
			if(err)
				return done(err);
			if(!user)
				return done(null, false, req.flash('loginMessage', 'No User Found'));
			if(!user.validPassword(password))
				return done(null, false, req.flash('loginMessage', 'Passwords do not match'));
			//success case
			return done(null, user);
		});
	}));

};