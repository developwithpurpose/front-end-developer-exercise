"use strict";

let myRequest = new XMLHttpRequest();

function changeSelectors(stepNumber) {
  let gradient = event.currentTarget.childNodes[1];
  document.getElementById(`img_${stepNumber}`).src = `../assets/images/icons/individual/icons_small_bs${stepNumber}_blue.png`;
  for (let j = 1; j < 8; j++) {
    document.getElementById(`${j}`).childNodes[1].classList.add("gradient");
    document.getElementById(`${j}`).childNodes[1].classList.remove("selected");
    document.getElementById(`${j}`).childNodes[1].childNodes[1].classList.remove("step-text-selected");
  }
  for (let k = 1; k < 8; k++) {
    if (k != stepNumber) {
      document.getElementById(`img_${k}`).src = `../assets/images/icons/individual/icons_small_bs${k}.png`;
    }
  }
  gradient.childNodes[1].classList.add("step-text-selected");
  gradient.classList.remove("gradient");
  gradient.classList.add("selected");
}

function getStepObject(stepNumber) {
  changeSelectors(stepNumber);
  var data = JSON.parse(myRequest.responseText);
  let specificData = data.content[stepNumber - 1];
  let friendsData = data.friends;
  let friendsList = [];
  for (let i = 0; i < friendsData.length; i++) {
    let x;
    let friends = friendsData[i]
    for (x in friends) {
      if (`${friends[x]}` == stepNumber) {
        friendsList.push(friendsData[i]);
      }
    }
  }

  let content = document.getElementById("step-info");
  content.innerHTML = 
    `<div class="card borderless">
    <div class="card-body justify-content-start align">
      <img class="icon-small" src="assets/images/icons/individual/icons_large_bs1_blue.png">
      <div class="step-subheader"><span class="step-header">${specificData.title}</span><br>${specificData.subtitle}</div>
    </div>
    <p class="p-1">${specificData.para1}</p>
    <p class="p-1">${specificData.para2}</p>
    <div id="friends">
    </div>
  </div>`;

  for (let l = 0; l < friendsList.length; l++) {
    if (friendsList.length > 2) {
      document.getElementById("friends").innerHTML = 
      `<p><span>${friendsList[0].firstName} ${friendsList[0].lastName}, ${friendsList[1].firstName} ${friendsList[1].lastName}</span> and ${friendsList.length - 2} Other Friends are also on this step</p>`;
    } else if (friendsList.length === 2) {
      document.getElementById("friends").innerHTML = 
      `<p><span>${friendsList[0].firstName} ${friendsList[0].lastName} and ${friendsList[1].firstName} ${friendsList[1].lastName}</span> are also on this step</p>`;
    } else {
      document.getElementById("friends").innerHTML = 
      `<p><span>${friendsList[0].firstName} ${friendsList[0].lastName}</span> is also on this step</p>`;
    }
  }
}

myRequest.open("GET", "../../baby-steps.json");

myRequest.send();

let selectors = document.getElementsByClassName("card");

let listener = function() {
  getStepObject(event.currentTarget.id);
};

for (let i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener('click', listener, false);
}