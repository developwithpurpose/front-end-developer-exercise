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
	  }
	});
});