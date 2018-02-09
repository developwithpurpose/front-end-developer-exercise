$(function() {
    $( '.nav__link' ).on( 'click', function() {
        $('.nav__link').removeClass('nav--active');
        $(this).addClass('nav--active');
    });
});