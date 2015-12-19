exports.get = function get(onSuccess, onError) {
    var jxhr = $.getJSON('baby-steps.json', function success(data) {
        onSuccess(data);
    });
    if (onError !== undefined) {
        jxhr.fail(function error() {
            onError();
        });
    }
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