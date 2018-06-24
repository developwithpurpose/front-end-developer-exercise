function retrieveJson(val) {

    const data_file = "../baby-steps.json"
    let http_request = new XMLHttpRequest()

    try {

        http_request = new XMLHttpRequest()

    } catch (e) {
        try {
            http_request = new ActiveXObject("Mxmm12.XMLHTTP")
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert(" Browser is broken")
                return false
            }
        }
    }
    http_request.onreadystatechange = () => {
        if (http_request.readyState == 4) {
            let selectedStep = val.getAttribute("value");

            let jsonObj = JSON.parse(http_request.responseText)
            let friends = jsonObj["friends"]

            let selectedFriends = [];
            for (i = 0; i < friends.length; i++) {

                if (friends[i]["babyStep"] == selectedStep) {
                    console.log(friends[i])
                    selectedFriends.push(friends[i])
                }
            }

            firstName = document.createElement("a");
            if (selectedFriends.length == 1) {
                console.log(selectedFriends[0])
                document.getElementById(selectedStep).innerHTML = "<a class='name-links' href='#'>" + selectedFriends[0].firstName + "</a>" + " " + "is on this step";

            } else if (selectedFriends.length == 2) {
                document.getElementById(selectedStep.toString()).innerHTML = "<a class='name-links' href='#'>" + selectedFriends[0].firstName + "</a>" + " " + "and " + " " + "<a class='name-links' href='#'>" + selectedFriends[1].firstName + "</a>" + " " + "are on this step";
            } else if (selectedFriends.length == 3) {
                document.getElementById(selectedStep.toString()).innerHTML = "<a class='name-links' href='#'>" + selectedFriends[0].firstName + "</a>" + " " + "and " + " " + "<a  class='name-links' href='#'>" + selectedFriends[1].firstName + "</a>" + " " + "and one other friend is on this step";
            } else if (selectedFriends.length > 3) {
                document.getElementById(selectedStep.toString()).innerHTML = "<a class='name-links' href='#'>" + selectedFriends[0].firstName + "</a>" + ", " + "<a class='name-links' href='#'>" + selectedFriends[1].firstName + "</a>" + " " + "and" + " " + "<a class='name-links' href='#'>" + (selectedFriends.length - 2) + "</a>" + " " + "Other friends are on this step";
            } else {
                document.getElementById(selectedStep.toString()).innerHTML = "You are the only one on this step"
            }
        }
    }

    http_request.open("GET", data_file, true)
    http_request.send()
    return false;
}