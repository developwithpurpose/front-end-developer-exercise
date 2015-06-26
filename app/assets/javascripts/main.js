var tab1 = $("#tab1");
$(document).ready(function(){
  $(".step1").siblings("div").hide();
  activate(tab1);
  getFriends();
});

var tab2 = $("#tab2");
var tab3 = $("#tab3");
var tab4 = $("#tab4");
var tab5 = $("#tab5");
var tab6 = $("#tab6");
var tab7 = $("#tab7");

tab1.on("click", function(){
  activate(tab1);
  $(".step1").fadeToggle("slow").show().siblings("div").hide();
});

tab2.on("click", function(){
  activate(tab2);  
  $(".step2").fadeToggle("slow").show().siblings("div").hide();
});

tab3.on("click", function(){
  activate(tab3);
  $(".step3").fadeToggle("slow").show().siblings("div").hide();
});

tab4.on("click", function(){
  activate(tab4);
  $(".step4").fadeToggle("slow").show().siblings("div").hide();
});

tab5.on("click", function(){
  activate(tab5);
  $(".step5").fadeToggle("slow").show().siblings("div").hide();
});

tab6.on("click", function(){
  activate(tab6);
  $(".step6").fadeToggle("slow").show().siblings("div").hide();
});

tab7.on("click", function(){
  activate(tab7);
  $(".step7").fadeToggle("slow").show().siblings("div").hide();
});

function activate(tab) {
  tab.addClass("active");
  tab.siblings("li").removeClass("active");
}

function getFriends() {
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
    if(step === 1) {
      onStep1.push(first, last);
    } else if(step === 2) {
      onStep2.push(first, last);
    } else if (step ===3 ) {
      onStep3.push(first, last);
    } else if (step === 4) {
      onStep4.push(first, last);
    } else if (step === 5) {
      onStep5.push(first, last);
    } else if (step === 6) {
      onStep6.push(first, last);
    } else if (step === 7) {
      onStep7.push(first, last);
    }
    console.log();
  }); 
});

}
