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
    var person = {
      firstName : value.firstName,
      lastName : value.lastName,
      babyStep : value.babyStep
    };

    function compare(a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    }
    array.sort(compare);
    
    var onStep1 = [];
    var onStep2 = [];
    var onStep3 = [];
    var onStep4 = [];
    var onStep5 = [];
    var onStep6 = [];
    var onStep7 = [];

    if(person.babyStep === 1) {
      $(".step1").append(person.firstName, person.lastName);
    } else if (person.babyStep === 2) {
      $(".step2").append(person.firstName, person.lastName);
    } else if (person.babyStep === 3 ) {
      $(".step3").append(person.firstName, person.lastName);
    } else if (person.babyStep === 4) {
      $(".step4").append(person.firstName, person.lastName);      
    } else if (person.babyStep === 5) {
      $(".step5").append(person.firstName, person.lastName);
    } else if (person.babyStep === 6) {
      $(".step6").append(person.firstName, person.lastName);
    } else if (person.babyStep === 7) {
      $(".step7").append(person.firstName, person.lastName);
    }
  });
});

}
