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
	  showFriends(num);
	});

});

//----------------------
// FUNCTIONS
//----------------------

function loadStep(num) {
 $.ajax('../../templates/step-'+num,{
   success: function(response){
     // $('.page-content-container').html(response);
     var Div = $(response).find('.page-content-body');
     $('.page-content-container').html(Div);
   },
   error: function(){
	   $('.page-content-container')
	   .html('<h3>There was an error in loading this step</h3>')
   }
 });
}

function showFriends(num) {
	$.ajax('../../baby-steps.json', {
		contentType: 'application/json',
		dataType: 'json',
		success: function(result){
			//console.log(result.friends);
			var friends = result.friends;
			var friendCount = 0;
			var friendList = [];
			var message = $('.friends');
			for (var i = 0; i<friends.length; i++){
				if (friends[i].babyStep === num) {
					friendCount+= 1;
					friendList.push(friends[i].firstName + ' ' + friends[i].lastName);
				}
			}
			switch (friendCount) {
				case 0:
					break;
				case 1:
					console.log(friendList[0] + " is also in Baby Step " + num);
					break;
				case 2:
					console.log(friendList[0] + " and " + friendList[1] + " are also in Baby Step " + num);
					break;
				case 3:
					console.log(friendList[0] + ", " + friendList[1] + ", and " + (friendCount-2) + " other friend are also in Baby Step " + num);
					break;
				default:
					console.log(friendList[0] + ", " + friendList[1] + ", and " + (friendCount-2) + " other friends are also in Baby Step " + num);
					break;
			}
		}
	});
}