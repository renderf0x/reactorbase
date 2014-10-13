//externalized handlebars templates

var hackerTemplate;

$(document).ready(function(){
	var hackerTemplateScript = $('#user-data').html()
	//console.log('Hacker script = ' + hackerTemplateScript);
	hackerTemplate = Handlebars.compile(hackerTemplateScript);
});