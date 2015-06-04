$(document).ready(onReady);
function onReady() {
"use strict";

$("#step-2").click(function changeStyle(){
	//this changes the styling of the first tab
	var oldSrc = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc = "assets/images/icons/individual/icons_small_bs1.png";
	$(".first-chosen").addClass('baby-step').removeClass('first-chosen');
	$('#step-1 img[src="' + oldSrc + '"]').attr('src', newSrc);
	$(this).addClass('chosen').removeClass('baby-step');
	var list = $('#list');
	for (var i=0; i<list.length; i++){
		console.log(list[i]);
		for(var i=0; i<list.length; i++){
			console.log(this);//gets the clicked element
			console.log(this.innerHTML);
		var oldSrc = "assets/images/icons/individual/icons_small_bs2.png";
		var newSrc = "assets/images/icons/individual/icons_small_bs2_blue.png";
		$('img[src="' + oldSrc + '"]').attr('src', newSrc);
		};
	}
	//this is to change the title
	$("#title").css({"height":"0"});
	$("#title2").css({"height":"5em"});
	//this changes the text of #content
	$("#content p").html("List your debts, excluding the house, in order. The smallest balance should be your number one priority. Dont worry about interest rates unless two debts have similar payoffs. If thats the case, then list the higher interest rate debt first."+
		"<br>"+"<br>"+
		"The point of the debt snowball is imply this: You need some quick wins in order to stay pumped about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head nowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.");
	});

$(".step-3").click(function changeStyle(){
	console.log("Youve clicked step 3");	
});
$(".step-4").click(function changeStyle(){
	console.log("Youve clicked step 4");	
});
$(".step-5").click(function changeStyle(){
	console.log("Youve clicked step 5");	
});
$(".step-6").click(function changeStyle(){
	console.log("Youve clicked step 6");	
});
$(".step-7").click(function changeStyle(){
	console.log("Youve clicked step 7");	
});
}	
