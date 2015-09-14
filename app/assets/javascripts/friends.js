/*jshint esnext: true */

let {friends} = require("./baby-steps.json");

function getFriends(step) {
  return friends.filter((friend) => {
    return friend.babyStep === step;
  }).map(friend => {
    return `${friend.firstName} ${friend.lastName}`;
  });
}

export default {
  getFriends
};
