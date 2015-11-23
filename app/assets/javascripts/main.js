$(document).ready(function(){
  var friends;
  $('.contentItem').hide();
  $('#babyStep1').show();
  $('.navbarItem').first().addClass('active');;
  $('.activeBackground').width('300px');
  $.ajax('/baby-steps.json', {
    success: function(data){
      friends = data.friends;
      updateSocialMessage(1, friends);
    }
  });

  $('.navbarItem').on('click', function(e){
    var $navbarElement = $(this),
        $contentElement = $($(this).parent().attr('href')),
        currentStep = $(this).parent().attr('href')[$(this).parent().attr('href').length-1],
        $previousContentElement = $($('.activeBackground').parent().parent().attr('href'));
    e.preventDefault();
    if(!$navbarElement.hasClass('active')){
      $('.navbarItem').removeClass('active');
      $navbarElement.addClass('active');
      $('.activeBackground').animate({width: 0}, function(){
        $(this).remove();
        $navbarElement.append('<div class="activeBackground"></div>');
        $('.activeBackground').animate({width: 300});
      });
      updateSocialMessage(null, null);
      $previousContentElement.toggle('slide', {direction: 'right'}, function(){
        $contentElement.toggle('slide', {direction: 'right'}, function(){
          updateSocialMessage(currentStep, friends);
        });
      });
    }
  });
});

function updateSocialMessage(step, friends){
  var $socialElement = $("#socialNotification"),
      socialMessage = '',
      stepFriends = [];
  if(friends){
    $socialElement.hide();
    friends.filter(function(x){ 
      if(x.babyStep === parseInt(step)){ stepFriends.push(x) }
    });
    socialMessage = buildSocialMessage(step, stepFriends);
    $socialElement.html(socialMessage);
    $socialElement.toggle('fade');
  }else{
    $socialElement.html('');
  }
}

function buildSocialMessage(step, friends){
  if(friends.length > 0){
    var message = (friends.length > 1 ? ' are': ' is')+' also in Baby Step '+step,
        names = [],
        limit = (friends.length > 2 ? 2 : friends.length);
    for(var i = 0; i < limit; i++){
      names.push('<a href="#">'+friends[i].firstName+' '+friends[i].lastName+'</a>');
    }
    switch(friends.length){
      case 1:
        message = names[0] + message;
        break;
      case 2:
        message = names.join(' and ') + message;
        break;
      default:
        message = names.join(', ')+', and '+(friends.length - 2)+' other friend '+message;
    }
    return message;
  }
}
