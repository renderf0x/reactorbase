//one time db load command

//user for testing
var testUser = {
		"name": "import test 2",
		"name_note": 'note',
		"cohort": "hr20",
        "q5": "yummies",
        "q4": "nomz",
        "q3": "woof",
        "q2": "meow",
        "q1": "when I was a young warthog",
        "photo": "test.png",
	};

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

