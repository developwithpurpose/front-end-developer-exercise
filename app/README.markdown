An minimally viable product for Ramsey Front-End Developer exercise.

Styles for the app as a whole are located in the stylesheets folder.

The functionality is similar to Tabs in Semantic UI (React). Selecting a tab in the index displays the content of the corresponding card. All other content is hidden.

The dynamic messages are in a script tag at the top of the file. The data is fetched from the server and looped over. The baby step of each person is checked, and they are slotted into the appropriate array. The arrays are then sorted based on the last name of the people in them.

Further improvements:
 - Use an object with keys rather than an array of arrays for the data.
 - Add jQuery for the AJAX call.
 - Fancier transitions.
 - Implement a CSS grid for proportions.
 - Separate the JavaScript into logical external files.