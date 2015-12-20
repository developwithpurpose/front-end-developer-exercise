
var animator = require('../util/animator');
var distanceHelper = require('../util/distance-helper');
var animationHelper = require('../util/animation-helper');
var friends = require('./friends');
var friendsHelper = require('./friends-helper');

var $stepDetails;
var $sections;
var index;

function getFriendStatusElement(id) {
    return $sections.eq(id).find('.friendStatus');
}

function updateFriendsForSelectedStep() {
    var step = index + 1;
    friends.getFriendsInStep(step, function friendFinderHandler(friends) {
        getFriendStatusElement(index).html(friendsHelper.format(friends, step));
    });
}

exports.init = function init($target) {
    $stepDetails = $target;
    $sections = $stepDetails.find('section');
    index = 0;
    updateFriendsForSelectedStep();
};

exports.select = function select(id) {
    var top = $sections.eq(id).position().top;
    var distance = distanceHelper.distance(index, id);
    
    var oldIndex = index;
    
    animator.animate(
        $stepDetails,
        {
            scrollTop: top
        },
        animationHelper.speed(distance),
        function () {
            getFriendStatusElement(oldIndex).html('');
        }
    );
    
    index = id;
    updateFriendsForSelectedStep();
};