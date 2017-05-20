// "use strict";
console.log('hello friends');
function navigate(id) {
  //var babystep = document.getElementById(id);
  console.log(id);
  id.scrollIntoView();
}

function friends() {
  //TODO get the data from baby-steps.json
  fetchJSONFile('baby-steps.json', function(data){
    // do something with your data
    console.log(data);
  });
  //do a loop, get the link element by id using the step number
  //if the step number contains any peeps then add them to the link
  //if the step contains more than two peeps then list the number in excess of two peeps
  return;
}

function fetchJSONFile(path, callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}
