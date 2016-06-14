$(document).ready(function() {

  $('a').one('click', function(e) {
    if(this.hash !== "") {
      e.preventDefault();

      var hash = this.hash;
      var num = hash.slice(-1);

      $('.content').animate({
        scrollTop: $(hash).offset().top - $('.content').offset().top + $('.content').scrollTop()
      }, 800, function() {
        window.location.hash = hash;
      })
    };

    $.ajax({
      type: 'GET',
      url: 'baby-steps.json',
      dataType: 'json'
    }).done(function(friendList) {
      var result = [];
      var htmlText = '';

      friendList.friends.filter(function(i){
        if (i.babyStep === parseInt(num)) {
          var firstName = i.firstName;
          var lastName = i.lastName;
          // var currentStep = i.babyStep;

          // $('.friends').parent().append('<span>' + firstName + ' ' + lastName + '</span>').one();

          result.push(i);

        }

        /* The code below is still pesudo code. At the moment, the results I would like to
        see are in the console, but it's been tricky appending them to the dom. At the moment,
        they are not included in the 'final' code, but I will continue to work on this
        code test until I have accomplished this task. */


        // else if (num <= 2) {
        //   $('.friends').parent().append('<span>' + firstName + ' ' + lastName + ' are on this step' + '</span>');
        // }

        // } else if (parseInt(num) > 2) {
        //   leftOverNum = num - 2;
        //   $('.friends').parent().append('<span>' + firstName + ' ' + lastName + ' and ' + leftOverNum + ' Other Friends are on this step' + '</span>')
        // };
      })

      console.log(num);

      /* ------ NOTE TO SELF ------*/
      /* 'result' is what should be populating to the dom */
      /* meditate on how to do this */
      console.log(result);

    })


  })//end click function;
})//end of jQuery
