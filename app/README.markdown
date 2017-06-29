# Jeremy Leff
## Front-End Developer Exersize

Thank you for the opportunity to participate in this exersize. I had a lot of fun doing it!

### General Notes

#### HTML Markup
I tried to keep the HTML semantic and meaningful, using descriptive id and class names to describe content, with little or no reference to presentation attributes. The HTML contains no stying information whatsoever.

#### CSS
All of the CSS is containted in /app/assets/stylesheets/babysteps.css. Everything is pretty straightforward. The thing that probably gave me the most trouble was getting the #background element to nest in between the test in the nav but still in front of the background color. This required some z-index trickery, but I eventually got it.  :-)

I did pull in fonts from Google since they seemed to be a better match to your mockup than those that I have installed on my system. On a larger project I probably would have utilized a stylesheet language such as LESS, but that seemed overkill here.

#### JavaScript
I tried to keep JavaScript to a minimum since this is such a simple page. All code is contained in /app/assets/javascripts/babysteps.js. The only library I imported was jQuery just to make some of the AJAX and animations a bit easier. Why re-invent the wheel, right?

The main document ready function hides all of the articles (which contain the actual baby step content), disables the anchor tags, registers an event handler for the navigation, and makes a function call to pull down the friends list via AJAX. For the navigation, I am basically just hiding and showing things, and applying an animation to move the selected navigation highlight around. This is again probably the thing that I spent the most time on. If anything, my takeaway from this is that I could easily build a re-usable component that would allow for that some type of animation on future projects. Bonus!

One particular issue that I did not get resolved was that the icon in the main content section seems to jump around a bit when the slideUp animation is called. I'm sure there is a fix for this, but I was getting short on time so I just opted to hide it during the slide and then have it fade back in. Not ideal, but better than leaving it as it was.

Getting the fiends list is just a straightforward ajax call to pull the data down into an array. Once that is completed, a callback function loops through each baby step and filters down the friends based on which baby step they are on. It then calls the getFriendMarkup function which is passed the filtered friends list, and that contains logical which generates the actual text to be displayed on the page. This required more code than I anticipated because there were so many different scenarios to account for.

I considered using a JavaScript framework such as Bootstrap or Angular to inject content into the page and manipulate the DOM, but again that seemed overkill for this.

### Hours spent
I had the basic static page with most of the CSS put together in about an hour. I did opt to use the image sprites for the icons rather than the files since this needs to be production ready, and that cost me a bit more time. I also noticed there was a header with text already on it, but that didn't seem to be within the spirit of the project, and I always prefer to have text inserted as HTML whenever possible, rather than embedded in graphics. This is for not only SEO and accessibility, but better content management.

After that I started working on the JavaScript functionality, which probably took me about 90-120 minutes. I didn't do all of this in one sitting nor did I carefully track my time, so these are just estimates. After that I decided to sleep on it and today I went back and made a few tweaks and fixes, and wrote this document. In total I would say I spent 3-4 hours on this project, but it didn't feel nearly that long.

### Final Notes
I tested this in Chrome, IE12, and Safari on a Mac and an iPhone. Everything looked pretty consistent. If you turn JavaScript off, you should see all of the babysteps at once, and the anchor tags can be used to naviate them.

Thank you again for the chance to work on this! I've been a big Dave follower for years, so it was neat to work on something relavant. I also appreciate you providing very clear instructions and detailed markups, as well as publishing and allowing submissions through Git. That made the job much easier!

Jeremy Leff

jeremy@jeremyleff.com

334-444-3499
