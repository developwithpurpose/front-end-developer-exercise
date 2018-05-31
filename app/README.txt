challenge.js

jQuery.fn.scrollTo = function(elem, speed)

This function is created to animate the main content of the page. It takes two variables, elem which is the target element to scroll to and speed is the speed of the scroll in milliseconds.

$('#sidebar-highlight').css('display', 'block');

The sidebar highlight bar is initially set to dispaly:none to hide it for non-javascript users. If javascript is enabled it automatically turns on when the document is ready.

$('.sidebar-item').on('click', function(e) {});

When a sidebar item is selected is removes the selected class from any previously selected item and sets the new on to selected. It also animates the position of the sidebar-highlight to the correct position and calls the scrollTo function to move the main content.

function getFriends(step)
 
This function processes babyStep.json file for a given step. It pulls in the json, adds it to an array, sorts the array by lastName, and then uses a switch to process based on the length of the sorted array. It can handle any number of friends with the last item using array length to output additional friend count. A for loop after the function calls the function for each step.



challenge.scss

I used SASS to automate some of the css.
