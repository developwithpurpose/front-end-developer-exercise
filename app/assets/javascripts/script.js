var nav = document.getElementById("nav");

nav.style.opacity = "1";

var currentStep = 1;

for (var i = 1; i <= 7; i++) {
	nav.innerHTML += '<li onclick="clicked('+i+')" id="step-'+i+'-link">\
		Baby Step '+i+'\
		<span id="icon-'+i+'" style="background-position: 0 -'+((i-1)*25)+'px;"></span>\
	</li>';
}

document.getElementById("body").setAttribute("class", "javascript-on");
for (var i = 1; i <= 7; i++) {
	document.getElementById("bbs"+i).style.zIndex = (10-i);
	if (i > 1) {
		document.getElementById("bbs"+i).setAttribute("class", "hidden");
	}
}

function makeRequest() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			var json = JSON.parse(this.responseText);
			
			var names;
			var result;
			for (var i = 0; i < 7; i++) {
				names = [];
				result = "";
				for (var j = 0; j < json.friends.length; j++) {
					if (json.friends[j].babyStep == i+1) {
						names[names.length] = json.friends[j].firstName + ' ' + json.friends[j].lastName;
					}
				}
				if (names.length === 0) {
					continue;
				}
				result += '<span class="friends">';
				if (names.length === 1) {
					result += '<a href="#">' + names[0] + '</a> is';
				} else if (names.length === 2) {
					result += '<a href="#">' + names[0] + '</a> and <a href="#">' + names[1] + '</a> are';
				} else {
					result += '<a href="#">' + names[0] + '</a>, <a href="#">' + names[1] + '</a>, and ' + (names.length-2) + ' other ';
					result += (names.length-2 > 1) ? 'friends' : 'friend';
					result += ' are';
				}
				
				document.getElementById("bbs" + (i+1)).innerHTML += result + ' also in Baby Step ' + (i+1) + '</span>';
			}
    	}
	};
	request.open("GET", "baby-steps.json", true);
	request.send();
}

makeRequest();

var clicked = function(n) {
	document.getElementById("icon-"+currentStep).style.backgroundPosition = "0 -" + ((currentStep-1)*25) + "px";
	document.getElementById("icon-"+n).style.backgroundPosition = "0 -" + ((n-1)*25+175) + "px";
	
	document.getElementById("step-"+currentStep+"-link").setAttribute("class", "");
	document.getElementById("step-"+n+"-link").setAttribute("class", "selected");
	
	if (n > currentStep) {
		document.getElementById("bbs"+currentStep).transitionDuration = "1s";
		document.getElementById("bbs"+n).style.transitionDuration = "0s";
		setTimeout(function(){document.getElementById("bbs"+n).style.transitionDuration = "1s";}, 100);
	}
	
	document.getElementById("bbs"+currentStep).setAttribute("class", "hidden");
	document.getElementById("bbs"+n).setAttribute("class", "");
	
	currentStep = n;
}

clicked(currentStep);

