##A note on tooling##
In order to ensure IE 9x Compatability I went with Babel for Javascript.

/source was what I worked with and on npm start the output of Babel is in /app/assets/scripts

Linting was handled by VS code's in-editor ES lint and PostCSS (which I used to ensure browser compatability with autoprefix)

## Dynamic Content##
Dynamic Content works by first invoking FriendTracker which Invokes GetFriends. 
GetFriends requests baby-steps.json as an AJAX call and parses the output as a JSON object.
It is returned to FriendTracker which iterates over each baby step and returns the output as requested in the Dynamic Content User Story.

##Browser differences##
-IE 9 Uses their own Gradient Style that does not use steps. so it's effectivley one step in the middle. IE 9 Of course does not have the Dynamic Content Requirement....which makes the note on tooling completley moot, I realized that at work 7/18/19. Though Theoretically it CAN be done via a mix of Babel and Browserfy.
-I'm assuming that the resolution this site was designed for was 980x964 since that is about what the calculations came out as