/**
 * @jsx React.DOM
 */

"use strict";

var _ = require("underscore");
var React = require("react");

/**
 * Get friends that are at a specific step
 */
var friendsAt = function (friends, step) {
  return _.filter(friends, function (friend) {
    return friend.babyStep === step;
  });
};

var FriendName = React.createClass({
  /* jshint ignore:start */
  render: function () {
    return <span className="friend">{this.props.friend.firstName} {this.props.friend.lastName}</span>;
  }
  /* jshint ignore:end */
});

var FriendsOnMyStep = React.createClass({
  /* jshint ignore:start */
  numberOfFriendsFunctions: {
    "0": function (friends) {
      return <span></span>;
    },

    "1": function (friends) {
      return (<p>
        <FriendName friend={friends[0]} /> is also in Baby Step {this.props.step}
      </p>);
    },

    "2": function (friends) {
      return (<p>
        <FriendName friend={friends[0]} /> and <FriendName friend={friends[1]} /> are also in Baby Step {this.props.step}
      </p>);
    },

    "3_or_more": function (friends) {
      var remainder = friends.length - 2;
      var pronoun = (remainder === 1) ? "friend" : "friends";

      return (<p>
        <FriendName friend={friends[0]} />, <FriendName friend={friends[1]} />, and {remainder} other {pronoun} are also in Baby Step {this.props.step}
      </p>);
    }
  },
  /* jshint ignore:end */

  render: function () {
    var friendsSameStep = friendsAt(this.props.friends, this.props.step),
        numberOfFriends = (friendsSameStep.length >= 3) ? "3_or_more" : friendsSameStep.length;

    return this.numberOfFriendsFunctions[numberOfFriends]
      .call(this, friendsSameStep);
  }
});

module.exports = {
  friendsAt: friendsAt,
  FriendName: FriendName,
  FriendsOnMyStep: FriendsOnMyStep
};
