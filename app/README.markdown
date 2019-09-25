# Front-end Developer Exercise

Thanks for the opportunity to work on this. There were a couple of challenges that I enjoyed trying to solve.

## Project Notes

* I made a few changes to the typography from the mockup. For example, I made the body text 14px instead of 13px, since I feel 13px starts to become too small for body text. I also tweaked line heights in a few spots to prevent lines of text running into each other and giving the document a little more vertical rhythm.
* I prefer to use CSS for animations whenever possible. I will use JS or jQuery to add/remove classes, as needed, to trigger the animations. If I had more time to work on the project, I would try to clean up how the Baby Steps content areas load/animate on page load. I don't love how that area feels when the page loads.
* The "Dynamic Content" was the most challenging aspect for me. I have limited experience with AJAX requests (mainly in WordPress), so I needed to do some research/learning to get this done (Googling, as well as Jon Duckett's JavaScript & jQuery and Marijn Haverbeke's Eloquent JavaScript 3rd edition).
* I used a Grunt build system that assisted with compiling SASS, and also minifying files for production.
* In the navigation sidebar, I chose to use a CSS box shadow instead of using the shadow image provided. Primarily for performance reasons. I briefly considered using CSS box shadows for the left/right/bottom shadows, but since they are a little more "designed," I elected to use the images to achieve the more unique look.
* I used the sprites for the icons also for performance reasons. 

## Recommendations/Feedback

It would've been helpful if each icon area in the sprites were sized identically. It slowed down development determining the right sizes and background-positions for each icon. I would provide this feedback to the design team. In my current role as both a designer and front-end dev, I would make this change myself. Taking the time to edit the design file would still save development time, so I'd be glad to do it.

Or, in an ideal world, I'd recommend using SVGs or an icon font if possible.

Thanks again!