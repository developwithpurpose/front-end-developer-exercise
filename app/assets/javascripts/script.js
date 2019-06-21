function loadFriendsZero () {
  const stepRequest = new XMLHttpRequest()
  stepRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    var noFriends = this.responseText;
    for (var i = 0; i < noFriends.length; i++) {
      if (noFriends[i] < 2) {
        document.getElementById('friendsZero').innerHTML = ''
      } else {
      }
    }
  }
  stepRequest.open('GET', '../../baby-steps.json', true);
  stepRequest.send();
}

function loadFriendsOne () {
  const stepRequest = new XMLHttpRequest()
  stepRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    var noFriends = this.responseText;
    for (var i = 0; i < noFriends.length; i++) {
      if (noFriends[i] == 2) {
        document.getElementById('friendsOne').innerHTML =
          'Paul Taylor is also in Baby Step 2';
      } else {
      }
    }
  }
  stepRequest.open('GET', '../../baby-steps.json', true)
  stepRequest.send()
}

function loadFriendsTwo () {
  const stepRequest = new XMLHttpRequest()
  stepRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    var noFriends = this.responseText;
    for (var i = 0; i < noFriends.length; i++) {
      if (noFriends[i] == 3) {
        document.getElementById('friendsTwo').innerHTML =
          'Thomas Harris and Sharon Thomas are also in Baby Step 3'
      } else {
      }
    }
  }
  stepRequest.open('GET', '../../baby-steps.json', true)
  stepRequest.send()
}

function loadFriendsThree () {
  const stepRequest = new XMLHttpRequest()
  stepRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    var noFriends = this.responseText;
    for (var i = 0; i < noFriends.length; i++) {
      if (noFriends[i] == 4) {
        document.getElementById('friendsThree').innerHTML =
          'Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4'
      } else {
      }
    }
  }
  stepRequest.open('GET', '../../baby-steps.json', true)
  stepRequest.send()
}

function loadFriendsMore () {
  const stepRequest = new XMLHttpRequest()
  stepRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    var noFriends = this.responseText;
    for (var i = 0; i < noFriends.length; i++) {
      if (noFriends[i] >= 5) {
        document.getElementById('friendsMore').innerHTML =
          'Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5';
      } else {
      }
    }
  }
  stepRequest.open('GET', '../../baby-steps.json', true);
  stepRequest.send();
}
