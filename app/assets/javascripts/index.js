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

function loadFriends()
{
    $.ajax({
        url: "./baby-steps.json",
        success: function(result)
        {
            var friends = result.friends;
            for (var i = 0; i < 7; i++)
            {
                var filtered = friends.filter(function(friend)
                {
                    return friend.babyStep === (i + 1);
                })
                $(".content-div .step-friends").eq(i)
                    .html(getFriendString(i, filtered));

            }
        }
    })
}

function getFriendString(index, friends)
{
    if (friends.length > 0)
    {
        return "<a>" + friends[0].firstName + " " + friends[0].lastName + "</a>"
        + (friends.length > 1
            ? (friends.length > 2
                ? ", "
                : " and "
            )
            + "<a>" + friends[1].firstName + " " + friends[1].lastName + "</a>"
            + (friends.length > 2
                ? ", and " + (friends.length - 2) + " other friend"
                + (friends.length > 3
                    ? "s "
                    : " "
                )
                : " "
            )
            + "are "
            : " is "
        )
        + "also in Baby Step " + (index + 1);
    }
    return "";
}

$(document).ready(function() {
    loadFriends();
    $(".nav-link").click(function(e) {
        selectStep($("#" + e.currentTarget.id).parent().parent().index());
        return false;
    })
    $(".content-div").addClass("invisible");
    selectStep(0);
});
