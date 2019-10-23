import "../stylesheets/main.scss";

var Init = (function init() {
  let friends = [];

  const loadData = () => {
    fetch("app/baby-steps.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        friends = data.friends;
      })
      .catch(err => {
        // Display an error message
      });
  };

  /**
   * Return an array of all friends of a given baby step number.
   * @param {number} babyStepNumber
   */
  const getFriendsByBabyStepNumber = babyStepNumber => {
    const filtered = friends.filter(x => x.babyStep === babyStepNumber);
    const sorted = filtered.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)); // Ascending
    return sorted;
  };

  /**
   * Display friend's baby step information
   * @param {array} friend
   * @param {number} babyStepNumber
   */
  const formatFriends = (friend, babyStepNumber) => {
    const friendTotal = friend.length;
    let result = "";

    if (friendTotal === 0) {
      return;
    }

    // if 1 friend, then show "Paul Taylor is also in Baby Step 2"
    if (friendTotal === 1) {
      result = `
        <a href="#">${friend[0].firstName} ${friend[0].lastName}</a> is also in Baby Step ${babyStepNumber}.
        `;
    }

    // if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
    if (friendTotal === 2) {
      result = `
            <a href="#">${friend[0].firstName} ${friend[0].lastName}</a> and 
            <a href="#">${friend[1].firstName} ${friend[1].lastName}</a> 
            are also in Baby Step ${babyStepNumber}.
            `;
    }

    // if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
    if (friendTotal === 3) {
      result = `
        <a href="#">${friend[0].firstName} ${friend[0].lastName}</a>, 
        <a href="#">${friend[1].firstName} ${friend[1].lastName}</a>, 
        and 1 other friend are also in Baby Step ${babyStepNumber}.
    `;
    }

    // if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"
    if (friendTotal >= 4) {
      result = `
        <a href="#">${friend[0].firstName} ${friend[0].lastName}</a>, 
        <a href="#">${friend[1].firstName} ${friend[1].lastName}</a>, 
        and 2 other friends are also in Baby Step ${babyStepNumber}.
        `;
    }

    let dom = document.getElementById(`js-friend-${babyStepNumber}`);
    dom.innerHTML = result;
  };

  /**
   * @param {number} babyStepNumber
   */
  const displayFriends = babyStepNumber => {
    const friend = getFriendsByBabyStepNumber(babyStepNumber);
    formatFriends(friend, babyStepNumber);
  };

  /** EVENT LISTENERS **/
  document.addEventListener(
    "click",
    function(event) {
      const parent = event.target.parentNode;

      // If the clicked element doesn't have the right selector, bail
      if (!parent.matches("[data-step]")) return;

      const step = parseInt(parent.dataset.step);

      displayFriends(step);
    },
    false
  );

  loadData();
})();
