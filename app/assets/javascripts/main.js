
$(document).ready(function() {
  var counter;
  var friendsBabyStep;
  var friendsInStep1 = [];
  var friendsInStep2 = [];
  var friendsInStep3 = [];
  var friendsInStep4 = [];
  var friendsInStep5 = [];
  var friendsInStep6 = [];
  var friendsInStep7 = [];

  $.ajax({
    url: "/../../baby-steps.json"
  }).done(function(baby_steps) {
    for (var i = 0; i < baby_steps.friends.length; i++) {

      var step = baby_steps.friends[i].babyStep;

      if (step === 1) {
        friendsInStep1.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      } else if (step === 2){
        friendsInStep2.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }else if (step === 3){
        friendsInStep3.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }else if (step === 4){
        friendsInStep4.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }else if (step === 5){
        friendsInStep5.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }else if (step === 6){
        friendsInStep6.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }else if (step === 7){
        friendsInStep7.push(baby_steps.friends[i].firstName + " " + baby_steps.friends[i].lastName);
      }
    }

    $('#step1').one("click", function() {
      friendsInStep1.sort(sortByLastName);

      if (friendsInStep1.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep1[0] + "</a> is also in Baby Step 1</p>";
      } else if (friendsInStep1.length >= 2) {
        counter = friendsInStep1.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep1[0] + "</a>, <a>" + friendsInStep1[1] + "</a> are also in Baby Step 1.</p>";
        } else if (counter === 1) {
          friendsBabyStep = "<p><a>" + friendsInStep1[0] + "</a>, <a>" + friendsInStep1[1] + "</a> and " + counter + " other friend are also in Baby Step 1.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep1[0] + "</a>, <a>" + friendsInStep1[1] + "</a> and " + counter + " other friends are also in Baby Step 1.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      console.log(friendsBabyStep);

    });

    $('#step2').one("click", function() {
      friendsInStep2.sort(sortByLastName);

      if (friendsInStep2.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep2[0] + "</a> is also in Baby Step 2</p>";
      } else if (friendsInStep2.length >= 2) {
        counter = friendsInStep2.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep2[0] + "</a>, <a>" + friendsInStep2[1] + "</a> are also in Baby Step 2.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep2[0] + "</a>, <a>" + friendsInStep2[1] + "</a> and " + counter + " other friend are also in Baby Step 2.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep2[0] + "</a>, <a>" + friendsInStep2[1] + "</a> and " + counter + " other friends are also in Baby Step 2.</p>";
        }
      } else {
        friendsBabyStep = " ";
      }
      $('#babyStepInfo2').append(friendsBabyStep);
    }); 

    $('#step3').one("click", function() {
      friendsInStep3.sort(sortByLastName);

      if (friendsInStep3.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep3[0] + "</a> is also in Baby Step 3</p>";
      } else if (friendsInStep3.length >= 2) {
        counter = friendsInStep3.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep3[0] + "</a>, <a>" + friendsInStep3[1] + "</a> are also in Baby Step 3.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep3[0] + "</a>, <a>" + friendsInStep3[1] + "</a> and " + counter + " other friend are also in Baby Step 3.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep3[0] + "</a>, <a>" + friendsInStep3[1] + "</a> and " + counter + " other friends are also in Baby Step 3.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      $('#babyStepInfo3').append(friendsBabyStep);
    }); 

    $('#step4').one("click", function() {
      friendsInStep4.sort(sortByLastName);

      if (friendsInStep4.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep4[0] + "</a> is also in Baby Step 4</p>";
      } else if (friendsInStep4.length >= 2) {
        counter = friendsInStep4.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep4[0] + "</a>, <a>" + friendsInStep4[1] + "</a> are also in Baby Step 4.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep4[0] + "</a>, <a>" + friendsInStep4[1] + "</a> and " + counter + " other friend are also in Baby Step 4.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep4[0] + "</a>, <a>" + friendsInStep4[1] + "</a> and " + counter + " other friends are also in Baby Step 4.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      $('#babyStepInfo4').append(friendsBabyStep);

    }); 

    $('#step5').one("click", function() {
      friendsInStep5.sort(sortByLastName);

      if (friendsInStep5.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep5[0] + "</a> is also in Baby Step 5</p>";
      } else if (friendsInStep5.length >= 2) {
        counter = friendsInStep5.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep5[0] + "</a>, <a>" + friendsInStep5[1] + "</a> are also in Baby Step 5.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep5[0] + "</a>, <a>" + friendsInStep5[1] + "</a> and " + counter + " other friend are also in Baby Step 5.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep5[0] + "</a>, <a>" + friendsInStep5[1] + "</a> and " + counter + " other friends are also in Baby Step 5.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      $('#babyStepInfo5').append(friendsBabyStep);

    }); 

    $('#step6').one("click", function() {
      friendsInStep6.sort(sortByLastName);

      if (friendsInStep4.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep6[0] + "</a> is also in Baby Step 6</p>";
      } else if (friendsInStep6.length >= 2) {
        counter = friendsInStep6.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep6[0] + "</a>, <a>" + friendsInStep6[1] + "</a> are also in Baby Step 6.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep6[0] + "</a>, <a>" + friendsInStep6[1] + "</a> and " + counter + " Other Friend are also in Baby Step 6.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep6[0] + "</a>, <a>" + friendsInStep6[1] + "</a> and " + counter + " other friends are also in Baby Step 6.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      $('#babyStepInfo6').append(friendsBabyStep);

    }); 

    $('#step7').one("click", function() {
      friendsInStep7.sort(sortByLastName);

      if (friendsInStep7.length === 1){
        friendsBabyStep = "<p><a>" + friendsInStep7[0] + "</a> is also in Baby Step 7</p>";
      } else if (friendsInStep7.length >= 2) {
        counter = friendsInStep7.length - 2;
        if (counter === 0) {
          friendsBabyStep = "<p><a>" + friendsInStep7[0] + "</a>, <a>" + friendsInStep7[1] + "</a> are also in Baby Step 7.</p>";
        } else if (counter === 1){
          friendsBabyStep = "<p><a>" + friendsInStep7[0] + "</a>, <a>" + friendsInStep7[1] + "</a> and " + counter + " Other Friend are also in Baby Step 7.</p>";
        } else {         
          friendsBabyStep = "<p><a>" + friendsInStep7[0] + "</a>, <a>" + friendsInStep7[1] + "</a> and " + counter + " other friends are also in Baby Step 7.</p>";
        }
      } else {
        friendsBabyStep = " "; 
      }
      $('#babyStepInfo7').append(friendsBabyStep);

    });  

  });


  $('.babySteps a').click(function(){
    $('.highlight').removeClass('highlight');
    $(this).addClass('highlight');
  });

  function sortByLastName(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) {
      return -1;
    } 
    else if (lastA > lastB) {
      return 1;
    } 
    else {
      return 0;
    }
    
  }

});