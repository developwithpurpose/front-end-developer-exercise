function show(id, color) {
  var content = document.getElementsByClassName("right");
  var option = document.getElementsByClassName("options");
  var o;
  for (o = 0; o < option.length; o++) {
    option[o].style.background = "blue";
  }
  var currentSide = (document.getElementById(color).style.background = "black");
  var c;
  for (c = 0; c < content.length; c++) {
    content[c].style.display = "none";
  }
  var element = (document.getElementById(id).style.display = "block");
}
