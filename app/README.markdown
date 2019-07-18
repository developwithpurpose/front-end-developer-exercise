##A note on tooling##
In order to ensure IE 9x Compatability I went with Babel for Javascript.

/source was what I worked with and on npm start the output of Babel is in /app/assets/scripts

## Dynamic Content##
Dynamic Content works by first invoking FriendTracker which Invokes GetFriends. 
GetFriends requests baby-steps.json as an AJAX call and parses the output as a JSON object.
It is returned to FriendTracker which iterates over each baby step and returns the output as requested in the Dynamic Content User Story.

##TO DO##
-Finish Styling Tabs, Ensure it all matches the mockup
-Doublecheck your git repo for duplicate "app" folders, move "App" to "app"

##Browser differences##
IE 9 Uses their own Gradient Style that does not use steps. so it's effectivley one step in the middle.