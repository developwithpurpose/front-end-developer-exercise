
//Baby step tab selection and content animation
$(function() {
    //animate.css options
    var animationClassName = 'animated fadeInUp';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    
    $("a[href^=#]").click(function(event) { 
    	event.preventDefault();
    	
    	$(this).parent().siblings().children().removeClass('selected');
    	$(this).addClass('selected');
    
    	//get target href, trigger target element to become visible
    	var target = $(this).attr('href');
    	$('.bs-content-box').addClass('hidden');
    	$(target).removeClass('hidden');
    	
    	//animate target babystep into view
    	$(target).addClass(animationClassName).one(animationEnd, function() {
    	    $(target).removeClass(animationClassName);
    	});
    });
});

//load friends data and update page with friends on each step
$.getJSON( "assets/javascripts/baby-steps.json", function (data) {
    
    //sort the return data by lastName asc
    //more efficient than once each iteration below.
    data.friends.sort(function(a,b) {
        if(a.lastName == b.lastName) {
            return 0;
        }
        if(a.lastName < b.lastName) {
            return -1;
        }
        if(a.lastName > b.lastName) {
            return 1;
        }
    });
    
    //iterate over our friends array
    //build up new array of friends on each step
    //for each iteration, insert friends on each step into page
    var step = 1;
    while(step < 8) {
        
        var friendsOnStep = [];
        for(var i = 0; i < data.friends.length; i++) { 
            if(data.friends[i].babyStep === step) {
                friendsOnStep.push(data.friends[i].firstName + ' ' + data.friends[i].lastName);
            }
        }
        
        //console.log(friendsOnStep);
        //friends list message logic
        if(friendsOnStep.length == 1) {
            $('.friends-on-step-' + step).html("<span><a href='#'>" + friendsOnStep[0] + 
                "</a></span> is also in Baby Step " + step + ".");
        } else if(friendsOnStep.length == 2) {
            $('.friends-on-step-' + step).html("<span><a href='#'>" + friendsOnStep[0] +
                "</a> and <a href='#'>" + friendsOnStep[1] + "</a></span> are also in Baby Step " + step + ".");
        } else if (friendsOnStep.length == 3) {
            $('.friends-on-step-' + step).html("<span><a href='#'>" + friendsOnStep[0] +
                "</a>, <a href='#'>" + friendsOnStep[1] + "</a>," + "</span> and " + 
                (friendsOnStep.length - 2) + " other friend are also in Baby Step " + step + ".");
        } else if (friendsOnStep.length >= 4) {
            $('.friends-on-step-' + step).html("<span><a href='#'>" + friendsOnStep[0] +
                "</a>, <a href='#'>" + friendsOnStep[1] + "</a>," + "</span> and " + 
                (friendsOnStep.length - 2) + " other friends are also in Baby Step " + step + ".");
        } else {
            $('.friends-on-step-' + step).html("");
        }
        
        step++;
    }
});

