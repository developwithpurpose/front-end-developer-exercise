Front-end Developer Exercise Submission - Chris Windings
============================

Overview
---------

Firstly, thank you for taking the time to review this code challenge and consider me for this position. Below are the condensed versions of my comments in how this page functions. My contributions are in the following files: 

 - index.html
 - ./assets/stylesheets/main.css
 - ./assets/javascripts/main.js compiled to main.babel.js.

 One more note before digging into the files below. I was instructed that this exercise should take 4 hours. At roughly the 4 hour mark, I did not have the dynamic content working as intended. I had only finished through main.js line 16, just after converting the friends object to an array. The remainder of the .js took roughly 1.5 additional hours to complete, or 5.5 total.

 HTML - index.html
 ------------------

 The html consists of 3 main sections - hero, nav, and main content. The main content has a fixed height and is styled to hide additional content unless the step is chosen in the nav. 

  - Intentional Deviation
  As linear-gradient is not supported in IE9, the conditional has been added in the head to ignore the gradient altogether in IE. 

  - Incomplete item(s)
  The four shadow images surrounding the mockup body has not been included. Unfortunately I did not notice them until final review. 

  CSS - main.css
  ---------------

  The flow of this css starts with the selection of any tags directly, then flows in order of appearance in the HTML. No pre-processors for this have been used. 

  Javascript - main.js
  ---------------------

  On window load, the baby steps json file is loaded, then converted to an array. This array is sorted using the compare function to re-order the array by lastName ascending. Then, the html elements are selected and a nested loop uses the index of current element to find all friends on the current step and send them to the findNumOfFriends function to concatenate and format according to how many are on the step. The response is returned to complete th promise and output to the html. Babel was used to compile my javascript to es2015. 

  - Incomplete Item(s)

  Nav Item OnClick functions - I did not complete a function to change the image and class of the nav items to style them when active. This was on the list, just fell in priority to the dynamic functionality in the time given.

  Polyfills - The fetch api and promises are not fully supported back to IE9. Adding polyfills for them was also on my list, just not prioritized in the time given. In the event that the user is on an unsupported browser, the functionality will be hidden and error logged.