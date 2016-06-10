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

});

function stepsLoop(activeStep){

  for (var i=1; i<8; i++){
    if (i == activeStep){
      $('#step'+i).removeClass('hide');
      $('#step'+i).addClass('animated bounceInUp');
      $('#bs'+i+'_link').addClass('active animated fadeIn');
    }
    else {
      $('#step'+i).addClass('hide');
      $('#step'+i).removeClass('animated bounceInUp');
      $('#bs'+i+'_link').removeClass('active animated fadeIn');
    }
  }

}
