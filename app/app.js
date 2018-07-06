document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.nodeName == "LI") {
    $(".info").animate(
      {
        scrollTop:
          $(".info").scrollTop() +
          $(`.step_container${e.target.id}`).position().top
      },
      500
    );

    for (var i = 1; i < 8; i++) {
      document.getElementById(i).classList.remove("active");
    }
    document.getElementById(e.target.id).classList.add("active");
  }
});

var friends = [[], [], [], [], [], [], []];

fetch("baby-steps.JSON")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    json.friends.map(friendObj => {
      friends[friendObj.babyStep - 1].push(friendObj);
    });
  })
  .then(() => {
    mapFriendsArrays();
  });

mapFriendsArrays = () => {
  friends.map(friendsArray => {
    friendsArray.sort(function(a, b) {
    var textA = a.lastName;
    var textB = b.lastName;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

    switch (friendsArray.length) {
      case 0:
        break;
      case 1:
        var text = `<p class="link">${friendsArray[0].firstName} ${
          friendsArray[0].lastName
        }</p><p> is also on Baby Step ${friends.indexOf(friendsArray) + 1}</p>`;
        document.getElementById(
          `step${friends.indexOf(friendsArray) + 1}`
        ).innerHTML = text;
        break;

      case 2:
        var text = `<p class="link">${friendsArray[0].firstName} ${
          friendsArray[0].lastName
        }</p><p> and </p><p class="link">${friendsArray[1].firstName} ${
          friendsArray[1].lastName
        }</p><p> are also on Baby Step ${friends.indexOf(friendsArray) +
          1}</p>`;

        document.getElementById(
          `step${friends.indexOf(friendsArray) + 1}`
        ).innerHTML = text;
        break;

      case 3:
        var text = `<p class="link">${friendsArray[0].firstName} ${
          friendsArray[0].lastName
        }</p><p>, </p><p class="link">${friendsArray[1].firstName} ${
          friendsArray[1].lastName
        }</p><p>, and 1 other friend are also on Baby Step ${friends.indexOf(
          friendsArray
        ) + 1}</p>`;

        document.getElementById(
          `step${friends.indexOf(friendsArray) + 1}`
        ).innerHTML = text;
        break;

      default:
        var text = `<p class="link">${friendsArray[0].firstName} ${
          friendsArray[0].lastName
        }</p><p>, </p><p class="link">${friendsArray[1].firstName} ${
          friendsArray[1].lastName
        }</p><p>, and 2 other friends are also on Baby Step ${friends.indexOf(
          friendsArray
        ) + 1}</p>`;

        document.getElementById(
          `step${friends.indexOf(friendsArray) + 1}`
        ).innerHTML = text;
    }
  });
};
