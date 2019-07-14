
$(document).ready(function() {

  $.ajax({
     type: "GET",
     url: "baby-steps.json",
     success: function(data) {

       for(var i = 0; i < data.friends.length; i++) {
         var array = data.friends[i];

         if(array.babyStep == 1) {
           $("#v-pills-1 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>');
         }
         if(array.babyStep == 2) {
           $("#v-pills-2 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ' is on this step.');
         }
         if(array.babyStep == 3) {
           $("#v-pills-3 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ', ');
         }
         if(array.babyStep == 4) {
           $("#v-pills-4 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ', ');
         }
         if(array.babyStep == 5) {
           $("#v-pills-5 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ', ');
         }
         if(array.babyStep == 6) {
           $("#v-pills-6 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ', ');
         }
         if(array.babyStep == 7) {
           $("#v-pills-7 #friends").append('<a class="name" href="">' + array.firstName + ' ' + array.lastName + '</a>' + ', ');
         }
       }
     }
   });
});