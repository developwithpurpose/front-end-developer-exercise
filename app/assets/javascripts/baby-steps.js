$(document).ready(function() {
    $(".tabcontent").hide();
    $("#step1").show()
    $("#step1").addClass("active");

    $(".tab").on("click", ".tablinks", function(e) {
        e.preventDefault();
        $(".tablinks").removeClass("active");
        $(this).addClass("active");
        $(".tabcontent").hide();

        var step_to_show = $(this).attr("name");
        $("div[id=" + step_to_show + "]").animate({
            height: ["toggle", "swing"],
            opacity: "toggle"
        }, 1500);

        var step = step_to_show.match(/\d+/); 
        step = step[0];

        $.ajax({
            url: '../../baby-steps.json',
            dataType: 'json',
            success: function(data) {
                var items = [];
                var friends_line = '';
                data.friends.sort(function(a, b) {
                    return compareStrings(a.lastName, b.lastName);
                });
                $.each(data.friends, function(i, friend) {
                    if (step == friend.babyStep) {
                        items.push(friend.firstName + " " + friend.lastName);
                        if (items.length == 2) {
                            return false;
                        }
                    }
                });
                if (items.length) {
                    if (items.length == 1) {
                        friends_line = "<a href='#two'>"+items[0]+"</a>";
                        friends_line += " is also in Baby Step " + step;
                    } else if (items.length == 2) {
                        friends_line = "<a href='#two'>"+items[0]+"</a>, <a href='#two'>"+items[1]+"</a>";
                        friends_line += " are also in Baby Step " + step;
                    } else if (items.length == 3) {
                        friends_line = "<a href='#two'>"+items[0]+"</a>, <a href='#two'>"+items[1]+"</a>";
                        friends_line += ", and 1 other friend are also in Baby Step " + step;
                    } else if (items.length >= 4) {
                        friends_line = "<a href='#two'>"+items[0]+"</a>, <a href='#two'>"+items[1]+"</a>";
                        friends_line += ", and 2 other friends are also in Baby Step " + step;
                    }
                    $('#friends' + step).empty();
                    $('#friends' + step).append(friends_line);
                }
            }, statusCode: {
                404: function() {
                    alert('There was a problem getting friends data.');
                }
            }
        });
    });
    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
});
