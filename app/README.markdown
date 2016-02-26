## Layout
Since we are not taking a mobile approach, I went with an absolute positioned framework with a fixed image size. There are obviously many routes to go depending on the required platforms.

## Technologies
This page will run completely javascript free aside from the dynamic content. Without javascript the animations and selected styles of the navigation items will not work. However, as the requirements stated, the page is fully functional.

With javascript enabled, I took advantage of JQuery to enhance the page.
* A style is applied to the last selected navigation item. This will alter the color, font-weight of the text, and adjust the position of the sprite to change the color.
* A white slider will be animated over the selected menu item.
* The content is animated to show the correct step as each menu item is clicked.
* The dynamic content is added to the current step and the information is retrieved from the JSON file.

## The Files
As this is a very simple "app", I decided it would be overkill to break this up into several files.
* app/index.html - contains all the html for the application, layout, text, content, etc.
* app/assets/stylesheets/main.css - contains all styles. It uses background urls with the sprite images for the icons. It imports the fonts defined in the mockup. I chose to use background gradients and box-shadow's instead of the supplied images.
* app/assets/javascripts/main.js - contains all the javascript/JQuery used for server calls, animations, etc.

## Conclusion
This was an enjoyable challenge, to create something while being limited to the very basic of building blocks for the web. There are obviously more sophisticated ways to create this "app" with all the frameworks and libraries available today. It is, however, important to understand the basics. I appreciate the time and effort it took to create this, as well as the time it will take to look over my implementation.

Thanks for the opportunity,

Will Davis