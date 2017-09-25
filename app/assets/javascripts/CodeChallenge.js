let nav = document.getElementById("nav").getElementsByTagName("a");
let friendsDiv = document.getElementById("friends");
let friends;

$.ajax({
  url: "../../baby-steps.json",
  method: "GET",
  data: {
    a: "a"
  },
  success: function(data) {
    friends = data.friends;
    friendsOnBS(friends, 1);
    console.log("success", data);
  },
  error: function(xhr) {
    console.log("error", xhr);
  }
});

navStyling = (prev, next) => {
  prev.removeAttribute("id");
  next.setAttribute("id", "active");

  let prevImg = prev.getElementsByTagName("img");
  prevImg[0].classList.remove("hidden");
  prevImg[1].classList.add("hidden");

  let nextImg = next.getElementsByTagName("img");
  nextImg[0].classList.add("hidden");
  nextImg[1].classList.remove("hidden");
};

activeBabyStep = (prev, next) => {
  let divToHide = prev.getAttribute("data-step");
  let divToShow = next.getAttribute("data-step");

  let hideDiv = document.getElementsByClassName(`baby_step_${divToHide}`)[0];
  hideDiv.className += " hidden";

  let showDiv = document.getElementsByClassName(`baby_step_${divToShow}`)[0];
  showDiv.classList.remove("hidden");
};

// event listeners for each a tag
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", styling);
}

function styling(e) {
  e.preventDefault();
  let sortedArray = [];
  let newActiveBS = this.parentNode;
  let prevActiveBS = document.getElementById("active");
  let activeBS = newActiveBS.getAttribute("data-step");
  navStyling(prevActiveBS, newActiveBS);
  activeBabyStep(prevActiveBS, newActiveBS);
  friendsOnBS(friends, activeBS);
}

sortArrayByLastName = array => {
  let sortedArray = array.sort(function(a, b) {
    var a = a.lastName;
    var b = b.lastName;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return sortedArray;
};

friendsOnBS = (friends, babystep) => {
  let babyStep = parseInt(babystep);
  let temp = [];
  let tempString = "";
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].babyStep === babyStep) {
      temp.push(friends[i]);
    }
  }

  if (temp.length > 0) {
    sortedArray = sortArrayByLastName(temp);
  }
  if (temp.length === 1)
    tempString = `<a>${temp[0].firstName} ${temp[0]
      .lastName}</a> is also in Baby Step ${temp[0].babyStep}`;
  else if (temp.length === 2)
    tempString = `<a>${temp[0].firstName} ${temp[0]
      .lastName}</a> and <a>${temp[1].firstName} ${temp[1]
      .lastName}</a> are also in Baby Step ${temp[0].babyStep}`;
  else if (temp.length === 3)
    tempString = `<a>${temp[0].firstName} ${temp[0]
      .lastName}</a>, and <a>${temp[1].firstName} ${temp[1]
      .lastName}</a>, and ${temp.length -
      2} other friend are also in Baby Step ${temp[0].babyStep}`;
  else if (temp.length >= 4)
    tempString = `<a>${temp[0].firstName} ${temp[0]
      .lastName}</a>, and <a>${temp[1].firstName} ${temp[1]
      .lastName}</a>, and ${temp.length -
      2} other friends are also in Baby Step ${temp[0].babyStep}`;

  friendsDiv.innerHTML = tempString;
};
