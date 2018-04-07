
function getStepFriends(stepNumber)
{
    //make ajax call to fetch all friends
    $.get("baby-steps.json", function(data, status)
    {
        var friends = data.friends;

        //separate the friends that are in the given step
        var stepFriends = [];

        for (var i = 0; i < friends.length; i++)
        {
            if (friends[i].babyStep == stepNumber)
            {
                stepFriends.push(friends[i]);
            }
        }

        if (stepFriends.length > 0)
        {
            //display the friends' names
            var text = "";

            switch (stepFriends.length) {
                case 1:
                    text = "<span>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</span>";
                    text += " is also in Baby Step " + stepNumber;
                    break;
                case 2:
                    text = "<span>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</span>";
                    text += " and ";
                    text += "<span>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</span>";
                    text += " are also in Baby Step " + stepNumber;
                    break;
                case 3:
                    text = "<span>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</span>";
                    text += ", ";
                    text += "<span>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</span>";
                    text += ", and 1 other friend are also in Baby Step " + stepNumber;
                    break;
                default:
                    text = "<span>" + stepFriends[0].firstName + " " + stepFriends[0].lastName + "</span>";
                    text += ", ";
                    text += "<span>" + stepFriends[1].firstName + " " + stepFriends[1].lastName + "</span>";
                    text += ", and " + (stepFriends.length - 2) +" other friends are also in Baby Step " + stepNumber;
                    break;
            }

            $("#ajax-content").html(text);
        }

    });
}