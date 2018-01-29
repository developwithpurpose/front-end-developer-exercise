$(function () {
  init();
});

function init () {
  $.getJSON('../../baby-steps.json', function (data) {
    setFriends(data.friends);
    $('#bs1').click();
  });
}

function friendSort (a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  }
  if (a.lastName > b.lastName) {
    return 1;
  }

  return 0;
}

function setFriends (allFriends) {
  for (var step = 1; step <= 7; step++) {
    var stepFriends = allFriends.filter(friend => friend.babyStep === step)
      .sort(friendSort);

    switch (stepFriends.length) {
      case 0:
        break;
      case 1:
        $('#links_' + step).html(getFullName(stepFriends[0]));
        $('#others_' + step).html(' is also in Baby Step ' + step);
        break;
      case 2:
        $('#links_' + step).html(
          getFullName(stepFriends[0]) + ' and ' + getFullName(stepFriends[1]));
        $('#others_' + step).html(' are also in Baby Step ' + step);
        break;
      case 3:
        $('#links_' + step).html(
          getFullName(stepFriends[0]) + ', ' + getFullName(stepFriends[1]) + ',');
        $('#others_' + step).html(' and 1 other friend are also in Baby Step ' + step);
        break;
      default:
        var otherCnt = stepFriends.length - 2;
        $('#links_' + step).html(
          getFullName(stepFriends[0]) + ', ' + getFullName(stepFriends[1]) + ',');
        $('#others_' + step).html(' and ' + otherCnt + ' other friends are also in Baby Step ' + step);
        break;
    }
  }
}

function getFullName (friend) {
  return friend.firstName + ' ' + friend.lastName;
}

// eslint-disable-next-line no-unused-vars
function handleBabyStepClick (event, step, newSidebarId, newContentId) {
  animateSidebar(newSidebarId);

  animateContent(newSidebarId, newContentId);
}

function animateContent (newSidebarId, newContentId) {
  var oldContent = $('.bsContentSelected');

  if (oldContent.length) {
    oldContent.removeClass('bsContentSelected');
    $('#' + oldContent.attr('id')).slideUp(400, function () {
      showNewContent(newSidebarId, newContentId);
    });
  } else {
    showNewContent(newSidebarId, newContentId);
  }
}

function animateSidebar (newSidebarId) {
  var oldSidebar = $('.bsSidebarSelected');

  if (oldSidebar.length) {
    oldSidebar.removeClass('bsSidebarSelected').removeClass('backgroundWhite');

    var bs1 = $('#bs1');

    $('#bsHighlight').css({ top: oldSidebar.position().top + 'px', left: (bs1.position().left - 14) + 'px' })
      .height(oldSidebar.height())
      .width(bs1.width())
      .show()
      .animate({
        top: $('#' + newSidebarId).position().top + 'px'
      }, 500);
  }
}

function showNewContent (sidebarId, contentId) {
  $('#' + sidebarId).addClass('bsSidebarSelected').addClass('backgroundWhite');

  $('#' + contentId).addClass('bsContentSelected');

  $('#' + contentId).slideDown(400);
}
