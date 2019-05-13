$(function() {;
  $('.nav-tab').click(function () {
    for(var i=1; i<=7; i++) {
      $('.baby-step-' + i).addClass('hide');
    }

    $('.baby-step-' + this.value).removeClass('hide');
  });
});
