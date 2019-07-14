var getFriendListByBabyStep;
(function(exports) {

  function generateFriendListByBabyStep(stepID, friends) {
    if(friends.length === 0)
      return "";
    else
      return makeFriends(friends) + " also in Baby Step " + stepID;
  }

  function makeFriends(friends) {
    if(friends.length === 1) {
      return buildName(friends[0]) + " is";
    } else if(friends.length === 2) {
      return buildName(friends[0]) + " and " + buildName(friends[1]) + " are";
    } else if (friends.length > 2) {
      return makeMultiFriends(friends);
    } else {
      console.error("Invalid array!");
    }
  }

  function makeMultiFriends(friends) {
    const otherFriendsCount = friends.length - 2;
    let friendPlural;

    if(otherFriendsCount > 1)
      friendPlural = "friends";
    else
      friendPlural = "friend";

    return  buildName(friends[0]) + ", " + buildName(friends[1])+ ", and " +otherFriendsCount+" other "+friendPlural+" are";
  }

  function buildName(friend) {
    return "<a href=\"\" class=\"friend-link\">"+friend.firstName + " " + friend.lastName+"</a>";
  }

  if(typeof(exports) !=="undefined")
    exports.generateFriendListByBabyStep = generateFriendListByBabyStep;
  getFriendListByBabyStep = generateFriendListByBabyStep;
})(this);

