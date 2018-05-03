<h1>Initial set up</h1>

<ul>
	<li>Study typography</li>
	<li>Study overall layout</li>
	<li>Make assumptions on best course of actions</li>
	<li>Test my assumptions</li>
	<li>Refine what is working</li>
	<li>Try a new strategy for what isn't working</li>
</ul>

Layout Choices:

-Wrapped the entire live area into one container
--this helps with positioning and centering the whole group opposed to the pieces

-Treat the shadows as separate that of the main body of content

Image Reasoning:

-I chose to use the sprite sheet of icons for performance reasons. The size of the sprite sheet is around 3700bytes whereas the individual requests per image is around ~1300bytes, 7 small grey icons @ ~1300bytes + one active blue is too much considering the option to save requests for just a little more code

Challenges met

-Create a UL element, and give room for a white div element to pass between the text/img and the background
--First go: I originally gave the li elements a background color and put a margin of 2px between each element. This would prove faulty in set up because I need the white div to move freely behind the text and image but in front of the grey background. So my solution was to color the entire ul element and give each li a border bottom 1px solid white. I set the li text and img to relative, and the white div to absolute. 

Text 

-Some of the quotes in the included .txt file didn't encode well in FF, so I swapped all smart quotes and apostrophes to standard

-Some punctuations and operators didn't display on Safari, so replaced "%'s" and the em-dash with html entity codes

Functionality

-On click adds a class of .active to target element
--filter through list of elements and remove .active from any li a that has previously been .active
---white div should move according to li a that has been clicked