$(function(){
  var babySteps;
  $.ajax({
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  function loadBabyStep(){
    $.getJSON('../app/assets/javascripts/baby-steps.json')
    .done( function(data) {
      babySteps = data;
    }).fail( function() {
      $('#event').html('Sorry! We can not load the baby steps now');
    });
  }


loadBabyStep();
});