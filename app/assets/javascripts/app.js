//List animations

for (let i = 0; i < 7; i++) {
  let target;
  target = document.getElementById(`list_item_${i + 1}`);

  target.addEventListener("mouseover", () => {
    target.classList.add("hovered");
  });

  target.addEventListener("mouseout", () => {
    target.classList.remove("hovered");
  });

  target.addEventListener("click", () => {
    //defined below
    resetListItems();
    target.classList.add("selected");
    document.getElementById(
      "description"
    ).style.transform = `translateY(-${i}00vh)`;
  });
}

const resetListItems = () => {
  for (let i = 0; i < 7; i++) {
    document.getElementById(`list_item_${i + 1}`).classList.remove("selected");
  }
};

// since JavaScript is enabled, scrolling will be set to disabled for the description component
// this will allow for a cleaner user experience. This is a "quick fix" in the favor of time for this assignment

document.getElementById("description_window").style.overflow = "hidden";

// DYNAMIC CONTENT
let step1 = [];
let step2 = [];
let step3 = [];
let step4 = [];
let step5 = [];
let step6 = [];
let step7 = [];
let steps = [step1, step2, step3, step4, step5, step6, step7];

const arrangeFriends = array => {
  for (let friend of array) {
    switch (friend.babyStep) {
      case 1:
        step1.push(friend);
        break;
      case 2:
        step2.push(friend);
        break;
      case 3:
        step3.push(friend);
        break;
      case 4:
        step4.push(friend);
        break;
      case 5:
        step5.push(friend);
        break;
      case 6:
        step6.push(friend);
        break;
      case 7:
        step7.push(friend);
        break;
      default:
        continue;
    }
  }
};

const setMessages = () => {
  for (let list of steps) {
    let targetElement;
    targetElement = document.getElementById(
      `message_${steps.indexOf(list) + 1}`
    );
    switch (list.length) {
      case 0:
        continue;
        break;
      case 1:
        targetElement.innerHTML = `${list[0].firstName +
          " " +
          list[0].lastName} is also in Baby Step ${steps.indexOf(list) + 1}`;
        break;
      case 2:
        targetElement.innerHTML = `${list[0].firstName +
          " " +
          list[0].lastName} and ${list[1].firstName +
          " " +
          list[1].lastName} are also in Baby Step ${steps.indexOf(list) + 1}`;
        break;
      case 3:
        targetElement.innerHTML = `${list[0].firstName +
          " " +
          list[0].lastName}, ${list[1].firstName +
          " " +
          list[1]
            .lastName}, and one other friend are also in Baby Step ${steps.indexOf(
          list
        ) + 1}`;
        break;
      default:
        targetElement.innerHTML = `${list[0].firstName +
          " " +
          list[0].lastName}, ${list[1].firstName +
          " " +
          list[1].lastName}, and ${list.length -
          2} other friends are also in Baby Step ${steps.indexOf(list) + 1}`;
        break;
    }
  }
};

const friends = fetch("baby-steps.json")
  .then(res => res.json())
  .then(list => {
    return list.friends.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });
  })
  .then(result => {
    arrangeFriends(result);
  })
  .then(() => {
    setMessages();
  });
