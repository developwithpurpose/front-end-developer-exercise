
var resultsContainer = $("#results");
$.each(data.friends, function(index, value) {
    resultsContainer.append(                  
    "<p>step: " +                             
      index + 
      ", firstName: " +
      value.firstName +
      ", lastName: " +
      value.lastName +
      ", babyStep: " +
      value.babyStep +
      "</p>"
  );
});