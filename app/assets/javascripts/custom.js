$(document).ready(function(){

	$('#baby-step-info').scrollTop();
	
	$(".nav-left a").click(function(){

		var scroll = parseInt($(this).attr('data-scroll')); 
		bs_current = scroll + 1;
		var scroll_bs_to = scroll * 375;
		var scroll_tracker_to = scroll + 1 + (scroll * 60);
		
		$('#baby-step-info').animate({
			scrollTop: scroll_bs_to
		}, 1000);

		$('#tracker').animate({
			top: scroll_tracker_to
		}, 1000);

		$(".nav-left a").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: 'baby-steps.json',
			dataType: 'json',
			type: 'get',
			cache: false,
			success: function(data) {
				bs_array = [];
				
				$(data.friends).each(function(index, value){
		 			fname = value.firstName;
		 			lname = value.lastName;
		 			babyStep = value.babyStep;
					names = "";
					if ( babyStep == bs_current ) {
						names = [
							fname,
							lname
						];
						bs_array.push(names);
					}
				});
			
				var bs_sort =bs_array.sort(function(a,b){ return a[2] > b[2] ? 1 : -1; });
				
				count = bs_array.length - 2;
				bs_array_n = bs_sort.slice(0,2);
				bs_sorted = bs_array_n.sort();
				var people;
					if ( count <= 1 ) {
						bs_data = "<a href='#'>" + bs_sorted[0][0] + " " + bs_sorted[0][1] + "</a> is also in Baby Step " + bs_current;				
						$("[data-step='" + bs_current + "'] div.meta-bottom").empty().append("<p>" + bs_data + "</p>");	
					}
					if ( count <= 2 ) {
						bs_data = "<a href='#'>" + bs_sorted[0][0] + " " + bs_sorted[0][1] + "</a>, " + "<a href='#'>" + bs_sorted[1][0] + " " + bs_sorted[1][1] + "</a> and " + count + " other friend are also in Baby Step " + bs_current;
						$("[data-step='" + bs_current + "'] div.meta-bottom").empty().append("<p>" + bs_data + "</p>");
					}
					if ( count >= 3 ) {
						bs_data = "<a href='#'>" + bs_sorted[0][0] + " " + bs_sorted[0][1] + "</a>, " + "<a href='#'>" + bs_sorted[1][0] + " " + bs_sorted[1][1] + "</a> and " + count + " other friends are also in Baby Step " + bs_current;
						$("[data-step='" + bs_current + "'] div.meta-bottom").empty().append("<p>" + bs_data + "</p>");
					}

				}
		});
		return false;
	});

});