##A note on tooling##

In order to ensure IE 9x Compatability I went with Babel for Javascript.

Source was what I worked with and on npm start the output of Babel is in App/assets/scripts

## Dynamic Content##
Dynamic Content works by first invoking FriendTracker which Invokes GetFriends. 
GetFriends requests baby-steps.json as an AJAX call and parses the output as a JSON object.
It is returned to FriendTracker which iterates over each baby step and returns the output as requested in the Dynamic Content User Story.

##TO DO##
-JSON is undefined in IE
-Get Tabs Working See this for a non-js Reference: https://www.sitepoint.com/css3-tabs-using-target-selector/
-Doublecheck your git repo for duplicate "app" folders, move "App" to "app"

##Browser differences##
There likely is a way to get gradient steps for IE 9 but I couldnt figure out how