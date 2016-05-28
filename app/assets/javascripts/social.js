$(function() {
	init();
	friendString=getFriends();
	$(".menuItem").click(function(e) {
		e.preventDefault();
		target=$(e.currentTarget).children('a').attr("href");
		page(target, e.currentTarget);
		getFriends(target);
	})
})

function init() {
	getFriends();
	initAnim();
}

function getFriends(step) {
	var step=step||window.location.href;
	step=step.split("babyStep")[1];
	if (typeof(step)=="undefined") {
		step=1;
	}
	friendsInStep=[];
	$.getJSON("/baby-steps.json", function(data) {
		babySteps=data;
		for (i in babySteps.friends) {
			if (babySteps.friends[i].babyStep==step) {
				friendsInStep.push(babySteps.friends[i]);
			}
		}
		friendsInStep.sort(function(a,b) {
			return a.lastName>b.lastName?a=1:a=-1;
		})
		friendString="";
		for (i in friendsInStep) {
			friend=friendsInStep[i].firstName+" "+friendsInStep[i].lastName;
			if (i==0&&friendsInStep.length==1) {
				friendString+="<a href='#"+friend+"'>"+friend+"</a> is also in Baby Step "+step;
			} else if (i==0) {
				friendString+="<a href='#"+friend+"'>"+friend+"</a>";
			} else if (i==1&&friendsInStep.length==2) {
				friendString+=" and <a href='#"+friend+"'>"+friend+"</a> are also in Baby Step "+step;
			} else if (i==1&&friendsInStep.length>2) {
				friendString+=", <a href='#"+friend+"'>"+friend+"</a> and "+(friendsInStep.length-2)+" friends are also in Baby Step "+step;
			} else continue;
		}
		$("#friendsInStep").html(friendString);
		$("#friendsInStep").appendTo($("#babyStep"+step));
	})
}