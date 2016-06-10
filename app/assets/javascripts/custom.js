// global friends variable
var friendList = [];

// on doc load
$(document).ready(function(){

  // baby step link actions
  $('#bs1_link').click(function(){
    stepsLoop(1);
  });
  $('#bs2_link').click(function(){
    stepsLoop(2);
  });
  $('#bs3_link').click(function(){
    stepsLoop(3);
  });
  $('#bs4_link').click(function(){
    stepsLoop(4);
  });
  $('#bs5_link').click(function(){
    stepsLoop(5);
  });
  $('#bs6_link').click(function(){
    stepsLoop(6);
  });
  $('#bs7_link').click(function(){
    stepsLoop(7);
  });

  // get the json
  $.ajax({
    url:'baby-steps.json',
    type:'GET',
    dataType:'json',
    success:function(data){
      friendList = data;
      $('#fn1').html(getFriendsInStep(1));
    },
    error:function(data){
      alert('error');
    },
  });

});

// function for animated step actions
function stepsLoop(activeStep){

  for (var i=1; i<8; i++){
    if (i == activeStep){
      $('#step'+i).removeClass('hide');
      $('#step'+i).addClass('animated bounceInUp');
      $('#bs'+i+'_link').addClass('active animated fadeIn');
      $('#fn'+i).html(getFriendsInStep(i));
    }
    else {
      $('#step'+i).addClass('hide');
      $('#step'+i).removeClass('animated bounceInUp');
      $('#bs'+i+'_link').removeClass('active animated fadeIn');
      $('#fn'+i).html('');
    }
  }

}

// returns the friends notification comment
function getFriendsInStep(step){

  // temp var for names
  var temp_names = [];

  // loop through the full list-style
  $.each(friendList.friends, function(i,item){

    // if it's the right baby step
    if (item.babyStep == step){

      // add the name to the temp list
      temp_names.push(item.firstName.toString() +' '+ item.lastName.toString());

    }

  });

  // holding var for returned notification
  var return_str = '';

  // put the final string together depending on amount of names
  if (temp_names.length == 0){
    return_str = '';
  }
  else if (temp_names.length == 1){
    return_str = '<span>' + temp_names[0] + '</span> is also in Baby Step ' + step;
  }
  else if (temp_names.length == 2){
    return_str = '<span>' + temp_names[0] + '</span> and <span>' + temp_names[1] + '</span> are also in Baby Step ' + step;
  }
  else if (temp_names.length == 3){
    return_str = '<span>' + temp_names[0] + '</span>, <span>' + temp_names[1] + '</span>, and 1 other friend are also in Baby Step ' + step;
  }
  else if (temp_names.length == 4){
    return_str = '<span>' + temp_names[0] + '</span>, <span>' + temp_names[1] + '</span>, and 2 other friends are also in Baby Step ' + step;
  }

  // return final message
  return return_str;

}
