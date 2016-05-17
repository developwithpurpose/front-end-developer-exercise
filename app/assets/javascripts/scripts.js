$(document).ready(function() {
  $('#nav li a').click(function(event) {
      event.preventDefault();
  });
  
    $.getJSON('baby-steps.json', function (data) {
      var friendInfo = data.friends;
      for ( var i = 0; i < friendInfo.length; i++ ) {
        if (friendInfo[i].babyStep == 1) {
          $('#bs1-friends').append(friendInfo[i].firstName + ' ' + friendInfo[i].lastName);
        }      
      }
    });
  
    $('#nav li a').click(function() {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
      var toLoad = $(this).attr('href')+' #babyStep';
      $('#content').slideToggle('normal',loadContent);
      function loadContent() {
        $('#content').load(toLoad,'',showNewContent)
      }
      function showNewContent() {
        $('#content').show('slide', {direction: "down" }, 800, loadDynamicContent);
      }
      
      function loadDynamicContent() {
        $.getJSON('baby-steps.json', function (data) {

          var friendInfo = data.friends;

          for ( var i = 0; i < friendInfo.length; i++ ) {
            console.log(friendInfo[i].babyStep);
            if (friendInfo[i].babyStep == 1) {
              $('#bs1-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span> ");
            }
            if (friendInfo[i].babyStep == 2) {
              $('#bs2-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span> ");
            }
            if (friendInfo[i].babyStep == 3) {
              $('#bs3-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span>, ");
            }            
            if (friendInfo[i].babyStep == 4) {
              $('#bs4-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span>, ");
            }
            if (friendInfo[i].babyStep == 5) {
              $('#bs5-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span>, ");
            } 
            if (friendInfo[i].babyStep == 6) {
              $('#bs6-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span>, ");
            } 
            if (friendInfo[i].babyStep == 7) {
              $('#bs7-friends').prepend('<span class="name">' + friendInfo[i].firstName + ' ' + friendInfo[i].lastName + "</span>, ");
            } 
          }
        });
        
        $('#bs2-friends').append("is on babystep 2.");
        $('#bs3-friends').append("are on babystep 3.");
        $('#bs4-friends').append("are on babystep 4.");
        $('#bs5-friends').append("are on babystep 5.");
        $('#bs6-friends').append("are on babystep 6.");
        $('#bs7-friends').append("are on babystep 7.");
        
      }
    });
});