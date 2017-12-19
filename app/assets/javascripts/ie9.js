$(function() {
  var radios = $('input[name="babySteps"]:radio')
  radios.change(function() {
    var index = radios.index(this)
    var duration = 350;

    var slider = $('#slider')
    var content = $('.content')

    var sliderTop = ((index) * 60) + index;
    var contentTop = (index) * 500;

    slider.animate({
      top: sliderTop + 'px'
    }, duration)

    content.animate({
      top: -(contentTop) + 'px'
    }, duration)
  })
});