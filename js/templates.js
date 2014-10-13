//externalized handlebars templates

var hackerTemplate;
var hackerGridTemplate;

$(document).ready(function(){
	var hackerTemplateScript = $('#user-data').html();
	hackerTemplate = Handlebars.compile(hackerTemplateScript);

	var hackerGridTemplateScript = $('#hacker-grid').html();
	hackerGridTemplate = Handlebars.compile(hackerGridTemplateScript);
});