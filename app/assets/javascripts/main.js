;(function(){
  "use strict";
  
  var $tab1 = $("#tab1");
  $(document).ready(function(){
    $tab1.addClass("active");
    getFriends();
  });

  var $tab2 = $("#tab2"), $tab3 = $("#tab3"), $tab4 = $("#tab4"), 
      $tab5 = $("#tab5"), $tab6 = $("#tab6"), $tab7 = $("#tab7");
  var $step1 = $(".step1"), $step2 = $(".step2"), $step3 = $(".step3"), 
      $step4 = $(".step4"), $step5 = $(".step5"), $step6 = $(".step6"), 
      $step7 = $(".step7");

  var li = $(".steps li[id]");
  li.on("click", function(){
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
    step.removeClass("hidden").siblings("div").addClass("hidden");
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
    $.ajax({
      url: "assets/javascripts/baby-steps.json",
      type: "GET",
      success: function(data) {
        var array = data.friends;
        array.sort(compare);    

        //filters friends according to babyStep
        var onStep1 = $(array).filter(function(){
          return this.babyStep === 1; 
        });
        var onStep2 = $(array).filter(function(){
          return this.babyStep === 2;
        });
        var onStep3 = $(array).filter(function(){
          return this.babyStep === 3;
        });
        var onStep4 = $(array).filter(function(){
          return this.babyStep === 4;
        });
        var onStep5 = $(array).filter(function(){
          return this.babyStep === 5;
        });
        var onStep6 = $(array).filter(function(){
          return this.babyStep === 6;
        });
        var onStep7 = $(array).filter(function(){
          return this.babyStep === 7;
        }); 

        function checkAndAppend(arr, step) {
          var string = " are also in Baby Step ";
          var pAndClass = "<p class='social'>";
          var p = "</p>";
            if (arr.length === 1) {
              step.append(pAndClass + "<span class='name'>" + arr[0].firstName + " " + arr[0].lastName + "</span>" + " is also in Baby Step " + arr[0].babyStep + p);
            } else if (arr.length === 2) {
                step.append(pAndClass + "<span class='name'>" + arr[0].firstName + " " + arr[0].lastName + "</span>" + " and " + "<span class='name'>" + arr[1].firstName + " " + arr[1].lastName + "</span>" + string + arr[0].babyStep + p);
            } else if (arr.length === 3) {
                step.append(pAndClass + "<span class='name'>" + arr[0].firstName + " " + arr[0].lastName + "</span>" + " and " + "<span class='name'>" + arr[1].firstName + " " + arr[1].lastName + "</span>" + ", and 1 other friend is also in Baby Step " + arr[0].babyStep + p);
            } else if (arr.length >= 4) {
                step.append(pAndClass + "<span class='name'>" + arr[0].firstName + " " + arr[0].lastName + "</span>" + " and " + "<span class='name'>" + arr[1].firstName + " " + arr[1].lastName + "</span>" + ", and " + (arr.length -2) + " other friends" + string + arr[0].babyStep + p);
            }           
        } 
              
        checkAndAppend(onStep1, $step1);
        checkAndAppend(onStep2, $step2);
        checkAndAppend(onStep3, $step3);
        checkAndAppend(onStep4, $step4);
        checkAndAppend(onStep5, $step5);
        checkAndAppend(onStep6, $step6);
        checkAndAppend(onStep7, $step7);              
                  
      }, error: function(err){
         console.log(err, "There was an error");
      }       
  });
  }
  
})();


          
