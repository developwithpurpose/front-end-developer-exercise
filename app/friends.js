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
$.each(data.friends, function(index, value) {
  resultsContainer.append( //1. Fetch some data from the server.
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