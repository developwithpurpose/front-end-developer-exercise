
function findFriends(step, tag){
  var data_file = "baby-steps.json";
  var http_request = new XMLHttpRequest();
  try{
    http_request = new XMLHttpRequest();
  }catch (e){
    try{
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }catch (e) {
      try{
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
        alert("Your browser broke!");
        return false;
      }
					
    }
  }
  http_request.onreadystatechange = function(){
    if (http_request.readyState == 4){
      var jsonObj = JSON.parse(http_request.responseText);
      var list = [];
      for (i = 0; i<jsonObj.friends.length; i++){
        if(jsonObj.friends[i].babyStep == step) {
          list.push("<span style='color: #36abe1'>" + jsonObj.friends[i].firstName + " " + jsonObj.friends[i].lastName + "</span>");
        }
      }
      text = "<p>";
      if (list.length == 0) {
        text += "</p>";
      }
      else if (list.length == 1) {
        text += list[0] + " is also on Baby Step " + step + "</p>";
      } 
      else if (list.length == 2) {
        text += list[0] + " and "  + list[1] + " are also on Baby Step " + step + "</p>";
      } 
      else if (list.length == 3) {
        text += list[0] +  ", " + list[1] + ", and 1 other people is also on Baby Step "  + step + "</p>";
      }
      else {
        text += list[0] +  ", " + list[1] + " and " + (list.length - 2) + " other people are also on Baby Step "  + step + "</p>";
      }

      document.getElementById(tag).innerHTML = text;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

