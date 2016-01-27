DevelopWithPurpose - Front end developer exercise

Author: Brian Cannon
Date: 1/27/2016



For this project I made use of the following resources:
* jquery-1.12.0 (minified version committed)
* Bourbon
* Sass
* Source Sans Pro font (via Google Fonts)


* I used the provided Header image with text and the 'heading_bs*.png' images for content headers as opposed to adding style text. I also
used the shadow jpgs provided for the main shadow (left, right, bottom).

* The list items all use the same background image (icons_small.png) as a sprite for performance. The content toggles with the list
selection on a delay.

* Friends content for each step is fetched via Ajax once during initial load but it can be called with each step transition by supplying
a parameter to the loadStepContent() function.
