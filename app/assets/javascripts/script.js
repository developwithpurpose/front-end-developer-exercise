$(document).ready(function() {
  var scrollTriggers = document.querySelectorAll(".menu-item");

  if (scrollTriggers.length > 0) {
    for (var i = 0; i < scrollTriggers.length; i++) {
      scrollTriggers[i].addEventListener("click", function(){
        scrollToBabyStep(this.dataset.position);  
        loadFriends(this);     
        $(".menu-item").removeClass("active");
        this.classList.add("active");
      });
    }
  }

  function scrollToBabyStep(position){
    $(".scroll-content").animate({
      top: position
    });
  }

  function loadFriends (babyStep){
    var babyStepDiv = babyStep;
    var babyStepNum = babyStep.dataset.babystep;

    $.getJSON( "/baby-steps.json", function(data) {
      var friends = [];

      // console.log(data);
      // console.log(data.friends);

      // ran out of time ------------ :/

    });     
  }
});
