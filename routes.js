//routes moved out of server.js file

var express = require('express');
var passport = require('passport');
var Hacker = require('./models/hacker');
var User = require('./models/user');

var router = express.Router();

router.use(function(req, res, next){

	console.log(Date.now() + ' Something is happening');
	next();
});

//testing auth middleware function
var isAuthenticated = function(req, res, next){
	if (req.isAuthenticated())
		return next();
	res.redirect('/login')
};

var slashAuthenticated = function(req, res, next){
	if (req.isAuthenticated())
		return next();
	res.redirect('/welcome');
}

//this function adds logged in Hacker lookup to render calls
var renderWithUserInfo = function(path, req, res, options){
	options = (options || {loggedIn: true}); //so everything doesn't crash without options
	Hacker.findOne({ email: req.user.local.email}, function(err, hacker){
		if(err)
			return err;
		//console.log("Hacker found: " + JSON.stringify(hacker));
		options.loggedInHacker = hacker;
		res.render(path, options);
	});
};

/*router.get('/', function(req, res){
	res.json({message: 'harro'});
}); */

//main slash route
router.route('/')
	.get(slashAuthenticated, function(req, res){
		//res.render('slash', {loggedIn: true});
		renderWithUserInfo('slash', req, res, {loggedIn: true});
	});

//welcome page route, if the above fails	
router.route('/welcome')
	.get(function(req, res){
		res.render('welcome');
	});

//login and signup routes

router.route('/login')
	.get(function(req, res){
		res.render('login', { message: req.flash('loginMessage')});
	})

	.post(passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));

router.route('/signup')
	.get(function(req, res){
		res.render('signup', {message: req.flash('signupMessage')});
	})

	.post(passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

router.route('/logout')
	.get(function(req, res){
		req.logout();
		res.redirect('/');
	});

//profile routes

router.route('/profile')
	.get(isAuthenticated, function(req, res){

		Hacker.findOne({'email': req.user.local.email}, function(err, hacker){
			if (err)
				res.send(err);
			//res.render('profile', {user: req.user, hacker: hacker, loggedIn: true});
			renderWithUserInfo('profile', req, res, {user: req.user, hacker: hacker, loggedIn: true});
		});
	});

router.route('/change-password')
	.get(isAuthenticated, function(req, res){
		renderWithUserInfo('change-password', req, res, {loggedIn: true});
	})
	.post(isAuthenticated, function(req, res){
		var oldPassword = req.body.oldPassword;
		var newPassword = req.body.newPassword;
		var newPasswordVerify = req.body.newPasswordVerify;
		//res.json(req.user.validPassword(oldPassword));
		if (!req.user.validPassword(oldPassword)){
			req.flash('changePasswordMessage', 'Current password doesn\'t match');
			renderWithUserInfo('change-password', req, res, { message: req.flash('changePasswordMessage'), loggedIn: true});
		} else if (newPassword != newPasswordVerify){
			req.flash('changePasswordMessage', 'New passwords don\'t match');
			renderWithUserInfo('change-password', req, res, { message: req.flash('changePasswordMessage'), loggedIn: true});
		} else {
			console.log("User ID: " + req.user.id);
			User.findById(req.user.id, function(err, user){
				if (err)
					return err;
				user.local.password = user.generateHash(newPassword);

				user.save(function(err){
					if (err)
						throw err;
					//return user;
			});
			req.flash("changePasswordMessage", "Password successfully changed");
			renderWithUserInfo('change-password', req, res, { successMessage: req.flash("changePasswordMessage"), loggedIn: true});
		});
	}});

//render routes

router.route('/hackers/cohorts/:cohort')
	.get(isAuthenticated, function(req, res){
		Hacker.find({cohort: req.params.cohort}, function(err, hackers){
			if (err)
				res.send(err);
			//res.render('hacker-grid', {hackers: hackers, loggedIn: true});
			renderWithUserInfo('hacker-grid', req, res, {hackers: hackers, loggedIn: true});
		});
	});

router.route('/hackers')
	.get(isAuthenticated, function(req, res){
		Hacker.find({}, function(err, hackers){
			if (err)
				res.send(err);
			//res.render('hacker-grid', {hackers: hackers, loggedIn: true});
			renderWithUserInfo('hacker-grid', req, res, {hackers: hackers, loggedIn: true});
		});
	});

router.route('/hackers/:hacker_id')
	.get(isAuthenticated, function(req, res){
		Hacker.findById(req.params.hacker_id, function(err, hacker){
			if (err)
				res.send(err);
			if (req.user.local.email == hacker.email)
				hacker.isMe = true;
			//res.render('hacker', {hacker: hacker, loggedIn: true});
			renderWithUserInfo('hacker', req, res, {hacker: hacker, loggedIn: true});
		});
	});

//search routes

router.route('/search')
	.post(isAuthenticated, function(req, res){
		var searchText = req.body.search;
		console.log('Search text is \"' + searchText + '\"')

		Hacker.find({ name: { $regex: searchText, $options: 'i'} }, function(err, hackers){
			if (err)
				res.send(err);
			console.log('Found ' + hackers.length + ' results......');
			//res.render('hacker-grid', {hackers: hackers, loggedIn: true});
			renderWithUserInfo('hacker-grid', req, res, {hackers: hackers, loggedIn: true});
		});
	});

//API routes follow. Use these for data

router.route('/api/hackers')

	.post(function(req, res){
		var hacker = new Hacker();
		//console.log("req = " + JSON.stringify(req));
		hacker.name = req.body.name;
		hacker.name_note = req.body.name_note;
		hacker.photo = req.body.photo;
		hacker.q1 = req.body.q1;
		hacker.q2 = req.body.q2;
		hacker.q3 = req.body.q3;
		hacker.q4 = req.body.q4;
		hacker.q5 = req.body.q5;
		hacker.cohort = req.body.cohort;
		hacker.github_id = req.body.github_id;
		hacker.hometown = req.body.hometown;
		hacker.email = req.body.email;
		hacker.roles = req.body.roles;

		hacker.save(function(err){
			if (err)
				res.send(err);

			res.json({ message: 'Hacker created!'});
		});
	})

	//get all hackers

	.get(function(req, res){
		Hacker.find(function(err, hackers){
			if (err)
				res.send(err);
			res.json(hackers);
		});
	});

// single hacker lookups for /hackers/:hacker_id
router.route('/api/hackers/:hacker_id')
	
	.get(function(req, res){
		Hacker.findById(req.params.hacker_id, function(err, hacker){
			if (err)
				res.send(err);
			res.json(hacker);
		});
	})
	//updates info. currently only for names
	.put(function(req, res){
		Hacker.findById(req.params.hacker_id, function(err, hacker){
			if (err)
				res.send(err);
			hacker.name = req.body.name;

			hacker.save(function(err){
				if (err)
					res.send(err);
				res.json({ message: 'Hacker updated!'});
			});
		})
	})

	//this currently times out, for reasons unknown
	.delete(function(req, res){
		Hacker.remove({_id: req.params.hacker_id}), function(err, hacker){
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		};
	});

//get hackers by cohort

router.route('/api/hackers/cohort/:cohort')
	
	.get(function(req, res){
		Hacker.find({cohort: req.params.cohort}, function(err, hacker){
			if (err)
				res.send(err);
			res.json(hacker);
		});
	});

	module.exports = router;