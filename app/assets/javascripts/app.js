$.ajax( "baby-steps.json" )
  .done(function(data){
    var bsFriends;
    for (i = 1; i < 8; i++) {
      bsFriends = $.grep(data.friends, function(n, j) {
        return n.babyStep === i;
      });

      var friendElement = $(".bs" + i + "-friends");

      switch (bsFriends.length) {
        case 0:
          break;
        case 1:
          friendElement.append("<a href='#'>" + bsFriends[0].firstName + " " + bsFriends[0].lastName + "</a>");
          friendElement.append(" is also in Baby Step " + i).show();
          break;
        case 2:
          friendElement.append("<a href='#'>" + bsFriends[0].firstName + " " + bsFriends[0].lastName + "</a>");
          friendElement.append(" and <a href='#'>" + bsFriends[1].firstName + " " + bsFriends[1].lastName + "</a>");
          friendElement.append(" are also in Baby Step " + i).show();
          break;
        case 3:
          friendElement.append("<a href='#'>" + bsFriends[0].firstName + " " + bsFriends[0].lastName + "</a>");
          friendElement.append(", <a href='#'>" + bsFriends[1].firstName + " " + bsFriends[1].lastName + "</a>");
          friendElement.append(", and 1 other friend are also in Baby Step " + i).show();
          break;
        default:
          var count = bsFriends.length - 2;
          friendElement.append("<a href='#'>" + bsFriends[0].firstName + " " + bsFriends[0].lastName + "</a>");
          friendElement.append(", <a href='#'>" + bsFriends[1].firstName + " " + bsFriends[1].lastName + "</a>");
          friendElement.append(", and " + count + " other friends are also in Baby Step " + i).show();
      }
    }
  });
