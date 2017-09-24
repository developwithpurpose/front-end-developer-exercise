var nav = document.getElementById("nav").getElementsByTagName("a");

// event listeners for each a tag
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", styling);
}

function styling(e) {
  e.preventDefault();
  var newActiveBS = this.parentNode;
  var prevActiveBS = document.getElementById("active");
  // Create a function that will change the nav styling
  navStyling(prevActiveBS, newActiveBS);
  // Create a function that will change the current baby step
  babyStep(prevActiveBS, newActiveBS);
}

navStyling = (prev, next) => {
  console.log("prev, next: ", prev, next);
};

babyStep = (prev, next) => {
  console.log("prev, next: ", prev, next);
};
