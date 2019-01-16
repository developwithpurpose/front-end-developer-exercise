## Thanks!
Thank you for the opportunity to complete Ramsey Solutions "Develop With Purpose" take home challenge! I enjoyed developing an interactive version of the Baby Steps to help people learn how to become debt free, invest their money, and build wealth and give!

## Setup 
In order to retrieve the friend list using JSON, I set up an express environment that served index.html, along with the babysteps which I retrieved using an .AJAX call. The project can be cloned, and started by using ``nodemon`` or ``npm start``. 

## HTML Generation
Some HTML was generated using Javascript. I intended to go back and add an HTML version later, but I didn’t end up having time. I realize it would have been easier to have the HTML version from the start and then have Javascript to change the page after, however, I want to respect the time consideration and submit what I was able to complete in ~four hours.

## Opportunites for Improvement:
> Improvement I: Change color of images next to each babystep 
  * Plan Of Action: In order to change the color for each image representing the baby steps, I'd add an ID to each image class in the HTML. When a step is clicked, I'd remove the image and append the new blue image by storing the image location in an array and accessing the array at each index.  

> Improvement II: Complete transition animation for Baby Step Navigation Menu 
   * Plan Of Action: To be completely honest, I'm not exactly sure how I'd complete this navigation, however, accroding to the provided transition .gif file, I'd probably get the baby step that the user clicked and then use a transition/keyframe to change the color of every baby step element between the number that was the page was currently on the number that the user clicked. For example, if a user was viewing baby step 2 and wanted to see what baby step 6 was, I'd get the elements between 2-4 and change the color to white for half a second until we reached 6 and then hold the white color on the step clicked. 

> Improvement III : Create more subtle transition when changing each baby step.
   * Plan Of Action: Currently, when a baby step is clicked, the baby step description is removed and then appended to the div. I believe that removing and appending each element is causing each transition to appear brash and in order to have a more subtle change, I'd put all of the descriptions in the HTML document, then show or hide the elements with css property ``transtion:fade-in-out``. 

> Improvement IV: HTML Placement
  * Currently, the HTML descriptions reside in ``main.js``, which was not considerate of people that don't run Javascript. We want the page to be accessible to everyone, especially those in countries where internet access is limited, so generating the text in Javascript wasn't the best decision, but if I had the chance to redo the assignment, I'd take this into more significant consideration.  

