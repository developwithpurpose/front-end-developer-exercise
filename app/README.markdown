Document your submission here (optional, but recommended)

Written By: Jason Lesslie   jason.lesslie@gmail.com

General Comments
================
dependencies: express, json-server

1.	To launch open command prompt and navigate to the root folder “front-end-developer-exercise-master/app”
2.	Type “node app” into command prompt this launches the frontend on port 8080
3.	Type “node server” into command prompt to launch server containing “baby-steps.json” data on port 3000
4.	Go to “http://localhost:8080” in a web browser to view front-end
5.	Go to “http://localhost:3000/friends” in a web browser to view all items in the friends object of the “baby-steps.json” file

It is possible to add alternate solution for browsers with no javascript, but I did not have time to add this backward compatibility. I envisioned having the webpage with user scrolling enabled to allow the users to view all the Baby Steps. This could be achieved by changing the "overflow: hidden" to "overflow-y:auto" in the "step-detail" class */

CSS Comments
============
* `@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');` imports the Source+Sans+Pro from google fonts, this is required because this font is not a built-in font

```
#header-top {
  background:#bbbfc2;
  margin: auto;
  min-width: 980px;
  width: 50%;
  height: 276px;
}
```
* `margin: auto;` sets the left and right margins equal to each other to center the container class on the window
* `min-width: 980px;` prevents the container width from going less than 980px, remove this line and add other CSS code to make responsive
* `width: 50%;` this sets the container class width to half of the parent element width. parent element width is full window width

```
.left-sidebar, .right-sidebar {
  height: 724px;
  width: calc(50% - 490px);
}
```
* `height: 724px;` sets the height of the div's with a class of "left-sidebar" and "right-sidebar" equal to the height of the sidebar image
* `width: calc(50% - 490px);` uses calc() function to calculate margin width in px units. 436px is the width of the container class

```
.left-sidebar {
  float: left;
}
```
* `float: left;` positions the div's with a class of "left-sidebar" to the left

```
.left-sidebar img{
  float: right;
}
```
* `float: right;` positions the html element starting with "img" located within the "left-sidebar" div to the right
```
.step-menu .step {
  height:60px;
  padding-left: 70px;
  border-bottom: 1px;
  border-left:0px;
  border-top:0px;
  border-right:0px;
  border-color:#ffffff;
  border-style: solid;
}
```
* `border-bottom: 1px;` adds boarder around the "step" element within the "step-menu" class, used boarder instead of image for faster load time

```
.icon-blue, .icon-grey{
  background-image: url('../images/icons/sprites/icons_small.png');
  background-repeat: no-repeat;
  margin-left: 24px;
  margin-right: 24px;
  height: 24px;
  width: 30px;
  vertical-align: middle;
  float: right;
  position: relative;
  top: 18px;
}
```
* `height: 24px;` sets the default height and width of the sprite icons
* `float: right;` positions the icons to the right of the "step-menu" div
```
.icon-blue {
display: none;
}
```
* `display: none;` hides icon-blue class div so they only show when they have the focus
```
#icon-grey-bs1{
  background-position: -1px -5px;
  height: 15px;
  top: 22.5px;
}
```
* `background-position: -1px -5px;` I used <http://www.spritecow.com/> to get the background-position pixel values for each icon
* `height: 15px;` override default height set by icon-grey class because bs1 icon has smaller height
```
.step-detail{
  float: left;
  padding-left:70px;
  padding-right:70px;
  width: 500px;
  line-height:18px;
  font-size: 13px;
  font: Helvetica;
  font-weight: normal;
  color: #65686f;
  height: 278px;
  overflow: hidden;
}
```
* `float: left;	` positions the "step-detail" div class to the left
* `padding-left:70px;` adds padding around the "step-detail" element, padding does not collapse, margin collapses when window size decreases
* `height: 278px;` sets the height of the "step-detail" div to the height of the baby step 1 element
* `overflow: hidden;` overflow hidden hides the baby steps other than the one the user clicked

JavaScript comments
===================
```
$(function() {
	code
});
```
* `$(function()` is shorthand for `$(document).ready()`. page cannot be changed by jQuery or JavaScript until the document is ready
* `document.getElementById("btn-bs1").focus();` sets focus to Baby Step 1 to highlight that button
* `var selectedBtn = "";` initializes the selectedBtn variable

```
$(".step").click(function(){
	code
};
```
* when any element in the `step` class is clicked the code inside the curly braces `{ }` runs
* `selectedBtn = $(this).attr("id").split('-');` sets selectedBtn variable equal to the div's id string that is split into 2 elements since the `detail-bs` only has one hyphen 

