Document your submission here (optional, but recommended)
Dependencies for this project:
#Installed eslint
#On local server loaded and ran sass watch `sass --watch app/app.scss` along with localhost `npm start`. 

#My thought process for JS on `friends.js`:
// 1. Fetch some data from the server
// 2. Format all of the names and step information
// 2.a Loop over each friend from my fetched data
// 2.b Append a new paragraph to the results container

#this iteration did not work: 
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