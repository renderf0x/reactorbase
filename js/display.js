//externalized db display functions

var displayHackerByID = function(user_id){
	var url = 'http://localhost:3000/api/hackers/' + user_id;
	console.log('url is ' + url);
	$.getJSON(
		url,
		function(data){
			console.log('data is ' + JSON.stringify(data));
			$('.user-panel').html('');
			$('.user-panel').append(hackerTemplate(data));
		});
};