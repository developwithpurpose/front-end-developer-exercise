//-----------------------------------------------
// DOCUMENT READY
//-----------------------------------------------

$(document).ready(function(){
	//-----------------------------------------------
	// ACTIVE NAVAGATION
	//-----------------------------------------------

	$('.step-item').click(function() {
    // If this isn't already is-current
	  if (!$(this).hasClass("is-current")) {
	    // Remove the class from anything that is is-current
	    $("li.is-current").removeClass("is-current");
	    // And make this is-current
	    $(this).addClass("is-current");
	    console.log(this);
	  }
	});

	$.ajax('../../templates/step-3.html', {
		data: {location: $('.step-item').data('step')},
		success: function(response){
			//console.log(response);
			$('.page-content-container').html(response);
		},
		error: function(){
			$('.page-content-container')
			.html('<h3>There was an error in loading this step</h3>')
		}
	});
});

//----------------------
// FUNCTIONS
//----------------------

function Step(el) {
	this.el = el;

	//helper method
	this.loadStep = function() {
		$.ajax('../../templates/')
	}
}