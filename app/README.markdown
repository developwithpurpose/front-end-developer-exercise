
Front-end Developer Exercise
============================

By: Matthew Morrison
m.james.morrison00@gmail.com
248.978.5509

Hi Ramsey Solutions! Thank you for giving me the opportunity to work with you, 
taking the time to chat & look over my code. I'm going to walk you  through
my process of completing this here code challenge, as well as how much time I 
spent on each step. Let's dive right in!


Table of Contents:
1. Discovery
2. Setup
3. Markup
4. Styling
5. Javascript
6. Fixes & Polish
7. Extra Credit
8. Post-Mortem


1. Discovery
------------

The first thing I did was discover the project. I forked the repo, pulled it
down, and check it out. I like to spend a moment just checking out the actual
directory structure and types of files to see what I'm getting into. Everything
looks nice and organized, and some design mockups are included. Sweet! No need
to bug a designer over Slack for the latest version. Now let's check out that
README in the root. Upon reading it, I see very clearly the criteria defined:

	- Code out the provided design (ensure semantic/accessible markup)
	- Broswer compatibility: modern, down to IE9 (actual experience may vary)
	- Create transition from step to step
	- Implement dynamic content for social encouragement aspect
	- Usable without javascript
	- NO front-end frameworks
	- NO mobile view

Now that the goals are established, I've reviewed the design and scope of the
project, I can accurately estimate my time commitment/budget estimates.

At an average of $62.5k / year || $31.25 / hour:

	- 10 hours for MVP (minimum viable product) 	= $312.50 
	- 15 hours total to meet all criteria			= $468.75 Total

Great. I just spent the past 15 minutes in the discovery phase, which is the
absolute most important to me. That will save me hours down the road, and even
more on bigger projects. This translates to less money spent, and a much happier
client. Time to dev!

(time: 0:15 hours:minutes)
(total: 0:15)

2. Setup
--------

Ok, there's actually one last step before we code...setup! Exporting images,
gathering fonts, and setting up my development environment. Having all of the
assets readily available when development starts is crucial, and prevents
roadblocking them down the road. I spend as much time as needed here - how
many times have fonts or design version inconsistencies plagued an otherwise
great development cycle? Here's what I'll be working with:

	- Gulp: taskrunner (requires Node.js)
	- SASS: CSS compiler
	- javascript/Jquery (ES-5 for IE9 compatibility)
	- Google Fonts
	- Icomoon.io (for converting icons into a useable font)

As mentioned, I'll be using Icomoon.io to convert some .SVG icons into a font
sheet. I do this because working with icons as part of a font sheet gives me
much more flexibility in terms of styling than working with static images 
from a .PNG sprite sheet. Thankfully, the vector objects of each icon are
included. Great! Now, let's actually write some code. This takes up a good
chunk of time, but the payoff is well worth it.

(time: 1:15)
(total: 1:30)


3. Markup
---------

Basic markup here. I'll typically input the majority of the content up-frnot,
so I can close that extra tab in Chrome and not fuss with the content Google
doc later. While doing markup, I'll think of how I want to lay out the page
elements. I'll prepare the elements with classes I anticipate using for styling.
At this stage, however, that's all up in the air. Markup will typically change
when I begin styling and for javascript functionality.

(time: 0:30)
(total: 2:00)


4. Styling
----------

There's nothing special going on here. I prefer to use SASS (the .scss syntax)
for styling as opposed to CSS. In addition to nesting capabilities and
functions, SASS allows me to break up an otherwise monolithic CSS sheet into
several modular components. On a small project like this, the benefit is
negligible - but when you're working on Univeristy, healthcare, or enterprise
sites, it's a huge help. I leverage what's known as the "7-to-1" SASS layout,
which dictates how my directory is laid out and where SASS files go.

Note - since we're supporting IE9, a couple of common CSS properties are
off-use - mainly transition/transition-delay, which I was planning on using
for that transition. Bummer!

Once I feel I've done about 85% - 90% of the styling, I'll move on. This is 
to ensure I don't spend too much time on this step. In terms of minimum viable
product (MVP), it's better to have 80% of all tasks complete than 100% of a few.
I'll polish off the last bit alongside the rest of the tasks as the project
nears completion. But for now...it's javascript time!

(time: 2:00)
(total: 4:00)


5. Javascript
-------------

