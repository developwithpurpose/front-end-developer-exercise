var steps = ["babyStep01", "babyStep02", "babyStep03", "babyStep04", "babyStep05", "babyStep06", "babyStep07"];
var visibleDivId = "";
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();

}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < steps.length; i++) {
    divId = steps[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
      div.classList.toggle('slideout');
    } else {
      div.style.display = "none";
    }
  }
}

function toggle(BB){
    document.getElementById(BB).classList.toggle('slideUp')
}
