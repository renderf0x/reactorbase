//externalized db display functions

var displayHackerByID = function(user_id){
	var url = 'http://localhost:3000/api/hackers/' + user_id;
	console.log('url is ' + url);
	$.getJSON(
		url,
		function(data){
			console.log('data is ' + JSON.stringify(data));
			$('.content-area').html('');
			$('.content-area').append(hackerTemplate(data));
		});
};

var displayHackersByCohort = function(cohort){
	var url = 'http://localhost:3000/api/hackers/cohort/' + cohort;
	$.getJSON(
		url,
		function(data){
			console.log('data is ' + JSON.stringify(data));
			$('.content-area').html('');
			chunkGrid(data);
		});
};

var displayAllHackers = function(){
	var url = 'http://localhost:3000/api/hackers/';
	$.getJSON(
		url,
		function(data){
			console.log('data is ' + JSON.stringify(data));
			$('.content-area').html('');
			chunkGrid(data);
		});
};

//chunkGrid is a helper function that breaks up a grid of hackers into sets of 4.
//this allows them to be inserted into the Handlebars templates in a way that uses Bootstrap's grid system
//1 row per buffered 'chunk'.

var chunkGrid = function(hackerArray){
	var numHackers = hackerArray.length;
	console.log("Hacker Array Length is " + numHackers);
	var displayBuffer = [];

	for (var i = 0; i < numHackers; i++){
		if((displayBuffer.length <= 3) && (i < (numHackers -1))){
			displayBuffer.push(hackerArray[i]);
		}else{
			$('.content-area').append(hackerGridTemplate(displayBuffer));
			displayBuffer = [];
		}
	}
};