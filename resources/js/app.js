(function() {
  "use strict";

  //-- get current selected input
  $('.radios input')
  .filter(':checked').val();


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
      //-- set up the event listener
      $(document).on('click', app.config.query_selector, app.fn.updateFriendsMessage);

      //-- grab the json from the API
      $.get('/baby-steps.json', function(response)
      {
        console.log('response', response);
        app.data.response = response;
        app.fn.updateFriendsMessage();
      })
      .fail(function()
      {
        console.log('An error occurred.');
      });
    };

    app.fn.updateFriendsMessage = function()
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
