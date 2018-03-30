Front-end Developer Exercise

Justin Pritchard
jpritchard9518@gmail.com
308-641-2361

HTML
The HTML was structured in a way that keeps the header image in full view, and the columns of the main content area proportional. While I was not expected to develop for a mobile view, I naturally default to some of those practices from experience. This is why I chose to the image scale with the page during a resize, and the columns are not a static width. I defaulted the view to the first baby step, and then swapped out the images and text when a new step is clicked from the left column.

CSS
I used a lot of parent classes with my selectors even though it wasn't necessary. In the event that more content is added to the page in the future, I wanted to minimize the chance of a common duplicate class name being added and applying styles in places that are not intended. For animations I chose to use transitions.

JavaScript
I started my script defining an object filled with the copy and empty array of friends for each baby step. I then set up a function to be called when the DOM has been rendered. I chose to do this method so that in the event of a slow load time or waiting for a query to be performed, the rest of the page would not have to wait for the list of friends to be returned. Once they are returned, a for loop cycles through all the friends and pushes them into their appropiate baby step objects. Each array of friends is then sorted by last name. Since the page defaults to the first baby step, the friend data for the first friend is generated via the 'generateHtmlString' function which takes the array of friends and the stepnumber. This generated HTML is appended to the '.socialContainer' element to be displayed on the page. Each Baby Step option is given an onclick function called "setActiveStep" and passed the step number as a parameter. This function swaps out all images and classes that trigger animations and style adjustments.


Deviations
I was not able to fully complete the no JavaScript requirement, mainly because I began to run out of time and wanted to polish up a couple of other things. When turned off the page still loads and defaults to the first baby step, but the ability to cycle through the steps is non-existent.

The page is functional on IE 9, but the animations are not ideal as I was not aware transitions were not supported on this browser until completion.

Also discovered when testing on browsers that firefox did not like my shadow properties.

Decided to submit without addressing these deviations to stay honest to the time requirement.