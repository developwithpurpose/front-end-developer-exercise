jQuery(document).ready(function ($) {
    
    var $slideDuration = 400;
    
    // Make sure intial Baby Step content will slide smoothly
    $(".baby-step").slideUp(0);
    $(".baby-step.active").slideDown(0);

    // Tabbed Navigation for the Baby Steps
    $("nav a.tab").click(function () {
        
        $(".baby-step.active").slideUp($slideDuration);
        
        $(".active").removeClass("active");
        $(this).addClass("active");

        var content_show = $(this).attr("title");
        $("#" + content_show + "_content").slideDown($slideDuration);
        $("#" + content_show + "_content").addClass("active");
        
        return false;
    });

});
