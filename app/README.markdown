# H1 Example site for Ramsey Solutions in vanilla JS, CSS and HTML

The main thing I tried to do here is not use any frameworks but use raw JS, CSS and HTML to make the page.

# H2 App structure

I left the main structure of the app the same with a few additions.

* Added ajax.js which holds the method for performing the ajax request.
* Added stepData.js which contains the stepData Array of objects containing the step metadata.
* Added styles.css which has the styles for the site.
* Used a basic CSS fade in transition for the animation between steps.

# H2 How everything works

Other than basic CSS layout the site is pretty simple. The steps buttons pass the index of the active step to the changeStepInfo function when clicked. The changeStepInfo function grabs the metadata out of the stepData array based on the index and then manipulates the DOM based on the ID of the DOM element.

The fun thing was the ajax request to the JSON file, which is done in ajax.js. Ajax.js performs a xhr request and parses the data returned with JSON.parse and places it in the friends object. Which is filtered by Javascript's Array.find function. Then I use a series of if conditionals to check if 1, 2, or 3 or more friends are on the current step.