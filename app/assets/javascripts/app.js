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
    , stepped = _.chain(data)
                .groupBy("babyStep")
                .pairs()
                .map(function (currentItem) {
                  return _.object(_.zip(["babyStep", "friends"], currentItem));
                })
                .value();

  $('.babyStep').each(function(){
    var id = $(this)
             .attr('id')
             .slice(-1)
      , myObject = [];

    if (stepped[id-2]) {
      $.each(stepped[id-2].friends, function(index, element){

        myObject.push({
          last : element.lastName,
          first : element.firstName
        })
      })
    };

    myObject = myObject.sort(function (a, b) {
      return a.last.localeCompare( b.last );
    })

    if (myObject.length == 1) {
      $(this).append(
        `<p class='friends'><a href='#'>${ myObject[0].first } ${ myObject[0].last }</a> is also in Baby Step ${ id }</p>`
      );
    } else if (myObject.length == 2) {
      $(this).append(
        `<p class='friends'><a href='#'>${ myObject[0].first } ${ myObject[0].last }</a> and <a href='#'>${ myObject[1].first } ${ myObject[1].last }</a> are also in Baby Step ${ id }</p>`
      );
    } else if (myObject.length == 3) {
      $(this).append(
        `<p class='friends'><a href='#'>${ myObject[0].first } ${ myObject[0].last }</a>, <a href='#'>${ myObject[1].first } ${ myObject[1].last }</a>, and 1 Other Friend are also in Baby Step ${ id }</p>`
      );
    } else if (myObject.length >= 3) {
      $(this).append(
        `<p class='friends'><a href='#'>${ myObject[0].first } ${ myObject[0].last }</a>, <a href='#'>${ myObject[1].first } ${ myObject[1].last }</a>, and ${ myObject.length-2 } Other Friends are also in Baby Step ${ id }</p>`
      );
    }

  });

});
