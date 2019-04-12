import _ from 'lodash';
import $ from 'jquery';

const retrieveFriends = () => {
    $.getJSON('../../baby-steps.json', (data) => {
        window.sessionStorage.setItem('friends', JSON.stringify(data.friends));
    });
};

const friendsOnStep = (friends, step) => {
    const stepFriends = friends.filter(friend => friend.babyStep === step);
    if (stepFriends.length) {
        return _.sortBy(stepFriends, ['lastName']);
    }

    return stepFriends;
};

const setFriendsHtml = (friends, step) => {
    if (friends.length > 3) {
        $('.friends__container').empty().prepend(
            `<div>
              <span class="friend--name">${ friends[0].firstName } ${ friends[0].lastName }</span>, <span class="friend--name">${ friends[1].firstName } ${friends[1].lastName }</span> and ${ friends.length - 2 } other friends are also in Baby Step ${ step }
             </div>`
        );

    } else if (friends.length === 3) {
        $('.friends__container').empty().prepend(
            `<div>
              <span class="friend--name">${ friends[0].firstName } ${ friends[0].lastName }</span>, <span class="friend--name">${ friends[1].firstName } ${ friends[1].lastName }</span> and ${ friends.length - 2 } other friend are also in Baby Step ${ step }
            </div>`
        );

    } else if (friends.length === 2) {
        $('.friends__container').empty().prepend(
            `<div>
              <span class="friend--name">${ friends[0].firstName } ${ friends[0].lastName }</span>, <span class="friend--name">${ friends[1].firstName } ${ friends[1].lastName }</span> are also in Baby Step ${ step }
            </div>`
        );
    } else if (friends.length === 1) {
        $('.friends__container').empty().prepend(
            `<div>
              <span class="friend--name">${ friends[0].firstName } ${ friends[0].lastName }</span> is also in Baby Step ${ step }
            </div>`
        );

    } else {
        $('.friends__container').empty();
    }
};

export { retrieveFriends, friendsOnStep, setFriendsHtml };
