(function() {
  "use strict";

  var Application = function()
  {
    var app = this;

    app.config = {
      query_selector: 'nav.steps label',
    };
    app.data = {};
    app.fn = {};

    app.run = function()
    {
      //-- grab the json from the API
      $.get('/baby-steps.json', function(response)
      {
        app.data.response = response;
        app.fn.updateFriendMessages();
      })
      .fail(function()
      {
        console.log('An error occurred.');
      });
    };

    app.fn.updateFriendMessages = function()
    {
      if(app.data.response === undefined)
      {
        return;
      }

      //-- group friends into baby steps
      var baby_steps = _(app.data.response.friends).groupBy('babyStep').value();

      _.forEach(baby_steps, function(friends, baby_step)
      {
        //-- sort the friends
        friends.sort(app.fn.sortAscendingByLastName);

        //-- add the Message to the Steps
        app.fn.addMessageToSteps(baby_step, app.fn.buildMessage(friends, baby_step));
      });
    };

    app.fn.sortAscendingByLastName = function(first, second)
    {
      var result = (first.lastName < second.lastName) ? -1 : (first.lastName > second.lastName) ? 1 : 0;
      return result;
    };

    app.fn.buildMessage = function(friends, baby_step)
    {
      if(friends.length === 0) return null;

      friends = app.fn.getNames(friends);

      var message = ' is also in Baby Step ' + baby_step;
      if(friends.length === 1)
      {
        return app.fn.addFriendsLink(friends[0]) + message;
      }

      message = ' are also in Baby Step ' + baby_step;
      if(friends.length === 2)
      {
        return app.fn.addFriendsLink(friends.join('</a> and <a href="#">')) + message;
      }
      if(friends.length > 2)
      {
        var other_friends = _(friends).splice(2).value();
        var friends_to_display = _(friends).join('</a>, <a href="#">');

        return app.fn.addFriendsLink(friends_to_display) + app.fn.addSecondaryMessage(other_friends) + message;
      }

    };

    app.fn.getNames = function(friends)
    {
      return friends.map(function(friend)
      {
        return friend.firstName + ' ' + friend.lastName;
      });
    };

    app.fn.addFriendsLink = function(friends)
    {
      return '<a href="#">' + friends + '</a>';
    };

    app.fn.addSecondaryMessage = function(other_friends)
    {
      if(other_friends.length === 1)
      {
        return ' and 1 other friend';
      }
      else if(other_friends.length > 1)
      {
        return ' and ' + other_friends.length + ' other friends';
      }
    };

    app.fn.addMessageToSteps = function(baby_step, message)
    {
      $('#step' + baby_step).append('<p class="friend_info">' + message + '</p>');
    };

    return app;
  };

  new Application().run();

})();
