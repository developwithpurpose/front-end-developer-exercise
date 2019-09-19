document.getElementById("bs1button").click();

function openStep(event, bsName) {
    var i, bscontent, bsbutton;
  
    bscontent = document.getElementsByClassName("bscontent");
    for (i = 0; i < bscontent.length; i++) {
      bscontent[i].style.display = "none";
    }
  
    bsbutton = document.getElementsByClassName("bsbutton");
    for (i = 0; i < bsbutton.length; i++) {
      bsbutton[i].className = bsbutton[i].className.replace(" active", "");
    }
  
    document.getElementById(bsName).style.display = "block";
    event.currentTarget.className += " active";
};