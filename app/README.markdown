# Documentation

### JavaScript Differences
 - Animations will be disabled
   - I was unable to figure out how to go about doing both on-click events and class changes without using JavaScript of some kind, so animations are not available when not using JavaScript.
   - Lack of class changing also meant that all Baby Steps are visible at all times. The side navigation bar now just serves as links to anchors in the list of Baby Steps.
 - Dynamic content is not visible

### Browser differences
Only difference that was noticed is in IE9, where CSS transitions are unavailable, so the animations do not play. However, it is still functionally the same, just without the animations (as opposed to when not using JavaScript, where both functionality is changed and animations are removed).

### JavaScript Documentation
 - `getFriendString(index, friends)` Gets the string to display for friends' baby steps.
   - `index` index position of the baby step.
   - `friends` array of friends on that baby step.
 - `getImage(index, blue)` Gets the URL of a navigation icon image.
   - `index` index position of the navigation link in navbar for the image to retrieve.
   - `blue` whether or not to retrieve the blue version.
 - `loadFriends()` Loads the baby steps of friends from the `baby-steps.json` file into the DOM.
 - `selectStep(index)` Selects a baby step to display.
   - `index` index position of the baby step.
 - `toggleStep(index, toggle)` Toggles a baby step display on or off
   - `index` index position of the baby step.
   - `toggle` whether to toggle on or off.

### Other notes
 - Would loved to have used flexbox for styling (I did originally, but it had to be changed), but its lack of compatibility with IE9 led me to just use table displays instead.
 - A few margins were adjusted slightly to try and better match the mockup image.
 - Greatest challenges were the animations and supporting IE9. I don't have much experience in either, but it taught me a lot. Most seamless part was anything JavaScript related.
