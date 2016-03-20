'use strict';

(function () {
  'use strict';

  $.makeArray($('#left-sidebar').find('li')).map(function (value) {
    $('#' + value.getAttribute('id')).parent().click(function (event) {
      var clickedElement = $('#' + event.currentTarget.getAttribute('id'));
      var clickedIdNumber = parseInt(event.currentTarget.getAttribute('id').split("-")[1]);
      console.log(clickedIdNumber);
      clickedElement.find('li').addClass('active');
      clickedElement.siblings().find('li').removeClass('active');
      $('#transition-bar').css('top', 61 * (clickedIdNumber - 1) + 'px');
    });
  });
})();