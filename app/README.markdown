Document your submission here (optional, but recommended)
<<<<<<< HEAD
HTML: 
-link stylesheet to html
-Getting started with project; noting sections of project, framing out into containers and assigning class names for use with styling later. 


CSS:


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

### Message Logic

* if 0 friends, then don't show any message
* if 1 friend, then show "Paul Taylor is also in Baby Step 2"
* if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
* if 3 friends, then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
* if 4 or more friends, then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"

##For Button Animation:
#used `https://www.w3schools.com/howto/howto_css_animate_buttons.asp` and added in "pressed" effect. Was my most favorite, but will be updated in v.2. 