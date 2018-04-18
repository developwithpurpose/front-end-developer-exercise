Document your submission here (optional, but recommended)

# Ramsey Solutions Front End Evaluation
Thank you for the opportunity to get back to writing a little bit of code! It's been a few years since I have been this deep into code. I have spent the better part of the last 6 years building and managing teams of UX, Front End Dev, Analysts, and Project Managers. The concepts are not foreign to me at all, however I did struggle a bit on the logic in the javascript and pulling the JSON as I am a tad rusty acting as an individual contributor. I look forward to your feedback and the opportunity to dig and learn a bit more!

## Updates
* Used HTML5Boilerplate to normalize CSS and Zeroed out Margins for all browsers
* Used fonts from Google Fonts
* https://fonts.google.com/specimen/Source+Sans+Pro
* https://fonts.google.com/specimen/Open+Sans
* I used Box Shadow around the content area. I tried to use Inset for the Aside Nav Baby Steps but could not get it do just the left side in the time I had so I used the PNG.
* To make the most of the code length I used background images for the top header and instead of flat text used actual text for H1,H2,H3 tags to improve SEO and accessibility.
* I tweaked and re saved down the shadow_left.jpg image as it was not the correct gradient.
* I decided to use ColorZilla to make the background gradient for faster speed.
* Utilized javascript and CSS for the animations and show hide div information
* I was interested in using a another JSON data set for the content. However since this is to be accessible and SEO production ready I opted to load all the content in the DOM then show hid areas needed with jQuery on click even.
* Used CSS animation for fade over
* Used CSS with JavaScript to change click back grounds images, font weight, and color
* Used CSS animation and transition for aside nav for click event

## javaScript
* I put all divs on the page with content in the DOM for SEO and accessibility. Then I hid them all in CSS. Using javaScript I toggled the visibility of the babyStep content Div.
* I leveraged getElementById to target divs and then wrote to the style per object.
* I used vanilla javascript instead of jQuery
* I looped through all the aside nav tabs by listening for the onClick event to detect which item was clicked.
* Then I looped through each other div in the nav pane and changed the background colors of others not clicked to transparent and changed the background of the item clicked to white.
* I used a filter sort to identify all the friends and which step they were on.
* I stubbed in most of the placeholders. However I went over alotted time. I would of like to of corrected the sorting and made it actually more dynamic.
* I managed to get a little animation in as well. However trouble shooting the JSON and logic took up most of the time I had.

## Installation
* Download GitHub
* Clone repository or download zip
* npm install in Terminal
* npm start in Terminal
* open your browser to the either the local or remote link provided by the npm start command. Default is http://localhost:8080.
* Use CTRL-C to stop the server when you are done.
* cd ~/Documents/GitHub/front-end-developer-exercise
* npm start
