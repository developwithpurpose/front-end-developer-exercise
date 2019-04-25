let friends = {};
const nav = document.querySelector("nav");
nav.addEventListener("click", selectBabyStep);

const babySteps = document.querySelectorAll('div[class*="baby-steps__"]');
babySteps.forEach((step, i) => {
  if (i !== 0) {
    step.style.display = "none";
  }
});

fetch("baby-steps.json")
  .then(res => res.json())
  .then(data => {
    friends = sortFriends(data.friends);
    setFriendMessages(friends);
  });

function setFriendMessages(friends) {
  for (const step in friends) {
    const babyStep = document.querySelector(`.baby-steps__${step}`);
    const html = generateFriendDiv(step, friends[step]);

    babyStep.appendChild(html);
  }
}

function generateFriendDiv(step, friends) {
  const friendList = document.createElement("div");
  friendList.classList.add("baby-step__friends");

  const numberOfFriends = friends.length;
  let html = "";

  const friendLinks = friends
    .slice(0, 2)
    .map(friend => generateFriendLink(friend))
    .join(" and ");

  switch (numberOfFriends) {
    case 1:
    case 2:
      html += `${friendLinks} ${numberOfFriends === 1 ? "is" : "are"}`;
      break;
    default:
      html += `${friendLinks.replace(" and ", ", ")} and
      ${numberOfFriends - 2} other
      ${numberOfFriends === 3 ? "friend" : "friends"} are`;
  }
  html += ` also in Baby Step ${step}`;

  friendList.innerHTML = html;
  return friendList;
}

function generateFriendLink({ firstName, lastName }) {
  return `<a href="">${firstName} ${lastName}</a>`;
}

function sortFriends(friends) {
  return sortBy(friends, "lastName").reduce((obj, friend) => {
    const { babyStep } = friend;
    obj[babyStep] ? obj[babyStep].push(friend) : (obj[babyStep] = [friend]);
    return obj;
  }, {});
}

function sortBy(array, property) {
  return array.sort((a, b) => {
    let c = 0;
    if (a[property] > b[property]) {
      c = 1;
    } else if (a[property] < b[property]) {
      c = -1;
    }
    return c;
  });
}

function selectBabyStep(e) {
  e.preventDefault();
  e.stopPropagation();
  const { target } = e;
  if (target.className.match(/navbar--vertical/)) {
    return;
  }

  removeLastActive();
  setActive(target);
}

function setActive(target) {
  const { step } = target.dataset;

  target.classList.add("active");
  target.parentNode
    .querySelector(".navbar__icons")
    .classList.add(`navbar__icons-${step}--blue`);

  const babyStep = document.querySelector(`.baby-steps__${step}`);
  babyStep.style.display = "block";
}

function removeLastActive() {
  const lastSelected = nav.querySelector(".active");
  if (!lastSelected) {
    return;
  }
  const { step } = lastSelected.dataset;

  lastSelected.classList.remove("active");

  lastSelected.parentNode
    .querySelector(".navbar__icons")
    .classList.remove(`navbar__icons-${step}--blue`);

  const babyStep = document.querySelector(`.baby-steps__${step}`);
  babyStep.style.display = "none";
}
