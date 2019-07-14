let listFriends = function(friends){
  for (let i = 1; i < 8; i++) {
    let friendsInCurrentStep = friends.filter(obj => obj.babyStep == i);
    if (typeof (friendsInCurrentStep) === "undefined")
      continue;
    const list = getFriendListByBabyStep(i, friendsInCurrentStep)
    //Input the output of each baby step in appropriate places if the result is not "";
  }
}
getFriends(listFriends);