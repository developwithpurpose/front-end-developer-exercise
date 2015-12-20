var util = require('util');

function getFriendLink(friend) {
    return util.format('<a href="#">%s %s</a>',friend.firstName, friend.lastName);
}

exports.format = function format(friends, stepId) {
    if (friends.length === 1) {
        return util.format('%s is also in Baby Step %s', getFriendLink(friends[0]), stepId);
    } else if (friends.length === 2) {
        return util.format('%s and %s are also in Baby Step %s', getFriendLink(friends[0]), getFriendLink(friends[1]), stepId);
    } else if (friends.length >= 3) {
        var otherCount = friends.length - 2;
        return util.format('%s, %s, and %s other friends are also in Baby Step %s', getFriendLink(friends[0]), getFriendLink(friends[1]), otherCount, stepId);
    }
    return '';
};