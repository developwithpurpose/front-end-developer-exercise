(function($, window, document) {
  "use strict";

  //document ready
  $(function() {
    $('body').removeClass('no-js');
  });

  //tabs-nav click listener
  $('.tabs-nav').on('click', 'li', function(e) {
    var $tabsBody = $('.tabs-body');
    var $this = $(this);
    var href = $this.children().first('a').attr('href');

    //animate tabbed content transitions
    if ( !isElementInViewport($(href)) ) {
      $tabsBody.animate({
        opacity: 0
      }, 150, function() {
        $(href)[0].scrollIntoView();
        $tabsBody.animate({
          opacity: 1
        }, 150);
      }); 
    }

    //update active nav li 
    if ( !$this.hasClass('active') ) {
      $('.tabs-nav').find('li').removeClass('active');
      $('.tabs-link-icon').removeClass('blue');
      $this.addClass('active');
      $this.children('.tabs-link-icon').addClass('blue');
    }

    e.preventDefault();
  });

  //https://gist.github.com/davidtheclark/5515733
  function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}(window.jQuery, window, document));