$(document).ready(function(){
	var tabSelect = document.createElement('div'),
		tab1 = document.getElementById('tab1'),
		list = document.getElementById("side-bar-menu"),
		btnTxt = document.getElementsByClassName('side-bar-menu-text'),
		smImg = document.getElementsByClassName('sm-img');
	tabSelect.id = 'tabSelect';
	list.insertBefore(tabSelect, list.childNodes[0]);
	$('#tabSelect').animate({ top: 334 }, 0);
	$('#slideSelect').animate({ marginTop: 0 }, 400);
	curPos = 1;
	btnTxt[0].style.color = '#36abe1';
	smImg[0].src = 'assets/images/icons/individual/icons_small_bs1_blue.png';
	findFriends();
});

$(window).bind('hashchange', function() {
	var hash = window.location.hash,
		tabTop = 334,
		pos = 1,
		move = 0;

	clearBtnHighlights();
	if(hash === '#step1') {
		tabTop = 334;
		pos = 1;
		highlightBtn(0);
	}
	if(hash === '#step2') {
		tabTop = 394;
		pos = 2;
		highlightBtn(1);
	}
	if(hash === '#step3') {
		tabTop = 455;
		pos = 3;
		highlightBtn(2);
	}
	if(hash === '#step4') {
		tabTop = 516;
		pos = 4;
		highlightBtn(3);
	}
	if(hash === '#step5') {
		tabTop = 577;
		pos = 5;
		highlightBtn(4);
	}
	if(hash === '#step6') {
		tabTop = 638;
		pos = 6;
		highlightBtn(5);
	}
	if(hash === '#step7') {
		tabTop = 699;
		pos = 7;
		highlightBtn(6);
	}
	if(curPos < pos) {
		move = (curPos - pos) * -306;
	}
	else if(curPos > pos) {
		move = (pos - curPos) * 306;
	}
	$('#slideSelect').animate({ marginTop: move }, 0);
	$('#slideSelect').animate({ marginTop: 0 }, 400);
	$('#tabSelect').animate({ top: tabTop }, 400);

	curPos = pos;
});

function clearBtnHighlights(i) {
	if(i == undefined) {
		i = 0;
	}
	var btnTxt = document.getElementsByClassName('side-bar-menu-text'),
		smImg = document.getElementsByClassName('sm-img');
	btnTxt[i].style.color = '#9ba0a4';
	smImg[i].src = 'assets/images/icons/individual/icons_small_bs' + (i+1) + '.png';
	i++;
	if(i < 7) {
		clearBtnHighlights(i);
	}
}

function highlightBtn(i) {
	var btnTxt = document.getElementsByClassName('side-bar-menu-text'),
		smImg = document.getElementsByClassName('sm-img');
	btnTxt[i].style.color = '#36abe1';
	smImg[i].src = 'assets/images/icons/individual/icons_small_bs' + (i+1) + '_blue.png';	
}

function findFriends() {
	var xhr = new XMLHttpRequest();
	var url = "baby-steps.json";
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
		    var response = JSON.parse(xhr.responseText);
		    response.friends.sort(function(a, b) {
			    return a.lastName.localeCompare(b.lastName);
			});
		    organizeFriends(0, response.friends);
	    }
	}
	xhr.open("GET", url, true);
	xhr.send();
}

function organizeFriends(i, friends) {
	if(i === 0) {
		fstep1 = [];
		fstep2 = [];
		fstep3 = [];
		fstep4 = [];
		fstep5 = [];
		fstep6 = [];
		fstep7 = [];
	}
    if(i < friends.length) {
    	if(friends[i].babyStep === 1){
    		fstep1.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 2){
    		fstep2.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 3){
    		fstep3.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 4){
    		fstep4.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 5){
    		fstep5.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 6){
    		fstep6.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	if(friends[i].babyStep === 7){
    		fstep7.push(friends[i].firstName + ' ' + friends[i].lastName);
    	}
    	i++;
    	organizeFriends(i, friends);
    }
    else {
    	displayFriends();
    }
}

function displayFriends() {
	var friendContainer = document.getElementsByClassName('main-display-friends'),
		out = '',
		j = 0,
		plural = '';
	if(fstep1.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep1.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep1[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[0].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 1';
	}
	else if(fstep1.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep1.length; i++) {
		    out += '<a href="">' + fstep1[i] + '</a>';
			if(i === 0 && fstep1.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[0].innerHTML = out + plural +'also in Baby Step 1';
	}
	if(fstep2.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep2.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep2[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[1].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 2';
	}
	else if(fstep2.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep2.length; i++) {
		    out += '<a href="">' + fstep2[i] + '</a>';
			if(i === 0 && fstep2.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[1].innerHTML = out + plural +'also in Baby Step 2';
	}
	if(fstep3.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep3.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep3[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[2].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 3';
	}
	else if(fstep3.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep3.length; i++) {
		    out += '<a href="">' + fstep3[i] + '</a>';
			if(i === 0 && fstep3.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[2].innerHTML = out + plural +'also in Baby Step 3';
	}
	if(fstep4.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep4.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep4[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[3].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 4';
	}
	else if(fstep4.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep4.length; i++) {
		    out += '<a href="">' + fstep4[i] + '</a>';
			if(i === 0 && fstep4.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[3].innerHTML = out + plural +'also in Baby Step 4';
	}
	if(fstep5.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep5.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep5[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[4].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 5';
	}
	else if(fstep5.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep5.length; i++) {
		    out += '<a href="">' + fstep5[i] + '</a>';
			if(i === 0 && fstep5.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[4].innerHTML = out + plural +'also in Baby Step 5';
	}
	if(fstep6.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep6.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep6[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[5].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 6';
	}
	else if(fstep6.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep6.length; i++) {
		    out += '<a href="">' + fstep6[i] + '</a>';
			if(i === 0 && fstep6.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[5].innerHTML = out + plural +'also in Baby Step 6';
	}
	if(fstep7.length > 2) {
		out = '';
		j = 0;
		plural = 'Friend';
		for(i = 0; i < fstep7.length; i++) {
			if(i < 2) { out += '<a href="">' + fstep7[i] + '</a>, '; }
			else { j++; }
	    }
	    if(j > 1) { plural = 'Friends' }
	    friendContainer[6].innerHTML = out + 'and ' + j + ' Other ' + plural + ' are also in Baby Step 7';
	}
	else if(fstep7.length > 0) {
		out = '';
		plural = ' is ';
		for(i = 0; i < fstep7.length; i++) {
		    out += '<a href="">' + fstep7[i] + '</a>';
			if(i === 0 && fstep7.length > 1) { out += ' and '; plural = ' are '; } 
	    }
	    friendContainer[6].innerHTML = out + plural +'also in Baby Step 7';
	}
}
