// DOM Ready
$(document).ready(function() {

    var $el, topPos,
        $mainNav = $("#steps-menu");
    
    //append magic line
    $mainNav.append("<li id='menu-hover-bg'></li>");
    
    var $magicLine = $("#menu-hover-bg");
    
    // set magic line to height and width of first baby step.
    $magicLine
        .width($("#steps-menu li:first-child").parent().width())
        .height($("#steps-menu li:first-child").height())
        .css("top", $("#steps-menu li:first-child a").position.top);
                
    // click menu
    $("#steps-menu a").click(function(e) {
    	e.preventDefault();

        $el = $(this);
        topPos = $el.position().top;

        // move magic line to new click a
        $magicLine.stop().animate({
            top: topPos,
            backgroundColor: "#fff"
        });

        // remove all curent page class
        $("#steps-menu a").removeClass("current_page_item");

        // add current page class to this href
        $el.addClass("current_page_item");

        //get rel from link - matches to id of article
        var step = $(this).attr("rel");

        // hide all articles
    	$(".steps-content").hide();

    	// add # to clicked rel id and fadein
    	$("#" + step).fadeIn();

    });
    
    // Kick IE into gear
    $(".current_page_item a").mouseenter();



    //loop though steps article contents
	$(".steps-content").each( function () {

        var stepNum = $(this).data("step");
        var friendsAtStep = [];
        // get json
        $.getJSON("js/baby-steps.json", function(data) {

            //create array per step
            for (var i = 0; i < data.friends.length; i++) {
                var friend = data.friends[i];
  
                // only create array of this step
                if (friend.babyStep === stepNum) {

                    friendsAtStep.push(friend);

                }
            }
            
            
            // sort by last name
            friendsAtStep.sort(function(a, b){
                return a.lastName === b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1;
            });

            var friendCnt = friendsAtStep.length;
            var freindMessage = "";
            var currentElement = [];

            // sort through and display.  This could definitely be done better.
            // 0 friends - display nothing
            if (friendCnt === 0) {
                
            // 1 friend etc "Paul Taylor is also in Baby Step 2"
            } else if (friendCnt === 1) {
                
                $.each(friendsAtStep , function(intValue, currentElement) {
                    freindMessage = "<span class='friendname'>" + currentElement.firstName + " " + currentElement.lastName + "</span>";
                });
                freindMessage += " is also in Baby Step " + stepNum;

                $(".freinds-on-step"+ stepNum).append(freindMessage);

            // 2 friend etc "Thomas Harris and Sharon Thomas are also in Baby Step 3"
            } else if (friendCnt === 2) {

                for (i = 0; i < friendsAtStep.length; i++) {
                    currentElement = friendsAtStep[i];
                    freindMessage += "<span class='friendname'>" + currentElement.firstName + " " + currentElement.lastName + "</span>";
                    if (i < 1) {
                        freindMessage += " and ";
                    }
                }
                freindMessage += " are also in Baby Step " + stepNum;

                $(".freinds-on-step"+ stepNum).append(freindMessage);
                    
            // 3 friend etc "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
            } else if (friendCnt === 3) {

                for (i = 0; i < friendsAtStep.length; i++) {
                    currentElement = friendsAtStep[i];
                    if (i<2) {
                    freindMessage += "<span class='friendname'>" + currentElement.firstName + " " + currentElement.lastName + "</span>, ";
                    }
                }
                freindMessage += " and 1 other friend are also in Baby Step " + stepNum;

                $(".freinds-on-step"+ stepNum).append(freindMessage);

            // 4 friend etc "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
            } else {
                var fndCnt = "";
                for (i = 0; i < friendsAtStep.length; i++) {
                    currentElement = friendsAtStep[i];
                    if (i<2){
                        freindMessage += "<span class='friendname'>" + currentElement.firstName + " " + currentElement.lastName + "</span>, ";
                    }
                    fndCnt = i;
                }
                freindMessage += " and " + fndCnt + " other friends are also in Baby Step " + stepNum;

                $(".freinds-on-step"+ stepNum).append(freindMessage);

            }

                
        });

    });

    
});