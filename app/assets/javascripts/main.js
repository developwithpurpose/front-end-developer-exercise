var buttons = document.querySelectorAll(".buttonsContainer button");
var babySteps = document.querySelectorAll(" .babySteps");
var buttonImage = document.querySelectorAll(".button-image");

var friends = {};

$(document).ready(function() {
    $.ajax ({
        type: 'GET',
        url: './../baby-steps.json',
        success: function(data) {
            let friendData = data.friends.sort(SortByName);;

            friends = {};

            friendData.forEach(function(friend) {
                if (!friends[friend.babyStep - 1]) {
                    friends[friend.babyStep - 1] = []
                }
                friends[friend.babyStep - 1].push(friend)
            });
        }
    });
});

function SortByName(a, b) {
  var aName = a.lastName.toLowerCase();
  var bName = b.lastName.toLowerCase();
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

function showSteps (step, color) {
    var stepUp = step + 1;

    $(".friendList").html("");

    var friendString = "";

    if (friends[step]) {
        let joinWord = (friends[step].length === 1) ? "is" : "are";
        friends[step].forEach(function(friend) {
            friendString += `${friend.firstName} ${friend.lastName} and `;
        })

        var newFriends = friendString.substring(0, friendString.length - 5) + " " + `${joinWord} also in Baby Step ` + stepUp

        $(".friendList").html(newFriends);
    }


    buttons.forEach (function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
        node.style.fontWeight = "";
    });
    buttons[step].style.backgroundColor = color;
    buttons[step].style.color = "#36abe1";
    buttons[step].style.fontWeight = "600";

    babySteps.forEach (function (node) {
        node.style.display = "none";
    });
    babySteps[step].style.display = "block";

    buttonImage.forEach(function (node) {
         node.style.content= "";
    });
    buttonImage[step].style.content = "url('assets/images/icons/individual/icons_small_bs" + stepUp+ "_blue.png')";
}

showSteps(0,'white');
