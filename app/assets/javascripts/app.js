$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('.babySteps').animate({
          scrollTop: target.position().top
        }, 720);
        $(".slider").animate({
          top: $(this).position().top,
          height: $(this).height()
        }, 720);
        return false;
      }
    }
  });
});

$('a[href*="#"]:not([href="#"])').click(function() {
  $("[href]").each(function() {
    $(this).removeClass("active");
  });
  $(this).addClass("active");
});

$.ajax('../../baby-steps.json').done(function(friendList){
  var data = friendList.friends

  var sorted = _.chain(data)
                .groupBy("babyStep")
                .pairs()
                .map(function (currentItem) {
                  return _.object(_.zip(["babyStep", "friends"], currentItem));
                })
                .value();
  console.log(sorted);

  sorted.forEach(function(current, index, array){
    if (babyStep == ) {
  
    }
    $('.babyStep').append(`<p>${ arr.length }</p>`
      `<p class='friends'<a href='#'>${ arr }</a> and ${ also } are on this step</p>`
    );
  })
});
