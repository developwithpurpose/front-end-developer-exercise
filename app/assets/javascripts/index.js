const $ = jQuery

$(document).ready(function() {

  let activeNavItem = $('.active').find('img').attr('src')
  $('.active').find('img').attr('src', activeNavItem.replace('.png', '_blue.png'))

  handleRequest(1);

  $('.baby-step-nav-item').on('click', function(e) {
    let step = e.currentTarget.innerText.slice(10, 11)
    handleRequest(step)
    $(this).siblings().removeClass('active');
    $(this).siblings().find("img").each(function(i, element) {
      if ($(element).attr('src').includes('blue')) {
        $(element).attr('src', $(element).attr('src').replace('_blue.png', ".png"))
      }
    })
    if (!$(this).find('img').attr('src').includes('blue')) {
      $(this).find('img').attr('src', $(this).find('img').attr('src').replace('.png', "_blue.png"))
    }
    $(this).addClass('active');
  })

});

function handleRequest(step) {
  let request = $.ajax('../baby-steps.json')
    .done(function(data) {
      handleData(data, step)
    })
    .fail(function(error) {
      alert(error)
    })
}


function handleData(data, step) {
  let friendsId = "friends-" + step
  let friendsOnStep = _.filter(data.friends, function(friend) {
    return friend.babyStep == step
  })
  if (friendsOnStep.length >= 4) {

      friendsOnStep = _.sortBy(friendsOnStep, 'lastName')
      let otherFriends = friendsOnStep.length - 2
      document.getElementById(friendsId).innerHTML = `<a>${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a>, <a>${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a> and ${otherFriends} other friends are also in Baby Step ${step}`

  } else if (friendsOnStep.length === 3) {

      friendsOnStep = _.sortBy(friendsOnStep, 'lastName')
      document.getElementById(friendsId).innerHTML = `<a>${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a>, <a>${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a> and 1 other friend are also in Baby Step ${step}`

  } else if (friendsOnStep.length === 2) {

      friendsOnStep = _.sortBy(friendsOnStep, 'lastName')
      document.getElementById(friendsId).innerHTML = `<a>${friendsOnStep[0].firstName} ${friendsOnStep[0].lastName}</a> and <a>${friendsOnStep[1].firstName} ${friendsOnStep[1].lastName}</a> are also in Baby Step ${step}`

  } else if (friendsOnStep.length === 1) {

      let obj = friendsOnStep[0]
      document.getElementById(friendsId).innerHTML = `<a> ${obj.firstName} ${obj.lastName}</a> is also on Baby Step ${step}`

  } else {}
}
