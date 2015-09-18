// DOM Ready
$(document).ready(function() {

    var $el, topPos,
        $mainNav = $("#steps-menu");
    
    
    $mainNav.append("<li id='menu-hover-bg'></li>");
    
    var $magicLine = $("#menu-hover-bg");
    
    $magicLine
        .width($("#steps-menu li:first-child").parent().width())
        .height($("#steps-menu li:first-child").height())
        .css("top", $("#steps-menu li:first-childa").position.top)
        .data("origTop", $("#steps-menu li:first-child a").position.top)
        .data("origWidth", $magicLine.width());
                
    $("#steps-menu a").click(function(e) {
    	e.preventDefault();

        $el = $(this);

        topPos = $el.position().top;

        $magicLine.stop().animate({

            top: topPos,
            backgroundColor: "#fff"

        });

        // remove all curent page class
        $("#steps-menu a").removeClass("current_page_item");

        // add current page class to this href
        $el.addClass("current_page_item");


        var step = $(this).attr("rel");

    	$(".steps-content").hide();
    	$("#" + step).fadeIn();

    });
    
    // Kick IE into gear
    $(".current_page_item a").mouseenter();
    
});