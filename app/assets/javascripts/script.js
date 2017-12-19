var ajax = {
  get: function (path, cb) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', path);
    xhr.onload = function() {
      if (xhr.status === 200) {
        cb(xhr.responseText)
      }
      else {
        console.error('Request failed.  Returned status of ' + xhr.status);
      }
    }
    xhr.send()
  }
}

var babyStepIds = {
  1: 'friendsOne',
  2: 'friendsTwo',
  3: 'friendsThree',
  4: 'friendsFour', 
  5: 'friendsFive',
  6: 'friendsSix',
  7: 'friendsSeven'
}

function countFriends (friendArr) {
  var count = {}
  for (var i = 0; i < friendArr.length; i++) {
    var currentFriend = friendArr[i]
    if (count[babyStepIds[currentFriend.babyStep]] === undefined) {
      count[babyStepIds[currentFriend.babyStep]] = 1
    } else {
      count[babyStepIds[currentFriend.babyStep]] += 1
    }
  }
  return count
}

function generateMessage(items) {
  for (var step in items) {
    var currentStep = items[step]
    var target = document.getElementById(step)
    var message = ''
    if (currentStep === 1) {
      message = '<p><a href="/Paul Taylor" target="_blank">Paul Taylor</a> is also in Baby Step 2</p>'
    }
    if (currentStep === 2) {
      message = '<p><a href="/Thomas Harris" target="_blank">Thomas Harris</a> and <a href="/Sharon Thomas" target="_blank">Sharon Thomas</a> are also in Baby Step 3</p>'
    }
    if (currentStep === 3) {
      message = '<p><a href="/Deborah Lee" target="_blank">Deborah Lee</a>, <a href="/Shirley Perez" target="_blank">Shirley Perez</a> and 1 other friend are also in Baby Step 4</p>'
    }
    if (currentStep >= 4) {
      message = '<p><a href="/Patricia Allen" target="_blank">Patricia Allen</a>, <a href="/Matthew Garcia" target="_blank">Matthew Garcia</a> and 2 other friends are also in Baby Step 5</p>'
    }
    target.innerHTML = message
  }
}

ajax.get('/baby-steps.json', function (response) {
  var friends = JSON.parse(response).friends
  var count = countFriends(friends)
  generateMessage(count)
})