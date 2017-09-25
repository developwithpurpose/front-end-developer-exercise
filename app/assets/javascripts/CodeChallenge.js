let nav = document.getElementById("nav").getElementsByTagName("a");
let friends;

$.ajax({
  url: "../../baby-steps.json",
  method: "GET",
  data: {
    a: "a"
  },
  success: function(data) {
    friends = data;
    friendsOnBS(friends, 1);
    console.log("success", data);
  },
  error: function(xhr) {
    console.log("error", xhr);
  }
});

// event listeners for each a tag
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", styling);
}

function styling(e) {
  e.preventDefault();
  let newActiveBS = this.parentNode;
  let prevActiveBS = document.getElementById("active");
  // Create a function that will change the nav styling
  navStyling(prevActiveBS, newActiveBS);
  // Create a function that will change the current baby step
  babyStep(prevActiveBS, newActiveBS);
}

friendsOnBS = (friends, babystep) => {
  console.log("friends, babystep: ", friends, babystep);
};

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

babyStep = (prev, next) => {
  let divToHide = prev.getAttribute("data-step");
  let divToShow = next.getAttribute("data-step");

  let hideDiv = document.getElementsByClassName(`baby_step_${divToHide}`)[0];
  hideDiv.className += " hidden";

  let showDiv = document.getElementsByClassName(`baby_step_${divToShow}`)[0];
  showDiv.classList.remove("hidden");
};
