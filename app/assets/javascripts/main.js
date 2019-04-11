import '../stylesheets/main.scss'
import $ from 'jquery'
import _ from 'lodash'
import '../../baby-steps'

$(document).ready(() => {
  retrieveFriends();
});

$('a.baby-step__link').click(() => {
  const target = event.target;
  const activeStep = activeStepNumber(target.innerHTML);
  const friends = JSON.parse(window.sessionStorage.getItem('friends'));
  const onStep = friendsOnStep(friends, activeStep);
  console.log('onStep', onStep);

  setFriendsHtml(onStep);
  setActiveClass(activeStep);
});

const activeStepNumber = (step) => {
  const stringArr = step.split('');
  return parseInt(stringArr[stringArr.length - 1]);
};

const retrieveFriends = () => {
  $.getJSON('../../baby-steps.json', (data) => {
    window.sessionStorage.setItem('friends', JSON.stringify(data.friends));
  })
};

const friendsOnStep = (friends, step) => {
  const stepFriends = friends.filter(friend => friend.babyStep === step);
  if (stepFriends.length) {
    return _.sortBy(stepFriends, ['lastName'])
  }

  return stepFriends;
};

const setFriendsHtml = (friends) => {
  if (friends.length > 3) {
    $('.friends__container').empty().prepend(
      `<div>
        <span class="friend--name">${friends[0].firstName} ${friends[0].lastName}</span>, <span class="friend--name">${friends[1].firstName} ${friends[1].lastName}</span> and ${friends.length - 2} other friends are on this step
      </div>`
    )

  } else if (friends.length === 3) {
    $('.friends__container').empty().prepend(
      `<div>
        <span class="friend--name">${friends[0].firstName} ${friends[0].lastName}</span>, <span class="friend--name">${friends[1].firstName} ${friends[1].lastName}</span> and ${friends.length - 2} other friends is on this step
      </div>`
    )
  } else if (friends.length === 2) {
    $('.friends__container').empty().prepend(
      `<div>
        <span class="friend--name">${friends[0].firstName} ${friends[0].lastName}</span>, <span class="friend--name">${friends[1].firstName} ${friends[1].lastName}</span> are on this step
      </div>`
    )
  } else if (friends.length === 1) {
    $('.friends__container').empty().prepend(
      `<div>
        <span class="friend--name">${friends[0].firstName} ${friends[0].lastName}</span> is on this step
      </div>`
    )
  } else {
    $('.friends__container').empty();
  }
};

const setActiveClass = (stepNumber) => {
  const articleStepId = `step-${stepNumber}`;
  const navStepId = `nav--step-${stepNumber}`;

  $('li.active, article.active').removeClass('active');
  $(`#${articleStepId}, #${navStepId}`).addClass('active');
};
