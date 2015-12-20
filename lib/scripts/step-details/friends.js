var ajax = require('../util/ajax');

exports.get = function get(onSuccess, onError) {
    ajax.json(
        'baby-steps.json',
        onSuccess,
        onError
    );
};

exports.getFriendsInStep = function getFriendsInStep(id, onSuccess, onError) {
    this.get(function (data) {
        var friends = [];
        data.friends.sort(function (a, b) {
            return a.lastName.localeCompare(b.lastName);
        }).forEach(function(friend) {
            if(id === friend.babyStep) {
                friends.push(friend);
            }
        });
        onSuccess(friends);
    }, onError);
};

exports._ajax = function (aj) {
    ajax = aj;
};