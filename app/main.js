var currentStep = '1';

function navigateBabyStep(number) {
  _getBabyStepContent(number);
  _getFriends(number);
  _changeNavigation(number);
}

function _getBabyStepContent(number) {
  var request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open("GET", "./baby-steps-content.json", true);

  request.onload = function() {
    var jsonResponse = JSON.parse(request.responseText);

    var babyStepData = {};
    switch(number) {
      case 1:
      default:
        babyStepData = jsonResponse.one;
        break;
      case 2:
        babyStepData = jsonResponse.two;
        break;
      case 3:
        babyStepData = jsonResponse.three;
        break;
      case 4:
        babyStepData = jsonResponse.four;
        break;
      case 5:
        babyStepData = jsonResponse.five;
        break;
      case 6:
        babyStepData = jsonResponse.six;
        break;
      case 7:
        babyStepData = jsonResponse.seven;
    }
    console.log("data", babyStepData);
    document.getElementById("content-image").src="assets/images/icons/individual/icons_large_bs" + number + "_blue.png";
    document.getElementById("content-header-title").innerHTML = "Baby Step " + number;
    document.getElementById("content-subtitle").innerHTML = babyStepData.name;
    document.getElementById("content-main").innerHTML = babyStepData.content;
  }
  request.send();
}

function _getFriends(number) {
  var request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open("GET", "./baby-steps.json", true);

  request.onload = function() {
    var jsonResponse = JSON.parse(request.responseText);
    var similarFriends = [];
    for (var i = 0; i < jsonResponse.friends.length; i++) {
      console.log('Evaluate', number, jsonResponse.friends[i].babyStep);
      if (jsonResponse.friends[i].babyStep === number) {
        similarFriends.push(jsonResponse.friends[i]);
      }
    }
    document.getElementById("content-social").innerHTML = _compileSocialString(similarFriends, number);
  }
  request.send();
}

function _compileSocialString(names, babyStep) {
  console.log("Name Length", names.length);
  switch (names.length) {
    case 0:
      return '';
    case 1:
      return _getName(names[0]) + ' is also on Baby Step ' + babyStep;
    case 2:
      return _getName(names[0]) + ' and ' + _getName(names[1]) + ' are also in Baby Step ' + babyStep;
    case 3:
    default:
      var difference = names.length - 2;
      return _getName(names[0]) + ', ' + _getName(names[1]) + ', and '+ difference +' other ' + (difference === 1 ? 'friend' : 'friends') + ' are also in Baby Step ' + babyStep;
  }
}

function _getName(name) {
  return '<span class="content-social--name">' + name.firstName + ' ' + name.lastName + '</span>';
}

function _changeNavigation(number) {
  document.getElementById("nav-" + currentStep).classList.remove('content-navigation-item--active');
  document.getElementById("nav-" + number).classList.add('content-navigation-item--active');
  currentStep = number;
}