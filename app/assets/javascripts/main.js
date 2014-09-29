$(function() {

  var topPos,
  scrollPos,
  scrollOffset,
  articleIndex,
  articleHeight = 620,
  $el,
  $target,
  $main = $('main'),
  $nav = $("nav"),
  $navLinks = $('nav a'),
  $activeLink = $('nav a.active');

  $nav.append('<a id="nav_mask"></a>');
  var $navMask = $("#nav_mask");

  $navMask.css("top", $activeLink.position().top);

  function goToStep() {
    
    $('nav a.active').removeClass('active');
    $el = $(this);

    topPos = $el.position().top;
    
    $navMask.animate({
      top:topPos
    }, 'slow', 'swing', function(){
      $el.addClass('active');
    });

    $target = $('#'+$el.attr('href').split('#')[1]);
    articleIndex = $target.index();
    scrollPos = articleIndex * articleHeight;

    $main.animate({scrollTop:scrollPos}, 'slow');;
    return false;

  }


  function getFriends(){

    var url = "assets/javascripts/baby-steps.json",
    steps = [[],[],[],[],[],[],[]],
    numFriends,
    friendData = [],
    html;

    $.ajax({
      url: url,
      cache: false,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(res) {
      if(res.friends.length > 0) {
        for(var i in res.friends) {
          steps[res.friends[i].babyStep - 1].push(res.friends[i]);
        }

        for(var i=0;i<steps.length;i++) {
          numFriends = steps[i].length;
          
          friendData.friend_1 = '';
          friendData.friend_2 = '';
          friendData.totalFriends = numFriends;
          friendData.step = i + 1;
          
          if(numFriends > 0) {
            friendData.friend_1 = steps[i][0].firstName+' '+steps[i][0].lastName;
          }
          if(numFriends > 1) {
            friendData.friend_2 = steps[i][1].firstName+' '+steps[i][1].lastName;
          }

          $('#step'+(i+1)+' .friends').html(renderFriends(friendData));
        }
      }  
    });
  }

  function renderFriends(friendData){
    var tmpl = '',
    numFriends = friendData.totalFriends - 2;
    
    if(friendData.totalFriends == 1) {
      tmpl = '<a href="">'+friendData.friend_1+'</a> is also in Baby Step '+ friendData.step;
    }
    if(friendData.totalFriends == 2) {
      tmpl = '<a href="">'+friendData.friend_1+'</a> and <a href="">'+friendData.friend_2+'</a> are also in Baby Step '+ friendData.step;
    }
    if(friendData.totalFriends == 3) {
      tmpl = '<a href="">'+friendData.friend_1+'</a> and <a href="">'+friendData.friend_2+'</a> and 1 other friend are also in Baby Step '+ friendData.step;
    }
    if(friendData.totalFriends > 3) {
      tmpl = '<a href="">'+friendData.friend_1+'</a> and <a href="">'+friendData.friend_2+'</a> and '+numFriends+' other friends are also in Baby Step '+ friendData.step;
    }
    
    return tmpl;
  }

  getFriends();
  $navLinks.click(goToStep);

});