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
    divStep = document.getElementById(divId);
    if(visibleDivId === divId) {
      divStep.style.display = "block";
    } else {
      divStep.style.display = "none";
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
            item.style.backgroundImage = (item.id == id) ? blueIt : "";

            var fileStart = "././assets/images/icons/individual/icons_small_bs";
            var fileNum = id;
            fileNum = fileNum.replace("btn-babyStep0", "");
            var fileBlueEnd = "_blue.png";
            var fileGreyEnd = ".png";
            var cssLead = "url('";
            var cssEnd = "')";
            var blueIt = cssLead + fileStart + fileNum + fileBlueEnd + cssEnd;
            var greyIt = cssLead + fileStart + fileNum + fileGreyEnd + cssEnd;

            console.log(fileNum);
        }
    }


    function startBtnBg() {
      document.getElementById("btn-babyStep01").style.backgroundImage = "url(././assets/images/icons/individual/icons_small_bs1_blue.png)";
    //  var stepLoad1 = document.getElementById('btn-babyStep01')
    //  stepLoad1.style.backgroundImage = "url('././assets/images/icons/individual/cons_small_bs1_blue.png');";
    //  stepLoad.style.backgroundColor = "red";
    //  console.log(stepLoad1);
    //  alert(tabs);
    }

    window.onload = startBtnBg();
