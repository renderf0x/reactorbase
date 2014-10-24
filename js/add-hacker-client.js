$(document).ready(function(){
	

	var newHacker = {};

	var collectFormData = function(){
		newHacker.name = $("input[name=name]").val();
		newHacker.name_note = $("input[name=name_note]").val();
		newHacker.cohort = $("#cohort-select").val().toLowerCase();
		newHacker.email = $("input[name=email]").val();
		newHacker.photo = $("input[name=photo]").val();
		newHacker.hometown = $("input[name=hometown]").val();
		newHacker.github_id = $("input[name=github_id]").val();
		newHacker.q1 = $("input[name=q1]").val();
		newHacker.q2 = $("input[name=q2]").val();
		newHacker.q3 = $("input[name=q3]").val();
		newHacker.q4 = $("input[name=q4]").val();
		//newHacker.q5 = $("#q5").val();
		newHacker.q5 = [];
		$('.q5').each(function(i, item){
			var value = $(item).val();
			newHacker.q5.push(value);
		});

		newHacker.roles = [];
		$('.roles-select:checked').each(function(i, item){
			newHacker.roles[i] = $(item).val();
		});
	}

	$('.addQ5Fields').click(function(){
		var inp = $('#box');

		var i = $('.q5').size() + 1;

		$('<div id="box' + i +'"><input type="text" id="q5" class="q5 form-control" name="q5_' + i +'" placeholder="Intersting thing '+i+'"/><a class="removeQ5Fields"><i class="fa fa-minus-circle fa-2x"></i></a></div>').appendTo(inp);
	});

	$('body').on('click', '.removeQ5Fields', function(){
		$(this).parent("div").remove();
	});

	$("#addHackerButton").click(function(){
		collectFormData();
		//alert(JSON.stringify(newHacker));
		$.ajax({
			type: "POST",
			url: "/api/hackers/",
			data: newHacker,
			success: function(incoming){
				alert(JSON.stringify(incoming));
				// Use a whitelist of fields to minimize unintended side effects.
				$('INPUT:text, SELECT, TEXTAREA', '#hacker-add-form').val('');
				// De-select any checkboxes, radios and drop-down menus
				$('INPUT:checkbox', '#hacker-add-form').removeAttr('checked').removeAttr('selected');
				},
			});
	});

});