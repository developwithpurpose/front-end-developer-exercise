Design Decisions
================

Functionality
-------------

Originally I intended the non-JS version to just be a long scrollable page (the hash-linked menu would jump to the correct section), but decided in the end to maintain more of an application appearance, and so hid the scrollbar and set each Baby Step section to fill the full area. Navigation works, meaning the only thing JS is adding to the page is transitions between Baby Steps, and changing the menu style for the selected menu.

Header Image
------------

I considered just using the header image with text built-in, but the file size was 50% larger. It also doesn't include text for accessibility or search engines (it could be done with alt-text and making the image an h1 tag, but that's not as good). Besides these concerns, if there were to be a "future" mobile-site implementation, the scaling of the text with the image would make it end up not matching other font sizes in the app.

Shadows
-------

I always prefer to use CSS instead of images where possible, *and* the provided shadow images were both not identical to the mockup shadows and hard edges on the bottom, making them unusable. Given this I used pseudo elements with box-shadows (just putting a box-shadow on the page itself couldn't get close enough to the desired look), and approximated the shadows from the mockup as best I could.

IE9 does not support CSS Gradients, and so the menu shadow will not appear. Since this is a style enhancement and not key to functionality or brand, and IE9 accounts for only 0.3% of global browser usage, I consider it to be an acceptable sacrifice for the sake of not loading a shadow image.

Menu Icons
----------

I wanted to have transitions when hovering over or clicking on the menus, so opted to use the blue version of the images and use a CSS filter to de-saturate when not active. IE6-11 & Edge 12 do not support the filter property, and as such stay blue all the time. As these only account for 2.7% of browser usage, I decided it was an acceptable trade-off. If this accounted for a larger market share I would instead have set the icons as a background image on the element, and used CSS to switch the background image. The reason not to default to switching images is that it would have removed the ability for a transition.

A method of doing the transition without filter would have been to have a background image of the gray icon & a blue icon image perfectly aligned on top of gray, with an opacity that would fade with the transition. This would however have the potential to become mis-aligned in some edge cases, and could end up showing both. Given this, I decided the filter option was the best choice.

Other Notes
-----------

When the first menu item is selected it looks a little odd with it having no top delineation. I tried putting 1px of gradient above it, but it looked dreadful.

There were some discrepancies between the mockup & annotations. The *Other Friends* section gives a font color that is much darker than what shows in the mockup. I went with the annotated instructions, since I couldn't accurately tell the actual color as the font is too small and thus there isn't a consistent body of pixels to get the true color from.