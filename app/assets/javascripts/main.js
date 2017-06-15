(function($){
  "use strict";

  $(function(){

    $('.baby-step').click(function(e){
      $('.active').removeClass('active');
      $(this).addClass('active');
    });

    $.ajax('../baby-steps.json').done(function(info){

      var friendsObj = info.friends;

      var sortedObj = _.groupBy(friendsObj, 'babyStep');

      var friendArray = [];

      _.mapObject(sortedObj, function(friend, step){
        friendArray.push(friend);

      });

      sortFriends(friendArray);


    });


    function sortFriends(info){

      var names;

      var listOfFriends = _.map(info, function(friends, step){

        names = _.map(friends, function(friend, step){

          return friend.firstName + " " + friend.lastName;
        });

        return names;
      });


      appendFriends(listOfFriends);

    };


    function appendFriends(friends){

      console.log('here!', friends);
      $('#Step2 .step-footer').html("<span><a href='#' class='friend' >" + friends[0].slice(0, 2) + "</a>  is on this step. </span>");

      $('#Step3 .step-footer').html("<span><a href='#' class='friend' >" + friends[1][0] + "</a>, <a href='#' class='friend' > " + friends[1][1] + "</a> and " + (friends[1].length - 2 ? friends[1].length - 2 : " ") + " are on this step.</span>");

      $('#Step4 .step-footer').html("<span><a href='#' class='friend' >" + friends[2][0] + "</a>, <a href='#' class='friend' > " + friends[2][1] + "</a> and " +  (friends[2].length - 2 ? friends[2].length - 2 : 0) +" Other Friends are on this step.</span>");

      $('#Step5 .step-footer').html("<span><a href='#' class='friend' >" + friends[3][0] + "</a>, <a href='#' class='friend' > " + friends[3][1] + "</a> and " +  (friends[3].length - 2 ? friends[3].length - 2 : " ") +" Other Friends are on this step.</span>");

      $('#Step6 .step-footer').html("<span><a href='#' class='friend' >" + friends[4][0] + "</a>, <a href='#' class='friend' > " + friends[4][1] + "</a> and " +  (friends[4].length - 2 ? friends[4].length - 2 : " ") +" Other Friends are on this step.</span>");

      $('#Step7 .step-footer').html("<span><a href='#' class='friend' >" + friends[5][0] + "</a>, <a href='#' class='friend' > " + friends[5][1] + "</a> and " + (friends[5].length - 2 ? friends[5].length - 2 : " ") +" Other Friends are on this step.</span>");

    }


  });


  var $root = $('.step-contents');
  $('a').click(function(e) {
    e.preventDefault();

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function (e) {
        window.location.hash = href;
    });
  });

})(jQuery);
