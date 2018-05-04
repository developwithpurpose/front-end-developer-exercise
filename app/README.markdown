<h1>Initial set up</h1>

<ul>
	<li>Study typography</li>
	<li>Study overall layout</li>
	<li>Make assumptions on best course of actions</li>
	<li>Test my assumptions</li>
	<li>Refine what is working</li>
	<li>Try a new strategy for what isn't working</li>
</ul>

<h2>Layout Choices</h2>

<ul>
	<li>Wrapped the entire live area into one container-this helps with positioning and centering the whole group opposed to the pieces</li>
</ul>

<hr>

<h2>Challenges met</h2>

<h3>Create a UL element, and give room for a white div element to pass between the text/img and the background</h3>

<p>First go: I originally gave the li elements a background color and put a margin of 2px between each element. This would prove faulty in set up because I need the white div to move freely behind the text and image but in front of the grey background. So my solution was to color the entire ul element and give each li a border bottom 1px solid white. I set the li text and img to relative, and the white div to absolute. </p>

<h3>Image Reasoning:</h3>

<p>I chose to use the sprite sheet of icons for performance reasons. The size of the sprite sheet is around 3700bytes whereas the individual requests per image is around ~1300bytes, 7 small grey icons @ ~1300bytes + one active blue is too much considering the option to save requests for just a little more code</p>

<h3>Text</h3>

<p>Some of the quotes in the included .txt file didn't encode well in FF, so I swapped all smart quotes and apostrophes to standard</p>

<p>Some punctuations and operators didn't display on Safari, so replaced "%'s" and the em-dash with html entity codes</p>

<h3>Functionality</h3>

<h4>The UL</h4>
<ul>
	<li>On click adds a class of .clicked to target element</li>
	<li>filter through list of elements and remove .clicked from any li a that has previously been .clicked</li>
	<li>white div (#toggle-bar) should move according to li a that has been clicked</li>
</ul>

<h4>The Dynamic Content</h4>
<ul>
	<li>Generate list of friends who have completed the baby step
			<li>Display an ascended ordered list of names, by last name.</li>
			<li>Show two friends as hyperlinks, and the remainder display as an integer</li>
	</li>
	<li> Challenging to take an array of objects, filter them, and display to corresponding div/sections
		<p>I chose to push each object into an array that matches the steps, I felt that semantically it could be managed easier in the future with least confusion. The next task was to sort each array by alphabetical value. The next step was I think the most challenging for me, abstracting a string of html into a template that can be used by all baby-step sections, and then take into account the different values of the array. For instance, baby-step 1 displays no friends, therefore an undefined error appears for 0 friends. I used a conditional and wrote two functions that handle < 2 and >= 2 that will display the list accordingly. </p>
	</li>
</ul>