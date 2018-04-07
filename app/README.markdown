#Development Notes

##Overview
Due to the relative simplicity of the web page requirements, and the recommended time constraints, I've opted to keep things pretty simple. 
I'm using pure css instead of sass and because my css and js files are small, I haven't setup a build process to minify them. 
Also, I generally prefer to keep text out of images for easier updating, but in this case I used the header image that already included the text.

##Libraries
###Bootstrap
I am using twitter bootstrap as a foundation to setup some base styles and helpful classes and also to help ensure consistency across browsers.
###JQuery
The required AJAX requests are being made through JQuery and the DOM is then updated with the result.
###WOW JS
I've pulled in WOW.JS to quickly add some animations for visual interest.

##Pages
Normally, I would have setup the navigation as tabs (bootstrap JS) so that the content for all 7 baby steps would be on one page. However, in the interest of being friendly to browsers without JS, I created separate pages. This also limited me on the types of animations I could use for the navigation items.

##Graceful Degradation
For browsers without JS, the overall look and feel of the site is only minimally altered. In these cases, some animations will not be visible and the "dynamic content" fetched through AJAX will not appear.