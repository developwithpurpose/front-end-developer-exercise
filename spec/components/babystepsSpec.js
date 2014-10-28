"use strict";

require("should");

var babyStepsComponent = require("../../app/assets/javascripts/components/babysteps");
var React = require("react");
var $ = require("jquery");

describe("Baby Steps", function () {
  var friends = [
        {"firstName": "1", "lastName": "1", "babyStep": 1},
        {"firstName": "2", "lastName": "2", "babyStep": 2},
        {"firstName": "3", "lastName": "3", "babyStep": 3}
      ];

  describe("friends filtering", function () {
    it("will give back friends for a given step", function () {
      babyStepsComponent.friendsAt(friends, 1)
        .should.eql([friends[0]]);

      babyStepsComponent.friendsAt(friends, 2)
        .should.eql([friends[1]]);

      babyStepsComponent.friendsAt(friends, 3)
        .should.eql([friends[2]]);
    });

    it("will give an empty list if no friends exist", function () {
      babyStepsComponent.friendsAt(friends, 8)
        .should.eql([]);
    });
  });

  describe("presentation", function () {
    var element;

    var asText = function (element) {
      return $(element).text();
    };

    var render = function (options) {
      return React.renderComponent(
        babyStepsComponent.FriendsOnMyStep(options),
        element
      );
    };

    beforeEach(function () {
      element = $("<div/>")[0];
    });

    it("will show no friends", function () {
      render({friends: [], step: 1});

      asText(element).should.eql("");
    });

    it("will show one friend", function () {
      render({
        friends: [
          {"firstName": "Friend", "lastName": "One", "babyStep": 1}
        ],
        step: 1
      });

      asText(element).should.eql("Friend One is also in Baby Step 1");
    });

    it("will show two friends", function () {
      render({
        friends: [
          {"firstName": "Friend", "lastName": "One", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Two", "babyStep": 1}
        ],
        step: 1
      });

      asText(element).should.eql("Friend One and Friend Two are also in Baby Step 1");
    });

    it("will show three friends", function () {
      render({
        friends: [
          {"firstName": "Friend", "lastName": "One", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Two", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Three", "babyStep": 1}
        ],
        step: 1
      });

      asText(element).should.eql("Friend One, Friend Two, and 1 other friend are also in Baby Step 1");
    });

    it("will show four friends", function () {
      render({
        friends: [
          {"firstName": "Friend", "lastName": "One", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Two", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Three", "babyStep": 1},
          {"firstName": "Friend", "lastName": "Four", "babyStep": 1}
        ],
        step: 1
      });

      asText(element).should.eql("Friend One, Friend Two, and 2 other friends are also in Baby Step 1");
    });
  });
});
