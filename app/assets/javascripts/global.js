/***********************************
 * Global JS File
 * Contains all scripts common to the
 * entire site.
 * Created May 15, 2015
 **********************************/


// JQuery Document Ready
$(document).ready(function(){

	// Nav bar link clicks
	$('.baby-steps-nav').on('click', '.link-baby-step', function(e){
		e.preventDefault();
		var linkClicked = $(e.currentTarget);
		var id = linkClicked.attr('href');
		// remove old content, show new content
		$('.baby-step').each(function(){
			if($(this).is(":visible")){
				$(this).toggle('slide', 200, function(){
					$(id).toggle('slide', 200);
				});
			}
		});
		// turn off old link, turn on new link
		$('.link-baby-step').each(function(){
			var link = $(this);
			if(link.parents('li').hasClass("on")){
				link.toggle('slide', {direction: 'right'}, 200, function(){
					link.parents('li').removeClass('on');
					link.toggle('slide', {direction: 'right'}, 200);
				});
			}
		});
		linkClicked.toggle('slide', {direction: 'right'}, 200, function(){
			linkClicked.parents('li').addClass('on');
			linkClicked.toggle('slide', {direction: 'right'}, 200);
		});
	});

});
