jQuery(document).ready(function ($) {
    
    $(".baby-step").slideUp();
    $(".baby-step.active").slideDown();

    // Tabbed Navigation for the Baby Steps
    $("nav a.tab").click(function () {
        
        $(".active").removeClass("active");
        $(this).addClass("active");

        $(".baby-step").slideUp();

        var content_show = $(this).attr("title");
        $("#" + content_show + "_content").slideDown($slideDuration);
        $("#" + content_show + "_content").addClass("active");
        
        return false;
    });

});
