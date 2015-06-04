$(document).ready(onReady);
function onReady() {
"use strict";

$("#step-2").click(function changeStyle(){
	var oldSrc = "assets/images/icons/individual/icons_small_bs1_blue.png";
	var newSrc = "assets/images/icons/individual/icons_small_bs1.png";
	$(".chosen").addClass('baby-step').removeClass('chosen');
	$('#step-1 img[src="' + oldSrc + '"]').attr('src', newSrc);
	$(this).addClass('chosen').removeClass('baby-step');
	console.log("Youve clicked step 2");
	var list = $('#list');
	for (var i=0; i<list.length; i++){
		console.log('#list');//also try innerText
	}

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
