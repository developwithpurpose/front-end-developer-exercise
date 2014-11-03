/*
 * Author Drew Simons
 */

var panelWidth = 0;
var startPanel = 1;

$(document).ready(function(){
		
	var friends;
	
	window.panelWidth = $('.sp').width();	
	$('.sp .panel_container .panel').each(function(index){		
		$(this).css({'width':window.panelWidth+'px','left':(index*window.panelWidth)+'px'});		
		$('.sp .panels').css('width',(index+1)*window.panelWidth+'px');		
	});
	
	$('.tabs li').each(function(){		
		$(this).on('click', function(){			
			changePanels( $(this).index() );			
		});		
	});
		
	$('.tabs li:nth-child('+window.startPanel+')').trigger('click');
	
});

function changePanels(newIndex){
	
	var newPanelPosition = (window.panelWidth * newIndex)* -1;
	var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;
	
	$('.sp .panels').animate({left:newPanelPosition},1000);
	$('.sp .panel_container').animate({height:newPanelHeight},1000);
	
	$('.tabs li').removeClass('selected');
	$('.tabs li:nth-child('+(newIndex+1)+')').addClass('selected');
	
}
