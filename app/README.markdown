#Jacob Allen | Front End Developer Exercise

Overview
---
This exercise is intended to showcase my knowledge of web technologies and best practices.  While I'm relatively new to the industry, I trust you'll find I have a solid foundation upon which I'm eager to build.  

As cited in the instructions, I intentionally left out any comments in my code other that what is necessary for readability.  I have also included a SASS table of contents to aid in searching the stylesheet.  All other documentation and comments will be found in this document.

Technologies & methodologies used
---

In addition to HTML, CSS and JavaScript, I used the following technologies:

+ [SASS](http://sass-lang.com)
+ [BEM CSS](http)
+ [Bootstrap](https://getbootstrap.com)
+ [jQuery](http://jquery.com)
+ [Google Fonts](https://fonts.google.com)
+ [Node.js](https://nodejs.org)

Intentional deviations
---

+ An obvious deviation is that there is no request to retrieve the baby-steps.json data, and no message logic for the returned data.  This is because I wanted to adhere to the four hour limit.  My tools of choice for the `GET` request would have been a function that utilizes the `jQuery.getJSON()` method.  The message logic would require more planning and testing for me to articulate how I would solve it.  

+ Another intentional deviation is the lack of shadow images around the borders of the main content wrapper and to the left of the baby-steps content area.  I intentionally left this out because I wanted to allocate more time to the JavaScript functionality. I would have used a `:before` and `:after` speudo class for the sides of the main content area followed by a stand-alone `<img>` for the bottom.

JavaScript notes
---

You'll notice a blend of jQuery and "vanilla" JavaScript in my code.  I tend to lean towards "vanilla" JavaScript for querying the DOM and assigning data to variables, and use jQuery mostly for UI elements (slide animation in this case). This is mostly because I'm faster with JavaScript and rely less on documentation than when I'm using jQuery. However, I frequently use jQuery's animations, so I chose it for the quickest way to fullfill the animation requirement.    

Although my variable and function names are quite long, my intentions are for them to read as close plain English as possible.  If this were a task for me to undertake in the workplace, I would refactor to make it more readable and put more thought into naming.
