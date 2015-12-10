HTML
I used HTML5 tags appropriately for the content that went inside, making it more semantic and readable. I used articles for each baby step detail, unordered lists for the baby step links, section for the main body, and header for the header.

CSS
I used a limited reset to standardize some margins and paddings cross browser, then went from general to specific on styling the elements ( html, body, section, ul, articles). Then at the very bottom, I have generic class & el styles. I used the sprites provided for the icons, however they were not perfectly spaced, so I had to compensate a little for different icons. 

I used google CDN for fonts. Helvetica wasn't available of course, but it should present on any computer made in the last 20 years.

JAVASCRIPT
There are three name sections. One for initialization (hiding all the baby steps except the first one, pulling up the last step the user was on, etc.). 
The second for event handling (registering the click event on the baby step link and animating the transition and saving this step for the user after refresh.
The third is for the dynamic content (pulling in friends that are in the same step)

DESIGN/Deviations 
I completed the project according to the mockup, however I had to change the Baby step detail heading line height because it was close to the sub-heading .I also used css for the dropshadows instead of the images for a more modern approach.

EXTRA FEATURES
I made the page save the lasts step the user was on so if the closed the window and returned to it later, they could start on the same step they left off on.
