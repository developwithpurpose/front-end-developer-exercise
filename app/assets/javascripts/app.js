$('document').ready(function(){

	const li = $('li');
	const babyStep = $('.baby-step');

	li.on('click',function(){

	});

});


// on click event on all anchors with a class of scrollTo
$('a.scrollTo').on('click', function(){
  
  // data-scrollTo = section scrolling to name
  var scrollTo = $(this).attr('data-scrollTo');
  
  
  // toggle active class on and off. added 1/24/17
  $( "a.scrollTo" ).each(function() {
    if(scrollTo == $(this).attr('data-scrollTo')){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });
  
  
  // animate and scroll to the sectin 
  $('body, html').animate({
    
    // the magic - scroll to section
    "scrollTop": $('#'+scrollTo).offset().top
  }, 1000 );
  return false;
  
})
 