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
        console.log('response', response);
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

      console.log('running updateFriendsMessage');
    };

    return app;
  };

  new Application().run();

})();
