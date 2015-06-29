;(function(){
  "use strict";
  
  var $tab1 = $("#tab1"), $step1 = $(".step1");
  $(document).ready(function(){
    $step1.siblings("div").hide();
    $tab1.addClass("active");
    getFriends();
  });

  var $tab2 = $("#tab2"), $tab3 = $("#tab3"), $tab4 = $("#tab4"), 
      $tab5 = $("#tab5"), $tab6 = $("#tab6"), $tab7 = $("#tab7");
  var $step2 = $(".step2"), $step3 = $(".step3"), $step4 = $(".step4"),
      $step5 = $(".step5"), $step6 = $(".step6"), $step7 = $(".step7");

  $(".steps li[id]").on("click", function(){
    var id = $(this).attr("id");
    handler(id);
  });

  function handler(id) {
    if (id === "tab1") {
      activate($tab1, $step1);
    } else if (id === "tab2") {
      activate($tab2, $step2);
    } else if (id === "tab3") {
      activate($tab3, $step3);  
    } else if (id === "tab4") {
      activate($tab4, $step4);
    } else if (id === "tab5") {
      activate($tab5, $step5);
    } else if (id === "tab6") {
      activate($tab6, $step6);
    } else if (id === "tab7") {
      activate($tab7, $step7);
    }
  }

  function activate(tab, step) {
    tab.addClass("active");
    tab.siblings("li").removeClass("active");
    step.fadeToggle("slow").show().siblings("div").hide();
  }

  function compare(a, b) {
    //checks if last names are the same, sorts by first
    if (a.lastName === b.lastName) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }
    
    //sorts last name
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    } 
    return 0;
  } 

  function getFriends() {
    $.get("assets/javascripts/baby-steps.json", function(data){
    var array = data.friends;

    array.sort(compare);    

    $.each(array, function(key, value){
      var person = {
        firstName : value.firstName,
        lastName : value.lastName,
        babyStep : value.babyStep
      };

      if(person.babyStep === 1) {
        $step1.append(person.firstName, person.lastName);
      } else if (person.babyStep === 2) {
        $step2.append(person.firstName, person.lastName);
      } else if (person.babyStep === 3 ) {
        $step3.append(person.firstName, person.lastName);
      } else if (person.babyStep === 4) {
        $step4.append(person.firstName, person.lastName);      
      } else if (person.babyStep === 5) {
        $step5.append(person.firstName, person.lastName);
      } else if (person.babyStep === 6) {
        $step6.append(person.firstName, person.lastName);
      } else if (person.babyStep === 7) {
        $step7.append(person.firstName, person.lastName);
      }
    });
    });
  }
  
})();
