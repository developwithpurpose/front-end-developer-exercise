//-----------------------------------------------
// DOCUMENT READY
//-----------------------------------------------

$(document).ready(function(){
	//-----------------------------------------------
	// ACTIVE NAVAGATION
	//-----------------------------------------------

	$('.step-item').click(function(event) {
		event.preventDefault();

		var step = $(this).closest('.step-item');
		var num = step.data('step');
    // If this isn't already is-current
	  if (!$(this).hasClass("is-current")) {
	    // Remove the class from anything that is is-current
	    $("li.is-current").removeClass("is-current");
	    // And make this is-current
	    $(this).addClass("is-current");
	    console.log(this);
	  }
	  loadStep(num);
	});

});

//----------------------
// FUNCTIONS
//----------------------

function loadStep(num) {
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