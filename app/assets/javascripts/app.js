function readTextFile(file) {
  var newFile = new XMLHttpRequest();

  newFile.open("GET", file, false);
  newFile.onreadystatechange = function () {
    if (newFile.readyState === 4 && (newFile.status === 200 || newFile.status == 0)) {
      parseData(JSON.parse(newFile.responseText).friends);
    }
  }
  newFile.send(null);
}

function parseData(data) {
  var sortedFriends = {};

  /* Sort each friend into baby step */
  data.forEach(function(friend) {
    if (!sortedFriends[friend.babyStep]) {
      sortedFriends[friend.babyStep] = [friend];
    } else {
      sortedFriends[friend.babyStep].push(friend);
    }
  });

  /* Alphabetize friends in each step by last name */
  Object.keys(sortedFriends).forEach(function(babyStep) {
    sortedFriends[babyStep].sort(function(a, b) {
      return a.lastName > b.lastName
    })
  })

  return computeCustomMessages(sortedFriends);
}

function computeFullName(info, index) {
  if (info[index]) {
    return info[index].firstName + ' ' + info[index].lastName
  }
}

function createTemplate(template, data, step) {
  var html = Mustache.to_html(template, data);

  document.getElementById('status-' + step).innerHTML = html;
}

function computeCustomMessages(friends) {
  Object.keys(friends).forEach(function(step) {
    var template;
    var numberOfFriends = friends[step].length;
    var firstFriend = computeFullName(friends[step], 0);
    var secondFriend = computeFullName(friends[step], 1);
    var data = {
      first: firstFriend || null,
      second: secondFriend || null,
      step: step,
      moreFriends: numberOfFriends - 2,
    };

    if (numberOfFriends === 1) {
      template = '<p><a>{{first}}</a> is also in Baby Step {{step}}</p>';
    } else if (numberOfFriends === 2 ) {
      template = '<p><a>{{first}}</a> and <a>{{second}}</a> are also in Baby Step {{step}}</p>';
    } else if (numberOfFriends === 3) {
      template = '<p><a>{{first}}</a>, <a>{{second}}</a> and 1 other friend are also in Baby Step {{step}}</p>';
    } else if (numberOfFriends > 3) {
      template = '<p><a>{{first}}</a>, <a>{{second}}</a>, and {{moreFriends}} other friends are also in Baby Step {{step}}</p>';
    }

    createTemplate(template, data, step);
  });
}

readTextFile('../../baby-steps.json');