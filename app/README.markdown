Develop With Purpose Front End Developer Exercise
Sean Byrd
Application for JavaScript Developer

HTML is composed within index.html, with an unordered list of anchors to form the menu. Clicking the anchor scrolls the content element to the linked div.

CSS is hand-written using no preprocessors. Order of elements is from header, to sidebar, to content div. Order of properties is as follows: size styling, position styling, font styling, color styling, effect styling. Hover and active states for the menu are animated using CSS, though the active state does not function in IE 11.

JavaScript is split between two files: social.js and animations.js. The code for the "Dynamic Content" user story is contained within social.js, and scroll animations are defined in animations.js. As the scroll animations use JavaScript, they are not functional when it is disabled. The code utilized jQuery, which is included in the javascripts folder, but no additional libraries are utilized.

The Dynamic Content builds a string based on the number of users in the same step, allowing for the code to continue functioning as users complete steps. The friend links are currently hash-prefixed, as there is no page to link to, but the hash would be removed as more content is built.