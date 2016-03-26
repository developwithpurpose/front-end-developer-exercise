//-----------------------------------------------
// DOCUMENT READY
//-----------------------------------------------

$(document).ready(function(){
	//-----------------------------------------------
	// ACTIVE NAVAGATION
	//-----------------------------------------------

	$('.step-item').on('click', function(event){
		event.preventDefault();

		var testing = $(this);
		console.log(testing);

		// $(this).addClass('is-current')
		// .closest('step-link');
	});
});