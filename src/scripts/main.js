window.onload = () => {
  const tabs = document.querySelectorAll('input');
  const babySteps = document.querySelectorAll('.baby-steps');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const babyStepId = e.target.id.split('--')[1];
      const babyStep = document.getElementById(babyStepId);

      babySteps.forEach(bs => {
        bs.classList.remove('show');
      });

      babyStep.classList.add('show');
    });
  });

  axios
    .get(`${window.location.href}baby-steps.json`)
    .then(response => displayFriends(response.data))
    .catch(error => console.log(error));

  const displayFriends = data => {
    const friends = document.querySelectorAll('.friends');

    friends.forEach(friend => {
      const babyStep = friend.dataset.babystep;
      const f = data.friends
        .filter(f => f.babyStep == babyStep)
        .sort((a, b) => {
          const lastNameA = a.lastName.toUpperCase();
          const lastNameB = b.lastName.toUpperCase();

          if (lastNameA < lastNameB) {
            return -1;
          }
          if (lastNameA > lastNameB) {
            return 1;
          }
          return 0;
        });

      friend.innerHTML = constructMarkup(f, babyStep);
    });
  };

  const constructMarkup = (friends, babyStep) => {
    if (friends.length === 1) {
      return `<a href="#">${friends[0].firstName} ${
        friends[0].lastName
      }</a> is also in Baby Step ${babyStep}`;
    } else if (friends.length === 2) {
      return `<a href="#">${friends[0].firstName} ${
        friends[0].lastName
      }</a> and <a href="#">${friends[1].firstName} ${
        friends[1].lastName
      }</a> are also in Baby Step ${babyStep}`;
    } else if (friends.length === 3) {
      return `<a href="#">${friends[0].firstName} ${
        friends[0].lastName
      }</a>, <a href="#">${friends[1].firstName} ${
        friends[1].lastName
      }</a> and ${friends.length -
        2} other friend are are also in Baby Step ${babyStep}`;
    } else if (friends.length >= 4) {
      return `<a href="#">${friends[0].firstName} ${
        friends[0].lastName
      }</a>, <a href="#">${friends[1].firstName} ${
        friends[1].lastName
      }</a> and ${friends.length -
        2} other friends are are also in Baby Step ${babyStep}`;
    }

    return '';
  };
};
