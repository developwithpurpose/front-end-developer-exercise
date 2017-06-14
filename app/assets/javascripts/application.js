var request = new XMLHttpRequest();
request.open('GET', '/baby-steps.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {

    var data = JSON.parse(request.responseText);

    var step1 = document.getElementById('js-step-1');
    var step2 = document.getElementById('js-step-2');
    var step3 = document.getElementById('js-step-3');
    var step4 = document.getElementById('js-step-4');
    var step5 = document.getElementById('js-step-5');
    var step6 = document.getElementById('js-step-6');
    var step7 = document.getElementById('js-step-7');

    var babyStepGroups = _.groupBy(data.friends, 'babyStep');

    _.each(_.sortBy(_.toArray(babyStepGroups), function(num) {
      return num;
    }), function(v) {

      var friendsOnBabyStep1 = _.map(_.sortBy(_.filter(v, { 'babyStep': 1 }), 'lastName'));
      var friendsOnBabyStep2 = _.map(_.sortBy(_.filter(v, { 'babyStep': 2 }), 'lastName'));
      var friendsOnBabyStep3 = _.map(_.sortBy(_.filter(v, { 'babyStep': 3 }), 'lastName'));
      var friendsOnBabyStep4 = _.map(_.sortBy(_.filter(v, { 'babyStep': 4 }), 'lastName'));
      var friendsOnBabyStep5 = _.map(_.sortBy(_.filter(v, { 'babyStep': 5 }), 'lastName'));
      var friendsOnBabyStep6 = _.map(_.sortBy(_.filter(v, { 'babyStep': 6 }), 'lastName'));
      var friendsOnBabyStep7 = _.map(_.sortBy(_.filter(v, { 'babyStep': 7 }), 'lastName'));

      for ( var index = 0; index < v.length; index++ ) {

        if (v.length == 1) {
          messageSingle = '<a href="#">' + friendsOnBabyStep2[index].firstName + ' ' + friendsOnBabyStep2[index].lastName  + '</a> is also on Baby Step ' + v[0].babyStep;
        }

        if (v.length == 2) {
          for (i = 0; i < v.length; i++) {
            v[i] = '<a href="#">' + friendsOnBabyStep3[i].firstName + ' ' + friendsOnBabyStep3[i].lastName + '</a>';
            var friendList = v.join(' and ');
          }
          messageDouble = friendList + ' are also on Baby Step ' + friendsOnBabyStep3[0].babyStep;
        }

        if (v.length == 3) {
          var vSliced = v.slice(0, 2);
          for (i = 0; i < vSliced.length; i++) {
            vSliced[i] = '<a href="#">' + friendsOnBabyStep4[i].firstName + ' ' + friendsOnBabyStep4[i].lastName + '</a>';
            var friendList = vSliced.join(', ');
          }
          messageTriple = friendList + ' and 1 other friend are also on Baby Step ' + friendsOnBabyStep4[0].babyStep;
        }

        if (v.length == 4) {
          var vSliced = v.slice(0, 2);
          for (i = 0; i < vSliced.length; i++) {
            vSliced[i] = '<a href="#">' + friendsOnBabyStep5[i].firstName + ' ' + friendsOnBabyStep5[i].lastName + '</a>';
            var friendList = vSliced.join(', ');
          }
          messageQuadruple = friendList + ' and ' + (friendsOnBabyStep5.length - 2) + ' other friends are also on Baby Step ' + friendsOnBabyStep5[0].babyStep;
        }

        if (v.length == 5) {
          var vSliced = v.slice(0, 2);
          for (i = 0; i < vSliced.length; i++) {
            vSliced[i] = '<a href="#">' + friendsOnBabyStep6[i].firstName + ' ' + friendsOnBabyStep6[i].lastName + '</a>';
            var friendList = vSliced.join(', ');
          }
          messageQuintuple = friendList + ' and ' + (friendsOnBabyStep6.length - 2) + ' other friends are also on Baby Step ' + friendsOnBabyStep6[0].babyStep;
        }

        if (v.length == 6) {
          var vSliced = v.slice(0, 2);
          for (i = 0; i < vSliced.length; i++) {
            vSliced[i] = '<a href="#">' + friendsOnBabyStep7[i].firstName + ' ' + friendsOnBabyStep7[i].lastName + '</a>';
            var friendList = vSliced.join(', ');
          }
          messageSextuple = friendList + ' and ' + (friendsOnBabyStep7.length - 2) + ' other friends are also on Baby Step ' + friendsOnBabyStep7[0].babyStep;
        }
      }

      window.onload = function() {
        step2.innerHTML = messageSingle;
        step3.innerHTML = messageDouble;
        step4.innerHTML = messageTriple;
        step5.innerHTML = messageQuadruple;
        step6.innerHTML = messageQuintuple;
        step7.innerHTML = messageSextuple;
      }
    });

  } else {
    alert('Server found, but there was an error.');
  }
};

request.onerror = function() {
  alert("Whoops! It looks like we couldn't connect to the server.");
};

request.send();
