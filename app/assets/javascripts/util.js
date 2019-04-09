window.onload = function() {
    selectBabyStep('baby1');
}

function removeDOMChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function setContent(babyStepContent) {
    if (babyStepContent) {
        var titleNode = document.getElementById('titleText');
        removeDOMChildren(titleNode);
        titleNode.appendChild(document.createTextNode(babyStepContent.title));
        var subtitleNode = document.getElementById('subtitleText');
        removeDOMChildren(subtitleNode);
        subtitleNode.appendChild(document.createTextNode(babyStepContent.subtitle));
        var descriptionNode = document.getElementById('descriptionText');
        removeDOMChildren(descriptionNode);
        for(var i = 0; i < babyStepContent.paragraphs.length; i++) {
            var paragraph = document.createElement("p");
            var textNode = document.createTextNode(babyStepContent.paragraphs[i]);
            paragraph.appendChild(textNode);
            descriptionNode.appendChild(paragraph);
        }
        document.getElementById('imageIcon').src = babyStepContent.imagePath;
    }
}

function setUserNodes(user1, user2, delimiterText) {
    var userSpan1 = document.createElement("span");
    userSpan1.className = "userLink";
    var userTextNode1 = document.createTextNode(user1.firstName + " " + user1.lastName);
    userSpan1.appendChild(userTextNode1);
    friendContainer.appendChild(userSpan1);
    if (user2) {
        var userSpan2 = document.createElement("span");
        var userSpan3 = document.createElement("span");
        userSpan2.className = "userLink";
        userSpan3.className = "userText";
        var userTextNode2 = document.createTextNode(user2.firstName + " " + user2.lastName);
        var userTextNode3 = document.createTextNode(delimiterText);
        userSpan2.appendChild(userTextNode2);
        userSpan3.appendChild(userTextNode3);
        friendContainer.appendChild(userSpan3);
        friendContainer.appendChild(userSpan2);
    }
}

function selectBabyStep(clickedId)
{
    var selectedArray = document.getElementsByClassName('tableButtonSelected');
    // Deselects old button
    for (var i = 0; i < selectedArray.length; i++) {
        if(selectedArray[i].id === clickedId) {
            return;
        } else {
            var babyStepNumberString = selectedArray[i].id.split("baby");
            var babyStepNumber = parseInt(babyStepNumberString[1], 10);
            var img = document.getElementById("img" + babyStepNumber);
            img.src = "assets/images/icons/individual/icons_small_bs"+ babyStepNumber + ".png";
            selectedArray[i].className = 'tableButton';
        }
    }
    setContent(getBabyStepContent(clickedId));
    document.getElementById(clickedId).className = 'tableButtonSelected';
    var babyStepNumberString = clickedId.split("baby");
        if (babyStepNumberString.length === 2) {
            var babyStepNumber = parseInt(babyStepNumberString[1], 10);
            var img = document.getElementById("img" + babyStepNumber);
            img.src = "assets/images/icons/individual/icons_small_bs"+ babyStepNumber + "_blue.png";
            $(function(){
                $.get( "baby-steps.json", function( data ) {
                    var matchingUsers = data.friends.filter(function(item) {
                        return babyStepNumber === item.babyStep;
                    });
                    var friendContainer = document.getElementById('friendContainer');
                    removeDOMChildren(friendContainer);
                    var messageString = "";
                    if (matchingUsers.length === 0) {
                        // no-op
                    } else if (matchingUsers.length === 1) {
                        setUserNodes(matchingUsers[0], null, null);
                        messageString = " is also in Baby Step " + babyStepNumber;
                    } else if (matchingUsers.length === 2) {
                        setUserNodes(matchingUsers[0], matchingUsers[1], " and ");
                        messageString = " are also in Baby Step " + babyStepNumber;
                    } else if (matchingUsers.length === 3) {
                        setUserNodes(matchingUsers[0], matchingUsers[1], ", ");
                        messageString = ", and 1 other friend are alo in Baby Step " + babyStepNumber;
                    } else {
                        setUserNodes(matchingUsers[0], matchingUsers[1], ", ");
                        messageString = ", and "+ (matchingUsers.length - 2) + " other friends are also in Baby Step " + babyStepNumber;
                    }
                    var span = document.createElement("span");
                    span.className = "userText";
                    var textNode = document.createTextNode(messageString);
                    span.appendChild(textNode);
                    friendContainer.appendChild(span);
                }, "json" );
            });
    }
}