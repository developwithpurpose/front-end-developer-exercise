function showJSON2 () {
  var showjson = document.getElementById("step2");
  $.getJSON( "././baby-steps.json", function( json ) {
    var username1 = json.friends[0].firstName + " " + json.friends[0].lastName;
    showjson.innerHTML = username1 + " is also in Baby Step 2";
  });
};

function showJSON3 () {
  var showjson = document.getElementById("step3");
  $.getJSON( "././baby-steps.json", function( json ) {
    var username1 = json.friends[2].firstName + " " + json.friends[2].lastName;
    var username2 = json.friends[1].firstName + " " + json.friends[1].lastName;
    showjson.innerHTML = username1 + " and " + username2 + " are also in Baby Step 3";
  });
};

function showJSON4 () {
  var showjson = document.getElementById("step4");
  $.getJSON( "././baby-steps.json", function( json ) {
    var username1 = json.friends[3].firstName + " " + json.friends[3].lastName;
    var username2 = json.friends[5].firstName + " " + json.friends[5].lastName;
    showjson.innerHTML = username1 + ", " + username2 + ", and 1 other friend are also in Baby Step 4";
  });
};

function showJSON5 () {
  var showjson = document.getElementById("step5");
  $.getJSON( "././baby-steps.json", function( json ) {
    var username1 = json.friends[9].firstName + " " + json.friends[9].lastName;
    var username2 = json.friends[8].firstName + " " + json.friends[8].lastName;
    showjson.innerHTML = username1 + ", " + username2 + ", and 2 other friends are also in Baby Step 5";
  });
};

function myFunction1() {
  var div1 = document.getElementById("myDIV1");
  if (div1.style.display === "none") {
        div1.style.display = "block";
    };
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div2 = document.getElementById("myDIV4")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV5")
      div3.style.display = "none";
  var div2 = document.getElementById("myDIV6")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV7")
      div3.style.display = "none";
};

function myFunction2() {
  var div2 = document.getElementById("myDIV2");
  if (div2.style.display === "none") {
    div2.style.display = "block";
  };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div4 = document.getElementById("myDIV4")
      div4.style.display = "none";
  var div5 = document.getElementById("myDIV5")
      div5.style.display = "none";
  var div6 = document.getElementById("myDIV6")
      div6.style.display = "none";
  var div7 = document.getElementById("myDIV7")
      div7.style.display = "none";
};

function myFunction3() {
  var div3 = document.getElementById("myDIV3");
  if (div3.style.display === "none") {
    div3.style.display = "block";
  };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div4 = document.getElementById("myDIV4")
      div4.style.display = "none";
  var div5 = document.getElementById("myDIV5")
      div5.style.display = "none";
  var div6 = document.getElementById("myDIV6")
      div6.style.display = "none";
  var div7 = document.getElementById("myDIV7")
      div7.style.display = "none";
};

function myFunction4() {
  var div4 = document.getElementById("myDIV4");
  if (div4.style.display === "none") {
      div4.style.display = "block";
    };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div5 = document.getElementById("myDIV5")
      div5.style.display = "none";
  var div6 = document.getElementById("myDIV6")
      div6.style.display = "none";
  var div7 = document.getElementById("myDIV7")
      div7.style.display = "none";
};

function myFunction5() {
  var div5 = document.getElementById("myDIV5");
  if (div5.style.display === "none") {
    div5.style.display = "block";
  };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div4 = document.getElementById("myDIV4")
      div4.style.display = "none";
  var div6 = document.getElementById("myDIV6")
      div6.style.display = "none";
  var div7 = document.getElementById("myDIV7")
      div7.style.display = "none";
};

function myFunction6() {
  var div6 = document.getElementById("myDIV6");
  if (div6.style.display === "none") {
    div6.style.display = "block";
  };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div4 = document.getElementById("myDIV4")
      div4.style.display = "none";
  var div5 = document.getElementById("myDIV5")
      div5.style.display = "none";
  var div7 = document.getElementById("myDIV7")
      div7.style.display = "none";
};

function myFunction7() {
  var div7 = document.getElementById("myDIV7");
  if (div7.style.display === "none") {
        div7.style.display = "block";
    };
  var div1 = document.getElementById("myDIV1")
      div1.style.display = "none";
  var div2 = document.getElementById("myDIV2")
      div2.style.display = "none";
  var div3 = document.getElementById("myDIV3")
      div3.style.display = "none";
  var div4 = document.getElementById("myDIV4")
      div4.style.display = "none";
  var div5 = document.getElementById("myDIV5")
      div5.style.display = "none";
  var div6 = document.getElementById("myDIV6")
      div6.style.display = "none";
};
