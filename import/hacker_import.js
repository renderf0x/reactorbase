//db load command using mongoose schemas

var Hacker = require('../models/hacker');

var dataFile = require('./data-10232014.js');


module.exports = {
//user for testing
	testHacker : {
			"name": "import test 3",
			"name_note": 'note',
			"cohort": "hr20",
	        "q5": ["yummies","tasties","nommies","commies"],
	        "q4": "nomz",
	        "q3": "woof",
	        "q2": "meow",
	        "q1": "when I was a young warthog",
	        "photo": "test.png",
	        "github_id": "github_id",
	        "hometown": "hometown",
	        "email": "test@testbutt.com",
	        "roles": ["hacker","class-lead"]
		},

	data : dataFile,

	loadHacker : function(hackerObject){
		var hacker = new Hacker();

		hacker.name = hackerObject.name;
		hacker.cohort = hackerObject.cohort;
		hacker.name_note = hackerObject.name_note;
		hacker.photo = hackerObject.photo;
		hacker.q1 = hackerObject.q1;
		hacker.q2 = hackerObject.q2;
		hacker.q3 = hackerObject.q3;
		hacker.q4 = hackerObject.q4;
		hacker.q5 = hackerObject.q5;
		hacker.github_id = hackerObject.github_id;
		hacker.hometown = hackerObject.hometown;
		hacker.email = hackerObject.email;
		hacker.roles = hackerObject.roles;

		hacker.save(function(err){
			if (err)
				return err;
			console.log('Hacker loaded');
		});
	},

	loadHackerArray : function (hackerArray) {
		if(!Array.isArray(hackerArray)){
			return false;
		}

		for (var i = 0; i < hackerArray.length; i++){
			this.loadHacker(hackerArray[i]);
		}
	}
}

/*	old function

var loadUsers = function(userCollection){

	var users = (userCollection || testUser);

	if (Array.isArray(users)){
		for (var i = 0; i < users.length; i++){
			$.post('http://localhost:3000/api/hackers', users[i]);
		}
	}else{
		$.post('http://localhost:3000/api/hackers', users);
	}
};

*/

