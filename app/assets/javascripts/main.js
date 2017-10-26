
$(document).ready(function() {

  $.ajax({
     type: "GET",
     url: "baby-steps.json",
     success: function(data) {

       for(var i = 0; i < data.friends.length; i++) {
         var array = data.friends[i];

         if(array.babyStep == 1) {
           $("#babystep-1 #friends").append(array.firstName + ' ' + array.lastName);
         }
         if(array.babyStep == 2) {
           $("#babystep-2 #friends").append(array.firstName + ' ' + array.lastName + ' is on this step.');
         }
         if(array.babyStep == 3) {
           $("#babystep-3 #friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 4) {
           $("#babystep-4 #friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 5) {
           $("#babystep-5 #friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 6) {
           $("#babystep-6 #friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
         if(array.babyStep == 7) {
           $("#babystep-7 #friends").append(array.firstName + ' ' + array.lastName + ', ');
         }
       }
     }
   });
  $(function(){

     //Get Baby Steps tab and Add/Remove current class on click event.
    $('.babysteps > ul > li').click(function(e){
        e.preventDefault();

        $(this).siblings().removeClass('current');

        $(this).addClass('current', function(){
        $(this).fadeIn(500);
        });
    });
    //Show Baby Step content based on what's selected.
     $("li").click(function () {
        $('.step').hide().eq($(this).index()).show();
});
});
});
