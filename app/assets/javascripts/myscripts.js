(function( $ ) {
  'use strict';

  var slider = $("<div>");
  slider.addClass('slider');
  $("#mySidenav ul").append(slider);
  $('.sidenav li.baby-step-1').addClass('selected')

	function getAllSupportedItems() {
	  $.getJSON("baby-steps.json").then(function (data) {
	  	var navList = $(".nav li");
	  	var babyStepNumber = 0;
	  	$.each(navList, function(j, nav){
	  		var numberOfFriends = 0;
	  		var navClass = nav.classList[0];
	  		babyStepNumber += 1;    		
		  	$.each(data.friends, function(i, friend){
		  		var itemBabyStep = "baby-step-" + friend.babyStep;
		  		if(itemBabyStep == navClass){
		  			numberOfFriends += 1;
		  			if(numberOfFriends <= 2 ){
		  				if(numberOfFriends == 2 ){
								var span = $("<span>");
								span.addClass("between");
								span.text(" and ");
								$("#"+navClass+" .notification").append(span);
							}
		  				var link = $("<a>");
	            link.attr("href", "#");
	            var name = "" + friend.firstName + " " + friend.lastName;
	            link.text(name);
	            link.addClass("link");
							$("#"+navClass+" .notification").append(link);
		  			}
	  			}
	      });
		  	if(numberOfFriends == 1){
		  		var span1 = $("<span>");
					span1.text(" ");
		  		var p1 = $("<p>");
					p1.text(" is also in Baby Step " + babyStepNumber);
					$("#"+navClass+" .notification").append(span1);
					$("#"+navClass+" .notification").append(p1);
		  	} 
		  	else if(numberOfFriends == 2){
		  		var span2 = $("<span>");
					span2.text(" ");
		  		var p2 = $("<p>");
					p2.text("are also in Baby Step " + babyStepNumber);
					$("#"+navClass+" .notification").append(span2);
					$("#"+navClass+" .notification").append(p2);
		  	}
		  	else if(numberOfFriends == 3){
		  		$(".notification .between").text(", ");
		  		var p3 = $("<p>");
					p3.text(", and 1 other friend are also in Baby Step " + babyStepNumber);
					$("#"+navClass+" .notification").append(p3);
		  	}
		  	else if (numberOfFriends >= 4){
		  		$(".notification .between").text(", ");
		  		var p4 = $("<p>");
					p4.text(", and 2 other friends are also in Baby Step " + babyStepNumber);
					$("#"+navClass+" .notification").append(p4);
		  	}
	    });
	  });
	}

	getAllSupportedItems();

	$('.sidenav li').click(function() {
	 var top = $(this)[0].firstElementChild.offsetTop;
	  $('.slider').stop().animate({
	    'top' : top,
	  });
	  scrollToElement( $(this)[0].firstElementChild.hash, 2000 );
	  $(this).siblings('li').removeClass('selected');
		$(this).addClass('selected');
	});

	var scrollToElement = function(el, ms){
		var speed = (ms) ? ms : 600;
		var scrollTop = $(el)[0].offsetTop - 340;
		$('#baby-step-content').animate({
	    scrollTop: scrollTop
		}, speed);
	};

})( jQuery );