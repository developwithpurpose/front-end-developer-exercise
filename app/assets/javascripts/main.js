$(document).ready(function() {
    $(".leftList").removeClass("navNoScript");
    $(".bbsDescriptions").removeClass("noScript");
    $(".navStepLink").attr("href", "javascript:void(0)");
    $(".babyStepDescription:not(:first-child)").addClass("hiddenOnStart");
    $(".navStepLink").bind("click", function() {
        if ($(this).hasClass("activeListItemText"))
            e.preventDefault();
        $(".babyStepDescription").hide("drop", { direction: "down" }).delay(450);
        step = $(this).attr("step");
        $("#babyStep" + step).show("slide", { direction: "up" }, 200);
        $(".navStepLink").removeClass("activeListItemText");
        $(this).addClass("activeListItemText");
        $(".navStepLink").parent().removeClass("activeListItemBG", 400);
        $(this).parent().addClass("activeListItemBG", 400);
        $(".navStepLink").next().removeClass("active");
        $(this).next().addClass("active");
    });

    $.ajax({
        url: 'baby-steps.json',
        type: 'get',
        dataType: 'json',
        error: function(data) {
            $(".jsonData").append(" Error Reading Data. ")
        },
        success: function(data) {


            function length(data) {
                var length = 0;
                for (key in data)
                    length++;
                return length
            }
            var objCount = (length(data.friends))


            var sort_by = function(field, reverse, primer) {
                var key = function(x) {
                    return primer ? primer(x[field]) : x[field]
                };
                return function(a, b) {
                    var A = key(a),
                        B = key(b);
                    return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!reverse];
                }
            }
            data.friends.sort(sort_by('lastName', true, function(a) {
                return a
            }));


            var current = 1;
            $('.navStepLink').click(function() {
                current = $(this).attr("step");
                $(".jsonData").empty();
                var namesArr = [];
                var count = 0;
                for (i = 0; i < objCount; i++) {
                    if (data.friends[i].babyStep == current) {
                        namesArr.push(data.friends[i].firstName + " " + data.friends[i].lastName)
                        count++
                    }
                }
                if (count === 0) {
                    $(".jsonData").empty();
                } else if (count === 1) {
                    $(".jsonData").append("<a href=javascript:void(0);>" + namesArr[0] + "</a> is also in Baby Step " + current + ".")
                } else if (count === 2) {
                    $(".jsonData").append("<a href=javascript:void(0);>" + namesArr[0] + "</a> and " + "<a href=javascript:void(0);>" + namesArr[1] + "</a> are also in Baby Step " + current + ".")
                } else {
                    $(".jsonData").append("<a href=javascript:void(0);>" + namesArr[0] + "</a>, " + "<a href=javascript:void(0);>" + namesArr[1] + "</a>, and " + (count - 2) + " other friend are also in Baby Step " + current + ".")
                }
            })
        }
    })
});
