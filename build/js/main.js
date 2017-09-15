const navLinks = document.querySelectorAll('#nav a');
const steps = document.querySelectorAll('.babysteps section');


// get height of "steps" and set content area height
let elementHeights = [];
steps.forEach(step => {elementHeights.push(step.offsetHeight);})
let elementHeight = Math.max.apply(Math, elementHeights);
document.querySelector('.babysteps').style.height = elementHeight + 300 + "px";

// add/remove selected class from links and show/hide "step"
navLinks.forEach(link => link.addEventListener('click', function(e){
  e.preventDefault();
  let targetElem = link.rel;
  navLinks.forEach(sibling => { sibling.classList.remove('selected');})
  link.classList.add('selected');

  steps.forEach(step => {
    step.classList.remove('selected');
    if(step.id == targetElem) {
      step.classList.add('selected');
    }
  })
}));
