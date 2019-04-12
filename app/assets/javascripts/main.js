import '../stylesheets/main.scss';
import $ from 'jquery';
import '../../baby-steps';

import { retrieveFriends, friendsOnStep, setFriendsHtml } from './friends';

$(document).ready(() => {
    retrieveFriends();
});

$('#step-1, #nav--step-1').addClass('active').siblings().not('.friends__container').addClass('hidden');

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$('a.baby-step__link').click(() => {
    const target = event.target;
    const activeStep = activeStepNumber(target.innerHTML);
    const friends = JSON.parse(window.sessionStorage.getItem('friends'));
    const onStep = friendsOnStep(friends, activeStep);

    setFriendsHtml(onStep, activeStep);
    setActiveClass(activeStep);
});

const activeStepNumber = (step) => {
    const stringArr = step.split('');
    return parseInt(stringArr[stringArr.length - 1]);
};

const setActiveClass = (stepNumber) => {
    const articleStepId = `step-${ stepNumber }`;
    const navStepId = `nav--step-${ stepNumber }`;

    $('li.active, article.active').removeClass('active').addClass('hidden');
    $(`#${articleStepId}, #${navStepId}`).addClass('active').removeClass('hidden');
};
