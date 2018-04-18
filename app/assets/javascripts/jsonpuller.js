var friendsList = function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', './baby-steps.json', true);
   xobj.onreadystatechange = function () {
  if (xobj.readyState == 4 && xobj.status == "200") {
  callback(xobj.responseText);
  }
   };
   xobj.send(null);
}

var friendsList = {
    "friends": [
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
        { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
        { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
        { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
        { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
        { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
        { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
        { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
        { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
        { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
        { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
        { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
        { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
        { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
        { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
        { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
        { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
        { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
        { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
        { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
    ]
}
