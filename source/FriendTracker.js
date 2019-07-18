let listFriends = function(friends){
  for (let i = 1; i < 8; i++) {
    let friendsInCurrentStep = friends.filter(obj => obj.babyStep == i);
    if (typeof (friendsInCurrentStep) === "undefined")
      continue;
    const list = getFriendListByBabyStep(i, friendsInCurrentStep)
    document.getElementById('friends'+i).innerHTML = list;
  }
}
getFriends(listFriends);