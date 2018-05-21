# Miltenberger Submission Documentation
I chose to go with a slide up/slide down animation when users change
between steps.

I kept the HTML markup relatively simple and utilized css grid to handle the layout.

Once the ajax request for the friends data comes in, I group it by step number and tally up the friends in the format I need.

I did not use any build tools for this project. I did pull in a font from google fonts to handle matching the one in the mockup. I pulled in JQuery to handle DOM manipulations and the animations when switching steps.

Because the steps require JQuery to handle transitions, if javascript is disabled the user will be stuck on the first step.

I noticed the mockup had the verbage "on this step" and the markdown instructions had "in this step" so I went with the markdown instructions. I hope that's fine.

I don't own any windows machines and was unable to get my linux computer to run a windows VM to test in IE9. However, I used fallbacks where possible and refrained from using newer javascript syntax that wouldn't have been supported.