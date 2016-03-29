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

	$('.step-item').on('click', Step);

	var newStep = new Step($('.step-item'));

	$.ajax('../../templates/step-3', {
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
	var step = $(this).closest('.step-item');
	var num = step.data('step');
	this.el = el;
	console.log(num);

	//helper method
	this.loadStep = function() {
		$.ajax('../../templates/step-'+num,{
			success: function(response){
				$('.page-content-container').html(response);
			},
			error: function(){
				$('.page-content-container')
				.html('<h3>There was an error in loading this step</h3>')
			}
		});
	}
	console.log(this.el);
	//el.on('click', this.loadStep);
}

// function Step() {  
// 	var step = $(this).closest('.step-item');
// 	var num = step.data('step');
// 	var details = $("<p>You've selected step # "+(num)+"</p>");
// 	console.log(details);
// }