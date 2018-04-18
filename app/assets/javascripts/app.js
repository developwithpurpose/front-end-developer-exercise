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
    }

    window.onload = startBtnBg();


    console.log(friendsList);
    //console.log(friendsList.friends[0].firstName);
    var output00 = document.getElementById("friends01");
    var output01 = document.getElementById("friends02");
    var output02 = document.getElementById("friends03");
    var output03 = document.getElementById("friends04");
    var output04 = document.getElementById("friends05");
    var output05 = document.getElementById("friends06");
    var output06 = document.getElementById("friends07");

    //output.innerHTML = 'Your Friend ' + friendsList.friends[0].firstName + ' ' + friendsList.friends[0].lastName + ' is on baby step ' + friendsList.friends[0].babyStep;

    var friends00 = friendsList.friends.filter(element => element.babyStep === 1);
    var friends01 = friendsList.friends.filter(element => element.babyStep === 2);
    var friends02 = friendsList.friends.filter(element => element.babyStep === 3);
    var friends03 = friendsList.friends.filter(element => element.babyStep === 4);
    var friends04 = friendsList.friends.filter(element => element.babyStep === 5);
    var friends05 = friendsList.friends.filter(element => element.babyStep === 6);
    var friends06 = friendsList.friends.filter(element => element.babyStep === 7);

    //output00.innerHTML = 'There are no Friend ' + friends00[0].firstName + ' ' + friends00[0].lastName + ' is on this step ';
    output01.innerHTML = "<a href='#'>" + friends01[0].firstName + ' ' + friends01[0].lastName + '</a> are also in Baby Step 2 ';

    output02.innerHTML = "<a href='#'>" + friends02[0].firstName + ' ' + friends02[0].lastName + '</a> and ' + "<a href='#'>" + friends02[1].firstName + ' ' + friends02[1].lastName + ' </a>are also in Baby Step 3 ';

    output03.innerHTML = "<a href='#'>" + friends03[0].firstName + ' ' + friends03[0].lastName + '</a> and ' + "<a href='#'>" + friends03[1].firstName + ' ' + friends03[1].lastName + ' </a>are also in Baby Step 4 ';

    output04.innerHTML = "<a href='#'>" + friends04[0].firstName + ' ' + friends04[0].lastName + '</a> and ' + "<a href='#'>" + friends04[1].firstName + ' ' + friends04[1].lastName + ' </a>and 2 other friends are also in Baby Step 5 ';

    output05.innerHTML = "<a href='#'>" + friends05[0].firstName + ' ' + friends05[0].lastName + '</a> and ' + "<a href='#'>" + friends05[1].firstName + ' ' + friends05[1].lastName + ' </a>and 3 other friends are also in Baby Step 6 ';

    output06.innerHTML = "<a href='#'>" + friends06[0].firstName + ' ' + friends06[0].lastName + '</a> and ' + "<a href='#'>" + friends06[1].firstName + ' ' + friends06[1].lastName + ' </a>and 4 other friends are also in Baby Step 7 ';

    console.log(friends01,friends02,friends03,friends04,friends05,friends06,friends07); // [{x:300}]
