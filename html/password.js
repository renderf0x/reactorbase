var key = "unhashed";
var pass = "";
var loggedIn = false;
var currentUser = 1;

$(document).ready(function(){

	//$('#loginModal').modal();

	var templateScript = $('#user-data').html()
	var template = Handlebars.compile(templateScript);
	$('.user-panel').append(template(peeps[0]));
	//randomUser();

	var menuScript = $('#user-menu').html()
	var menuTemplate = Handlebars.compile(menuScript);
	$('#menu-display').append(menuTemplate(peeps));

	var displayUser = function(index){
		$('.user-panel').html('');
		$('.user-panel').append(template(peeps[index]));
		currentUser = index;
	};

	var nextUser = function(){
		if (currentUser + 1 >= peeps.length){
			displayUser(0);
		}else{
			displayUser(currentUser + 1);
		}
	};

	var previousUser = function(){
		if (currentUser === 0){
			displayUser(peeps.length - 1);
		}else{
			displayUser(currentUser - 1);
		}
	};

	var randomUser = function(){
		var index = Math.floor(Math.random() * (peeps.length - 1));
		console.log('Random index =' + index);
		displayUser(index);
	};

	var getPassword = function (){
		pass = $('.pass').val();
		console.log(pass);
		console.log("Hnggghh");
	};

	var matchPassword = function(){
		return (pass === key) ? true : false;
	};

	var goodPassword = function(){
		console.log("yay!");
		window.open("main.html");
	};

	var badPassword = function(){
		alert("Nope!");
		$('.pass').val('');
	};

	$('#submitPassword').click(function(){
		getPassword();
		var matched = matchPassword();
		if(matched){
			goodPassword();
		}else{
			badPassword();
		}
	});

	$('#displayLogin').click(function(){
		$('#loginModal').modal();
	}); 

	$('#next').click(function(){
		nextUser();
	});

	$('#previous').click(function(){
		previousUser();
	});


});