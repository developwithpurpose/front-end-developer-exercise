//declare variables to select the tabs on left of page
var tabs = document.querySelectorAll(".step-tab");
var step = document.querySelectorAll(".step-container");
var dynamicDisplay = document.querySelectorAll(".dynamic-content");
var friendsString = [];


if (!friendsString.length) {
    dynamicDisplay[0].textContent = "";
} else if (friendsString.length === 1) {
    dynamicDisplay[0].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + "</a>" + " is also in Baby Step 1";
} else if (friendsString.length === 2) {
    dynamicDisplay[0].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " are also in Baby Step 1";
} else if (friendsString.length === 3) {
    dynamicDisplay[0].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " and " + (friendsString.length - 2) + " other friend are also in Baby Step 1";
} else {
    dynamicDisplay[0].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " and " + (friendsString.length - 2) + " other friends are also in Baby Step 1";

}




var friends = [
    {
        "firstName": "Paul",
        "lastName": "Taylor",
        "babyStep": 2
    },
    {
        "firstName": "Sharon",
        "lastName": "Thomas",
        "babyStep": 3
    },
    {
        "firstName": "Thomas",
        "lastName": "Harris",
        "babyStep": 3
    },
    {
        "firstName": "Deborah",
        "lastName": "Lee",
        "babyStep": 4
    },
    {
        "firstName": "Mark",
        "lastName": "Young",
        "babyStep": 4
    },
    {
        "firstName": "Shirley",
        "lastName": "Perez",
        "babyStep": 4
    },
    {
        "firstName": "Joseph",
        "lastName": "Lee",
        "babyStep": 5
    },
    {
        "firstName": "Mary",
        "lastName": "White",
        "babyStep": 5
    },
    {
        "firstName": "Matthew",
        "lastName": "Garcia",
        "babyStep": 5
    },
    {
        "firstName": "Patricia",
        "lastName": "Allen",
        "babyStep": 5
    },
    {
        "firstName": "Larry",
        "lastName": "Robinson",
        "babyStep": 6
    },
    {
        "firstName": "Kimberly",
        "lastName": "Lopez",
        "babyStep": 6
    },
    {
        "firstName": "Jose",
        "lastName": "Martinez",
        "babyStep": 6
    },
    {
        "firstName": "Deborah",
        "lastName": "Walker",
        "babyStep": 6
    },
    {
        "firstName": "Joseph",
        "lastName": "Lopez",
        "babyStep": 6
    },
    {
        "firstName": "Dorothy",
        "lastName": "Moore",
        "babyStep": 7
    },
    {
        "firstName": "Jose",
        "lastName": "Jackson",
        "babyStep": 7
    },
    {
        "firstName": "Karen",
        "lastName": "Lee",
        "babyStep": 7
    },
    {
        "firstName": "Paul",
        "lastName": "Taylor",
        "babyStep": 7
    },
    {
        "firstName": "Amy",
        "lastName": "Gonzalez",
        "babyStep": 7
    },
    {
        "firstName": "Richard",
        "lastName": "Martinez",
        "babyStep": 7
    }
    ];





for (let i = 0; i < tabs.length; i++) {


    tabs[i].addEventListener("click", function () {
        friendsString = [];
        event.preventDefault();
        for (var j = 0; j < tabs.length; j++) {
            ////hide other divs
            step[j].classList.add("hidden");
            tabs[j].classList.remove("active");
        }

        this.classList.add("active");


        step[i].classList.remove("hidden");


        for (var fIndex = 0; fIndex < friends.length; fIndex++) {
            if ((friends[fIndex].babyStep - 1) === i) {
                friendsString.push(friends[fIndex].firstName + " " + friends[fIndex].lastName);

            }

        }

        if (!friendsString.length) {
            dynamicDisplay[i].textContent = "";
        } else if (friendsString.length === 1) {
            dynamicDisplay[i].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + "</a>" + " is also in Baby Step " + (i + 1);
        } else if (friendsString.length === 2) {
            dynamicDisplay[i].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " are also in Baby Step " + (i + 1);
        } else if (friendsString.length === 3) {
            dynamicDisplay[i].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " and " + (friendsString.length - 2) + " other friend are also in Baby Step " + (i + 1);
        } else {
            dynamicDisplay[i].innerHTML = "<a class='step-friends' href=#>" + friendsString[0] + ", " + friendsString[1] + "</a>" + " and " + (friendsString.length - 2) + " other friends are also in Baby Step " + (i + 1);

        }
    });

}
