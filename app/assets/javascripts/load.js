function showDiv(e) {
	// Deselect current button 
	var navElements = document.getElementById('navbar').querySelectorAll('div.button');
	for (var i = 0, max = navElements.length; i < max; i++) {
		// Deselect text
		if(navElements[i].classList.contains('selected')){
			navElements[i].classList.remove('selected');
		}
		// Deselect image
		// NOT FINDING OTHERS...
		if(navElements[i].querySelector('div.smIcon') && (navElements[i].querySelector('div.smIcon')).classList.contains('step' + (i+1) + 'img-sm-bl')){
			(navElements[i].querySelector('div.smIcon')).classList.replace('step' + (i+1) + 'img-sm-bl', 'step' + (i+1) + 'img-sm');
		}

	}
	// Now, select the clicked button
	e.target.classList.add('selected');
	// and highlight the button image
	e.target.querySelector('div.smIcon').classList.replace(e.target.id + 'img-sm', e.target.id + 'img-sm-bl');

	// Hide previous section content
	document.querySelectorAll('div.step-content').forEach(function(element) {
	 	element.classList.add('hidden');
	});
	// Now, show the selected content
	document.getElementById(e.target.id + "Content").classList.remove('hidden');

	// Now, check to see which friends are on the step and update the page. This may change, so it should be checked each time
	let stepNum = e.target.id.replace("step","");
	document.getElementById("friends" + stepNum).innerHTML = getFriends(stepNum);
}

function getFriends (stepNumber) {
	var data = JSON.parse(getRequest('/api/friends/' + stepNumber));
	return formatFriends(stepNumber, data);
}

function formatFriends(stepNumber, data) {

	var numFriends = data.friends.length;

	if(numFriends < 1) {
		//if 0 friends, then don't show any message
	    return "";
	} else if (numFriends == 1) {
		// if 1 friend, then show "Paul Taylor is also in Baby Step 2"
		return processNames(numFriends, data.friends) + " is also in Baby Step " + stepNumber;
	} else if (numFriends == 2) {
	    // if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
	    return processNames(numFriends, data.friends) + " are also in Baby Step " + stepNumber;
	} else if (numFriends == 3) {
	    // if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
	    return processNames(numFriends, data.friends) + " and 1 other friend are also in Baby Step " + stepNumber;
	} else if (numFriends >= 4) {
		// if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
		return processNames(numFriends, data.friends) + " and " + (numFriends - 2) + " other friends are also in Baby Step " + stepNumber;
	}
}

function processNames(numFriends, friends) {

	var friendText = "";
	var joinStr = ", ";
	var counter = 0;
	if (numFriends == 2) {
		joinStr = " and ";
	} 
	for(person in friends) {
		let name = friends[person].firstName + " " + friends[person].lastName;
		name = '<a href=\"\#\">' + name + '</a>';
		if(numFriends == 1) {
			return name;
		} 
		if(counter > 1) {
			return friendText;
		}
		if(counter == 1) {
			friendText += joinStr;
		}
		friendText += name; 
		counter++;
	}
	return friendText;
}

function getRequest(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return req.responseText;          
}

window.onload = function() {
	document.getElementById("step1").addEventListener('click',showDiv);
	document.getElementById("step2").addEventListener('click',showDiv);
	document.getElementById("step3").addEventListener('click',showDiv);
	document.getElementById("step4").addEventListener('click',showDiv);
	document.getElementById("step5").addEventListener('click',showDiv);
	document.getElementById("step6").addEventListener('click',showDiv);
	document.getElementById("step7").addEventListener('click',showDiv);

	// Update the first friends section on start up
	document.getElementById("friends" + 1).innerHTML = getFriends(1);
}

