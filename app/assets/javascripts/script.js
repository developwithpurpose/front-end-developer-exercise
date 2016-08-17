$(function () {
    $("input[type=radio]").change(function () {
        var rad = $(this);
        var name = $(this).parent().children("label").children(".labelText").text();
        var number = name.slice(10, 11);
        var friendsArray = [];
        var count = 0;
        var output = "";
        $.ajax({
            url: "baby-steps.json",
            success: function (result) {
                $.each(result.friends, function (i, v) {
                    if (v.babyStep == number) {
                        friendsArray.push(v.firstName + " " + v.lastName);
                        count++;
                    }
                });
                friendsArray.forEach(function (entry) {
                    output = output + "<a>" + entry + "</a>, ";
                });
                output = output.slice(0, output.length - 2);

                if (count > 0 && count != 1) {
                    output = output + " are on this step!";
                } else if (count === 1) {
                    output = output + " is on this step!";

                } else {
                    output = "No friends on this step.";
                }
                rad.parent().children("article").children('.dynamic').html(output);
            }
        });

        $('input[type=radio]').each(function () {
            if (this.checked) {
                var src = $(this).parent().children("label").children("img").attr("src").match(/[^\.]+/) + "_blue.png";
                $(this).parent().children("label").children("img").attr("src", src);
            } else {
                var src = $(this).parent().children("label").children("img").attr("src").replace("_blue.png", ".png");
                $(this).parent().children("label").children("img").attr("src", src);
            }

        });



    });





});