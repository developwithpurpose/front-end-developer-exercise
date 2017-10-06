Josh White Front-end Developer Exercise
============================

To make this exercise a challenge, I wanted to see how much of the mock I could
acheive using no JavaScript.  As well as using purely vanilla JavaScript for
anything that actually needed it.


JS vs No JS
---------

I was able to produce very close to full style and functionality with no JS, the
 only deviations with JS disabled are:

* The links and icons on the sidebar don't change color when clicked
* The Friends at This Step aren't loaded from the JSON (obviously)

It could have been done to change the color and font style of the text in the
side-nav.  I stylistically decided against this because it would seem strange
that there was no change in the icon.


Transitions with no JS
------------

One of my favorite methods to reduce dependency on JavaScript with projects like
this is to use the `:target` selector that hash links can activate, and combine
that with transitions.

It was took some thinking to be able to trigger both the nav transition, as well
as the content with the same `:target` attribute.  Since we can't target up the
ancestor chain, I decided to place triggers at the top level of the
content div, and then use those to select down into both the `nav` and `main`
content areas.

I did this with self closing `<a>` tags that only had ids.  The only purpose of these
is to act as a trigger for the transitions.



Other Decisions
----------------

* I was unsure if it was the intention to use the completed images of the header
and the content headers instead of creating that content from scratch.  Since
this was a rather short challenge, I decided to go ahead and do it all manually.

* I also hardcoded the height of the content container to be the height of the side
shadows, as it was described in the README to not worry about responsiveness.
This only causes a scroll on screens less than 912px height.

* For the links on the names of friends, I was unsure what they should have linked
to, so they are self-directed.  This makes it seem like they have no effect
unfortunately, but I wanted to match the mock and still have some semantic effect
from the name being a link.


JavaScript stuffs
---------

For small projects, I always prefer to not depend on any external libraries, as
many times a library will add more lines of code than your entire project has.

The only functions of JS in this submission are to select and deselect the side
links, and to retrieve, sort, and display the friends list.


### Selected Nav Links

For selecting and deselecting: I intentionally gave the `.nav-link` elements only
2 explicit children so that we could target the unselected image as `children[0]`
and selected as `children[1]`.  Any styling to the text could be done directly
to the `.nav-link` class

Using the hash link approach required that upon loading the JS I had to check
if there was a hash, if so highlight it or else highlight step 1.  Using the hashes
as I did has the added benefit of the ability for someone to link directly to a step,
rather than simply linking to step 1 and then having to manually navigate (in the
event a user sent a link to a friend)

### Requesting JSON

For requesting the friends object I used a `XMLHttpRequest` and a functional approach
to sorting the information, creating the message, and attaching that message to
the DOM.
