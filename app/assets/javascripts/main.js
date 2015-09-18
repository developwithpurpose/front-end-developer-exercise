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
        .css("top", $("#steps-menu li:first-child a").position.top)
                
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
    
});