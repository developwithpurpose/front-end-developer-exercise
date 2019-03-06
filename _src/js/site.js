jQuery(document).ready(function($){
	var contentSections = $('.step-content'),
    navigationItems = $('.step-links a');

    $('.progress-bar').addClass('active');
    $(navigationItems[0]).addClass('active');

    $.each(contentSections, function(index,item) {
      item.setAttribute("data-height", Math.floor(item.offsetTop))
    });

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        navigationItems.removeClass('active');
        $parentTop = Math.floor($('.step-links').offset().top);
        $linkTop = Math.floor($(this).offset().top);
        $distance = $linkTop - $parentTop; 
        $(this).addClass('active');
        $('.progress-bar').animate(
          {
            top: $distance
          }, 600
        );
        smoothScroll($(this.hash));
    });

	function smoothScroll(target) {
    myID = '#'+target[0].id;
    ceil = '.scroll-pane';
    child = $(myID);
    parent = $(myID).parent();
    childPos = child.data('height');
    parentPos = Math.floor( parent.offset().top );
    topValue = childPos - parentPos

    $('.scroll-pane').animate(
      {scrollTop: topValue },
      600
    );
  }
});