* `var btnString = selectedBtn[1];` sets the btnString variable equal to the second element in the selectedBtn array, JavaScript arrays are zero based
* `var btnNumber = btnString[btnString.length - 1];` sets the btnNumber variable equal to the last character in the btnString



* `var scrollLoc = 0;` initialize the scrollLoc variable. scrollLoc is a shortened variable name for scrollLocation
```
for(i = 1; i <  btnNumber; i++) {
	scrollLoc += $("#detail-bs" + i).height();
	console.log("#detail-bs" + i + " height=" + $("#detail-bs" + i).height());
};
```
* use for loop to add up height of all `detail-bs` elements
* `i=1` runs before the for loop start and is used to initialize the variable
* `i < btnNumber`  when condition is false stop the for loop
* `i++`  increments the "i" variable by one
* `scrollLoc += $("#detail-bs" + i).height()`  shorthand for scrollLoc = scrollLoc + $("#detail-bs" + i).height()
* `$("#detail-bs" + 2).height`  returns height of the element with an `id="detail-bs2"`
* `console.log("#detail-bs" + i + " height=" + $("#detail-bs" + i).height())`  prints height of each "detail-bs" element to console, optional used for debugging purposes



* `$(".step-detail").animate({scrollTop: scrollLoc},'slow');` uses animation function to scroll to position `scrollLoc` which is number of pixels from the top of the `step-detail` class 
* `$(".step-detail").css({'height': $("#detail-bs" + btnNumber).height() + 'px'});` use CSS and jQuery to resize the height of the "step-detail" class this is needed to show just the height of clicked baby step element
* if all baby step elements were the same height I could statically set the height of "step-detail" class in the CSS stylesheet

### Get Friend JSON Data 
```
var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'http://localhost:3000/friends');
dataRequest.onload = function() {
  var friendJSON = JSON.parse(dataRequest.responseText);
  renderHTML(friendJSON);
};
dataRequest.send();
```
* `dataRequest.open('GET', 'http://localhost:3000/friends');` the server.js file is setup to run on port 3000
* `var friendJSON = JSON.parse(dataRequest.responseText);` saves JSON data to variable firendJSON
* `renderHTML(friendJSON);` pass JSON data to function renderHTML()
```
function renderHTML(friendData) {           /* function renderHTML accepts variable friendData */
  var friendStepArray = [];           /* initialize variables */
  for (stepNum=1; stepNum < 8; stepNum++){      /* for loop to cycle through each baby step in increments of 1 */

    friendStepArray[stepNum] = "";   /* initialize friendStepArray[stepNum] element of array to prevent null */
                                     /* error in if statement on lines 150 and 154 */
    var friendCount = "";            /* resets the friendCount variable to prevent from adding friends from previous steps */
    for (i=0; i < friendData.length; i++) {        /* loops through JSON data and saves firstName lastName when babyStep equals the stepNum */
      if (friendData[i].babyStep == stepNum) {
        friendCount++;                             /* increments the friendCount variable by one: friendCount = friendCount + 1 */
        friendStepArray[stepNum] += friendData[i].firstName + " " + friendData[i].lastName + ", ";
      }
    };
    var friendString = "";
    friendString = friendStepArray[stepNum].split(",");

    /* if statements below handle formatting and proper grammar for cases of 1, 2, 3, greater than 3 friends in each step */                  
    if (friendCount > 3) {
      fiendCount = friendCount - 2;
      friendString = "<text-blue>" + friendString[0] + "</text-blue><text>, </text><text-blue>" + friendString[1]
                      + "</text-blue><text> and " + fiendCount + " Other Friends are on this step</text>";
      appendHTML(friendString, stepNum)
    }
    else if (friendCount == 3) {
      fiendCount = friendCount - 2;
      friendString = "<text-blue>" + friendString[0] + "</text-blue><text>, </text><text-blue>" + friendString[1]
                      + "</text-blue><text> and " + fiendCount + " Other Friend are on this step</text>";
      appendHTML(friendString, stepNum)
    }
    else if (friendCount == 2) {
      friendString = "<text-blue>" + friendString[0] + "</text-blue><text> and </text><text-blue>" + friendString[1]
                      + "</text-blue><text> are on this step</text>";
      appendHTML(friendString, stepNum)
    }
    else if (friendCount == 1) {
      friendString = "<text-blue>" + friendString[0] + "</text-blue><text> is on this step</text>";
      appendHTML(friendString, stepNum)
    }
  };
};
```



```
function appendHTML(appendString, elementNum) {
  $("#detail-bs"+elementNum+"-dynamic").append(appendString);
}
```
* use append() function to add appendString to end of detail-bs element 
