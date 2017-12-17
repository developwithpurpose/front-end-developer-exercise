function show(id) {
  var thing;
  thing = document.getElementsByClassName("right");
  var i;
  for (i = 0; i < thing.length; i++) {
    thing[i].style.display = "none";
  }
  var element = (document.getElementById(id).style.display = "block");
}
