
var babySteplOne = 1;

function callJsonData(){

	
}

function changeBabySteps(newIndex){
	
	var newPosition = ( window.panelWidth * newIndex ) * -1;
	var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.content').height() + 0;

	$('.sp .items span').removeClass('selected');
	$('.sp .items span:nth-child('+(newIndex+1)+')').addClass('selected');

	$('.sp .baby-Step-inner-container').animate({left:newPosition},400);
	$('.sp .baby-step-container').animate({height:newPanelHeight},400);

}

$(document).ready(function(panelWidth = 0){

	window.panelWidth = $('.sp').width();

	$('.baby-step-container .panel').each(function(index){

		$(this).css({'width':window.panelWidth+'px','left':(index*window.panelWidth)+'px'});

		$('.sp .baby-Step-inner-container').css('width',(index+1)*window.panelWidth+'px');

	});
		$('.sp .items span').each(function(){
		$(this).on('click', function(){
			changeBabySteps( $(this).index() );
		});
	});
		$('.sp .items span:nth-child('+window.babySteplOne+')').trigger('click');
});


