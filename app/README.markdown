Script Functions
---------
I have the javascript function in index.html rather than in an external js file because the relative paths to the images and the JSON file were loading inconsistently.

The clickOnStep() function updates the CSS applied to which baby step is clicked on and which baby step was previously clicked on. It also calls the function which updates the dynamic content. 

The checkForFriends() function copies all the last names from the stored JSON data into an array, sorts that array, and pulls up to the first two last names and retrieves their associated first names. The function then builds the dynamic message which prints in the #step-content-footer element.

Stylesheet Formatting
---------
The scroll-behavior: smooth; CSS behavior works in Chrome and somewhat works in Firefox. The animation on the links themselves works on all browsers. I tried multiple solutions to hide the scrollbar for the Baby Steps main content area, but none of them yielded functional solutions, so I decided it was better to have a functional webpage than to have an invisible scrollbar.

Curiously, though I followed the formatting instructions on the annotated mockup, some of the font weights and horizontal letter spacing look different? Perhaps this is a browser-to-browser display difference, if the annotated mockup was made using a different browser than Chrome?

For the dynamic content in the footer, the spacing between it and the bottom of the div designated for the Baby Steps main content is the 40px. Since not all of the paragraphs were the same length, I accommodated for the longest one. This means that for some Baby Steps, the distance between the end of its content and the dynamic content in the footer may appear to be more than 40px.

HTML Content
---------
I tend to err on the side of "give every structural element an ID in case you need to apply special formatting or script to it individually". Thankfully, I believe I did end up having to handle almost every such element of this page in some unique fashion at some point, so it paid off.