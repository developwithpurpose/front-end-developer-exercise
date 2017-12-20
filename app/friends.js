// (function() {
//   var JSONSource = "app/baby-steps.json";
//   $.getJSON( JSONSource, {
//     format: "json"
//   })
//     .done(function( data ) {
//         console.log(data.items),
//       $.each( data.firstName, function( firstName, lastName, babyStep ) {
//         $( .friends ).appendTo( #steps );
//         // if ( i === 3 ) {
//         //   return false;
//         // }
//       });
//     });

var resultsContainer = $("#results");
$.each(data.friends, function(index, value) { //1. Fetch some data from the server.
    resultsContainer.append(                  //2. Format all of the names and step information.
    "<p>step: " +                             //2a. Loop over each friend from my fetched data
      index +                                 //2b. Append a new paragraph to the results container
      ", firstName: " +
      value.firstName +
      ", lastName: " +
      value.lastName +
      ", babyStep: " +
      value.babyStep +
      "</p>"
  );
});