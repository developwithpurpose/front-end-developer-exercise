jQuery(document).ready(function($){
	var contentSections = $('.step-content'),
    navigationItems = $('.step-links a'),
    pageData;

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


  function getPageData(url) {
    return $.ajax({
      url : url,
      type : 'GET',
      dataType:'json',
      success : function(data) {              
        data
      },
      error : function(request,error)
      {
          alert("Request: "+JSON.stringify(request));
      }
    });
  }

  $.get( "baby-steps.json", function( data ) {
    $count = 0;
    $friendStep = {};
    $.each(data.friends, function(index,item) {
      $step = item.babyStep;
      if($friendStep['step-'+$step]) {
        $friendStep['step-'+$step].push(item)
      } else {
        $friendStep['step-'+$step] = [];
        $friendStep['step-'+$step].push(item)
      }
    });

    $.each($friendStep, function(key, value) {
      $target = '#'+key + ' .step-message';
      value.length === 1
      ? $($target).append('<span>'+value[0].firstName + ' ' + value[0].lastName + '</span> is also in Baby Step 2')
      : value.length === 2
      ? $($target).append('<span>'+value[1].firstName + ' ' + value[1].lastName + '</span> and <span>' + value[0].firstName + ' ' + value[0].lastName + '</span> are also in Baby Step 3')
      : value.length === 3
      ? $($target).append('<span>'+value[0].firstName + ' ' + value[0].lastName + '</span>, <span>' + value[2].firstName + ' ' + value[2].lastName + '</span>, and 1 other friend are also in Baby Step 4')
      : value.length === 4
      ? $($target).append('<span>'+value[3].firstName + ' ' + value[3].lastName + '</span>, <span>' + value[2].firstName + ' ' + value[2].lastName + '</span>, and 2 other friends are also in Baby Step 5')
      : ''
    });
    $.each(contentSections, function(index,item) {
      item.setAttribute("data-height", Math.floor(item.offsetTop))
    });

  });

//  pageData = getPageData('baby-steps.json');
});