function showDiv(e) {

	var target = e.target;
	var stepNum = target.id.replace("step","");

	// For IE9
	if(!hasClass(e.target,'button')) {
		target = target.parentElement;
	}

	// Deselect current button 
	var navElements = document.getElementById('navbar').querySelectorAll('div.button');
	for (var i = 0, max = navElements.length; i < max; i++) {
		// Deselect text
		if(navElements[i].classList.contains('selected')){
			navElements[i].classList.remove('selected');
		}
		// Deselect image
		if(navElements[i].querySelector('div.smIcon') && (navElements[i].querySelector('div.smIcon')).classList.contains('step' + (i+1) + 'img-sm-bl')){
			(navElements[i].querySelector('div.smIcon')).classList.remove('step' + (i+1) + 'img-sm-bl');
			(navElements[i].querySelector('div.smIcon')).classList.add('step' + (i+1) + 'img-sm');

		}

	}
	// Now, select the clicked button
	target.classList.add('selected');
	// and highlight the button image
	target.querySelector('div.smIcon').classList.remove(target.id + 'img-sm');
	target.querySelector('div.smIcon').classList.add(target.id + 'img-sm-bl');

	// Hide previous section content
	var elements = document.querySelectorAll('div.step-content');
	// Replace forEach for IE9
	for(element in elements) {
		if(typeof elements[element].classList !== "undefined") {
			elements[element].classList.add('hidden');
	 	}
	}
	// Now, show the selected content
	document.getElementById(target.id + "Content").classList.remove('hidden');

	// Now, check to see which friends are on the step and update the page. This may change, so it should be checked each time
	document.getElementById("friends" + stepNum).innerHTML = getFriends(stepNum);

	// Last, animate fade-in transition to new content	 
	document.getElementById("step" + stepNum + "Content").classList.remove('animate');
	document.getElementById("step" + stepNum + "Content").classList.add('animate');

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
		var name = friends[person].firstName + " " + friends[person].lastName;
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

	// Hide all but startng baby step content on startup
	var contentElements = document.querySelector('div.section-content').querySelectorAll('div.step-content');
	var counter = 0;
	for(element in contentElements) {
		if(counter > 0 && typeof contentElements[element].classList !== "undefined") {
			contentElements[element].classList.add('hidden');
	 	}
	 	counter++;
	}

}

// IE9 function from https://stackoverflow.com/questions/5085567/hasclass-with-javascript
function hasClass( target, className ) { return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className); }
