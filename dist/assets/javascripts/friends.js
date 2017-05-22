console.log('hello friends');
function navigate(id) {
  console.log(id);
  id.scrollIntoView();
}

function friends() {
  fetchJSONFile('baby-steps.json', function(data){
    console.log(data);
    console.log('trying to reference the baby step ' + JSON.stringify(data.friends[1].babyStep));
    let arrLength = data.friends.length;
    let eyed = '';
    let fullName = '';
    let step;
    let friendLinks = '';
    console.log(arrLength);
    for (i = 0; i < arrLength; i++){
      fullName = data.friends[i].firstName + ' ' + data.friends[i].lastName + ', ';
      console.log(fullName);
      step = data.friends[i].babyStep;
      console.log(step);
      eyed = step + 'peeps';
      console.log('eyed ' + eyed);
      friendLinks = document.getElementById(eyed).innerHTML;
      document.getElementById(eyed).innerHTML = friendLinks + fullName;
      friendLinks = '';
    }
  });
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
