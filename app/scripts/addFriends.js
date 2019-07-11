const getFriends = () => {
  return fetch('public/friends.json')
    .then(res => res.json())
    .then(
      result => {
        return result.friends;
      },
      error => {
        console.error(error);
      }
    );
};

const sortFriendsIntoBabySteps = async friends => {
  const steps = {};
  friends.map(friend => {
    steps[`step-${friend.babyStep}`] ? steps[`step-${friend.babyStep}`].push(friend) : (steps[`step-${friend.babyStep}`] = [friend]);
  });
  return steps;
};

const sortFriendsAlphabetically = async steps => {
  for (let step in steps) {
    steps[step].sort((a, b) => {
      return a.lastName < b.lastName ? -1 : 1;
    });
  }
  return steps;
};

const addFriendsToSteps = steps => {
  for (let step in steps) {
    const stepFriendsNode = document.getElementById(step).getElementsByClassName('step__friends');
    stepFriendsNode[0].innerHTML = getFriendsContent(steps[step]);
  }
};

const getFriendsContent = friends => {
  const numberOfFriends = friends.length;
  switch (numberOfFriends) {
    case 0:
      return;
    case 1:
      return `<span class="friends__names">${friends[0].firstName} ${friends[0].lastName}</span> is also in Baby Step ${friends[0].babyStep}`;
    case 2:
      return `<span class="friends__names">${friends[0].firstName} ${friends[0].lastName} and ${friends[1].firstName} ${friends[1].lastName}</span> are also in Baby Step ${friends[0].babyStep}`;
    case 3:
      return `<span class="friends__names">${friends[0].firstName} ${friends[0].lastName}, ${friends[1].firstName} ${friends[1].lastName}</span> and 1 other friend are also in Baby Step ${friends[0].babyStep}`;
    default:
      return `<span class="friends__names">${friends[0].firstName} ${friends[0].lastName}, ${friends[1].firstName} ${friends[1].lastName}</span> and ${numberOfFriends - 2} other friends are also in Baby Step ${friends[0].babyStep}`;
  }
};

const addFriends = async () => {
  try {
    const friendData = await getFriends();
    const babySteps = await sortFriendsIntoBabySteps(friendData);
    const sortedNames = await sortFriendsAlphabetically(babySteps);
    addFriendsToSteps(sortedNames);
  } catch (err) {
    console.error(err);
  }
};

export default addFriends;
