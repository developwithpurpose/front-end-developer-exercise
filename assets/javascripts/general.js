jQuery(document).ready(function($) {

	$('.menu a').on('click', function(e) {

		// Swap Classes		
		$('.menu a').removeClass('active');
		$(this).addClass('active');

		// Get Position for Hover Box
		var pos = $(this).position();
		var posTop = pos.top;
		$('.bar').css('top', posTop);

		// Move Content Area

		var path = $(this).attr("data-path");
    	var anchor = $("#" + path);
    	var position = anchor.position().top + $(".scroll-area").scrollTop();

    	$(".scroll-area").animate({scrollTop: position});

		e.preventDefault();

	});

	// Ajax Request

	$.ajax({
		type: "Get",
		url: "/baby-steps.json",
		dataType: "json",
		success: function(data) {
			console.log(data);
			var step1_people = [];
			var step2_people = [];
			var step3_people = [];
			var step4_people = [];
			var step5_people = [];
			var step6_people = [];
			var step7_people = [];
			var extra;

			$.each(data.friends, function(index, person) {

				var person_name = person.firstName + ' ' + person.lastName;

				switch(person.babyStep) {
					case parseInt(1) :
						step1_people.push(person_name);
						break;
					case parseInt(2)  :
						step2_people.push(person_name);
						break;
					case parseInt(4) :
						step3_people.push(person_name);
						break;
					case parseInt(4) :
						step4_people.push(person_name);
						break;
					case parseInt(5) :
						step5_people.push(person_name);
						break;
					case parseInt(6) :
						step6_people.push(person_name);
						break;
					case parseInt(7) :
						step7_people.push(person_name);
						break;
					default:
				}
			});

			var steps = new Array(1,2,3,4,5,6,7);

			if(step1_people.length > 0) {
				var step1_count = step1_people.length;

				if(step1_count === 1) {
					$('#friends-1').append('<span>' + step1_people[0] + '</span> is also in Baby Step 1');
				}

				else if(step1_count === 2) {
					$('#friends-1').append('<span>' + step1_people[0] + '</span> and <span>' + step1_people[1] + '</span> are also in Baby Step 1');
				}

				else if(step1_count === 3) {
					$('#friends-1').append('<span>' + step1_people[0] + '</span>, <span>' + step1_people[1] + '</span> and one other friends are also in Baby Step 1');
				}

				else {
					extra = step1_count - 1;
					$('#friends-1').append('<span>' + step1_people[0] + '</span>, ' + '<span>' + step1_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 1');
				}

			}

			if(step2_people.length > 0) {
				var step2_count = step2_people.length;

				if(step2_count === 1) {
					$('#friends-2').append('<span>' + step2_people[0] + '</span> is also in Baby Step 2');
				}

				else if(step2_count === 2) {
					$('#friends-2').append('<span>' + step2_people[0] + '</span> and <span>' + step2_people[1] + '</span> are also in Baby Step 2');
				}

				else if(step2_count === 3) {
					$('#friends-2').append('<span>' + step2_people[0] + '</span>, <span>' + step2_people[1] + '</span> and one other friends are also in Baby Step 2');
				}

				else {
					extra = step2_count - 1;
					$('#friends-2').append('<span>' + step2_people[0] + '</span>, ' + '<span>' + step2_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 2');
				}

			}

			if(step3_people.length > 0) {
				var step3_count = step3_people.length;

				if(step3_count === 1) {
					$('#friends-3').append('<span>' + step3_people[0] + '</span> is also in Baby Step 3');
				}

				else if(step3_count === 2) {
					$('#friends-3').append('<span>' + step3_people[0] + '</span> and <span>' + step3_people[1] + '</span> are also in Baby Step 3');
				}

				else if(step3_count === 3) {
					$('#friends-3').append('<span>' + step3_people[0] + '</span>, <span>' + step3_people[1] + '</span> and one other friends are also in Baby Step 3');
				}

				else {
					extra = step3_count - 1;
					$('#friends-3').append('<span>' + step3_people[0] + '</span>, ' + '<span>' + step3_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 3');
				}

			}

			if(step4_people.length > 0) {
				var step4_count = step4_people.length;

				if(step4_count === 1) {
					$('#friends-4').append('<span>' + step4_people[0] + '</span> is also in Baby Step 4');
				}

				else if(step4_count === 2) {
					$('#friends-4').append('<span>' + step4_people[0] + '</span> and <span>' + step4_people[1] + '</span> are also in Baby Step 4');
				}

				else if(step4_count === 3) {
					$('#friends-4').append('<span>' + step4_people[0] + '</span>, <span>' + step4_people[1] + '</span> and one other friends are also in Baby Step 4');
				}

				else {
					extra = step4_count - 1;
					$('#friends-4').append('<span>' + step4_people[0] + '</span>, ' + '<span>' + step4_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 4');
				}

			}

			if(step5_people.length > 0) {
				var step5_count = step5_people.length;

				if(step5_count === 1) {
					$('#friends-5').append('<span>' + step5_people[0] + '</span> is also in Baby Step 5');
				}

				else if(step5_count === 2) {
					$('#friends-5').append('<span>' + step5_people[0] + '</span> and <span>' + step5_people[1] + '</span> are also in Baby Step 5');
				}

				else if(step5_count === 3) {
					$('#friends-5').append('<span>' + step5_people[0] + '</span>, <span>' + step5_people[1] + '</span> and one other friends are also in Baby Step 5');
				}

				else {
					extra = step5_count - 1;
					$('#friends-5').append('<span>' + step5_people[0] + '</span>, ' + '<span>' + step5_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 5');
				}

			}

			if(step6_people.length > 0) {
				var step6_count = step6_people.length;

				if(step6_count === 1) {
					$('#friends-6').append('<span>' + step6_people[0] + '</span> is also in Baby Step 6');
				}

				else if(step6_count === 2) {
					$('#friends-6').append('<span>' + step6_people[0] + '</span> and <span>' + step6_people[1] + '</span> are also in Baby Step 6');
				}

				else if(step6_count === 3) {
					$('#friends-6').append('<span>' + step6_people[0] + '</span>, <span>' + step6_people[1] + '</span> and one other friends are also in Baby Step 6');
				}

				else {
					extra = step6_count - 1;
					$('#friends-6').append('<span>' + step6_people[0] + '</span>, ' + '<span>' + step6_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 6');
				}

			}

			if(step7_people.length > 0) {
				var step7_count = step7_people.length;

				if(step7_count === 1) {
					$('#friends-7').append('<span>' + step7_people[0] + '</span> is also in Baby Step 7');
				}

				else if(step7_count === 2) {
					$('#friends-7').append('<span>' + step7_people[0] + '</span> and <span>' + step7_people[1] + '</span> are also in Baby Step 7');
				}

				else if(step7_count === 3) {
					$('#friends-7').append('<span>' + step7_people[0] + '</span>, <span>' + step7_people[1] + '</span> and one other friends are also in Baby Step 7');
				}

				else {
					extra = step7_count - 1;
					$('#friends-7').append('<span>' + step7_people[0] + '</span>, ' + '<span>' + step7_people[1] + '</span> and ' + extra + ' other friends are also in Baby Step 7');
				}

			}

		},
		error: function(){
		  alert("json not found");
		}
	});
});