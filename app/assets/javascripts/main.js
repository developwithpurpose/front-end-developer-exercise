$(document).ready(onReady);
function onReady() {
"use strict";

$(".step-2").click(function changeStyle(){
	// var gradient =  "background-image",
 //    	"linear-gradient(
 //      		to right, 
 //      		#ebeced, #d1d5d6
 //    	)";
	var oldSrc = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc = "assets/images/icons/individual/icons_small_bs1.png";
	$('.step-1').css("color","#9ba0a4");
	// $('.step-1').css(gradient);
	$('.step-1 img[src="' + oldSrc + '"]').attr('src', newSrc);
	console.log("Youve clicked step 2");
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
