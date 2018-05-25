import $ from 'jquery';

export default $(function() {
  $('.navigation__list--item').click(function(e) {
    e.preventDefault();
    $('.navigation__list--item').removeClass('active');
    $(this).addClass('active');
  });

  $('.navigation__list--link').click(function() {
    $('.navigation__list--link').removeClass('active');
    $(this).addClass('active');
  });

  $('.navigation__list--item').on('click', function(e) {
    var paragraphId = $(this).attr('data-paragraphid');
    $('.description__block').hide();
    $('#' + paragraphId).fadeIn(1000);
  });
});
