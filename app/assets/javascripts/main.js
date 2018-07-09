
$(document).ready(function() {

  $('.babysteps ul li a').click(function(e){
    e.preventDefault();
  
    var target = $(this).attr('href');
  
    $('.content').stop().animate({
      scrollTop: $(target).position().top
    }, 1000 );
  });
  
  $('.content').scroll(function() {
    var scrollDistance = $('.content').offset().top;

    $('.baby-step').each(function(i){
      if ($(this).position().top <= scrollDistance) {
        $('.babysteps ul li.current').removeClass('current')
        $('.babysteps ul li').eq(i).addClass('current')
      }
    });
  }).scroll();

  $.ajax({
     type: "GET",
     url: "baby-steps.json",
     dataType: 'json',
     success: function(data) {

      var friends = data.friends;

       for(var i = 0; i < friends.length; i++) {
         var array = friends[i];


         if(array.babyStep == 1) {
           $("#1 .friends").append(array.firstName + ' ' + array.lastName);
         }
         if(array.babyStep == 2) {
           $("#2 .friends").append(array.firstName + ' ' + array.lastName + ' is on this step.');
         }
         if(array.babyStep == 3) {
           $("#3 .friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 4) {
           $("#4 .friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 5) {
           $("#5 .friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 6) {
           $("#6 .friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 7) {
           $("#7 .friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
       }
     }
    })
});



