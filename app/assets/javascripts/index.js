function getImage(index, blue)
{
    return "./assets/images/icons/individual/icons_small_bs" + (index + 1) + (blue ? "_blue" : "") + ".png";
}

var selectStep = (function()
{
    var selection;
    return function(index) {
        if (selection !== undefined)
        {
            toggleStep(selection, false);
        }
        selection = index;
        toggleStep(index, true);
    }
})();

function toggleStep(index, toggle)
{
    var link = $(".nav-link").eq(index);
    var text = $(".content-div").eq(index);
    if (toggle)
    {
        link.addClass("selected-link");
        text.addClass("shown");
    }
    else
    {
        link.removeClass("selected-link");
        text.removeClass("shown");
    }
    $(".nav-link .nav-img").eq(index).attr("src", getImage(index, toggle));
}

$(document).ready(function() {
    $(".nav-link").click(function(e) {
        selectStep($("#" + e.currentTarget.id).parent().parent().index());
        return false;
    })
    $(".content-div").addClass("invisible");
    selectStep(0);
});
