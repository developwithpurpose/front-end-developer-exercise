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
    } else {
      div.style.display = "none";
    }
  }
}

function changeColor(id) {
        var tabs = document.getElementsByClassName('btnStep')
        for (var i = 0; i < tabs.length; ++i) {
            var item = tabs[i];
            item.style.backgroundColor = (item.id == id) ? "white" : "transparent";
            item.style.color = (item.id == id) ? "#36ABE1" : "#9BA0A4";
            item.style.fontWeight = (item.id == id) ? "400" : "200";
            item.style.backgroundImage = (item.id == id) ? blueIt : greyIt;

            var fileStart = "../../assets/images/icons/individual/icons_small_bs";
            var fileNum = id - "btn-babyStep0";
            var fileBlueEnd = "_blue.png";
            var fileGreyEnd = ".png";
            var blueIt = fileStart + fileNum + fileBlueEnd;
            console.log(id);
            console.log(fileNum);  
            var greyIt = fileStart + fileNum + fileGreyEnd;
        }
    }
