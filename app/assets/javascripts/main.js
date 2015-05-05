$(document).ready(function(){
	
	$('ul.step-list li').click(function(){
		var stepID = $(this).attr('data-step');

		$('ul.step-list li').removeClass('active');
		$('.step-content').removeClass('active');

		$(this).addClass('active');
		$("#"+stepID).addClass('active');
	})

})