
$(document).ready(function(){
  $("button").click(function(){
  	$.getJSON("baby-steps.json", function(data){
  	  var items = [];
      $.each(data, function(key, val){
      	items.push(key, val);
        $(".friends").append(items);
      });
    });
  });
});

