Front-end Developer Exercise: Submission
========================================

Notes
-----
*   I chose to use a box-shadow on the main content wrapper instead of mimicking that effect with the images.
    This avoids extra image loads as well as dealing with the extra markup.

*   For the Ajax loading of the friends information, I could have done this a couple of different ways;
    In this example, I chose to only retrieve the data and rely on sorting it at the beginning once the page is loaded.
    
    Another, more dynamic way would be to call it whenever you are switching baby steps. If the data was live and changing constantly,
    I would've done it that way.

*   I utilized location hashes so that when javascript is disabled, the baby-steps are still navigable without having to provide different
    markup. These are also being pushed to the history api when javascript is available so that they are preserved in browser history for navigation.
