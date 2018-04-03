Notes:
	I decided to use Bootstrap, this is NOT to be mobile-friendly, but because it's a great resource for page structure and components.
	
	For styling I used a mix of inline and using a separate file. The inline styles are primarily to load font styles quicker.
	
Accessibility:
	I chose h1, h2, and h3 tags with WCAG and SEO in mind
	I used HTML5 section elements to conform to WCAG
	Used aria label on navigation
	
IE 9:
	I opted to stick with a solid color for the background as IE9 doesn't suppose CSS gradients. It DOES support filter feature which is needlessly complicated. If people are going to be using IE9 to access our site, chances are their entire web experience is getting worse every day.

Header:
	Even though there is an image with all the words on it, I opted to use the blank image and use text.

Navigation system:
	Using Bootstrap tabs
	Animation: CSS-only fade-in
	
Main:
	Like the header area: Instead of using the images with icons and text, I opted to use text. This is better for SEO.
	Animation: CSS-only slide-in. Less complicated than having to rely on JavaScript (or another JS library).
	
Dynamic Content:
	This feature refreshes the content when each link is clicked rather than page load. This way, if we were dealing with a regularly updated source, it would update the values more frequently.
	The JavaScript grabs the link's id attribute and uses it to find the friends on that babystep.
	The ajax cycles through the attached json file and finds the friends who are on this particular baby step.
	The json data returned is loaded into a friends array (friendsArr). A response is given based on the number of friends in the array.
	
