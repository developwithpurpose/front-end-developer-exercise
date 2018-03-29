function highlight(link) {
  var links;
  links = document.getElementsByClassName("links");
  for (i=0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(link).className += " active";
}