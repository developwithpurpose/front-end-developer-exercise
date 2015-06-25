$(document).ready(function(){
  $(".step1").siblings("div").hide();
});

$.get("assets/javascripts/baby-steps.json", function(data){
  var array = data.friends;

  $.each(array, function(key, value){
    var first = value.firstName;
    var last = value.lastName;
    var step = value.babyStep;

    var onStep1 = [];
    var onStep2 = [];
    var onStep3 = [];
    var onStep4 = [];
    var onStep5 = [];
    var onStep6 = [];
    var onStep7 = [];

    if(step === 2) {
      onStep2.push(first, last);
    } else if (step ===3 ) {
      onStep3.push(first, last);
    } else if (step === 4) {
      onStep4.push(first, last);
    } else if (step === 5) {
      onStep5.push(first, last);
    } else if (step === 6) {
      onStep 6.push(first, last);
    } else if (step === 7) {}
  }); 
});

$("#tab1").on("click", function(){
  $(".step1").show().siblings("div").hide();
});

$("#tab2").on("click", function(){
  $(".step2").show().siblings("div").hide();
});

$("#tab3").on("click", function(){
  $(".step3").show().siblings("div").hide();
});

$("#tab4").on("click", function(){
  $(".step4").show().siblings("div").hide();
});

$("#tab5").on("click", function(){
  $(".step5").show().siblings("div").hide();
});

$("#tab6").on("click", function(){
  $(".step6").show().siblings("div").hide();
});

$("#tab7").on("click", function(){
  $(".step7").show().siblings("div").hide();
});


