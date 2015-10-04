Front-end Developer Exercise
============================

Assets
-------

* jQuery 2.1.4 (support only needed for modern browsers as well as IE 9+)
* lodash 3.10.1
* LESS source files for style.css are located in the /less subfolder
  - normalize.less resets styles across browsers [https://necolas.github.io/normalize.css/]
  - variables.less contains mixins and variables for use across the site
  - page.less styles the overall page structure
  - header.less styles the main page header
  - content.less styles the main content area
  - footer.less styles the main footer
  - style.less assembles all files into one


Styling
-------

*Page Drop Shadow*: The page drop-shadow effect can be achieved very closely with the CSS3 box-shadow property in modern browsers and would be responsive. I used the background images provided to follow the design closely. However, in a real-world scenario, I would propose a CSS3 box-shadow such as the following to the designers for their consideration:

	.page {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
	
		&:before, &:after {
			content: "";
			position: absolute;
			z-index: -1;
			box-shadow: 0 0 20px rgba(0,0,0,0.8);
			top: 50%;
			bottom: 0;
			left: 10px;
			right: 10px;
			border-radius: 100px / 10px;
		}
		&:after {
			right: 10px;
			left: auto;
			transform: skew(8deg) rotate(3deg);
		}
	}


*Header Image*: I set the header image as a background image with the branding text in front of it. If we wanted to move to a responsive design, it would probably be better to go with an actual image in the HTML controlling the size (e.g. width: 100%; height: auto) and absolutley position the branding text on top.
 
*Two-column Layout*: For the two-column layout, I used the classic faux columns approach with the background image provided as a fallback for linear-gradient. This fallback approach allows the background gradient in IE9 but it wouldn't be responsive in that browser.

*Sprites*: I used a LESS function in variables.less to automatically calculate the background position of the image sprites that are used in the navigation and each section heading. Unfortunately, the large sprite image provided (images/icons/sprites/icons_large.png) wasn't consistent in its dimensions (e.g. providing fourteen 65px high blocks). However, calculating the height of each sprite at 64.86px seemed to be able to do the job decently well. :) A better approach would be to redo the large sprite image with consistent 65px tall blocks.


Scripting
---------

When the page loads, three things happen with JavaScript: (1) the body tag has a ".js" class added to it (for JavaScript-specific styling), (2) TabbedContent is initialized, and (3) Social Steps is initialized.

*TabbedContent*: On initialization, this sets the first navigation tab to active and sets two click events that will animate the navigation background as well as scroll the content text. It also stops the default anchor link from firing, which is only needed if JavaScript has been disabled.

*SocialSteps*: On initialization, this reads the contents of "baby-steps.json". For each baby step number, it finds out the friends who are on that step, determines the appropriate text output through a switch statement, and appends that output to the correct baby step article on the page.