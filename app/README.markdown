Introduction
------------
Hello! My name is Samuel Schumacher and I greatly appreciate your help in reviewing my work. If you have any questions or suggestions on how I could improve this project, please don't hesitate to contact me at samschu@live.com. Thank you again and have a blessed day!


General Notes
-------------
Frameworks and libraries used for this project:

* jQuery
* Google Fonts

###Naming Conventions
* All IDs are named using all lowercase letters with words seperated with underscores. Example: ```my_favorite_id```.
* All Classes are named using all lowercase letters with words seperated with dashes. Example: ```my-favorite-class```.
* All JavaScript variables are named using camel-case. Example: ```myFavoriteVariable```.


Philosophy
----------
I am a firm believer that less is better when it comes to web design and development. With this project, my aim was to use as little markup, styling, and JavaScript as possible while still creating a clean and functional webpage.


Style Notes
-----------
I used SASS for all of the styles for this project. You will find the source files in the "sass" folder inside of "assets". The compiled and minified CSS is found in the "stylesheets" folder.

Instead of using the provided image shadows, I opted to use CSS box-shadows. To get the larger, slightly rounded shadows on the top left, top right, and center bottom, I used CSS pseudo selectors with border-radius properties.

Instead of using JavaScript to animate the left navigation, I am using CSS transitions to fade the foreground and background colors in and out. CSS transitions are not supported in Internet Explorer 9, but the webpage is still presentable without them.

To get the typography as close to the mock-up as possible, I used the Google Font library to import both the Source Sans Pro and Open Sans fonts for the headings.


JavaScript Notes
----------------
As the user clicks on the left navigation items, each Baby Step content "card" will slide in and the previous one will slide out.

To support non-JavaScript browsers, the right Baby Step content area will allow the user to scroll on the Y axis. The navigation will still allow the user to jump directly to the Baby Step of their choice.