I kept things pretty simple here, too. I went with Jquery because I'm familiar
with it, it's widely supported, and has fantastic DOM element selectors.
Leveraging Google's CDN to host it means load time won't be an issue.

Javascript structure is very important to me. I'm all about the object-oriented
layout, so I also spend a few minutes planning out my structure. Not only is
object-oriented javascript (OOJS) much neater to come back to after a week off or to
pass off to another developer, but you're also cleaning up the global namespace and
limiting the issues you'll have with other plugins or libraries. There's just
something about grouping your event handlers and listeners that puts this
developer at ease :)

For transitions/animations: I tend to only use JS to add/remove classes, and allow
CSS to handle any transitions. This is because JS/JQuery animations tend to be slow,
especially on mobile. Fortunately, IE9+ allows for CSS hardware acceleration (like
using translate3d()), so that'll ensure some butter-smooth transitions!

The problem, again, is that IE9+ won't support our transition time. So anything
that was supposed to ease in and out will just *snap* into place. For IE9 in
particular, this is acceptable.

For the friend's baby step revtrieval & display, here's a step-by-step rundown of
my process:

	1. JQuery.AJAX call to 'baby-steps.json'
	2. On success, group friends together based on their baby step
	3. For each new baby step group, reorder the names alphabetically by last name
	4. Finally, for each baby step target the respective DOM element and append
	   a dynamic list of names to it, with conditions to display various messages

And now we've built about 90% of the functioning site in one work day and spent 
only $250 for the MVP. Under budget & extra time! I'd call that a success!
Now, for the other 90%...

(time: 4:00)
(total: 8:00)


6. Fixes & Polish
-----------------

Now that our MVP is built, here's where each task gets fully completed.
Everything is indeed functional, and now we're going to make it bullet-proof.
This step includes a barrage of markup, styling & functionality fixes.

One of the fixes was ensuring all of the information is available without
javascript. I'd planned this from the beginning to be used in conjunction
with Modernizr.js to detect browser capabilities, but I was having some
issues with it. Turns out it was much easier:

	1. Style the page from the beginning under the impression that js
	   cannot be used for anything - transitions, hiding/showing, etc.
	2. In javascript, add a specific class to the 'body' element in the DOM
	3. Add some specific styling to correspond with this class.
	4. Javascript on? Styling will be one way. Not on? Style will be another.
	5. Sit back and realize how easy that was.

Once we've polished off each task either to 100% completion or until our
budget/deadline are met, it's time to ship it! Or is it...

(time: 3:40)
(total: 11:40)


7. Extra Credit
--------------

Since we're still within budget, there is one polish item I'd really like.
In our current baby-steps.json "friends" object, all of the friends are
pretty neatly organized by baby step, from least to greatest. But what if
this isn't the case every time? What if our API was written by a new dev?
Or worse...a designer?! I assumed, for this step, that our friends would
return wildly unsorted.

Also, there are a few folks with the same first name. So I'll have to add
another dimension to my sorting methods here.

The new steps for friend-gathering are as follows:
	
	1. JQuery.AJAX call to get the aforementioned friends object
	2. Sort through entire list and order by baby steps - low to high
	3. Group friends together based on baby step
	4. Arrange each new group alphabetically by last name
	5. If last names are the same, compare first name
	6. If first names are still the same, just give up
	7. Print 'em all out!

Great. Now our app can handle the object no matter how unsorted it is.

And That concludes the project! I've built a fully functional and well-
polished product within my time-frame, so that means I stayed within
my budget and deadline.

(time: 1:30)
(total: 13:10)


8. Post-Mortem
--------------
I'm overally pretty happy with how it turned out, especially since I did 
it slightly quicker and therefore cheaper than I anticipated. I'm excited
to deliver this to the client and get some feedback.

In the future, however, there are a few things I'd do differently.
Most notably:

- Decouple/reliece linear dependencies for friends sorting

Instead of having one function call the next function, which calls the
next & so on, I'd probably implement a better callback system or another
function that will call them synchronously.


---


Besides that, I'd say this was a great test! Front-end development is always
a thrill for me, because I am able to take a vision and design and create 
something tangible out of it. In regard to this project, I'm looking forward
to hearing your feedback on what I did well and where I can improve.

God Bless!
- Matthew Morrison
248.978.5509
m.james.morrison00@gmail.com
