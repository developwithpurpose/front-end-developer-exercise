6/10/16 - Front-end Developer Exercise

David Joel Stevenson 
david@lookdadcreative.com

I'm not used to commenting in a separate document than the code, so I apologize if I'm not thorough.  Or too thorough, which what I'm thinking now that I'm done...  Sorry for the book I've written.  I'm nervous.

#Code Comments

* Nothing fancy in the <head> tag...  I used two Google Fonts for time - not sure if you'd prefer to download and install on the server and use CSS to utilize them, but I've used Google Fonts for a long time and they display consistently as far as I'm aware.

* Not sure if my div naming convention is clear - I would've commented the div closures in the file.  (bs1-bs7 is not the best - I'm happy to fall in line with whatever naming convention you use)
	* "outer" is simply the container that holds the left/right shadows and the main layout.
	* "main" is where all the magic happens, and I put the gray gradient background on here so I didn't have to worry about the gray navigation div repeating until the end of the whitespace.  That might come back to bite me in IE...
		* "header" contains all banner elements (image/text).  I opted to put the white *border* at the bottom of it on a whim, and was glad I did so when I decided to make the nav background span the whole main div.
		* "nav" contains the navigation as a Unordered List.
		* "content" contains all baby steps (in their own divs), and the height is limited in javascript
			* The "friends" divs are where the dynamic content is dumped.  I forgot to hide them by default, until javascript shows them - but they're empty divs at first anyhow.
	* "bottom-shadow" is self explanatory, after the "clear" element clears my previous floats.
		
		
	* I use a lot of "*-pad" divs, mainly because of the different renderings of margin/pad for each browser.  Instead of worrying about which browsers add pad to the div's width, etc, I opt to keep each element separate so that I can code consistently.
	
	* I opted to place all images using CSS backgrounds so that the "highlighted" versions looked exactly the same.  I did so with the large baby step images because I was thinking I'd have to gray them out too - which I did not.  I used sprites for the same reason - rather than loading a new image each time an event triggered a new image, sprites load them all at the same time.
	
	* I always use an HTML comment when using empty divs, just because I used to have IE problems when leaving them truly empty.  Might just be a legacy habit now that I think about it.

* Javascript adds a class to the highlighted nav to use different styles.

##CSS Comments

I prefer to see the classes and IDs quickly, instead of the styles being super clear themselves.  As such, I keep the selectors on the left and put all the styles on one line.  I'm not meaning to make you work to understand what I'm doing...  I figure browser inspection tools can help you see individual styles.

I always prefer to use code rather than images if possible, and gradients is one of those situations where I tend to do so.  One reason is because it's much easier to change dynamically (and check it out in real time through inspectors) rather than having to spend time in photoshop.  But - happy to fall in line with your convention.

I put my reset at the top, followed by selectors that tend to be very "global" - body, h1, p, a, etc.  After that, I go linerally down the page.  I usually break sections up with comments (like the reset comment).

## Javascript Comments

My javascript code waits until the DOM is loaded before it fires, so as to make sure the elements exists before trying to interact with them.

The first chunk is parsing the JSON file, sorting the info into an array that is based around the babystep.  (Basically, I changed the input file to fit the way my brain works.  I'm sure I could've used it as is, but it was quicker for me to convert it)  Once I know how many friends are in each babystep, I use a switch statement to format the message that will be displayed.  Once that message is ready, I dump it in the associated "friends" div.  Since the only difference between 3 and 4+ friends is the "s" at the end of "friends" in the message, I did one more small check and made 3+ the default case.

The next chunk is dedicated to the animations.  First I limit the size of the content div - via javascript rather than CSS for intention deviations.  After that, I listen for a click event on a nav item.  When I receive an event, I confirm that the user didn't click the already-active element - if so, nothing should happen.  If different, remove "active" class from currently active babystep nav, add it to the newly clicked element - CSS will take care of nav transitions.  Get the target babystep content div via anchor tag, and scroll to it as an animation (rather than just jumping).  Return false so that the normal anchor tag event is suppressed.


#No Javascript (Intentional Deviations)

* If a user isn't using javascript, the links just become standard anchor tags.  No animations will be present because they're tied to a click event.  I didn't do any CSS hover events because they weren't noted in the criteria.  I hid the other babysteps in javascript so that if it wasn't used, then the default would be to show everything.

* The first nav item stays highlighted.  Not necessarily the best option, but I didn't have time to think of something better (rather than simply not highlighting anything).

* The dynamic content (Friends who are on the same step) does not appear, as I'm supposed to pull it in via AJAX.



#Tools

I coded everything from scratch using TextWrangler except for using a background gradient generator for the nav gradient: http://www.colorzilla.com/gradient-editor/.  

I also started with some CSS reset code that I've used for a long time.



#Time Limit

I was told not to spend more than 4 hours on this, and as such I didn't do several things I normally would:

* I didn't thoroughly test in other browsers - only Chrome (though I checked it in Firefox, Safari and Opera as well)
* I didn't test at all in IE, because I'm on a Mac and I've never set up a localhost for my Windows setup via Parallels.  I'm sure there could be some stuff out of whack, but I do try to code with IE's many issues in mind.
* I didn't match the nav animation exactly - rather I did a quick CSS transition for the background color.
* I didn't make a favicon
* It was noted in the criteria to **not** code anything for responsive layouts - that's something I always try to be aware of
* I would've done more to make sure and add better SEO: title tags for links, meta tags for sharing on social media, etc

I did the exercise in less than 4 hours, though I spent extra time obsessing over this readme file.  I got hung up on using jquery's .offset() rather than .position() and wasted a lot of time not understanding why I wasn't getting the animation to work correctly.